import './App.css';
import BookDetail from './Components/BookDetail/bookDetail';
function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Open Book Library</h1>
      </header>
      <BookDetail />
      <footer className='footer'>
        <p>Copyright@Fyle's Assignment made with dedication.</p>
      </footer>
    </div>
  );
}
export default App;