import React from "react"


const listElementStyle = {'display': 'inline-block', margin:'0 10px 10px 0', 'padding': '5px', 'background': '#29cfcf', 'border-radius': '5px', 'color': 'white'}
const skills = ['HTML 5','CSS 3',"Sass","Java Script","MongoDB","Python","Flask","Django","NumPy","Pandas","Data Analysis","MYSQL","GraphQL","D3.js","Gatsby","Docker","Heroku", "Bootstrap", "Git"]
const skillList = skills.map((x) => <li key={x} style={listElementStyle}>{x}</li>)
const skills2 = ['React', 'Redux']
const skillList2 = skills2.map((x) => <li key={x} style={listElementStyle}>{x}</li>)
const skills3= ['Node.js']
const skillList3 = skills3.map((x) => <li key={x} style={listElementStyle}>{x}</li>)

const Home =() => { 
    return (
        <section className="home" style={{background: '#f4f4f4', padding:'15px 15px', 'font-family': 'sans-serif'}}>
        <div style={{'border-radius': '5px', background:'white', padding:'10px'}} >
            <div>
            
            <h1 style={{'text-transform': 'uppercase', 'font-size': '3em', font:'helvetica'}}>Hi, I'm Lauren Rugless</h1>
            
            <p>I design simple, yet beautiful websites.  As a front-end developer I work with newest front-end frameworks like React and Vue to help companies create and maintain a better code base for reusibility. I am passionate about learning development with a desire to appy skills on a larger development team. If you like what you see feel free to contact me. Thank you 💜</p>

            <h2 style={{'text-transform': 'uppercase', 'font-size': '2em', color:"pink"}}>Skills</h2>
            <h3>Languages:</h3>
			<ul style={{'list-style-type': 'none', padding: '0'}}>{skillList}</ul>
            <h3>Libraries:</h3>
			<ul style={{'list-style-type': 'none', padding: '0'}}>{skillList2}</ul>
            <h3>Framework:</h3>
			<ul style={{'list-style-type': 'none', padding: '0'}}>{skillList3}</ul>
        </div>
        </div>
        </section>
    )
}




export default Home