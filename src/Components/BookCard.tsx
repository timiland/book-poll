import IBook from "../Models/IBook";

interface IBookCard extends IBook {
  highlighted: boolean;
}

const BookCard = ({ highlighted, title, votes, image }: IBookCard) => {
  return (
    <div className="p-8 rounded-xl border border-green-500 bg-black text-white">
      <h1 className="text-green-500">Book Title</h1>
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
