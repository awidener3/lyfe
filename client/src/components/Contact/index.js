import React, { useState } from 'react';
import "./contact.scss"

const Contact = () => {

    const [name,setName] = useState("Alex Widener");
    const [job,setJob] = useState("Full Stack Developer");
    const [about,setAbout] = useState("Whatever you want honestly, but I will check for cheating!");

    const [name1,setName1] = useState("Alex Borges");
    const [job1,setJob1] = useState("Full Stack Developer");
    const [about1,setAbout1] = useState("Whatever you want honestly, but give me a min to get my coffee.");

    const [name2,setName2] = useState("Megan Labrecque");
    const [job2,setJob2] = useState("Full Stack Developer");
    const [about2,setAbout2] = useState("Whatever you want honestly, but I will not teach children!");

    const [name3,setName3] = useState("Javier Mariscal");
    const [job3,setJob3] = useState("Full Stack Developer");
    const [about3,setAbout3] = useState("Whatever you want honestly, but I will never give up on the animation!");

	return (
        <div className = "container">
            <div className = "Everyone">
                <div className = "Card">
                    <div className = "upper-container">
                        <div className = "image-container">
                            <img src = "https://avatars.githubusercontent.com/u/70721378?v=4" alt = " " height = "100px" width = "100px" />
                        </div>
                    </div>
                    <div className = "lower-container">
                        <h3> { name }</h3>
                        <h4> { job } </h4>
                        <p> {about } </p>
                        
                        <button>Visit Profile</button>
                    </div>
                </div>

                {/* Alex Borges */}
                <div className = "Card">
                    <div className = "upper-container">
                        <div className = "image-container">
                            <img src = "https://avatars.githubusercontent.com/u/94647436?v=4" alt = " " height = "100px" width = "100px" />
                        </div>
                    </div>
                    <div className = "lower-container">
                        <h3> { name1 }</h3>
                        <h4> { job1 } </h4>
                        <p> {about1 } </p>
                        
                        <button>Visit Profile</button>
                    </div>
                </div>

                {/* Megan Labrecque */}
                <div className = "Card">
                    <div className = "upper-container">
                        <div className = "image-container">
                            <img src = "https://avatars.githubusercontent.com/u/91804768?v=4" alt = " " height = "100px" width = "100px" />
                        </div>
                    </div>
                    <div className = "lower-container">
                        <h3> { name2 }</h3>
                        <h4> { job2 } </h4>
                        <p> {about2 } </p>
                        
                        <button>Visit Profile</button>
                    </div>
                </div>

                {/* Javier Mariscal */}
                <div className = "Card">
                    <div className = "upper-container">
                        <div className = "image-container">
                            <img src = "https://avatars.githubusercontent.com/u/77296553?v=4" alt = " " height = "100px" width = "100px" />
                        </div>
                    </div>
                    <div className = "lower-container">
                        <h3> { name3 }</h3>
                        <h4> { job3 } </h4>
                        <p> {about3 } </p>
                        
                        <button>Visit Profile</button>
                    </div>
                </div>
            </div>
        </div>
        

        

		// <div>
        //     <h1>Meet the developers!</h1>
        //     <a href='https://github.com/awidener3'>Alex Widener!</a>
        //     <div></div>
        //     <a href='https://github.com/awidener3'>Alex Borges!</a>
        //     <div></div>
        //     <a href='https://github.com/awidener3'>Megan Labrecque!</a>
        //     <div></div>
        //     <a href='https://github.com/awidener3'>Javier Mariscal!</a>
        // </div>
	);
};

export default Contact;