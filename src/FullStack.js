import React,{useState,useEffect} from "react"
import axios from "axios"
import CandidatesTable from "./CandidatesTable"
const FullStack=(props)=>{
    const[fullStackDev,setFullStackDev]=useState([])
    useEffect(()=>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
        .then((res)=>{
          const fullStack = res.data.filter((user)=>{
            return user.jobTitle === "FULL Stack Developer"
          })
          setFullStackDev(fullStack)
        })
        .catch((err)=>{
          alert(err.message)
        })
      },[])

    function changeStatus(user){
        const result = fullStackDev.map((developer)=>{
            if(developer._id === user._id){
                return user
            }else{
                return developer
            }
        })
        setFullStackDev(result)
    }

    return(
        <div>
            <div>FULL Stack Developers</div>
            <p>List of candidates applied for FULL Stack Developer job</p>
            <CandidatesTable data={fullStackDev} dev={"fullstack"} changeStatus={changeStatus}/>
        </div>
    )
}
export default FullStack