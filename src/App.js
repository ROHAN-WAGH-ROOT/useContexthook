import { createContext } from "react";
import "./styles.css";
import Data from "./Data";
const values = {
  name: "rohan",
  age: "22"
};
export const sendValue = createContext(values);
export default function App() {
  return (
    <div className="App">
      <sendValue.Provider value={values}>
        <Data />
      </sendValue.Provider>
    </div>
  );
}
