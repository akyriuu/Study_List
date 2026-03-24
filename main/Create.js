const AddButton = document.querySelector("#Add");
const List = document.querySelector("ul");

AddButton.addEventListener("click", async () => {
  const TopicName = prompt("What are you going to study next?");

  if (TopicName) {
    const newTopicObj = {
      id: Date.now(),
      text: TopicName,
      checked: false,
    };
    //Sending to Fastify server now, to then be sent to database
    await fetch("/api/checklist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTopicObj),
    });
    Read();
  }
});
