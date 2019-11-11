import React from 'react';

class GalleryPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: "cover",
            width: "22rem",
            paddingBottom: "100%",
            backgroundPosition: "center center",
            display: "block",
            marginBottom: "10px"
        }
    }



    render() {
        return (
            <div style={this.style}></div>
        )
    }
}

export default GalleryPhoto;