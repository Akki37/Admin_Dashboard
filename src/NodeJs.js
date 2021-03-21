import React,{useState,useEffect} from "react"
import axios from "axios"
import "./All_Job_Title.css"
import CandidatesTable from "./CandidatesTable"
const NodeJs=(props)=>{
    const[nodeJsDev,setNodeJsDev]=useState([])
    useEffect(()=>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
        .then((res)=>{
          const nodeJs = res.data.filter((user)=>{
            return user.jobTitle === "Node.js Developer"
          })
          setNodeJsDev(nodeJs)
        })
        .catch((err)=>{
          alert(err.message)
        })
      },[])

    function changeStatus(user){
        const result = nodeJsDev.map((developer)=>{
            if(developer._id === user._id){
                return user
            }else{
                return developer
            }
        })
        setNodeJsDev(result)
    }
    return(
        <div className="Candidates_job_container">
            <div className="job_title">Node.js Developers</div>
            <p className="job_para">List of candidates applied for Node.js Developer job</p>
            <CandidatesTable data={nodeJsDev}  dev={"nodejs"} changeStatus={changeStatus}/>
        </div>
    )
}
export default NodeJs