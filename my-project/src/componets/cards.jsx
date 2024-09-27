import "../App.css"
import conteudos from "./portifolio.json"

function cards1(props) {
        return(
            conteudos.map((cards) => {
                return(                
                    <div key={cards.id} id="cards" className='bg-blue-600 w-72 h-96 flex-col align-middle p-3'>
                     <div className='flex justify-center m-2'>
                        <h1 className='text-white text-2xl font-semibold'>{cards.title}</h1>
                        </div>
                        <div className='flex justify-center m-2'>
                          <img className='rounded-md w-36' src={`../../public/imgs/${cards.img}`} alt="" />
                     </div>
                        <div className=''>
                            <p id='main-paragraph'>{cards.text}</p>
                        </div>
                </div>
                )
            }
        )
    )
}


export default cards1

