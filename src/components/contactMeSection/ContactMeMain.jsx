import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactMeMain = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row min-h-[600px] border border-gray-100 card-glow-hover"
      >
        {/* Left Side (Dark/Gradient with Info) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-5/12 bg-gradient-to-br from-cyan-900 via-cyan-950 to-black p-10 text-black flex flex-col justify-between relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>

          <ContactInfo />
        </motion.div>

        {/* Right Side (Clean Form) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:w-7/12 bg-white p-10 flex flex-col justify-center relative"
        >
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMeMain;
