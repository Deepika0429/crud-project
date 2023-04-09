import { useState } from "react";

 const AddUserForm = (props)=>{
    const initialFormState = {id:'',name:'',age:'',address:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.id||!user.name||!user.age||!user.address) 
            return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <label>Id</label>
        <input type="text" onChange={handleInputChange} name="id" value={user.id} />
        <label>Name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <lable><b>Age</b></lable>
        <input type="text" onChange={handleInputChange} name="age" value={user.age} />
        <lable><b>Address</b></lable>
        <input type="text" onChange={handleInputChange} name="address" value={user.address} />
        
        <button>Add new user</button>
      </form>
    )
 }

export default AddUserForm;