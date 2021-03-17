import React,{useState,useEffect} from "react"
import axios from "axios"
import CandidatesTable from "./CandidatesTable"
const MeanStack=(props)=>{

    const[meanStackDev,setMeanStackDev]=useState([])
    useEffect(()=>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
        .then((res)=>{
          const meanstack = res.data.filter((user)=>{
            return user.jobTitle === "Node.js Developer"
          })
          setMeanStackDev(meanstack)
        })
        .catch((err)=>{
          alert(err.message)
        })
      },[])

    function changeStatus(user){
        const result = meanStackDev.map((developer)=>{
            if(developer._id === user._id){
                return user
            }else{
                return developer
            }
        })
        setMeanStackDev(result)
    }

    return(
        <div>
            <div>MEAN Stack Developers</div>
            <p>List of candidates applied for MEAN Stack Developer job</p>
            <CandidatesTable data={meanStackDev} dev={"meanstack"} changeStatus={changeStatus}/>
        </div>
    )
}
export default MeanStack