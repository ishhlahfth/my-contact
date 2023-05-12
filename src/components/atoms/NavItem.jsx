import Icon from './Icon'
import { Link } from 'react-router-dom'
const NavItem = (props) => {
  return (
    <Link
      data-testid='nav-item'
      to={props.link}
      className="nav-item h-10 w-full rounded-md text-white p-2 flex items-center justify-between overflow-hidden cursor-pointer"
    >
      <div className="flex items-center whitespace-nowrap select-none justify-center sm:justify-start w-full">
        <div className="mr-2">
          <Icon name={props.icon} size="6" />
        </div>
        <div>
          <p className="font-medium">{props.text}</p>
        </div>
      </div>
    </Link>
  )
}

export default NavItem
