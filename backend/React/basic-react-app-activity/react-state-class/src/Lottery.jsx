import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "./helper";
import { sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <br></br>
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulations! you won."}</h3>
    </div>
  );
}
