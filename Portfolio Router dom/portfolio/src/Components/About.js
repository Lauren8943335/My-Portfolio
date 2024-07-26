import React from "react";
import "./App.css";
import portfolioImage from "../Components/profilepic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="container text-center"
      style={{
        background: "#f4f4f4",
        padding: "15px 15px",
        "font-family": "sans-serif", display:"flex",}}>
      <div
        style={{ "border-radius": "5px", background: "white", padding: "10px" }}
      >
        <h1 className="section-title">About Me</h1>
        <div className="row">
          <div class="card">
            <img src={portfolioImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">Front-End Developer</h2>
              <h4 class="card-title">Persevere: 10/2023-Present</h4>
              <p class="card-text">
                I am a skilled Internship Trainee with over 6 months of hands-on
                experience in full-stack web development from Persevere. My
                expertise includes using technologies such as Node.js, Java,
                JSP, HTML, CSS, and Bootstrap. As a problem solver, I have
                successfully designed and developed user-friendly, responsive
                web applications.{" "}
              </p>
              <h2 class="card-title">UX/UI Designer</h2>
              <h4 class="card-title">Google: 11/2024-12/2025</h4>
              <p class="card-text">
              I Design and develop responsive, visually appealing, and user-friendly web applications using CSS, JavaScript, HTML using Visual Studio.
              Participate in agile development processes, including sprint planning, daily standups, and retrospectives

Adapt to changing priorities and be flexible in responding to shifting project roadmaps

Ensure attention to detail and maintain a high level of code quality

Contribute to the overall technical strategy and architecture of the organization{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
