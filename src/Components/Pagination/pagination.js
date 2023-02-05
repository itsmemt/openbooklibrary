import "./pagination.css"
const Pagination = ({totalNoOfData,offset ,setOffset}) => (
  <div className="pagination">
    <button onClick={() => setOffset(offset - 10)} disabled={offset === 0}>Previous</button>

    <button onClick={() => setOffset(offset + 10)} disabled={totalNoOfData < 10 || offset >= 90}>Next</button>
  </div>
);
export default Pagination;