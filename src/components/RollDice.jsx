import { useState } from "react"
import styled from "styled-components"

const RollDice = ({ currentDice, rollDice }) => {





    return (
        <DiceContainer>
            <div className="dice"
                onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
            </div>
            <p>click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice
const DiceContainer = styled.div`
margin-top:48px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .dice{
        cursor: pointer;
    }

p{
    font-size:24px;
}
`;