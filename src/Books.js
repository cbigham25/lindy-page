import React, { useRef } from "react";
import book1 from "./assets/placeholder-1.jpg"
import book2 from "./assets/placeholder-2.jpg"
import book3 from "./assets/placeholder-3.jpg"
import { CSSTransition } from "react-transition-group";

function Books() {

    const booksWrapperRef = useRef(null);

    const scroll = (direction) => {
        const { current } = booksWrapperRef;
        if (current) {
            const containerWidth = current.clientWidth;
            const currentScroll = current.scrollLeft;

            console.log("Container Width: ", containerWidth);
        console.log("Current Scroll: ", currentScroll);

            if (direction === 'left') {
                current.scrollLeft = currentScroll - containerWidth;
            } else {
                current.scrollLeft = currentScroll + containerWidth;
            }
            console.log("New Scroll: ", current.scrollLeft);
        }
    };

    return (
    <div className="books-outer-wrapper">
        <button onClick={scroll('left')} className="scroll-button left">{"<"}</button>
            <div className="books-wrapper"  ref={booksWrapperRef}>
                <div className="book-main-container">
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <img src={book1} alt="Book cover" />
                    </CSSTransition>
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </CSSTransition>
                </div>
                <div className="book-main-container">
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <img src={book2} alt="Book cover" />
                    </CSSTransition>
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </CSSTransition>
                </div>
                <div className="book-main-container">
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <img src={book3} alt="Book cover" />
                    </CSSTransition>
                    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </CSSTransition>
                </div>
            </div>
             <button onClick={scroll('right')} className="scroll-button right">{">"}</button>
    </div>
    );
}

export default Books;
