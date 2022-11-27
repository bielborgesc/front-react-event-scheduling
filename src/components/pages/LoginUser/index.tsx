import React, { useEffect, useState } from "react";
import "./style.css";
import { Input } from "antd";


const LoginUser = () => {

  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleClickButtonSingin = () => {
    console.log("Logando...")
  }

	useEffect(() => {

	}, []);

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
                    {/* <input type="email" className="form-control" onChange={setEmail(value)} placeholder="Enter email"> */}
                    <Input name="search"
                      placeholder='Insira um email válido'
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></Input>
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-white">Insira sua senha</label>
                    {/* <input type="password" className="form-control" onChange={} placeholder="Password"> */}
                    <Input name="search"
                      placeholder='Insira uma senha válida'
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    ></Input>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartilhe sua senha com terceiros!</small>
                  </div>
                  <button type="submit" className="btn btn-success w-100">Entrar</button>
                  <button type="submit" className="btn btn-primary w-100 mt-2" onClick={() => handleClickButtonSingin()}>Registrar-se</button>
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