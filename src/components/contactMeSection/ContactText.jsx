const ContactText = () => {
  return (
    <div className="font-code">
      <h2 className="text-accent text-3xl mb-4 terminal-text">
        {"> "}ESTABLISH_SECURE_CONNECTION
      </h2>
      <div className="bg-black/30 p-4 border border-accent/30 rounded">
        <p className="text-accent/80">
          {"> "}Initiating encrypted communication channel...
          <br />
          {"> "}Ready to discuss security implementations, penetration testing,
          <br />
          {"> "}or collaborate on secure development projects.
        </p>
      </div>
    </div>
  );
};

export default ContactText;
