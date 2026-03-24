const fastify = require("fastify")({ logger: true });
const fastifyStatic = require("@fastify/static");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  user: "marcus",
  password: "password123",
  host: "db",
  port: 5432,
  database: "studies_db",
});

const initDB = async () => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS study_topics (
        id BIGINT PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        checked BOOLEAN DEFAULT false
      )`);

    const result = await pool.query("SELECT COUNT(*) FROM study_topics");
    if (result.rows[0].count == 0) {
      const defaults = [
        [1, "HTML Basics", true],
        [2, "CSS Basics", true],
        [3, "DOM STRUCTURE", true],
        [4, "LET & CONST", true],
        [5, "querySelector", true],
        [6, "addEventListener", true],
        [7, "Functions", false],
        [8, "Methods", false],
        [9, "Fetch", false],
        [10, "Async/Await", false],
        [11, "CRUD", true],
      ];
      for (const [id, text, checked] of defaults) {
        await pool.query(
          "INSERT INTO study_topics (id, text, checked) VALUES ($1, $2, $3)",
          [id, text, checked],
        );
      }
    }

    console.log("Database initialized!!");
  } catch (err) {
    console.error("Failed to initialize", err);
  }
};

initDB();

const Start = async () => {
  try {
    await fastify.register(fastifyStatic, {
      root: path.join(__dirname, "main"),
      prefix: "/",
    });

    // StudyCheckList.html, this is funny, because copilot actually asked me to remove get route, but it wont work without it /
    fastify.get("/", async (request, reply) => {
      return reply.sendFile("StudyCheckList.html");
    });

    //Read
    fastify.get("/api/checklist", async (request, reply) => {
      const res = await pool.query(
        "SELECT * FROM study_topics ORDER BY id ASC",
      );
      return res.rows;
    });

    // Create
    fastify.post("/api/checklist", async (request, reply) => {
      const { id, text, checked } = request.body;
      await pool.query(
        "INSERT INTO study_topics (id, text, checked) VALUES ($1, $2, $3)",
        [id, text, checked],
      );
      return { success: true };
    });

    // Delete specific item by ID
    fastify.delete("/api/checklist/:id", async (request, reply) => {
      const { id } = request.params;
      await pool.query("DELETE FROM study_topics WHERE id = $1", [id]);
      return { success: true };
    });

    // Clear all
    fastify.delete("/api/checklist", async (request, reply) => {
      await pool.query("DELETE FROM study_topics");
      return { success: true };
    });

    fastify.put("/api/checklist/:id", async (request, reply) => {
      const { id } = request.params;
      const { checked } = request.body;
      await pool.query("UPDATE study_topics SET checked = $1 WHERE id = $2", [
        checked,
        id,
      ]);
      return { success: true };
    });

    // Listen port
    await fastify.listen({ port: 2004, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

Start();
