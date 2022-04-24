import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { toggleAdded } from "./slice";

function App() {
  const state = useSelector((state) => state.product);

  return (
    <div>
      {state.products.map((p, key) => {
        return (
          <div key={key}>
            <ul>
              <li>Name: {p.name}</li>
              <li>Price: {p.price}</li>
              <li>Stock: {p.stock}</li>
            </ul>
          </div>
        );
      })}
      <AddedComponent />
    </div>
  );
}

function AddedComponent() {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  function HandleClick() {
    return dispatch(toggleAdded());
  }
  return (
    <div>
      <p>Added: {state.added.toString()}</p>
      <button onClick={() => HandleClick()}>Toggle Added</button>
    </div>
  );
}

export default App;
