import { FaSearch } from 'react-icons/fa'
import { useState } from "react";
import './Busca.css'

//Função de busca do usuário que recebe a função setUsuarioInfo como props para receber os dados do usuário
export const Busca = ({setUsuarioInfo}) => {
    //Cria o estado usuarioInformado que recebe o valor do input
    const [usuarioInformado, setUsuarioInformado] = useState(null)
    //Função que busca o usuário na API do GitHub de acordo com o usuario informado no input(usuarioInformado)
    const buscarUsuario = async () => {
        const URL = `https://api.github.com/users/${usuarioInformado}`
        const resposta = await fetch(URL)
        const dados = await resposta.json()
        setUsuarioInfo(dados)
        console.log(dados)
    }
    //Return de um input para o usuário informar o nome do usuário cujo quer buscar e um botão para chamar a função de buscar
    return (
        <div id='campo-de-busca'>

            <input type="text" id="input-do-nome-de-usuario" onChange={(e) => setUsuarioInformado(e.target.value)} placeholder='Digite um usuário do GitHub'/>
            
            <button id='botao-de-busca' onClick={buscarUsuario}>
                <FaSearch className="icon" />
            </button>

        </div>
    )
  }