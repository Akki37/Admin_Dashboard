import React from "react"
import {Link,Route} from "react-router-dom"
import './App.css';
import FrontEnd from "./FrontEnd";
import ShowDetails from "./ShowDetails";
import NodeJs from "./NodeJs";
import MeanStack from "./MeanStack";
import FullStack from "./FullStack";

function App(props) {
  
    // let button = document.getElementsByClassName("btn")
    // console.log(button)
    // for (let i = 0; i < button.length; i++) {
    //     button[i].addEventListener("click", function() {
    //     let current = document.getElementsByClassName("active")
    //     console.log(current)
    //      if(current.length>0){
    //       console.log(true);
    //       current[0].className= current[0].className.replace(" active", "");
    //      }
    //     this.className += " active";
    //     console.log(this);
    //     })}
  

  
  return (
    <div className="App">
      <Route path="/:dev/:id" component={ShowDetails}/>
      <div className="title_admin">Admin Dashboard</div>
       <div className="job_titles">
         <Link to="/frontend"> <button className="btn" >Front-End Developer</button></Link>
         <Link to="/nodejs">   <button className="btn" >Node.js Developer</button></Link>
         <Link to="/meanstack"><button className="btn" >MEAN Stack Developer</button></Link>
         <Link to="/fullstack"><button className="btn" >FULL Stack Developer</button></Link> 
       </div>
       <Route path="/frontend"   component={FrontEnd}/>
       <Route path="/nodejs"   component={NodeJs}/>
       <Route path="/meanstack"   component={MeanStack}/>
       <Route path="/fullstack"   component={FullStack}/>
       
     
    </div>
  )
}

export default App;
