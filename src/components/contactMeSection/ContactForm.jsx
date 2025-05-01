import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("[SUCCESS] Message transmitted successfully");
        },
        (error) => {
          setSuccess("[ERROR] Transmission failed: " + error.text);
        }
      );
  };

  return (
    <div className="relative sm:px-2 md:px-4">
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <p className="text-accent font-code mb-4 sm:text-xs md:text-sm lg:text-base">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:gap-3 md:gap-4">
        <div className="relative">
          <span className="absolute sm:left-2 md:left-3 top-1/2 -translate-y-1/2 text-accent/50 font-code sm:text-xs md:text-sm">{">"}</span>
          <input
            type="text"
            name="from_name"
            placeholder="ENTER_USERNAME"
            required
            className="w-full sm:h-10 md:h-12 bg-black/50 sm:pl-6 md:pl-8 sm:pr-3 md:pr-4 text-accent font-code 
                     border border-accent/30 rounded sm:text-xs md:text-sm
                     focus:border-accent focus:shadow-matrix-glow 
                     transition-all duration-300 outline-none"
            value={name}
            onChange={handleName}
          />
        </div>

        <div className="relative">
          <span className="absolute sm:left-2 md:left-3 top-1/2 -translate-y-1/2 text-accent/50 font-code sm:text-xs md:text-sm">{">"}</span>
          <input
            type="email"
            name="from_email"
            placeholder="ENTER_EMAIL"
            required
            className="w-full sm:h-10 md:h-12 bg-black/50 sm:pl-6 md:pl-8 sm:pr-3 md:pr-4 text-accent font-code 
                     border border-accent/30 rounded sm:text-xs md:text-sm
                     focus:border-accent focus:shadow-matrix-glow 
                     transition-all duration-300 outline-none"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="relative">
          <span className="absolute sm:left-2 md:left-3 top-4 text-accent/50 font-code sm:text-xs md:text-sm">{">"}</span>
          <textarea
            name="message"
            rows={6}
            placeholder="COMPOSE_MESSAGE"
            required
            className="w-full bg-black/50 sm:pl-6 md:pl-8 sm:pr-3 md:pr-4 sm:py-2 md:py-3 text-accent font-code 
                     border border-accent/30 rounded sm:text-xs md:text-sm
                     focus:border-accent focus:shadow-matrix-glow 
                     transition-all duration-300 outline-none"
            value={message}
            onChange={handleMessage}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:h-10 md:h-12 bg-black border border-accent text-accent font-code
                   hover:bg-accent/10 hover:shadow-matrix-glow sm:text-xs md:text-sm
                   transition-all duration-300 rounded sm:mt-2 md:mt-3"
        >
          {">"} INITIATE_TRANSMISSION
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
