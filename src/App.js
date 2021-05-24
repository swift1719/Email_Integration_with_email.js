import React,{useState,useEffect} from 'react';
import './App.css';
import emailjs from 'emailjs-com';

const App=()=> {
  let err;
  const [alertDisplay, setAlertDisplay] = useState("")
  
  const alertD=(status)=>{
    
      setAlertDisplay(status)
  }
  useEffect(() => {
      // console.log(alertDisplay)
  }, [alertDisplay])

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_u75or3h', 'template_0othe6k', e.target, 'user_iDIpf9LC7LEKjk5KBZCa1')
      .then((result) => {
          // console.log(result.text);
          alertD("success");
          // alert("Email sent successfully!!!")
      }, (error) => {
        alertD("error");
        err=error.message;
          // alert("Error "+error)
      });
    return alertDisplay;
  }

  return (
      <div className="container">
        <div style={{marginTop:"5%"}}>
          
          {
            
              alertDisplay==="success"?(
                <div className="alert alert-success" role="alert">
                  Email sent successfully!!!
                </div>
              ):alertDisplay==="error"?(
                <div className="alert alert-danger" role="alert">
                  Error : {err}...
                </div>
              ):''
          }
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
        <footer style={{fontFamily: "Montserrat",
          paddingTop: "100px",
          width: "30%",
          margin: "auto",
          color:"#BDBDBD"}}
        >
        <h3>Created by <a rel="noreferrer" style={{textDecoration:"none", color: "#4f4f4f"}}  target="_blank" href="https://github.com/swift1719">Ayush Pawar</a></h3>
        </footer>
    </div>
  );
}

export default App;
