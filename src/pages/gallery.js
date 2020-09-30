import React from "react";
// import $ from 'jquery';
import GalleryPhoto from '../components/galleryPhoto';
import '../css/gallery.css';


function importAll(r) { return r.keys().map(r);}  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|JPG)$/));
const pageContent = images.map((image) => 
    <div className="col-6 col-sm-4 col-md-3 col-lg-2"><GalleryPhoto img={image} width="100%" /></div>
)


function Gallery()  {
    
    return (
        <div className="bg-white pb-3">
            <div className="gallery-hero">
                <div className="quarter vertical-align">
                    <h1>Gallery</h1>
                </div>
            </div>
            

            <div className="gallery">
                {pageContent}
            </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>

        </div>
    )
}

export default Gallery;