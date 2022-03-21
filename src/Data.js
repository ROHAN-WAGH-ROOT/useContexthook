import { useContext } from "react";
import "./styles.css";
import { sendValue } from "./App";

export default function Data() {
  const received = useContext(sendValue);
  return (
    <div className="App">
      <h1>hi {received.name}</h1>
      <h2>your age is {received.age}</h2>
    </div>
  );
}
