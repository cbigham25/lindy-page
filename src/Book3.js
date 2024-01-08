import book3 from "./assets/placeholder-3.jpg"
import { CSSTransition } from "react-transition-group";

function Book3({ imageUrls, imageText }) {
    return (
        <div className="book-main-container">
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                <img src={book3} alt="Book cover" />
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" unmountOnExit>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </CSSTransition>
        </div>
    );
}

export default Book3;
