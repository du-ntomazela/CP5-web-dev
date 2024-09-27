import '../App.css'
import Main_content from '../componets/main-content.jsx'
import Cards from "../componets/cards.jsx"
import Exp from "../componets/experienbcia.jsx"



function Home() {

  return (
    <>
        <Main_content/> 
        <Exp />
      <div className='flex flex-wrap gap-32 justify-center'>
        <Cards/>
      </div>
      <section className='mb-36'></section>
    

    </>
  )
}

export default Home