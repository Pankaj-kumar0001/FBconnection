import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  // GET
  const getMessages = async () => {
    const res = await axios.get("/api/messages");
    setMessages(res.data);
  };

  // POST
  const addMessage = async () => {

    if (!text) return;

    await axios.post("/api/messages", {
      text
    });

    setText("");
    getMessages();
  };

  // DELETE
  const deleteMessage = async (id) => {

    await axios.delete(`/api/messages/${id}`);

    getMessages();
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>CRUD App (Proxy + Express)</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter message"
      />

      <button onClick={addMessage}>
        Add
      </button>

      <hr />

      {
        Array.isArray(messages) &&
        messages.map((msg) => (
          <div key={msg.id} style={{ margin: "10px" }}>

            <span>{msg.text}</span>

            <button
              onClick={() => deleteMessage(msg.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
}

export default App;