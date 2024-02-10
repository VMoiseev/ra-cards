import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Cards image="https://as2.ftcdn.net/v2/jpg/04/16/67/57/1000_F_416675719_vEOMSc2oFeCQzZgkPfbZi62MBqdqXd1J.jpg" className="card-img-top">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Cards>
      <Cards>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content</p>
      </Cards>
    </>
  )
}

export default App;
