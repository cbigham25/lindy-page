import book2 from "./assets/placeholder-2.jpg"
import { CSSTransition } from "react-transition-group";

function Book2({ imageUrls, imageText }) {
    return (
        <div className="book-main-container">
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                <img src={book2} alt="Book cover" />
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </CSSTransition>
        </div>
    );
}

export default Book2;
