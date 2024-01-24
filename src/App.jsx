import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { FaGithub } from "react-icons/fa";

function MyButton() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      I'm a button {count}
    </button>
  );
}

const TypingText = ({ text, isVisible }) => {
  return <div className="text-5xl font-bold">{text}{isVisible && '|'}</div>;
};

const BlinkingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textToType = "Infinite Solutions; One Studio";
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(textToType.substring(0, index));
      setIsVisible((prev) => !prev);

      if (index === textToType.length + 1) {
        clearInterval(intervalId);
      }

      index += 1;
    }, 100); // Adjust the typing speed by changing the interval duration

    return () => clearInterval(intervalId);
  }, []);

  return <TypingText text={displayedText} isVisible={isVisible} />;
};

const App = () => {
  return (
    <div className="font-switzer flex flex-col h-screen items-center justify-between bg-black text-white">
      <header className="flex justify-center items-start h-40">
        <h1 className="text-5xl font-bold">[Studio]</h1>
        <p className = "flex flex-col justify-start items-start font-bold text-2xl ml-1"> 2</p>
        
      </header>

      <body className="flex-1">
        <BlinkingText />
        <MyButton />
      </body>

      <footer className="flex justify-center h-[4vh]">
        <p className="text-zinc-500">StudioSquared is under copyright laws :3 </p>
        <a href="https://github.com/StudioSquared" target="_blank">
          <FaGithub size={25} className="fixed bottom-0 right-0 w-6 hover:fill-yellow-500 transition-all duration-[0.5s]" />
        </a>
      </footer>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
