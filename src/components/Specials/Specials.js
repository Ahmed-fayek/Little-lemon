import './Specials.css'
import logo from './../figma/images/greek.png'
import lemon from './../figma/images/lemon.jpg'
import bruchetta from './../figma/images/bruchetta.jpg'
function Specials() {
    return (<>
        <div className="Specials">
            <div className="Specials-top">
                <h1>Specials</h1>
                <button >Online Menu</button>
            </div>
            <div className="Special-orders">
                <div className="order-cart">
                    <img src={logo} alt="Special"></img>
                    <div className="Spacial-desc">
                        <div className="name-price">
                            <h2>Greek Salad</h2>
                            <h3>$12.99</h3>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button> Order a delivery </button>
                    </div>
                </div>
                <div className="order-cart">
                    <img src={bruchetta} alt="Special"></img>
                    <div className="Spacial-desc">
                        <div className="name-price">
                            <h2>Bruchetta</h2>
                            <h3>$ 5.99</h3>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil
                        </p>
                        <button> Order a delivery </button>
                    </div>
                </div>
                <div className="order-cart">
                    <img src={lemon} alt="Special"></img>
                    <div className="Spacial-desc">
                        <div className="name-price">
                            <h2>Lemon Dessert</h2>
                            <h3>$ 5.00</h3>
                        </div>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <button> Order a delivery </button>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default Specials;