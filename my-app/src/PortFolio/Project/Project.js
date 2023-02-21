import React from 'react'
import Navbar from '../Navbar/Navbar'
import Typical from 'react-typical'
import "./Project.css"
import img from "../../assets/Home/ecommerce.jpg"
import note from "../../assets/Home/notes.jpg"
import weather from '../../assets/Home/wheather.png'
import movie from "../../assets/Home/movie.jpg"
import chat from "../../assets/Home/chat.jpg"

const Project = () => {
  return (
    <>
    <Navbar/>
  
    <div className='project_container'>
    <div className="sub-container">
      <h1>PROJECT</h1>
          <h2>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "some of my recent works",
                2000,
             ,
              ]}
            ></Typical>
          </h2>
        </div>

          <div className='All_project'>

          <div className='projects-ecommerce'>
            <div className='project-photo'>
            <img src = {img}/>
           
            </div>
            <div className='project-detail'>
              <h4>ECOMMERCE WEBSITE</h4>
              <p>this is ecommerce website where we can order our favourite
               dresses.this is fullstack project where is
                use node js and react.this is responsive ecommerce
                webiste.
              
              </p>
            </div>
            <div className='project-download'>
               <button  >view</button>
               <button>download</button>
            </div>
          </div>




          <div className='projects-ecommerce'>
            <div className='project-photo'>
            <img src = {note}/>
           
            </div>
            <div className='project-detail'>
              <h4>ADD NOTES</h4>
              <p>this is react project.this project is like
                todolist. this is responsive project.there is 
                search bar and delete option.
               
              </p>
            </div>
            <div className='project-download'>
            <button  >view</button>
               <button>download</button>
            </div>
          </div>


          <div className='projects-ecommerce'>
            <div className='project-photo'>
            <img src = {weather}/>
           
            </div>
            <div className='project-detail'>
              <h4>WEATHER APP</h4>
              <p>t
                this is react project.in this project we can see the temperature of 
                different state . this is responsive project
            
              </p>
            </div>
            <div className='project-download'>
            <button  >view</button>
               <button>download</button>
            </div>
          </div>




          <div className='projects-ecommerce'>
            <div className='project-photo'>
            <img src = {chat}/>
           
            </div>
            <div className='project-detail'>
              <h4>CHAT APP</h4>
              <p>this is chat app. i use node js , react and io socket
                only two person can chat together.
              </p>
            </div>
            <div className='project-download'>
            <button  >view</button>
               <button>download</button>
            </div>
          </div>




          <div className='projects-ecommerce'>
            <div className='project-photo'>
            <img src = {movie}/>
           
            </div>
            <div className='project-detail'>
              <h4>MOVIE APP</h4>
              <p>this is react movie app and this movie app contain favourite movie,latest movie  ggggffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggg
               
              </p>
            </div>
            <div className='project-download'>
            <button  >view</button>
               <button>download</button>
            </div>
          </div>


          </div>


     
    </div>

    
    </>
    
  )
}

export default Project
