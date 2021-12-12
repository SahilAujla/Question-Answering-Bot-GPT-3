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
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-3/4 w-3/4 bg-form-bg flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <form
          onSubmit={formSubmitHandler}
          className="flex flex-col justify-center items-center h-3/4 w-3/4 mb-8"
        >
          <h1 className="text-white text-center text-4xl mb-12">
            Ask Me Anything
          </h1>
          <div className="w-full">
            <label htmlFor="question" className="text-white text-lg mb-2 block">
              Your Question:
            </label>
            <input
              type="text"
              id="question"
              ref={textInputRef}
              className="w-full mb-2 block border focus:transition-all focus:border-input-outline focus:outline-none focus:shadow-md focus:shadow-input-shadow p-2 bg-form-bg text-white rounded-md"
            />
          </div>
          <button className="block bg-white w-40 text-black rounded-md p-2 mb-10 self-end">
            Ask
          </button>
          <div className="w-full">
            <h1 id="Answer" className="text-white text-center text-3xl">
              {`${output}` || "The Answer will appear here."}
            </h1>
          </div>
        </form>
        <h1 className="text-white">
          Made with ❤ by{" "}
          <a href="https://twitter.com/SahilAujla15">Sahil Aujla</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
