let StudyTopics = [];

function updateProgress() {
  const Percentage = document.querySelector("#Progress");
  const Total = StudyTopics.length;
  const Completed = StudyTopics.filter((topics) => topics.checked).length;
  const Progress = Total > 0 ? Math.round((Completed / Total) * 100) : 0;
  Percentage.innerText = `Progress: ${Progress}%`;
}

async function Read() {
  try {
    const response = await fetch("/api/checklist");
    //  check if response is ok
    StudyTopics = await response.json();

    const List = document.querySelector("ul");
    List.innerHTML = "";

    StudyTopics.forEach((topic) => {
      const li = document.createElement("li");
      // 3. Importante: mantenha o data-id. O Update.js vai ler ele.
      const isChecked = topic.checked ? "checked" : "";
      li.innerHTML = `<input type="checkbox" ${isChecked} data-id="${topic.id}">
      <span class="topic-text"> ${topic.text}</span>`;
      List.appendChild(li);
    });

    // Makes the progress bar update
    updateProgress();
  } catch (err) {
    console.error("Erro ao conectar com o Docker:", err);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  Read();
});
