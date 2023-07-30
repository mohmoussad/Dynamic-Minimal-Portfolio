import "./App.css";
import { Helmet } from "react-helmet";
import Profile from "./components/Profile";
import Details from "./components/Details";
import conifguration from "./configuration";

const { name, photo } = conifguration;

function App() {
  return (
    <>
      <Helmet>
        <title>{name}</title>
        <link rel='icon' type='image/x-icon' href={photo} />
      </Helmet>
      <div>
        <div className='layout d-flex flex-column flex-md-row '>
          <Profile />
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
