import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            {/* <a href="profile">Profile pages</a> */}
            <Link to="profile">Profile Pages</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;