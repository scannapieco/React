import CartWidget from "../Cartwidget/CartWidget"

const NavBar = () =>  {
    return (
        <nav>
            <h3>HOMESMART</h3>
            <div>
                <ul>
                    <li>Enchufes</li>
                    <li>Wifi</li>
                    <li>Gadgets</li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
 }
 export default NavBar