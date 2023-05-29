import { useState } from "react";
import Child from "./Child";
import Cashier from "./Cashier";
import Manager from "./Manager";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavigationBar from "./NavigationBar";

function App() {
  const [nema, setNema] = useState("");
  const [name, setName] = useState("");
  const [acctype, setAcctype] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setNema(name);
  }
  const takeData = (value) => {
    setAcctype(value);
  };
  return (
    <>
      <NavigationBar />
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inp_name">Enter Username</label>
        <input
          type="text"
          id="inp_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      <p>{nema}</p>
      <p>{acctype}</p>
      <Child callback={takeData} />
      {acctype === null ? (
        ""
      ) : acctype === "cashier" ? (
        <Cashier />
      ) : acctype === "manager" ? (
        <Manager />
      ) : (
        "No account is goods"
      )}
      <a href="https://google.com">Click here</a>
      <Button variant="outline-success" className="mybtn">
        Success
      </Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="https://google.com">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
export default App;
