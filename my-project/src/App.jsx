import './App.css'
import Header from "./componets/header.jsx"
import Back from "./componets/backgroundimg.jsx"
import { Outlet } from 'react-router-dom'
import Footer from "./componets/footer.jsx"


function App() {

  return (
    <>
        <Header />
        <Back />
        <Outlet />
        <Footer />
    

    </>
  )
}

export default App
