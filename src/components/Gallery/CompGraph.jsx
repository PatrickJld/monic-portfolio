import One from '../../../assets monic/Computer Graphic/2_20240701_153026_0000.jpg'
import Two from '../../../assets monic/Computer Graphic/3_20240701_153026_0001.jpg'
import Three from '../../../assets monic/Computer Graphic/4_20240701_153026_0002.jpg'
import Four from '../../../assets monic/Computer Graphic/5_20240701_153026_0003.jpg'
import Five from '../../../assets monic/Computer Graphic/6_20240701_153026_0004.jpg'
import Six from '../../../assets monic/Computer Graphic/7_20240701_153026_0005.jpg'
import Seven from '../../../assets monic/Computer Graphic/8_20240701_153026_0006.jpg'
import Eight from '../../../assets monic/Computer Graphic/9_20240701_153026_0007.jpg'
import Nine from '../../../assets monic/Computer Graphic/ALVO.jpg'
import Ten from '../../../assets monic/Computer Graphic/f52eaddf-72e4-4a5f-9adf-1820fabdaf0c.png'
import Eleven from '../../../assets monic/Computer Graphic/Monica_20240417_190418_0000-20240701034017_1-1.png'
import Twelve from '../../../assets monic/Computer Graphic/Seahorse Brush_20240701_153239_0000.jpg'
import Thirteen from '../../../assets monic/Computer Graphic/Take a look at my Canva design!.jpg'

import './Gallery.css'

export default function CompGraph() {
    return(
        <section id="page">
            <div className="gallery">
                <div className="image-container">
                    <img src={One} alt="one"/>
                </div>
                <div className="image-container">
                    <img src={Two} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Three} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Four} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Five} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Six} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Seven} alt=""/>
                </div>
                <div className="image-container">
                    <img src={Eight} alt=""/>
                </div>
                <div className="image-container tall">
                    <img src={Nine} alt=""/>
                </div>
                <div className="image-container tall">
                    <img src={Ten} alt=""/>
                </div>
                <div className="image-container tall">
                    <img src={Eleven} alt=""/>
                </div>
                <div className="image-container big">
                    <img src={Twelve} alt=""/>
                </div>
                <div className="image-container tall">
                    <img src={Thirteen} alt=""/>
                </div>
            </div>
        </section>
    )
}
