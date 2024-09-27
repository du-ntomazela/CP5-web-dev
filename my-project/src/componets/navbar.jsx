import '../App.css'
import {Link} from "react-router-dom"

 function navbar () {
    return(
        <div id='header' className="bg-slate-900 w-4/5 h-10" >
                <div id='div-header' className='flex gap-8 justify-center'>
                    <Link to={"/home"} id="a-navbar-home">Home</Link>
                    <Link to={"/sobre"} id="a-navbar" >Sobre</Link>
                    <Link to={"/projetos"} id="a-navbar" >Projetos</Link>
                    <Link to={"/contato"} id="a-navbar" >Contato</Link>    
                </div>
            </div>
    )
 }

 export default navbar