import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const ShowDetails=(props)=>{
  const{id,dev}=props.match.params
  const[user,setUser]=useState({})
  useEffect(()=>{
      axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
      .then((res)=>{
          console.log(res.data);
          setUser(res.data)
      })
      .catch((err)=>{
          alert(err.message)
      })
  })
    return(
        <div>
           <div>
              <div>{user.name} Profile</div>
              <Link to={`/${dev}`}><button>close</button></Link>
            </div>
            <hr/>
            <div>
                  <div>
                      <div>Contact number</div>
                        <p>{user.phone}</p>
                  </div>
                  <div>
                      <div>Email</div>
                        <p>{user.email}</p>
                  </div>
                  <div>
                      <div>Skills</div>
                    <div>{ user.skills && user.skills.split(",").map((skill,i)=>{
                        return <p key={i}>{skill}</p>
                    })}</div>
                  </div>
                  <div>
                      <div>Experience</div>
                        <p>{user.experience}</p>
                 </div>
            </div>
            <hr/>
            <div><Link to={`/${dev}`}><button>close</button></Link></div>
         </div>
           
    )
}
export default ShowDetails