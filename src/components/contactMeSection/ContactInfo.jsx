import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 font-code bg-black/30 p-4 border border-accent/30 rounded">
      <div className="terminal-header flex items-center gap-2 mb-4 pb-2 border-b border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent/50"></div>
        <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>
      
      <p className="text-accent/80 mb-2">{">"} contact_info --decrypt</p>
      
      <div className="border-l-2 border-accent/30 pl-4">
        <SingleInfo text="ramybezriche@gmail.com" Image={HiOutlineMail} />
        <SingleInfo text="Algiers, Algeria" Image={IoLocationOutline} />
      </div>
      
      <p className="text-accent/60 text-sm mt-2">{"// "}Communication channels secured with end-to-end encryption</p>
    </div>
  );
};

export default ContactInfo;
