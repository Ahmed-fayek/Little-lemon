import './Nav.css'
import logo from './logo/logo.png'
function Nav() {
    const toogleview = () => {
        document.getElementById('view-links').classList.toggle('show-links');
        document.getElementById('bars').classList.toggle('rotates');
    }
    return (<div className="navbar">
        <img src={logo}></img>
        <div className='links'>
            <div className='bars' id='bars' onClick={() => {
                toogleview()
            }}>
                <span></span>
                <span></span>
            </div>
            <ul id='view-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">reservation</a></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    </div >)
}
export default Nav;