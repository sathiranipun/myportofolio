import './Intro.scss'
import Button from '@material-ui/core/Button';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assests/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There,I'm</h2>
                    <h1>Sathira Nipun</h1>
                    <h3>FullStack <span>Developer </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assests/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
