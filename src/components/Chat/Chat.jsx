import axios from "axios";
import { useEffect, useRef } from "react";
import { BsPaperclip } from "react-icons/bs";
import { MdMicNone } from "react-icons/md";
import { RxPaperPlane } from "react-icons/rx";
import { formatDateTime } from "../../utils/formatDateTime";

const Chat = ({ user, prompt, setPrompt, messages, setMessages }) => {
  const messagesEndRef = useRef(null);

  const handleChatSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const timestamp = Date.now();

    if (prompt) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { email: user, role: "user", content: prompt, timestamp },
      ]);

      // Post request to get the response from OpenAI API.
      axios
        .post("http://localhost:5000/chat", { prompt })
        .then((res) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: res.data?.role,
              content: res.data.content,
              timestamp: Date.now(),
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    form.reset();
    setPrompt("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <section className="h-full flex flex-col flex-1 justify-between pl-10 pr-3 py-6">
      <div className="h-[90%] overflow-y-auto scrollbar-light pr-7">
        {messages &&
          messages.length > 0 &&
          messages.map((message, index) => (
            <div key={index}>
              {message.role === "user" && (
                <div className="w-[93%] flex flex-col items-end">
                  <p className="text-gray-600 text-xs font-bold mb-3">
                    {formatDateTime(message.timestamp)}
                  </p>
                  <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
                    {message.content}
                  </p>
                </div>
              )}
              {message.role === "assistant" && (
                <div className="w-[93%] my-6">
                  <p className="text-gray-600 text-xs font-bold mb-3">
                    {formatDateTime(message.timestamp)}
                  </p>
                  <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="w-full relative">
        <form onSubmit={handleChatSubmit}>
          <label
            htmlFor="files"
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2"
          >
            <BsPaperclip size={22} />
          </label>
          <input type="file" name="files" id="files" className="hidden" />
          <input
            onChange={(e) => setPrompt(e.target.value)}
            autoComplete="off"
            type="text"
            value={prompt ? prompt : ""}
            placeholder="Send a message"
            className="w-full bg-blueGray border rounded-lg pl-10 pr-20 py-2 outline-none"
          />
          <div className="flex items-center gap-2 absolute right-5 top-1/2 -translate-y-1/2">
            <MdMicNone size={26} className="cursor-pointer" />
            <button type="submit">
              <RxPaperPlane size={19} className="text-green" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Chat;
