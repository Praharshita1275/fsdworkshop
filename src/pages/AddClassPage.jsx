import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import {db} from '../services/firebase'
import {collection,addDoc} from 'firebase/firestore'

export default function AddClassPage() {
    const [className, setClassName] = useState("")
    const [students, setStudents] = useState([{ id: "", name: "", email: "" }])
    const navigate = useNavigate()
    
    function handleStudentChange(index, field, value){
        const updated=[...students]
        updated[index][field]=value
        setStudents(updated)
    }
    function addStudentField(){
        setStudents([...students,{id:"",name:"",email:""}])
    }
    async function handleSubmit(e){
        e.preventDefault()
        try{
            await addDoc(collection(db,"classes"),{
                name:className,
                students:students
            })
            alert("Class added successfully")
            navigate("/")
        }
        catch(err){
            console.log("Error while adding the class",err)
        }
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <h2 className='mb-3'>Add New Class</h2>
                <form action="" className='col-12 col-md-7' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className="form-label">Class Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            required
                            value={className}
                            onChange={(e)=>setClassName(e.target.value)}/>
                    </div>
                    <h5>Students</h5>
                    {
                        students.map((student,index)=>(
                            <div className='row mb-3' key={index}>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        placeholder='Student ID'
                                        value={student.id}
                                        onChange={(e)=>handleStudentChange(index, "id",e.target.value )} required
                                        />
                                </div>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        placeholder='Student Name'
                                        value={student.name}
                                        onChange={(e)=>handleStudentChange(index, "name",e.target.value )} required
                                        />
                                </div>
                                <div className="col">
                                    <input 
                                        type="email" 
                                        className='form-control'
                                        placeholder='Student email'
                                        value={student.email}
                                        onChange={(e)=>handleStudentChange(index, "email",e.target.value )} required
                                        />
                                </div>
                            </div>
                        ))
                    }
                    <button 
                        className='btn btn-secondary mb-3' 
                        onClick={addStudentField}>
                            Add Another Student
                    </button>
                    <br />
                    <button className='btn btn-outline-success'>Save Class</button>
                </form>
            </div>
            
        </div>
    )
}

