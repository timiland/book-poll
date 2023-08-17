import IBook from "../Models/IBook";

interface IBookCard extends IBook {
  highlighted: boolean;
}

const BookCard = ({ highlighted, title, votes, image }: IBookCard) => {
  return (
    <div>
      <h1>Book Title</h1>
      <img
        alt="book-title"
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673458354i/62296528.jpg"
      />
      <div>
        votes :<span>3</span>
      </div>
    </div>
  );
};

export default BookCard;
