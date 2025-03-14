import Navbar from './Navbar';
import myImage from '../assets/img/Alex Chai.png';
const Hero = ({ props }) => {
    return (
        <div className="Hero">
            <Navbar />
            <div className="container">
                <img className='HeroImage' src={myImage} alt="Alex Chai" />
                <div className='HeroTextWrapper'>
                    <span className="caption uppercase">Hi There!👋</span>
                    <h1 className="display1">I’m Alex Chai</h1>
                    <p>A passionate web developer and multimedia designer with a mission to turn beautiful designs into interactive experiences</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;