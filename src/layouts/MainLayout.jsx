import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <section className="relative">
      <Navbar />
      <Outlet />
    </section>
  )
}

export default MainLayout
