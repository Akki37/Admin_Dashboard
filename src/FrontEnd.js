import React,{useState,useEffect} from "react"
import axios from "axios"
import "./All_Job_Title.css"
import CandidatesTable from "./CandidatesTable"
const FrontEnd=(props)=>{
    const[frontEndDev,setFrontEndDev]=useState([])
    useEffect(()=>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
        .then((res)=>{
          const frontEnd = res.data.filter((user)=>{
            return user.jobTitle === "Front-End Developer"
          })
          setFrontEndDev(frontEnd)
        })
        .catch((err)=>{
          alert(err.message)
        })
      },[])

    function changeStatus(user){
        const result = frontEndDev.map((developer)=>{
            if(developer._id === user._id){
                return user
            }else{
                return developer
            }
        })
        setFrontEndDev(result)
    }
    return(
        <div className="Candidates_job_container">
            <div className="job_title">Front-End Developers</div>
            <p className="job_para">List of candidates applied for Front-End Developer job</p>
            <CandidatesTable data={frontEndDev} dev={"frontend"} changeStatus={changeStatus}/>
        </div>
    )
}
export default FrontEnd