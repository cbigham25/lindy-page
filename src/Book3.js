import book3 from "./assets/placeholder-3.jpg"


function Book3({ imageUrls, imageText }) {


    return (
        <div className="book-main-container">
            <div className='book-container'>
               <img src={book3}></img>
            </div>
        </div>
    );
}

export default Book3;
