function sendMessage() {
  const input = document.getElementById("input");
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");

  const reply = getBotReply(message.toLowerCase());

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);

  input.value = "";
}

// Simple AI Brain
function getBotReply(msg) {

  // Greetings
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I help you today?";
  }

  // Name
  if (msg.includes("your name")) {
    return "I am a free AI chatbot created for your project.";
  }

  // Time
  if (msg.includes("time")) {
    return "Current time is: " + new Date().toLocaleTimeString();
  }

  // Date
  if (msg.includes("date")) {
    return "Today's date is: " + new Date().toLocaleDateString();
  }

  // Help
  if (msg.includes("help")) {
    return "You can ask me about time, date, greetings, or general questions.";
  }

  // IoT style (bonus for assignment)
  if (msg.includes("temperature")) {
    return "Current temperature is 28°C (simulated sensor data).";
  }

  if (msg.includes("light on")) {
    return "Light has been turned ON (simulated IoT device).";
  }

  if (msg.includes("light off")) {
    return "Light has been turned OFF (simulated IoT device).";
  }

  // Default reply
  return "Sorry, I didn’t understand that. Try asking something else!";
}

function addMessage(text, type) {
  const box = document.getElementById("chat-box");

  const div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
