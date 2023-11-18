import React, { Component } from "react";

class Books extends Component {
    render() {
        return (
            <section aria-label="Book Gallery">
                <div className="carousel">
                    <button className="carousel-button prev"></button>
                    <button className="carousel-button next"></button>
                    <ul>
                        <li className="slide">
                            <img src={require('./assets/placeholder-1.jpg')} alt="Book cover 1"></img>
                        </li>
                        <li className="slide">
                            <img src={require('./assets/placeholder-2.jpg')} alt="Book cover 1"></img>
                        </li>
                        <li className="slide">
                            <img src={require('./assets/placeholder-3.jpg')} alt="Book cover 1"></img>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Books;