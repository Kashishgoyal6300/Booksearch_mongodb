import {Link} from "react-router-dom";
import {useState} from "react";
const Register=()=>{

  const[email,setMail]= useState('')
  const[pass,setPass]=useState('')
  const[message,setMessage]=useState('')

  function handleRegister(e){
    e.preventDefault()
    const data={email,pass}
    fetch('/register',{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((result)=>{return result.json()}).then((data)=>{
      console.log(data)
      if(data.status===201){
        setMessage(data.message)
      }else{
        setMessage(data.message)
      }
    })
  }
    return(
        <section className="login">
        <div className="container-fluid">
          <div className="row">
               <div className="col-md-5">
                  <form onSubmit={(e)=>{handleRegister(e)}}>
                  <strong>{message}</strong>
                      <label><strong>Email</strong></label>
                      <input type="email" name="email" id="email" className="form-control"
                        value={email}
                        onChange={(e)=>{setMail(e.target.value)}}
                      ></input>
                      <label><strong>Password</strong></label>
                      <input type="password" name="pass" id="pass" className="form-control"
                      value={pass}
                      onChange={(e)=>{setPass(e.target.value)}}
                      ></input>
                      <button type="submit" className="btn btn-success d-flex mx-auto">Register</button>
                       <p className="d-flex mx-auto"><strong>Already have an account?<Link to="/">Login</Link></strong></p>
                  </form>
               </div>
               <div className="col-md-7">
                  
               </div>
          </div>
        </div>
      </section>
    )
}
export default Register;