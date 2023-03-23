import './Footer.css'
import logo from './../Nav/logo/logo.png'
function Footer() {
    return (<>
        <footer >
            <div className='footer-image'>
                <img src={logo} alt='Little Lemon'></img>
            </div>
            <div className='navigator'>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Reservations</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </div>
            <div className='contact'>
                <h3>Contact</h3>
                <ul>
                    <li>Cairo-Egypt</li>
                    <li>01128336494</li>
                    <li>aahmedfayek@gmail.com</li>
                </ul>
            </div>
            <div className='social'>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Cairo-Egypt</li>
                    <li>01128336494</li>
                    <li>aahmedfayek@gmail.com</li>
                </ul>
            </div>
        </footer>
    </>)
}
export default Footer;