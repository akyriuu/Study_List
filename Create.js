const AddButton = document.querySelector("#Add");
const List = document.querySelector("ul");

AddButton.addEventListener("click", () => {
  const TopicName = prompt("What are you going to study next?");

  if (TopicName) {
    const newTopicObj = {
      id: Date.now(),
      text: TopicName,
      checked: false,
    };

    StudyTopics.push(newTopicObj);
    saveToLocalStorage();
    Read();
  }
});
