import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="font-code bg-black/30 p-4 border border-accent/30 rounded">
      <div className="terminal-header flex items-center gap-2 mb-4 pb-2 border-b border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent/50"></div>
        <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>
      
      <p className="text-accent/80 mb-4">{">"} establish_secure_channels</p>
      
      <div className="flex gap-4 justify-center border-l-2 border-accent/30 pl-4">
        <SingleContactSocial link="https://www.linkedin.com/in/bezriche-ramy" Icon={FaLinkedinIn} tooltip="Access Professional Network" />
        <SingleContactSocial link="https://github.com/bezriche-ramy" Icon={FiGithub} tooltip="View Source Repository" />
        <SingleContactSocial link="https://www.instagram.com/bezriche_ramy" Icon={FaInstagram} tooltip="Connect Social Channel" />
        <SingleContactSocial link="https://www.upwork.com/freelancers/~01940bb9c33250ffae" Icon={SiUpwork} tooltip="Hire on Upwork" />
      </div>
      
      <p className="text-accent/60 text-sm mt-4">{"// "}All connections encrypted and verified</p>
    </div>
  );
};

export default ContactSocial;
