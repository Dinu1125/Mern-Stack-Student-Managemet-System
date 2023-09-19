import React, { useState } from "react";
import axios from "axios";

function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();

        const newStudent ={

            name,
            age,
            gender
        }
        
        axios.post("http://localhost:8000/student/add", newStudent).then(()=>{

            alert("Student Added!");
        }).catch((err)=>{

            alert(err);
        })
    }

    return (

        <div className="container">
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label className="form-label">Name :</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" 
                    onChange={(e)=>{

                        setName(e.target.value);
                    }
                    }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age :</label>
                    <input type="text" class="form-control" id="age" placeholder="Enter Age"
                    onChange={(e)=>{

                        setAge(e.target.value);
                    }
                    }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender :</label>
                    <input type="text" class="form-control" id="gender" placeholder="Enter Gender"
                    onChange={(e)=>{

                        setGender(e.target.value);
                    }
                    }/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent;