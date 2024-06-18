import { useState } from "react";
import "./App.css";
import LikeButton from "./LikeButton";
import Lottery from "./Lottery";
import Ticket from "./Ticket";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
