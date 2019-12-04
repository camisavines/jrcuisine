import React from 'react';

class GalleryPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: "cover",
            paddingBottom: "100%",
            backgroundPosition: "center center",
            marginBottom: "5px",
            marginTop: "15px",
            cursor: "pointer"
        }
        this.modal = this.modal.bind(this);
    }

    modal() {
        // console.log("clicked");
    }



    render() {
        return (
            <div style={this.style} onClick={this.modal}></div>
        )
    }
}

export default GalleryPhoto;