import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        <SingleInfo text="bezricheramy@gmail.com" Image={HiOutlineMail} />
        <SingleInfo text="Algiers, Algeria" Image={IoLocationOutline} />
        <SingleInfo 
          text="Hire me on Upwork" 
          link="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
        />
      </div>
      
      <p className="text-muted text-sm mt-4">
        Available for freelance projects and full-time opportunities
      </p>
    </div>
  );
};

export default ContactInfo;
