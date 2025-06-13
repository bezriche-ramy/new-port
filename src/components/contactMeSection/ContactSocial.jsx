import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

const ContactSocial = () => {
  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Connect With Me
      </h3>
      
      <div className="flex gap-6 justify-center">
        <SingleContactSocial link="https://www.linkedin.com/in/bezriche-ramy" Icon={FaLinkedinIn} tooltip="LinkedIn Profile" />
        <SingleContactSocial link="https://github.com/bezriche-ramy" Icon={FiGithub} tooltip="GitHub Repository" />
        <SingleContactSocial link="https://www.instagram.com/bezriche_ramy" Icon={FaInstagram} tooltip="Instagram" />
        <SingleContactSocial link="https://www.upwork.com/freelancers/~01940bb9c33250ffae" Icon={SiUpwork} tooltip="Hire on Upwork" />
      </div>
      
      <p className="text-gray-600 text-sm mt-6 text-center">
        Let's build something amazing together
      </p>
    </motion.div>
  );
};

export default ContactSocial;
