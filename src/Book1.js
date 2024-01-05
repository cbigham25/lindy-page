import book1 from "./assets/placeholder-1.jpg"


function Book1({ imageUrls, imageText }) {


    return (
        <div className="book-main-container">
            <div className='book-container'>
               <img src={book1}></img>
            </div>
        </div>
    );
}

export default Book1;
