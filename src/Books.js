import React, { Component } from "react";

class Books extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="image1.jpg" alt="Image 1" />
                    <p>Paragraph for Image 1</p>
                </div>
                <div>
                    <img src="image2.jpg" alt="Image 2" />
                    <p>Paragraph for Image 2</p>
                </div>
                <div>
                    <img src="image3.jpg" alt="Image 3" />
                    <p>Paragraph for Image 3</p>
                </div>
            </div>
        );
    }
}

export default Books;