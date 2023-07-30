import "./App.css";
import Profile from "./components/Profile";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <div className='layout d-flex flex-column flex-md-row '>
        <Profile />
        <Details />
      </div>
    </div>
  );
}

export default App;
