import './App.css';
import emailjs from 'emailjs-com';

function App() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_u75or3h', 'template_0othe6k', e.target, 'user_iDIpf9LC7LEKjk5KBZCa1')
      .then((result) => {
          // console.log(result.text);
          alert("Email sent successfully!!!")
      }, (error) => {
          alert("Error "+error)
      });
  }
  return (
      <div className="container">
        <div style={{marginTop:"5%"}}>
          <form onSubmit={sendEmail} >
            <div className="form-group">
              <label>Your Name</label>
              <input name="name" type="text" className="form-control"
              placeholder="Enter your name "/>
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input name="email" type="email" className="form-control"
              placeholder="Enter your email "/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control"
              placeholder="Enter your message">
              </textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </form>
        </div>
    </div>
  );
}

export default App;
