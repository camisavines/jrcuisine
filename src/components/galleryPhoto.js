import React from 'react';

class GalleryPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: "cover",
            paddingBottom: "100%",
            backgroundPosition: "center center",
            marginBottom: "10px",
            marginTop: "10px"
        }
    }



    render() {
        return (
            <div style={this.style}></div>
        )
    }
}

export default GalleryPhoto;