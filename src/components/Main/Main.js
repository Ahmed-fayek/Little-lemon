import logo from './../Nav/logo/logo.png'
import lemon from './../figma/images/lemon.jpg'
import greek from './../figma/images/greek.png'
import './Main.css'
function Main() {
    return (<>
        <div className="main">
            <div className="logo-desc">
                <h1>Little Lemon</h1>
                <p className='adress'>Cairo-Egypt</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div className="header-logo">
                <img src={lemon} alt="Little Lemon"></img>
                <img src={greek} alt="Little Lemon"></img>
            </div>
        </div>
    </>)
}
export default Main;