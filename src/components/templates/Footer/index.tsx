import { Footer } from "antd/lib/layout/layout";
import React from "react";
import "./style.css";

interface Footer{

}

const FooterTemplate = ({}: Footer) => {
  return(
    <Footer className="footer" style={{padding: 0}}>
      <div className="text-center">
        © 2022 Copyright: Desenvolvido por Gabriel Borges e Jackson de Almeida
      </div>
    </Footer>
  )
}

export default FooterTemplate;