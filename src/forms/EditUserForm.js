import { useEffect, useState } from "react"

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.id||!user.name||!user.age||!user.address) return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Id</label>
            <input type="text" onChange={handleInputChange} name="id" value={user.id} />
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Age</label>
            <input type="text" onChange={handleInputChange} name="age" value={user.age} />
            <label>Address</label>
            <input type="text" onChange={handleInputChange} name="address" value={user.address} />
            <button>Update user</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditUserForm;