import React from "react"
import {Link,Route} from "react-router-dom"
import './App.css';
import FrontEnd from "./FrontEnd";
import ShowDetails from "./ShowDetails";
import NodeJs from "./NodeJs";
import MeanStack from "./MeanStack";
import FullStack from "./FullStack";

function App(props) {
  
  return (
    <div className="App">
      <div>Admin Dashboard</div>
       <div>
         <Link to="/frontend">Front-End Developer</Link>
         <Link to="/nodejs">Node.js Developer</Link>
         <Link to="/meanstack">MEAN Stack Developer</Link>
         <Link to="/fullstack">FULL Stack Developer</Link> 
       </div>
       <Route path="/frontend"   component={FrontEnd}/>
       <Route path="/nodejs"   component={NodeJs}/>
       <Route path="/meanstack"   component={MeanStack}/>
       <Route path="/fullstack"   component={FullStack}/>
       <Route path="/:dev/:id" component={ShowDetails}/>
     
    </div>
  );
}

export default App;
