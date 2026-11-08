const Contact = () => {
  return (
    <div className="page">
      {/* Section 1 */}
      <section className="section">
        <h1>Contact Us</h1>
        <p>Get in touch with our team today.</p>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2>Contact Details</h2>
        <p>Email: contact@mywebsite.com | Phone: +880 1234 567890</p>
      </section>

      {/* Section 3 */}
      <section className="section highlight">
        <h2>Office Location</h2>
        <p>Dhaka, Bangladesh</p>
      </section>

      {/* Section 4 */}
      <section className="section">
        <h2>Send a Message</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
