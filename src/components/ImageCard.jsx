import React,{useState} from 'react'
import rock from '../img/rock.gif'
import paper from '../img/paper.gif'
import scissor from '../img/scissor.gif'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {humanAddValue,computerAddValue} from '../redux/action/actions'






function ImageCard({humanAddValue,computerAddValue}) {
    const {humanScore,setHumanScore}=useState(0)
    const {computerScore,setComputerScore}=useState(0)

    const handleClick=(dd)=>{    
        const systemData=Math.floor(Math.random()*3)
        console.log('both values',systemData,dd);
        if((systemData===0 && dd===1) || (systemData===2 && dd===0) || (systemData===1 && dd===2)){
            console.log('user wins');
            {()=>setHumanScore(humanScore+1)}
            console.log('humanscore be',humanScore);
            humanAddValue(1)
            computerAddValue(0)
        } else if((systemData===1 && dd===0) || (systemData===0 && dd===2) || (systemData===2 && dd===1)){
            console.log('system wins');
            computerAddValue(1)
            humanAddValue(0)
        } else{
            console.log('draw');
        }
    }

    return (
        <div>
            <Button style={{backgroundColor:'white'}} onClick={()=>handleClick(0,humanAddValue,computerAddValue)}><img src={rock} alt="rock" width="100px" /></Button>
            <Button style={{backgroundColor:'white',margin:'25px'}} onClick={()=>handleClick(1,humanAddValue,computerAddValue)}><img src={paper} alt="paper" width="80px" /></Button>
            <Button style={{backgroundColor:'white'}} onClick={()=>handleClick(2,humanAddValue,computerAddValue)}><img src={scissor} alt="scissor" width="80px" /></Button>
            
        </div>
       
    )
}

const mapDispatchToProps={
    humanAddValue,
    computerAddValue
}

export default connect(null,mapDispatchToProps)(ImageCard)
