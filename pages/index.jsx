import React, { useRef } from "react";

function Home() {
  const textInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const prompt = textInputRef.current.value;
    textInputRef.current.value = "";

    console.log(prompt);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        ref={textInputRef}
        className="outline-2 border-black border-2"
      />
      <button>Send</button>
      <div>Your message will appear here!</div>
    </form>
  );
}

export default Home;
