const ListForUpdate = document.querySelector("ul");

ListForUpdate.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const TopicId = Number(event.target.getAttribute("data-id"));
    const Marked = event.target.checked;

    const TopicFound = StudyTopics.find((topic) => topic.id === TopicId);

    if (TopicFound) {
      TopicFound.checked = Marked;
      console.log(`Updated Topic: ${TopicFound.text}, Checked: ${Marked}`);
      saveToLocalStorage();
      updateProgress();

      const Update = document.createElement("div");
      Update.innerText = "Updating..";
      Update.style.cssText =
        "position: fixed; bottom: 20px; right: 20px; background: green; color: white; padding: 10px; border-radius: 5px; z-index: 10000;";
      document.body.appendChild(Update);
      setTimeout(() => Update.remove(), 3000);
    }
  }
});
