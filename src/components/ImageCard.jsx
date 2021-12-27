import React,{useState} from 'react'
import rock from '../img/rock.gif'
import paper from '../img/paper.gif'
import scissor from '../img/scissor.gif'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {humanAddValue,computerAddValue,drawValue,resetValue} from '../redux/action/actions'


function ImageCard({ humanAddFunction, computerAddFunction, drawFunction,resetFunction ,data}) {
    const [humanScore, setHumanScore] = useState(1)
    const [computerScore, setComputerScore] = useState(1)
    const [disable, setDisable] = React.useState(false);

    const handleClick = (dd) => {
        const systemData = Math.floor(Math.random() * 3)
        if ((systemData === 0 && dd === 1) || (systemData === 2 && dd === 0) || (systemData === 1 && dd === 2)) {
            setHumanScore(prevCount=>prevCount+1)
            humanAddFunction({data:humanScore,result:'User Win'})
        } else if ((systemData === 1 && dd === 0) || (systemData === 0 && dd === 2) || (systemData === 2 && dd === 1)) {
            setComputerScore(prevCount=>prevCount+1)
            computerAddFunction({data:computerScore,result:'Computer Win'})
        } else {
            console.log('draw');
            drawFunction('Draw')
        }
        if(humanScore===10 || computerScore===10){
            if(humanScore===10){
                drawFunction('User Win')
            }else{
                drawFunction('System Wins')
            }
            setDisable(prevCount=>!prevCount)
        }
    }
    const reset=()=>{
        resetFunction({data:'0',result:'Start the game'})
        setHumanScore(prevCount=>prevCount-(prevCount-1))
        setComputerScore(prevCount=>prevCount-(prevCount-1))
        setDisable(prevCount=>!prevCount)

    }

    return (
        <div>
            <Button disabled={disable} variant="outline-dark" style={{ backgroundColor: 'white' }} onClick={() => handleClick(0)}><img src={rock} alt="rock" width="100px" /></Button>
            <Button disabled={disable}  variant="outline-dark"style={{ backgroundColor: 'white', margin: '25px' }} onClick={() => handleClick(1)}><img src={paper} alt="paper" width="80px" /></Button>
            <Button disabled={disable} variant="outline-dark" style={{ backgroundColor: 'white' }} onClick={() => handleClick(2)}><img src={scissor} alt="scissor" width="80px" /></Button>

            <br /><Button variant="primary" disabled={!disable} onClick={()=>{reset()}}>Restart the Game</Button>

        </div>

    )
}


const mapDispatchToProps = (dispatch)=>{
    return {
        humanAddFunction: (data)=>dispatch(humanAddValue(data)),
        computerAddFunction: (data)=> dispatch(computerAddValue(data)),
        drawFunction:(data)=>dispatch(drawValue(data)),
        resetFunction:(data)=>dispatch(resetValue(data))
    }
}


export default connect(null, mapDispatchToProps)(ImageCard)
