const DeleteButton = document.querySelector("#Delete");
const List1 = document.querySelector("ul");
const ClearButton = document.querySelector("#Clear");
let DeleteMode = false;

DeleteButton.addEventListener("click", () => {
  DeleteMode = !DeleteMode;

  if (DeleteMode) {
    DeleteButton.innerText = "Finish Deleting";
    DeleteButton.transition = "0.8s";
    DeleteButton.style.backgroundColor = "LightCoral";
    List.style.cursor = "pointer";
  } else {
    DeleteButton.innerText = "Delete";
    DeleteButton.style.backgroundColor = "";
    List.style.cursor = "default";
  }
});

ClearButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the entire list?")) {
    StudyTopics = [];
    saveToLocalStorage();
    Read();
    console.log("Cleared the entire list.");
  }
});

List.addEventListener("click", (event) => {
  if (DeleteMode) {
    const ItemToDelete = event.target.closest("li");
    if (ItemToDelete) {
      const checkbox = ItemToDelete.querySelector('input[type="checkbox"]');
      const TopicId = Number(checkbox.getAttribute("data-id"));

      StudyTopics = StudyTopics.filter((topic) => topic.id !== TopicId);

      ItemToDelete.remove();
      saveToLocalStorage();

      updateProgress();
      console.log(`Deleted Topic: ID ${TopicId}`);
    }
  }
});
