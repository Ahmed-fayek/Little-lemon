import logo from './../Nav/logo/logo.png'
import './Header.css'
function Header() {
    return (<>
        <div className="header">
            <div className="logo-desc">
                <h1>Little Lemon</h1>
                <p className='adress'>Cairo-Egypt</p>
                <p>You can reserve your dinner table online and check it You can reserve your dinner table online and check itYou can reserve your dinner table online and check it
                </p>
                <button className='reserve-btn'>Reserve a table</button>
            </div>
            <div className="header-logo">
                <img src={logo} alt="Little Lemon"></img>
            </div>
        </div>
    </>)
}
export default Header;
