import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Main = () => {
  return (
    <>
        <header>
            <Header></Header>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        
    </>
  )
}

export default Main