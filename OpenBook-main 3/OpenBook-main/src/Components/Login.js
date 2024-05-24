import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";

const Login=()=>{
  const[email,setMail]=useState('')
  const[pass,setPass]=useState('')
  const[message,setMessage]=useState('')
  const navigate=useNavigate()
  function handleLogin(e){
       e.preventDefault()
       const data={email,pass}
    fetch('/login',{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((result)=>{return result.json()}).then((data)=>{
      if(data.status===200){
      navigate('/main')
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
                    <form onSubmit={(e)=>{handleLogin(e)}}>
                   <strong style={{color:"red"}}>{message}</strong>
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
                        <button type="submit" className="btn btn-success d-flex mx-auto">Login</button>
                         <p className="d-flex mx-auto"><strong>Don't have any account?<Link to="/register">Register</Link></strong></p>
                    </form>
                 </div>
                 <div className="col-md-7">
                    
                 </div>
            </div>
          </div>
        </section>
    )
}
export default Login;