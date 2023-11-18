import React, { Component } from "react";

class Books extends Component {
    render() {
        return (
            <section aria-label="Book Gallery">
                <div class="carousel">
                    <button class="carousel-button prev"></button>
                    <button class="carousel-button next"></button>
                    <ul>
                        <li class="slide">
                            <img src="assets/placeholder-1.jpg"></img>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Books;