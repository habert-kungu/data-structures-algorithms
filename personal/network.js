const socket = new WebSocket("ws://localost:8080");
// Executes when the connection is successfully established.
socket.addEventListener("open", (event) => {
  console.log("WebSocket connection established!");
  // Sends a message to the WebSocket server.
  socket.send("Hello Server!");
});
socket.addEventListener("message", (event) => {
  console.log("Message form server ", event.data);
});
socket.addEventListener("close", (event) => {
  console.log("WebSocket connection closed ", event.code, event.reason);
});

socket.addEventListener("error", (error) => {
  console.log("WebSocket connection error ", error);
});
