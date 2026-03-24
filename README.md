# CRUD - Create, Read, Update, Delete

I learned quite a lot of new things while doing this, to the organization style, to the calls of actual functions, using local storage, and a lot more. I learned new CSS properties, how to make actual useful button commands, center what I need (at least on pc for now), and a lot of new things, I intend to learn a lot more and update this once again with new features and improvements, but for now, this is what I have.
Most importantly (for me) is that I found it actually pretty interesting and it was a fun experience. I welcome feedback, enjoy using this for yourself if you think is a nice type of list to have.

# Study List

I made a Study List, as the main topic of my first CRUD. I chose this topic because I'm very inclined to track my progress and try to keep note of what I should improve, not as fast as possible, but as efficient as it should be. I also wanted to make a CRUD that I could use in my daily life, and this is the one that I think will be the most useful for me.

Boa, Marcus! Adicionar essas seções no seu README.md é o que vai separar o seu projeto de um "trabalho de escola" de um projeto de nível profissional. Isso mostra que você não só sabe codar, mas entende de infraestrutura e persistência de dados.

Aqui está o texto pronto para você copiar e colar no seu arquivo. Eu escrevi em inglês para manter o padrão do seu repositório, o que ajuda muito se algum recrutador gringo ou mentor sênior bater o olho.

## Docker & PostgreSQL

This project has been fully migrated from a simple `localStorage` implementation to a professional environment using **Docker** and **PostgreSQL**.

### Why Docker?

I implemented Docker to ensure the application runs identically on any machine. It encapsulates the Node.js server and the database, so there's no need to manually install PostgreSQL on your local system.

### Database Persistence

Unlike `localStorage`, which is tied to a specific browser, the data is now persisted in a **PostgreSQL** database.

- **Reliability:** Data is stored in a dedicated database volume.
- **Scalability:** Ready for more complex relationships and larger datasets.
- **Integrity:** Uses a relational schema to manage study topics.

### 🚀 How to Run

Make sure you have [Docker](https://www.docker.com/) installed, then run:

docker-compose up --build
