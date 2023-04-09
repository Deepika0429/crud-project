
const UserTable = (props)=>(
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <b><th>Actions</th></b>
        
      </tr>
    </thead>
    <tbody>
        {
        props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.number}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} 
                        className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id,user.number)} className="button muted-button">Delete</button>
                        </td>
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={4}>No users</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
);

export default UserTable;