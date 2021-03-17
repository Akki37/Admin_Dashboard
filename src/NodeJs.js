import React,{useState,useEffect} from "react"
import axios from "axios"
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
        <div>
            <div>Node.js Developers</div>
            <p>List of candidates applied for Node.js Developer job</p>
            <CandidatesTable data={nodeJsDev}  dev={"nodejs"}changeStatus={changeStatus}/>
        </div>
    )
}
export default NodeJs