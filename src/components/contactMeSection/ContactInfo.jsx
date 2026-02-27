/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="font-display text-3xl md:text-4xl text-text-primary">Contactez-moi</h2>
      <p className="text-text-secondary mt-4 leading-relaxed">
        Ready to launch something ambitious? Let us discuss your idea and build a secure, polished product.
      </p>

      <div className="mt-8 space-y-4">
        <SingleInfo text="ramybezriche@gmail.com" Icon={HiOutlineMail} />
        <SingleInfo text="+213 552 173 451" Icon={FiPhone} />
        <SingleInfo text="Alger, Algeria" Icon={IoLocationOutline} />
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">Social</p>
        <div className="flex gap-3">
          <SocialLink href="https://linkedin.com/in/ramy-bezriche" icon={<FaLinkedin />} />
          <SocialLink href="https://github.com/bezriche-ramy" icon={<FaGithub />} />
          <SocialLink href="#" icon={<FaTwitter />} />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/12 bg-white/5 text-text-primary inline-flex items-center justify-center hover:bg-white/10 transition-colors"
  >
    {icon}
  </a>
);

export default ContactInfo;

