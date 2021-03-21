import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "./ShowDetails.css"

const ShowDetails=(props)=>{
  const{id,dev}=props.match.params
  const[user,setUser]=useState({})
  useEffect(()=>{
      axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
      .then((res)=>{
          setUser(res.data)
      })
      .catch((err)=>{
          alert(err.message)
      })
  },[id])
    return(
      <div className="pop_up_Container">
        <div className="pop_Up">
           <div className="name_head">
              <div>{user.name}-Profile</div>
              <Link to={`/${dev}`}><i className="fas fa-times"></i></Link>
            </div>
            <div className="details_container">
                  <div className="details_box">
                      <div className="heading">Contact number</div>
                        <div className="value">{user.phone}</div>
                  </div>
                  <div className="details_box">
                      <div className="heading">Email</div>
                        <div className="value">{user.email}</div>
                  </div>
                  <div className="details_box">
                      <div className="heading">Skills</div>
                    <div className="value">{ user.skills && user.skills.split(",").map((skill,i)=>{
                        return <div key={i}>{skill}</div>
                    })}</div>
                  </div>
                  <div className="details_box">
                      <div className="heading">Experience</div>
                        <div className="value">{user.experience}</div>
                 </div>
            </div>
            <div className="closeBtn"><Link to={`/${dev}`}><button>Close</button></Link></div>
         </div>
         </div>
           
    )
}
export default ShowDetails