import "./ContactsPage.css";
// Importing Email API library
import emailjs from "emailjs-com";
//Importing assets
import gitHub from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";

const ContactsPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0r69jj9",
        "template_dm1nsio",
        e.target,
        "L9JXLkxo-smp7r4Jx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contacts-container">
      <p className="information socials-container">
        <a href="https://www.linkedin.com/in/mbisovskyi/" target="blank">
          <img src={linkedIn} height="30px" alt="LinkedIn" />
        </a>
        <a href="https://github.com/mbisovskyi" target="blank">
          <img src={gitHub} height="30px" alt="GitHub" />
        </a>
        <a href="https://twitter.com/twit_mbisovskyi" target="blank">
          <img src={twitter} height="30px" alt="Twitter" />
        </a>
      </p>
      <div className="person-to-contact-container">
        <p className="information">
          <span>Email: </span>mbisovskyi@gmail.com
        </p>
        <p className="information">
          <span>Phone: </span> +1 313-605-2533
        </p>
      </div>
      <form className="message-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input required type="text" name="name" placeholder="Full name" />
        <label>Email</label>
        <input required type="email" name="email" placeholder="Your email" />
        <label>Subject</label>
        <input
          required
          type="text"
          name="subject"
          placeholder="The subject of the message"
        />
        <label>Message</label>
        <textarea
          placeholder="Please, type in your message"
          required
          name="message"
        />
        <button type="submit" value="Send">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactsPage;
