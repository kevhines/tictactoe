import React, { useState } from "react"
import { calculateWinner } from "../helper"
import Board from "./Board"

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const[xIsNext, setXisNext] = useState(true)
   const winner = calculateWinner(history[stepNUmber])
   const xO = xIsNext ? "X" : "O"

   const handleClick - (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNUmber]
        const squares = [...currrent]
        //return if won or occupied
        if (winner || squares[i]) return
        // select squares
        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }

    return (    )
}