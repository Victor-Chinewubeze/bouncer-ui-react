import React from 'react';
import iphoneX from './images/iphoneX.png'
import './Banner.css'


export default function Banner() {
    return (
        <div id="carouselExampleControls" className="carousel-slider carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    <div
                        className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center text-white ">
                        <h3 className=" text-left">iPhone X</h3>
                        <p className="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tempore. Culpa
                            est tempore ut sed qui, esse numquam quas sit ea veritatis quia ratione earum quos eius,
                            assumenda corrupti nisi!</p>
                        <a href="/" className="text-white">MORE</a>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={iphoneX} className="d-block mx-auto" alt="..." />
                    </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="row">
                    <div
                        className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center text-white ">
                        <h3 className=" text-left">iPhone X</h3>
                        <p className="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tempore. Culpa
                            est tempore ut sed qui, esse numquam quas sit ea veritatis quia ratione earum quos eius,
                            assumenda corrupti nisi!</p>
                        <a href="/" className="text-white">MORE</a>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={iphoneX} className="d-block mx-auto" alt="..." />
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    );
}