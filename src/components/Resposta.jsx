import './Resposta.css'
//Função que recebe usuarioInfo(dados do usuário) como props
//Informa os dados do usuário caso tanha sido encontrado
//Mostra uma mensagem de usuário não encontrado caso não tenha sido encontrado
export const Resposta = ({usuarioInfo}) => {
    //constantes que recebem os dados do usuário
    const nome = usuarioInfo.name
    const bio = usuarioInfo.bio
    const avatar = usuarioInfo.avatar_url
    //lógica que verifica se o usuário existe ou não
    //se não existir, mostra ume mensagem de erro
    //senão, mostra os dados do usuário
    if(!nome && !bio && !avatar) {
        return (
            <div id="mensagem-de-erro">
                <h2>Nenhum perfil foi encontrado com esse nome de usuário.</h2>
                <h2>Tente novamente</h2>

            </div>
        )
    } else {
        return (
            <div id="resposta">
                <img  id="foto-do-usuario" src={avatar} alt="foto"/>
                <div id='nome-e-bio'>
                    <h3 id='nome'>{nome}</h3>
                    <p id='bio'>{bio}</p>
                </div>
            </div>
        )
    }
    
}

