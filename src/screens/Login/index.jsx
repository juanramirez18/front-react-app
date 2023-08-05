import "./login.css"
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LoginScreen() {
    const [info, setInfo] = useState([])
    const [error, SetError] = React.useState([])
    // const navigate = useNavigate()
    
    const handleChange = (e)=>{
        setInfo({...info, [e.target.name]:e.target.value})
        
    };

    const handleSubmit = async()=>{
        try {
            const user = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/auth/signin',
                data: {
                  email: info.correo,
                  password: info.contraseña
                }
              });
              console.log("hoal carla")
              console.log(user.data.messagge)
              SetError(user.data.messagge)
            //   navigate("/dashboard")
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
                            <div className='mt-3'>
                                <label>Contraseña</label>
                                <input name="contraseña" type="text" className='form-control' onBlur={(e)=>handleChange(e)}></input>
                            </div>
                            <div className='mt-2'>
                                <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Enviar</button>
                            </div> 
                            <div className="alert-danger">
                                <p >{error}</p>
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
