import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactMeMain = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 relative py-20">
      <div className="w-full max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row min-h-[600px] border border-gray-100">
        {/* Left Side (Dark/Gradient with Info) */}
        <div className="md:w-5/12 bg-gradient-to-br from-cyan-900 via-cyan-950 to-black p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>

          <ContactInfo />
        </div>

        {/* Right Side (Clean Form) */}
        <div className="md:w-7/12 bg-white p-10 flex flex-col justify-center relative">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
