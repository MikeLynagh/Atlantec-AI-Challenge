import { useState } from "react";
import "./App.css"

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("Loading..."); 
    
    try {
      const res = await fetch("http://localhost:11434/api/generate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b",
          prompt: input,
          stream: false
        })
      });

      const data = await res.json();
      setResponse(data.response);
      
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div>

    <div className="container">
      <h1>AI Chat</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your query here..."
          className="input"
          />
          <br />
        <button type="submit" className="button">Send</button>
      </form>
      <pre className="output">
        {response || "Response will appear here..."}
      </pre>
    </div>
    </div>
  );
}