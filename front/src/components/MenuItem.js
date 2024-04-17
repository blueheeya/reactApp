
const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            {items.submenu ? (
                <>
                    <li onMouseOver={()=>{setDropdown(true)}}  onMouseOut={()=>{setDropdown(false)}}>
                        <NavLink className={`${dropdown == true ? "active1" :""}`} to={items.to} >{items.name}</NavLink>
                        {dropdown == true ? <Dropdown submenus= { items.submenu } /> : null}
                    </li>
                </>
            ) : <li><NavLink className="rounded-md" to={items.to}>{items.name}</NavLink></li>}

        </>
    )
}

const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, i) => {
              return (
                <li key={i} className="p-2"><NavLink to={submenu.to}>{submenu.name}</NavLink></li>
              )  
            })}
        </ul>
    )
}

export { MenuItems , Dropdown }