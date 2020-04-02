import React from 'react'
import axios from 'axios'

class NodeJs extends React.Component {
    constructor() {
        super()
        this.state = {
            data:[]
        }
    }

    

    

    
    
    componentDidMount(){
        axios.get(`http://dct-application-form.herokuapp.com/users/application-forms`)
        .then((response)=>{
            //console.log(response.data.jobTitle)
            const data = response.data.filter(user=>user.jobTitle==="Node.js Developer")
            this.setState({data})
            console.log(data)
            
          
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleClick = (ele) => {
        console.log(`ele-${ele._id}`)
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`, {"status":"shortlisted"})
        .then((response)=>{
            console.log(response.data)
        })
    }

    handleClickReject = (ele) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`, {"status":"rejected"})
        .then((response)=>{
            console.log(response.data)
        })
        .catch()

    }

    handleShow = (ele) => {
        alert(`id-${ele._id}`)
    }
   



    
    
    render() {
        return (
            <div>
               <h2>front-end developers</h2>
               <h1>List of candidates applied for front-end</h1>
                
                <table border="1">
                    <thead>
                        <tr>
                        <th> name</th> 
                        <th> Technical Skills</th> 
                        <th>Experience</th> 
                        <th>Applied Date</th> 
                        <th>View Details</th> 
                        <th>Update Status</th> 
                        </tr>

                    </thead>
                    <tbody> 
                        
                            {
                                this.state.data.map((ele,i)=>{
                                    return (
                                        <tr key={ele.id}>
                                            <td>{ele.name}</td>
                                            <td>{ele.skills}</td>
                                            <td>{ele.createdAt}</td>
                                            <td><button onClick={()=>{
                                                this.handleShow(ele)
                                            }}>view details</button></td>
                                    <td>{ele.status == "applied"?<div>
                                        <button onClick={()=>{

                                            this.handleClick(ele)}}>Shortlist</button>
                                        <button onClick={()=>{
                                            this.handleClickReject(ele)
                                        }}>Reject</button> 
                                        </div>
                                        :
                                        ele.status=="shortlisted" ? <button>Shortlisted</button>
                                        :
                                        <button >Rejected</button>
                                        }</td>
                                        </tr>
                                    )
                                })
                                  
                            }
                        

                    </tbody>
                </table>
                
                
            </div>
        )
    }
}

export default NodeJs