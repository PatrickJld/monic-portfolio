import Gallery from "./Gallery.jsx";
import Illustration from "./Illustration.jsx";
import CompGraph from "./CompGraph.jsx";

export default function Carousel(){
    return(
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
            <h1 className="text-center font-shippori text-5xl mt-5 mb-5">Work Gallery</h1>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Gallery />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-black text-2xl">Whole Work</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <Illustration />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-black text-2xl">Illustration</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <CompGraph />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-black text-2xl">Computer Graphic</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="">Next</span>
            </button>
        </div>
    )
}
