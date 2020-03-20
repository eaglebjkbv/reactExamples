import React from 'react'

function User(props) {
    
    return (
        <div>
            {
                props.users.map(user=>{
                    return(
                        <div className="card" key={user.id}>
                            <h5 onClick={()=>props.deleteFunction(user.id)} className="card-header" >{user.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">Yaş</h5>
                                <p className="card-text">{user.age}</p>
                            </div>
                        </div>
                    )
                })
            }    
        </div>
    )
}



export default User

