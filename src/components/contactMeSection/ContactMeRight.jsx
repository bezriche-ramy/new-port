import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
