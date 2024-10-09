import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Template = () => {
  return (
    <div className="flex min-h-screen max-w-full">
    <Sidebar />
    <div
      className={`flex flex-col transition-all duration-300 ease-in-out w-full`} >
      <Navbar />
      <main className="flex-grow max-w-full ">
        <Outlet />
      </main>
      <div>
    <Footer/>
    </div>

    </div>
  </div>
  )
}

export default Template