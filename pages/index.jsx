import React, { useRef, useState } from "react";

function Home() {
  const textInputRef = useRef();
  const [output, setOutput] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const prompt = textInputRef.current.value;
    textInputRef.current.value = "";

    const message = { message: prompt };

    const response = await fetch("/api/open-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    const data = await response.json();

    setOutput(data.answer);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" ref={textInputRef} className="border-black border-2" />
      <button>Send</button>
      <h1>{output}</h1>
    </form>
  );
}

export default Home;
