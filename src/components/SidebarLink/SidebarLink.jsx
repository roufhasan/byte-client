import { MdFitbit, MdOutlineChatBubbleOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { PiTrendUp, PiSignOut } from "react-icons/pi";
import { LuImage } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";

const SidebarLink = () => {
  return (
    <div className="min-h-screen h-full bg-blueGray p-4">
      <div className="text-center">
        <MdFitbit size={34} className="mx-auto" />
        <h2 className="text-xl font-medium uppercase mt-1">Byte</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-24">
        <a href="#">
          <RxDashboard size={24} />
        </a>
        <a href="#">
          <PiTrendUp size={24} />
        </a>
        <a href="#">
          <MdOutlineChatBubbleOutline size={24} className="text-green" />
        </a>
        <a href="#">
          <LuImage size={24} />
        </a>
        <a href="#">
          <FiMusic size={24} />
        </a>
        <a href="#">
          <CiBookmark size={24} />
        </a>
        <a href="#">
          <PiSignOut size={24} />
        </a>
      </div>
    </div>
  );
};

export default SidebarLink;
