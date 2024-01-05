import book2 from "./assets/placeholder-2.jpg"


function Book2({ imageUrls, imageText }) {


    return (
        <div className="book-main-container">
            <div className='book-container'>
               <img src={book2}></img>
            </div>
        </div>
    );
}

export default Book2;
