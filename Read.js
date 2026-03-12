// // since I'm only using this for testing, I'm not worrying about actual ''data security'' here.//
// this is just a simple function to read the contents of a file and return it as a string(BUT I KNOW THE IMPORTANCE).//
const savedData = localStorage.getItem("myStudyList");
let StudyTopics = savedData
  ? JSON.parse(savedData)
  : [
      { id: 1, text: "HTML Basics", checked: true },
      { id: 2, text: "CSS Basics", checked: true },
      { id: 3, text: "DOM STRUCTURE", checked: true },
      { id: 4, text: "LET & CONST", checked: true },
      { id: 5, text: "querySelector", checked: true },
      { id: 6, text: "addEventListener", checked: true },
      { id: 7, text: "Functions", checked: false },
      { id: 8, text: "Methods", checked: false },
      { id: 9, text: "Fetch", checked: false },
      { id: 10, text: "Async/Await", checked: false },
      { id: 11, text: "CRUD", checked: true },
    ];
//first time trying to use local storage, so I'll set up a function to save my actual state of the array to the browser.
// I'm simply talking to myself on this commment, just for future reference.
function saveToLocalStorage() {
  localStorage.setItem("myStudyList", JSON.stringify(StudyTopics));
}

function updateProgress() {
  const Percentage = document.querySelector("#Progress");
  const Total = StudyTopics.length;
  const Completed = StudyTopics.filter((topic) => topic.checked).length;
  const Progress = Total > 0 ? Math.round((Completed / Total) * 100) : 0;
  Percentage.innerText = ` Progress: ${Progress}%`;
}

function Read() {
  List.innerHTML = "";
  StudyTopics.forEach((topic) => {
    const li = document.createElement("li");
    const isChecked = topic.checked ? "checked" : "";
    li.innerHTML = `<input type="checkbox" ${isChecked} data-id="${topic.id}">
    <span class="topic-text"> ${topic.text}</span>`;
    List.appendChild(li);
  });
  updateProgress();
}

Read();
