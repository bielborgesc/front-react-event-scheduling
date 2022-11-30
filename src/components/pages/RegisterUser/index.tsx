import React, { useState } from "react";
import "./style.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserService } from "../../../service";
import { useNavigate } from 'react-router';


const RegisterUser = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

	const handleClickRegister = () => {
    let success = false;
    const user = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    createUserService(user)
      .then(() => {
        setName('');
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        toast.success("Sua conta foi criada com sucesso, estamos te redirecionando para tela de login");
        success = true
      })
      .catch( (error:any) => toast.error(error.response.data.message))
    setTimeout(() => {if(success)  navigate('/login')}, 2000)
  }

  return(
    <>
      <div className="container-fluid">
        <div className="row content--main">
          <div className="content-img col col-xs-0 bg--img d-grid justify-content-center">

            <div className="d-block align-self-center">
              <div className="register-area">
                <h1 className="text-white text-center">Registrar-se</h1>
                <form className="p-2">
                  <div className="form-group mb-2">
                    <label className="text-white">Insira seu nome</label>
                    <Input name="search" placeholder='Insira seu nome completo'
                      type='text' onChange={(e) => setName(e.target.value)} value={name}
                    ></Input>
                  </div>

                  <div className="form-group mb-2">
                    <label className="text-white">Insira seu E-mail</label>
                    <Input name="search" placeholder='Insira um email válido'
                      type='email' onChange={(e) => setEmail(e.target.value)} value={email}
                    ></Input>
                  </div>

                  <div className="form-group mb-4">
                    <label className="text-white">Insira sua senha</label>
                    <Input name="search" placeholder='Insira uma senha válida'
                      type='password' onChange={(e) => setPassword(e.target.value)} value={password}
                    ></Input>

                    <label className="text-white mt-2">Confirme sua senha</label>
                    <Input name="search" placeholder='Confirme a senha'
                      type='password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                    ></Input>
                  </div>

                  <button type="button" className="btn btn-success w-100" onClick={() => handleClickRegister()}>Registrar</button>
                  <Link to="/login">
                    <button className="btn btn-primary mt-2 w-100">Voltar</button>
                  </Link>
                </form>
              </div>
            </div>

          </div>        
        </div>
      </div>
		</>
  )
}

export default RegisterUser;