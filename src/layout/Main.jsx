import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
    <>
        <header>
            <Header></Header>
        </header>
        <main>
            <ToastContainer />
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        
    </>
  )
}

export default Main