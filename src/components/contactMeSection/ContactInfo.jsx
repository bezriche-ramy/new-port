
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="h-full flex flex-col justify-between z-10 relative">
      <div>
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
          Contactez-moi
        </h2>
        <p className="text-cyan-100/80 mb-12 text-lg leading-relaxed">
          Prêt à démarrer un projet ? J'aimerais entendre vos idées et voir comment nous pouvons collaborer.
        </p>

        <div className="space-y-8">
          <SingleInfo text="ramybezriche@gmail.com" Image={HiOutlineMail} />
          <SingleInfo text="+213 552 173 451" Image={FiPhone} />
          <SingleInfo text="Alger, Algérie" Image={IoLocationOutline} />
        </div>
      </div>

      <div className="mt-12">
        <p className="text-cyan-100/60 text-sm mb-4 uppercase tracking-wider font-semibold">Suivez-moi</p>
        <div className="flex gap-4">
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
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
  >
    {icon}
  </a>
);

export default ContactInfo;
