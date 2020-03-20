import React, { useState } from "react";
import PropTypes from "prop-types";

function AddUser(props) {
const[_age,setAge]=useState(); 
const[_name,setName]=useState();

const iNameHandleChange=(e)=>
{
    
    if(e.target.name==="fname"){
        setName(e.target.value);
    }else{
        setAge(e.target.value);
    }   
}
const bHandleChange=(e)=>{
    e.preventDefault();
    const user={
        id:Math.random(),
        name:_name,
        age:_age
    }
    props.userAddFunction(user);
    
}
return (
<form>
  <div className="form-row pt-3">
    <div className="col">
      <input name="fname" id="n" onChange={iNameHandleChange} type="text" className="form-control" placeholder="Adınız"/>
    </div>
    <div className="col">
      <input name="fage" id="a" onChange={iNameHandleChange} type="text" className="form-control" placeholder="Yaşınız"/>
    </div>
  </div>
  <div className="form-row pt-1 pb-1">
  <button onClick={bHandleChange} type="submit" className="btn btn-block btn-success">Ekle</button>
  </div>
</form>
  );
}

export default AddUser;
