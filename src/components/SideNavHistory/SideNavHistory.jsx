import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { TbCirclePlus } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";

const SideNavHistory = ({ handleNewChat }) => {
  return (
    <section className="h-full border-r-[0.4px] border-gray-700 flex flex-col justify-between gap-10 overflow-y-auto scrollbar-light pl-5 pr-7 py-6">
      <div>
        <h2 className="text-3xl font-medium capitalize mb-6">Text generator</h2>

        <ul className="flex flex-col gap-2">
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">
              Impact of AI on User Experiences
            </p>
          </li>
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">
              voice user interface (VUI)
            </p>
          </li>
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">data driven UX</p>
          </li>
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">
              chatbots and conversational AI
            </p>
          </li>
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">Visual recognition in UX</p>
          </li>
          <li className="bg-blueGray flex items-center gap-2 border-2 border-green rounded-3xl px-3 py-2">
            <MdOutlineChatBubbleOutline size={24} className="text-gray-300" />
            <p className="text-gray-400 capitalize">Eithical AI design</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div
          onClick={handleNewChat}
          className="text-green flex items-center gap-2 border-2 border-green rounded-3xl cursor-pointer px-3 py-2"
        >
          <TbCirclePlus size={24} />
          <p>New Chat</p>
        </div>
        <div className="text-red flex items-center gap-2 border-2 border-red rounded-3xl cursor-pointer px-3 py-2">
          <FiDelete size={24} />
          <p>Clear Conversation</p>
        </div>
      </div>
    </section>
  );
};

export default SideNavHistory;
