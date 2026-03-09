import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "../../lib/gsap";

const ContactMeMain = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const bigTextShellRef = useRef(null);
  const bigTextRef = useRef(null);
  const formShellRef = useRef(null);
  const infoShellRef = useRef(null);
  const glowRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bigTextRef.current) {
        gsap.fromTo(
          bigTextRef.current,
          { y: 80, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
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

      if (formShellRef.current) {
        gsap.fromTo(
          formShellRef.current,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formShellRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (infoShellRef.current) {
        gsap.fromTo(
          infoShellRef.current,
          { x: 36, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: infoShellRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (bigTextShellRef.current) {
          gsap.to(bigTextShellRef.current, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        }

        if (glowRef.current) {
          gsap.to(glowRef.current, {
            yPercent: -14,
            xPercent: -8,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
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
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border-subtle"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-[8%] top-[18%] hidden h-72 w-72 rounded-full opacity-55 blur-[120px] lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(116,247,212,0.12) 0%, transparent 72%)",
        }}
      />

      <div className="section-padding max-container relative z-10">
        <div ref={bigTextShellRef} className="mb-16">
          <div ref={bigTextRef}>
            <h2
              className="font-display font-bold leading-none tracking-tighter text-text-primary"
              style={{ fontSize: "clamp(3rem, 15vw, 12rem)" }}
            >
              Let&apos;s Talk
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-text-secondary md:text-lg">
              Have a project in mind or want to discuss security-focused product
              work? Send a message and I will reply as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div ref={formShellRef}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
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
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
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
                <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
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

              {status && <p className="text-sm text-accent">{status}</p>}

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:gap-5"
                data-cursor="magnetic"
              >
                Send Message
                <span className="h-[1px] w-4 bg-bg-primary" />
              </button>
            </form>
          </div>

          <div ref={infoShellRef} className="space-y-8">
            <div>
              <p className="mb-4 text-label">Email</p>
              <a
                href="mailto:ramybezriche@gmail.com"
                className="text-base text-text-primary transition-colors hover-line hover:text-accent"
              >
                ramybezriche@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-4 text-label">Phone</p>
              <p className="text-base text-text-primary">+213 552 173 451</p>
            </div>

            <div>
              <p className="mb-4 text-label">Location</p>
              <p className="text-base text-text-primary">Alger, Algeria</p>
            </div>

            <div>
              <p className="mb-4 text-label">Social</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/ramy-bezriche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-text-secondary transition-colors hover:text-accent"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/bezriche-ramy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-text-secondary transition-colors hover:text-accent"
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
