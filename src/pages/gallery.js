import React from "react";
import $ from 'jquery'; 
import Navigation from '../components/navigation';
import GalleryPhoto from '../components/galleryPhoto';
import '../css/gallery.css';


function importAll(r) { return r.keys().map(r);}  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|JPG)$/));
const pageContent = images.map((image) => 
    <div className="col-6 col-sm-4 col-md-3"><GalleryPhoto img={image}/></div>
)


function Gallery()  {
    return (
        <div className="w-full">
            <div className="gallery-hero">
                <Navigation />
                <div className="quarter vertical-align">
                    <h1>Gallery</h1>
                </div>
            </div>

            <div className="row d-flex">
                {pageContent}
            </div>

        </div>
    )
}

export default Gallery;