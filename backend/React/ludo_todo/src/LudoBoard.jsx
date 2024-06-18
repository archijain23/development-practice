import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves]= useState({blue:0, red:0, yellow:0,green:0})

    let updateBlue=()=>{
        console.log(`moes.blue=${moves.blue}`);
        setMoves((prevmove)=>{
            return {...prevmove,blue:prevmove.blue+1};
        })
    }

    let updateYellow=()=>{
        console.log(`moes.yellow=${moves.yellow}`);
        setMoves((prevmove)=>{
            return {...prevmove,yellow:prevmove.yellow+1};
        })
    }

    let updateGreen=()=>{
        console.log(`moes.green=${moves.green}`);
        setMoves((prevmove)=>{
            return {...prevmove,green:prevmove.green+1};
        })
    }

    
    let updateRed=()=>{
        console.log(`moes.red=${moves.red}`);
        setMoves((prevmove)=>{
            return {...prevmove,red:prevmove.red+1};
        })
    }
   


    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}