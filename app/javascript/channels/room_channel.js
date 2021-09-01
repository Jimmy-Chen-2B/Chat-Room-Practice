import consumer from "./consumer";

consumer.subscriptions.create(
  { channel: "RoomChannel", room_id: 1 },
  {
    connected() {
      console.log("connected");
    },

    disconnected() {},

    received(data) {
      console.log(data);

      const element = document.getElementById("user-id");
      const user_id = element.getAttribute("data-user-id");

      const messageContainer = document.getElementById("messages");
      messageContainer.innerHTML = messageContainer + data.html;
    },
  }
);
