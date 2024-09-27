import '../App.css'
import dev from "../../public/imgs/dev1.png"

function main_content () {
    return (
        
    <div className='flex justify-center'>
      <div id="main-text" className='main-text flex-col'>
        <div id='main-title' className=''>Olá, Me chamo <h1 id='nome'>Eduardo Tomazela,</h1> sou engenheiro de software!</div>
        <p id='main-paragraph'>Atualmente estou cursando meu segundo semestre do Ensino Superior na Faculdade de Informatica e Admisnistração Paulista</p>
      </div>
      <img id='main-img' src={dev} alt="desenvolvedor e linguagens dev" />
    </div>
    )
}

export default main_content