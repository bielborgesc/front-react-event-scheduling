import React, {  useState } from "react";
import "./style.css";
import { Input } from "antd";
import { login } from "../../../service";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

const LoginUser = () => {

  const [email, setEmail] = useState('borges@dev.com');
	const [password, setPassword] = useState('@Gabriel05');
  const navigate = useNavigate()
  
	const handleClickButtonSingin = () => {
    let success = false;
      login(email, password)
      .then((e) => {
        setEmail('')
        setPassword('')
        toast.success("Você foi logado com sucesso, estamos te redirecionando ...")
        localStorage.setItem('token', e.data.token)
        success = true
      })
      .catch( (error:any) => toast.error(error.response.data.message))
    setTimeout(() => {if(success)  navigate('/')}, 2000)
  }
  
  return(
    <>
      <div className="container-fluid">
        <div className="row content--main">
          <div className="content-img col col-xs-0 bg--img d-grid justify-content-center">

            <div className="d-block align-self-center">
              <div className="login-area">
                <h1 className="text-white text-center">Login</h1>
                <form className="p-4" >
                  <div className="form-group mb-4">
                    <label className="text-white">Insira seu E-mail</label>
                    <Input name="search"
                      placeholder='Insira um email válido'
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></Input>
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-white">Insira sua senha</label>
                    <Input name="search"
                      placeholder='Insira uma senha válida'
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    ></Input>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartilhe sua senha com terceiros!</small>
                  </div>
                  <button type="button" className="btn btn-success w-100" onClick={() => handleClickButtonSingin()} >Entrar</button>
                  <Link to="/cadastrar-usuario">
                    <button type="button" className="btn btn-primary w-100 mt-2">Registrar-se</button>
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

export default LoginUser;