import { BsPaperclip } from "react-icons/bs";
import { MdMicNone } from "react-icons/md";
import { RxPaperPlane } from "react-icons/rx";

const Chat = () => {
  return (
    <section className="h-full flex flex-col flex-1 justify-between pl-10 pr-3 py-6">
      <div className="h-[90%] overflow-y-auto scrollbar-light pr-7">
        <div className="w-[93%] text-right ml-auto my-6">
          <p className="text-gray-600 text-xs font-bold mb-3">
            2.03 PM, 15 Nov
          </p>
          <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, dignissimos suscipit aliquid in recusandae qui natus
            neque accusantium dolorem sint harum? Facere nesciunt optio
            laudantium.
          </p>
        </div>
        <div className="w-[93%] my-6">
          <p className="text-gray-600 text-xs font-bold mb-3">
            2.03 PM, 15 Nov
          </p>
          <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, dignissimos suscipit aliquid in recusandae qui natus
            neque accusantium dolorem sint harum? Facere nesciunt optio
            laudantium.
          </p>
        </div>
        <div className="w-[93%] text-right ml-auto my-6">
          <p className="text-gray-600 text-xs font-bold mb-3">
            2.03 PM, 15 Nov
          </p>
          <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="w-[93%] my-6">
          <p className="text-gray-600 text-xs font-bold mb-3">
            2.03 PM, 15 Nov
          </p>
          <p className="bg-blueGray inline-block rounded-lg px-2 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit
            quibusdam repellendus quasi voluptates excepturi explicabo, quo
            adipisci fuga accusantium totam eveniet sint. Repellat repellendus
            soluta corporis atque deleniti, mollitia omnis repudiandae, illo
            eligendi incidunt nesciunt quod molestias, autem quis animi! Quas
            deleniti cupiditate iste minima culpa ipsa, molestiae magnam
            placeat. Cum explicabo aut optio similique mollitia laborum itaque
            eos, officia labore doloremque quisquam suscipit incidunt quia nemo
            corporis consequatur consequuntur. Velit, eius aperiam alias
            eligendi aliquid est. Placeat, tempora! Ad in expedita, iste modi,
            perferendis fuga ratione architecto itaque ea nihil quidem quo culpa
            excepturi? Quaerat vero ea enim id eaque magni ducimus quasi odit.
            In, aspernatur. Aut accusantium magnam sunt eligendi obcaecati et
            sed veritatis enim sint cumque rerum neque quo dolorum adipisci,
            nostrum ipsam reprehenderit vitae ipsa reiciendis velit. Voluptate,
            corrupti, magni dicta reiciendis eaque maiores eos facere officiis
            totam fuga autem ab soluta harum quaerat quos?
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <form>
          <label
            htmlFor="files"
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2"
          >
            <BsPaperclip size={22} />
          </label>
          <input type="file" name="files" id="files" className="hidden" />
          <input
            type="text"
            name=""
            id=""
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
