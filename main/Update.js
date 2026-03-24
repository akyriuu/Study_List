const ListForUpdate = document.querySelector("ul");

ListForUpdate.addEventListener("change", async (event) => {
  if (event.target.type === "checkbox") {
    const TopicId = Number(event.target.getAttribute("data-id"));
    const Marked = event.target.checked;

    try {
      const response = await fetch("/api/checklist/" + TopicId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checked: Marked }),
      });

      if (response.ok) {
        const topic = StudyTopics.find((t) => t.id == TopicId);
        if (topic) {
          topic.checked = Marked;
        }

        updateProgress();

        const Update = document.createElement("div");
        Update.innerText = "Progress Saved!";
        Update.style.cssText =
          "position: fixed; bottom: 20px; right: 20px; background: green; color: white; padding: 10px; border-radius: 5px; z-index: 10000;";
        document.body.appendChild(Update);
        setTimeout(() => Update.remove(), 3000);
      }
    } catch (err) {
      console.error("Failed to update progress", err);
    }
  }
});
