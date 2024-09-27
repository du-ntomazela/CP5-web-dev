import '../App.css'
import Navegacao from "./navbar"

function Header () {
    return(
        <>
        <div className="fixed w-full">
        <div id='conteiner-header' className=' flex gap-8 justify-center'>
            <h1 id='main-title'>Portifólio</h1>
            <Navegacao />
        </div>
        </div>
        <section className='h-56'></section>
        </>
    )
}

export default Header