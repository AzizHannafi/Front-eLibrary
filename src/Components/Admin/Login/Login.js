import { useState } from 'react';
import axios from 'axios';
import './Login.css'
import {Redirect, Router} from "react-router-dom"
import { useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loginStatus,setLoginStatus]=useState(false);
  
    const Login=()=>{
     

        axios.post("http://localhost:5000/Users/Authentifiation",{
            email: email,
            password: password,
        }).then((responce=>{
            //console.log(!responce.data.message);
            if((!responce.data.message)===false){
                setLoginStatus(false)
               // console.log(responce.data.message)
            }else{
               // console.log(responce.data)
                localStorage.setItem("token", responce.data.token)
                setLoginStatus(true)
                history.push("/Admin/Books");
                
            }
            
        }))
       
    }

    
   
    
// const userAuthenticated=()=>{
//     axios.get("http://localhost:5000/Users/isUserAuth",{
//         headers:{
//             "x-access-token": localStorage.getItem("token")
//         }
//     }).then((responce)=>{
//         console.log(responce)
//     })
// }

    return(
        <div id="container__form">
        <div className="container">
          <div className="row">
              <div className="text-center">                        
                <h2>LOGIN</h2>
              </div>
          </div>
          <div className="row">
              <div className="container">
                
                      <div className="form-group">
                          <label className="form-label" for="name">Username</label>
                          <input type="email" class="form-control" id="name" name="email" placeholder="Your email" tabindex="1" required onChange={(e)=>{setEmail(e.target.value)}}/>
                      </div>                            
                     
                      <div className="form-group">
                          <label className="form-label" for="message">Password</label>
                          <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Password" required  onChange={(e)=>{setPassword(e.target.value)}}/>                            
                      </div>
                      <div className="text-center">
                          <button  id="btnSubmit" class="btn btn-start-order" onClick={Login}>
                           LOGIN
                           </button>
                      </div>
               
              </div>
          </div>
        </div>
       
       </div>

    
    )
}
export default Login;