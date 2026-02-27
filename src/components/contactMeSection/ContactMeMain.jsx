import { useEffect, useRef } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { gsap } from "../../lib/gsap";

const ContactMeMain = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) {
      return;
    }

    const panels = wrapRef.current.querySelectorAll(".contact-panel");
    gsap.fromTo(
      panels,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 78%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div ref={wrapRef} className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-6">
          <div className="contact-panel glass-panel p-6 md:p-8">
            <ContactInfo />
          </div>
          <div className="contact-panel glass-panel p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
