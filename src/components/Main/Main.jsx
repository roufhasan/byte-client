import { useEffect, useState } from "react";
import SideNavHistory from "../SideNavHistory/SideNavHistory";
import Chat from "../Chat/Chat";
import axios from "axios";

const Main = () => {
  // Dynamic user will be here
  const user = "roufhasan5@gmail.com";

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleNewChat = () => {
    if (messages.length === 0) {
      console.error("Cannot save messages with an empty array.");
      return;
    }

    const timestamp = Date.now();

    const identifier = `${messages[0].content}+${timestamp}`;

    axios
      .post("http://localhost:5000/saveMessages", {
        identifier,
        messages,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // setPrompt("");
    // setMessages([]);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <>
      <SideNavHistory handleNewChat={handleNewChat} />
      <Chat
        user={user}
        prompt={prompt}
        setPrompt={setPrompt}
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
};

export default Main;
