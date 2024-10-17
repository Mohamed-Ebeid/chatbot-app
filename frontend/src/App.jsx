import { useState } from "react";
import axios from "axios";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [savedIdeas, setSavedIdeas] = useState([]);

  const handleSend = async () => {
    const response = await axios.post("http://localhost:5000/chat", {
      message: input,
    });
    setChatHistory([...chatHistory, { user: input, bot: response.data }]);
    setInput("");
  };

  const handleSaveIdea = (idea) => {
    setSavedIdeas([...savedIdeas, idea]);
    setInput("");
  };

  const handleReset = () => {
    setChatHistory([]);
    setSavedIdeas([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Brainstorm Chatbot</h1>
        <div>
          <div>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <strong>User:</strong> {chat.user}
                <br />
                <div style={{ direction: "rtl" }}>
                  {" "}
                  <strong>Bot:</strong> {chat.bot}
                </div>
                <br />
              </div>
            ))}
          </div>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              marginBottom: "0.5rem",
            }}
          />
          <br />
          <div style={{ marginTop: "0.5rem" }}>
            <button onClick={handleSend}>Send</button>
            <button onClick={() => handleSaveIdea(input)}>Save Idea</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
        <h2>Saved Ideas</h2>
        <ul>
          {savedIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
