import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "../../lib/gsap";

const ContactForm = () => {
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!submitRef.current) {
      return;
    }

    const onPress = () => {
      gsap.to(submitRef.current, { scale: 0.97, duration: 0.12 });
    };

    const onRelease = () => {
      gsap.to(submitRef.current, { scale: 1, duration: 0.16 });
    };

    const button = submitRef.current;
    button.addEventListener("pointerdown", onPress);
    button.addEventListener("pointerup", onRelease);
    button.addEventListener("pointerleave", onRelease);

    return () => {
      button.removeEventListener("pointerdown", onPress);
      button.removeEventListener("pointerup", onRelease);
      button.removeEventListener("pointerleave", onRelease);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", formRef.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setFormData({ from_name: "", from_email: "", message: "" });
          setStatus("Message sent successfully.");
          window.setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus(`Send failed: ${error.text}`);
        }
      );
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">Envoyez un message</h3>
      <p className="text-text-secondary text-sm md:text-base mt-3 leading-relaxed">
        Have a project in mind or want to discuss security-focused product work? Send a message and I will reply as soon as possible.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
        <input
          className="glass-input"
          type="text"
          name="from_name"
          placeholder="Votre nom"
          value={formData.from_name}
          onChange={handleChange}
          required
        />

        <input
          className="glass-input"
          type="email"
          name="from_email"
          placeholder="Votre email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />

        <textarea
          className="glass-input min-h-[150px] resize-y"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {status ? <p className="text-sm text-text-secondary">{status}</p> : null}

        <button ref={submitRef} type="submit" className="btn-primary w-full sm:w-auto">
          Envoyer Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
