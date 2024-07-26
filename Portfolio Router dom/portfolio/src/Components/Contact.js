import React from "react"
import contactMe from "../Components/contact me.jpg"

const Contact =() => { 
  return (
    <section className="contact" style={{background: '#f4f4f4', padding:'15px 15px', 'font-family': 'sans-serif'}}>
    <div style={{'border-radius': '5px', background:'white', padding:'10px'}} >
    <h1 >Let me get that for you!</h1>
     <div >
     <div class="card" style={{'border-radius': '5px', background:'white', padding:'10px'}}>
  <img src={contactMe} class="card-img-top" alt="..."/>
  <div class="card-body"  >
    <p class="card-text">Feel free to reach out for
    collaboration or inquiries. </p>
    <a href="#https://github.com/Lauren8943335" class="btn btn-primary">Github</a>
    <br></br>
    <a href="#https://www.instagram.com/" class="btn btn-primary"> Instagram</a>
    <br></br>
    <a href="#https://www.linkedin.com/" class="btn btn-primary">LinkedIn</a>
  </div>
</div>
     </div>    
          <ul className="contact-list list-unstyled"> 
          <li> 
          📨 Email: lauren.xxxxxxxx@gmail.com 
          </li> 
          <li>  
          📞 Phone: 615-xxx-xxxx 
          <li>
          📌 Nashville, TN
          </li>
          </li> 
      </ul>
      </div>
  </section>

    );
}



export default Contact