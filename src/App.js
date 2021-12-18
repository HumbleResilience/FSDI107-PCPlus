
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to my super store</h1>
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
