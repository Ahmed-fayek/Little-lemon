import './Testimonials.css'
import pr1 from './../figma/images/person1.png'
import pr2 from './../figma/images/person2.png'
import pr3 from './../figma/images/person3.png'
import pr4 from './../figma/images/person4.png'
function Testimonials() {
    return (<>
        <div className='Testimonials'>
            <h1>Testimonials</h1>
            <div className='rates'>
                <div className='rate'>
                    <h4>Rating</h4>
                    <div className='details'>
                        <img src={pr1} alt='profile picture'></img>
                        <h4>Ahmed</h4>
                    </div>
                    <h6>this is a very good website</h6>
                </div>
                <div className='rate'>
                    <h4>Rating</h4>
                    <div className='details'>
                        <img src={pr2} alt='profile picture'></img>
                        <h4>Sara</h4>
                    </div>
                    <h6>this is a very good website</h6>
                </div>
                <div className='rate'>
                    <h4>Rating</h4>
                    <div className='details'>
                        <img src={pr3} alt='profile picture'></img>
                        <h4>Reham</h4>
                    </div>
                    <h6>this is a very good website</h6>
                </div>
                <div className='rate'>
                    <h4>Rating</h4>
                    <div className='details'>
                        <img src={pr4} alt='profile picture'></img>
                        <h4>Khaled</h4>
                    </div>
                    <h6>this is a very good website</h6>
                </div>
            </div>
        </div>
    </>)
}
export default Testimonials;