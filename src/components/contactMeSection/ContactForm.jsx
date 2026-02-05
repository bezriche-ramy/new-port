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
          setSuccess("Message envoyé avec succès !");
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          setSuccess("Échec de l'envoi : " + error.text);
        }
      );
  };

  return (
    <div className="w-full relative z-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Envoyez un message</h3>
      <p className="text-gray-500 mb-8">Je vous répondrai dans les plus brefs délais.</p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="group relative">
          <input
            type="text"
            name="from_name"
            required
            className="peer w-full h-12 bg-gray-50 border-b-2 border-gray-200 text-gray-900 font-medium placeholder-transparent focus:outline-none focus:border-accent transition-colors py-2 px-1"
            placeholder="Nom"
            id="nameInput"
            value={name}
            onChange={handleName}
          />
          <label
            htmlFor="nameInput"
            className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                     peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
          >
            VOTRE NOM
          </label>
        </div>

        <div className="group relative">
          <input
            type="email"
            name="from_email"
            required
            className="peer w-full h-12 bg-gray-50 border-b-2 border-gray-200 text-gray-900 font-medium placeholder-transparent focus:outline-none focus:border-accent transition-colors py-2 px-1"
            placeholder="Email"
            id="emailInput"
            value={email}
            onChange={handleEmail}
          />
          <label
            htmlFor="emailInput"
            className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                     peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
          >
            VOTRE EMAIL
          </label>
        </div>

        <div className="group relative">
          <textarea
            name="message"
            rows={4}
            required
            className="peer w-full bg-gray-50 border-b-2 border-gray-200 text-gray-900 font-medium placeholder-transparent focus:outline-none focus:border-accent transition-colors py-2 px-1 resize-none"
            placeholder="Message"
            id="messageInput"
            value={message}
            onChange={handleMessage}
          />
          <label
            htmlFor="messageInput"
            className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                     peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
          >
            VOTRE MESSAGE
          </label>
        </div>

        {success && (
          <p className="text-green-600 text-sm font-medium animate-pulse">
            {success}
          </p>
        )}

        <button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-accent to-cyan-600 text-white font-bold tracking-wide uppercase rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
        >
          ENVOYER MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
