import { useState } from 'react'
import { Busca } from './components/Busca'
import { Resposta } from './components/Resposta.jsx'
import { FaGithub } from "react-icons/fa";
import './App.css'

//Função que renderiza os componentes Busca e Resposta
export function App() {
  //Cria o estado usuarioInfo que recebe os dados do usuário(Recebido na função Busca e Mostrado na função Resposta)
   const [usuarioInfo, setUsuarioInfo] = useState(null)

   //"Busca" passa setUsuarioInfo como props para receber os dados do usuário
   //Resposta recebe usuarioInfo como props caso exista
  return (
    <div id='container'>

      <h1 id='titulo-da-busca'><FaGithub/> Perfil GitHub</h1>
      <Busca  setUsuarioInfo = {setUsuarioInfo}/>
      {usuarioInfo && <Resposta usuarioInfo={usuarioInfo}/>}

    </div>
    
  )
}
export default App