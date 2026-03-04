import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { gsap } from "../../lib/gsap";

const ContactMeMain = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const bigTextRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big text reveal
      if (bigTextRef.current) {
        gsap.fromTo(
          bigTextRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
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
    <section id="contact" ref={sectionRef} className="relative border-t border-border-subtle">
      <div className="section-padding max-container">
        {/* Giant "LET'S TALK" text */}
        <div ref={bigTextRef} className="mb-16">
          <h2
            className="font-display font-bold text-text-primary leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 15vw, 12rem)" }}
          >
            Let&apos;s Talk
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base md:text-lg max-w-xl">
            Have a project in mind or want to discuss security-focused product
            work? Send a message and I will reply as soon as possible.
          </p>
        </div>

        {/* Two-column: form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24">
          {/* Form — brutalist minimal inputs */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                Name
              </label>
              <input
                className="form-input"
                type="text"
                name="from_name"
                placeholder="Your name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                name="from_email"
                placeholder="your@email.com"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-tertiary block mb-3">
                Message
              </label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status && (
              <p className="text-sm text-accent">{status}</p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary text-sm font-semibold hover:gap-5 transition-all duration-300"
              data-cursor="magnetic"
            >
              Send Message
              <span className="w-4 h-[1px] bg-bg-primary" />
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-label mb-4">Email</p>
              <a
                href="mailto:ramybezriche@gmail.com"
                className="text-text-primary hover:text-accent transition-colors text-base hover-line"
              >
                ramybezriche@gmail.com
              </a>
            </div>

            <div>
              <p className="text-label mb-4">Phone</p>
              <p className="text-text-primary text-base">+213 552 173 451</p>
            </div>

            <div>
              <p className="text-label mb-4">Location</p>
              <p className="text-text-primary text-base">Alger, Algeria</p>
            </div>

            <div>
              <p className="text-label mb-4">Social</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/ramy-bezriche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/bezriche-ramy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
