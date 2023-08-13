import "./login.css"
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setSignIn } from "../../redux/slices/userData";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"



function LoginScreen() {
    
    const [info, setInfo] = useState([])
    const [error, SetError] = React.useState(null)
    const [type, setType] = React.useState("password")
    const [eye, setEye] = React.useState(AiFillEye);
    console.log(eye)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleChange = (e)=>{
        setInfo({...info, [e.target.name]:e.target.value})
        
    };

    const typeSet = () => {
        setType("text");
        setTimeout(() => {
            setType("password")
        }, 2000);
    };
    

    const resetError = ()=>{
        setTimeout(() => {
            SetError(null)
            
        }, 3000);
    }

    const handleSubmit = async()=>{
        try {
            const user = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/auth/signin',
                data: {
                  email: info.correo,
                  password: info.contraseña
                }
              })

              console.log(user)
              if(user.status === 200 ){
                dispatch(setSignIn({
                    token: user.data.token,
                    email : user.data.email,
                    userName: user.data.userName,
                   

                }
              ))
              navigate("/productos")

              
              
                 

              }
              resetError();

              SetError(user.data.messagge)
              
              console.log(user.data.email)
             
             
              
             
           
        } catch (error) {
            

            console.log("Mostrando error", error)
            
        }
       
        console.log(info)

    }
  return (
    <div className='login-page justify-content-center align-items-center'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 mt-5'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>Login</div>
                            <div className='mt-3'>
                                <label>Correo</label>
                                <input name="correo"type="text"className='form-control' onBlur={(e)=>handleChange(e)}></input>
                            </div>
                            <div>
                            <label>Contraseña</label>
                            <div className='input-group mt-3'>
                               
                                <input name="contraseña" type={type} className='form-control' onBlur={(e)=>handleChange(e)}></input>
                                <button className="input-group-text btn btn-light" onClick={()=>{setType(prev => prev === "password" ? "text"  : "password" )}}>{type === "password" && <AiFillEye/>}{type === "text" && <AiFillEyeInvisible/>}</button>
                            </div>

                            </div>
                            
                            <div className='mt-2'>
                                <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Enviar</button>
                                
                            </div>
                            <div className="mt-2">{error && <div className="alert alert-danger">
                                <div className="text-center">{error}</div>
                                </div>}

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginScreen;
