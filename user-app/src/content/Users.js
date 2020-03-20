import React,{useState} from 'react'
import User from "./User";
import AddUser from './AddUser';

function Users(props) {
    const [user, setUser] = useState([
        {
          id:1,
          name:"Ahmet",
          age:43
        },
        {
          id:2,
          name:"Mehmet",
          age:43
        },
        {
          id:3,
          name:"Mustafa",
          age:43
        },
      ])
    const addUser=(newUser)=>{
      setUser([...user,newUser])
    }
    const deleteUser=(id)=>{
      
      setUser(user.filter(usr=>usr.id!==id))
      
    }
    
    return (
        <div>
            <AddUser userAddFunction={addUser}></AddUser>
            <User users={user} deleteFunction={deleteUser}/>
            
        </div>
    )
}



export default Users

