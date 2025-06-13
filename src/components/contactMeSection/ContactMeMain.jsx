import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 relative">
      {/* Section divider */}
      <div className="w-full h-[1px] mb-20 bg-gray-200"></div>

      {/* Contact section content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
