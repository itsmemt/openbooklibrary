import "./bookLists.css";
function BookLists({bookData,offset}) {
  console.log(offset)
  if (!bookData) return null;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title & Sub Title</th>
            <th>Author</th>
            <th>Latest Publish Year</th>
            <th>First Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {bookData.slice(offset,offset+10).map(book => (
            <tr key={book.key}>
              <td>{book.title}</td>
              <td>{book.author_name[0]}</td>
              <td>{book.first_publish_year}</td>
              <td>{book.publish_year[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookLists;