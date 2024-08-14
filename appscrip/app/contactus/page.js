import "./contactus.css";

const Contactus = () => {
  return (
    <>
      <section className="contact-section">
        <form className="contact-form" noValidate="">
          <h2 className="contact-heading">Contact us</h2>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message..."
              className="form-textarea"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="form-button">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contactus;
