import First from '../../../assets monic/Illustration/2e2f0693-85f0-4fc2-9bc3-b6183a80f845.png'
import Second from '../../../assets monic/Illustration/6936fd35-5867-4b7a-899c-89b133c9d243.png'
import Third from '../../../assets monic/Illustration/178386c6-47a8-4092-9c3d-9cc9ae750888.png'
import Fourth from '../../../assets monic/Illustration/55233158-4129-41ee-9484-a64d0512f663.png'
import Fifth from '../../../assets monic/Illustration/72969394-6327-46be-877f-8ba980157ac9.png'
import Sixth from '../../../assets monic/Illustration/ac643c63-3f10-45a8-8116-29bece3781e5.png'
import Seventh from '../../../assets monic/Illustration/db3646fb-685b-44fb-9619-962c4084e8b4.png'
import Eight from '../../../assets monic/Illustration/eeb822de-ff92-47ab-8e4b-c61577cbf18e.png'

import './Gallery.css'

export default function Illustration(){
    return(
        <section id="page">
            <div className="gallery">
                <div className="image-container wide">
                    <img src={First} alt="first"/>
                </div>
                <div className="image-container tall">
                    <img src={Second} alt="second"/>
                </div>
                <div className="image-container tall">
                    <img src={Third} alt="third"/>
                </div>
                <div className="image-container tall">
                    <img src={Fourth} alt="fourth"/>
                </div>
                <div className="image-container big">
                    <img src={Fifth} alt="fifth"/>
                </div>
                <div className="image-container tall">
                    <img src={Sixth} alt="sixth"/>
                </div>
                <div className="image-container big">
                    <img src={Seventh} alt="seventh"/>
                </div>
                <div className="image-container tall">
                    <img src={Eight} alt="eight"/>
                </div>
            </div>
        </section>
    )
}
