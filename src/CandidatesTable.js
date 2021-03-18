import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "./CandidatesTable.css"

const CandidatesTable=(props)=>{
    const{data,dev,changeStatus}=props

    function updateStatus(string,id){
       axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:string})
       .then((res)=>{
           changeStatus(res.data)
       })
       .catch((err)=>{
       alert(err.message)
       })
    }

    return(
        <div className="table_caontainer">
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th >Technical Skills</th>
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
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td><Link to={`/${dev}/${user._id}`}><button className="viewdetail_btn">View Details</button></Link></td>
                            <td>
                            {user.status==="applied" ? 
                            <div className="btns_when_applied">
                                <button className="shortlist" onClick={()=>{updateStatus("shortlisted",user._id)}}>Shortlist</button>
                                <button className="reject"onClick={()=>{updateStatus("rejected",user._id)}}>Reject</button>
                            </div>:
                            user.status==="shortlisted" ? 
                            <div>
                                <button className="shortlisted" onClick={()=>{updateStatus("applied",user._id)}}>Shortlisted</button>
                            </div>:
                            <div>
                                <button className="rejected" onClick={()=>{updateStatus("applied",user._id)}}>Rejected</button>
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