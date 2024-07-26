import React from "react"
import portfolioImage from "../Components/profilepic.jpg"
import weatherApp from "../Components/weather-app.jpg"
import noteApp from "../Components/note-taking-app.png"

const Projects =() => { 
    return (
            <section id="projects"  className="projects" style={{background: '#f4f4f4', padding:'15px 15px', 'font-family': 'sans-serif'}}>
            <div style={{'border-radius': '5px', background:'white', padding:'10px'}}>
            <h1 >Current Projects and Work</h1>
            <div class="row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                
              
               
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={weatherApp} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2 class="card-title">Weather Viewer App ⛅🌤️🌥️🌦️☁️</h2>
                  <p class="card-text">I used API weather data to allow the app to pull weather info for any city in the united states. Designed the UI and implemented 
                                CSS styling for the app using API weather data, 
                                optimizing performance and design across the page. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={noteApp} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h2 class="card-title">Note Taker Viewer 📒</h2>
                  <p class="card-text">One of the last projects. I developed front-end implementation for app that shows notes, stores the notes and give the user the ability to complete or delete the note.</p>
                </div>
              </div>
            </div>
          </div>
          <h1 >__________________________________________________</h1>
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Training and Placement 
                                Cell Website Official 
                            </h5> 
                            <p className="card-text"> 
                                Designed and developed the official 
                                Placement Website for the university using 
                                HTML, CSS, JavaScript, jQuery, and Bootstrap. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                E-commerce Platform 
                            </h5> 
                            <p className="card-text"> 
                                Built a fully functional e-commerce 
                                platform with features like product listing, 
                                cart management, and user authentication using 
                                React, Node.js, and MongoDB. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 4 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Social Media Dashboard 
                            </h5> 
                            <p className="card-text"> 
                                Developed a social media dashboard 
                                that allows users to view and manage 
                                their social media accounts in one place, 
                                integrating with APIs from major platforms. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div>
             
        </section>
      
    )
}
export default Projects