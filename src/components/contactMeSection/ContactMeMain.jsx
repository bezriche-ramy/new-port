import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 relative">
      {/* Matrix scan effect */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      
      {/* Section divider with matrix effect */}
      <div className="w-full h-[1px] mb-20 relative overflow-hidden">
        <div className="w-full h-full bg-accent/30"></div>
        <div className="absolute top-0 left-0 w-[20%] h-full bg-accent/50"
             style={{ animation: 'scan-line 4s linear infinite' }}></div>
      </div>

      {/* Contact section content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
        <ContactMeLeft />
        <ContactMeRight />
      </div>

      <style jsx>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(600%); }
        }
      `}</style>
    </section>
  );
};

export default ContactMeMain;
