import { useState } from 'react'
import Icon from '../atoms/Icon'
import NavItem from '../atoms/NavItem'

const Sidebar = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    show ? setShow(false) : setShow(true)
  }
  return (
    <>
      <nav className="h-full fixed inset-y-0 left-0 grid gap-2 auto-rows-max bg-midnight overflow-hidden z-50 sm:p-8 transition-all duration-200 w-64 hidden sm:block">
        <div className="absolute-top my-3">
          <p className="text-3xl text-white font-semibold">MyContact</p>
        </div>
        <NavItem text="Contact" link="/" icon="contacts" />
        <NavItem text="About" link="/about" icon="about" />
      </nav>
      <nav className="fixed top-0 p-2 w-full items-center justify-between gap-2 bg-midnight overflow-hidden z-50 sm:p-8 transition-all duration-200 block sm:hidden">
        <div className="flex justify-between w-full">
          <div className="my-2">
            <p className="text-3xl text-white font-semibold">MyContact</p>
          </div>
          <div className="text-white cursor-pointer p-4" onClick={() => handleShow()}>
            <Icon name={`${show ? 'close' : 'menu'}`} />
          </div>
        </div>
        <div className={`w-full ${show ? 'block' : 'hidden'}`}>
          <NavItem text="Contact" link="/" icon="contacts" />
          <NavItem text="About" link="/about" icon="about" />
        </div>
      </nav>
    </>
  )
}

export default Sidebar
