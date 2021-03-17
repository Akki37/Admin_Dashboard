import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const CandidatesTable=(props)=>{
    const{data,dev,changeStatus}=props

    function updateStatus(string,id){
       axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:string})
       .then((res)=>{
           console.log(res.data)
           changeStatus(res.data)
       })
       .catch((err)=>{
       alert(err.message)
       })
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Technical Skills</th>
                    <th>Experience</th>
                    <th>Applied Date</th>
                    <th>View Details</th>
                    <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user)=>{
                 return <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.skills}</td>
                            <td>{user.experience}</td>
                            <td>{user.createdAt}</td>
                            <td><Link to={`/${dev}/${(user._id)}`}><button>View Details</button></Link></td>
                            <td>
                            {user.status==="applied" ? 
                            <div>
                                <button onClick={()=>{updateStatus("shortlisted",user._id)}}>Shortlist</button>
                                <button onClick={()=>{updateStatus("rejected",user._id)}}>Reject</button>
                            </div>:
                            user.status==="shortlisted" ? 
                            <div>
                                <button onClick={()=>{updateStatus("applied",user._id)}}>Shortlisted</button>
                            </div>:
                            <div>
                                <button onClick={()=>{updateStatus("applied",user._id)}}>Rejected</button>
                            </div>
                            }</td>
                        </tr>
                           })}

                </tbody>
            </table>
        </div>
    )
}
export default CandidatesTable