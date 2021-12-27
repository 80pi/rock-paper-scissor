import React,{useState} from 'react'
import ImageCard from '../components/ImageCard'
import ScoreCard from '../components/ScoreCard';
import styled from 'styled-components';
import {Button,Card} from 'react-bootstrap'
import computerGif from '../img/computer.gif';
import tileImage from '../img/tile image.jpg'
import './style.css';
import { connect } from 'react-redux'
import {reduxName,resetValue} from '../redux/action/actions'


const Container=styled.div`
width: 75%;
text-align: center;
margin: 100px 150px;
padding: 25px;
`

function HumanAndMachine({userNameFunction,resetFunction}) {
  const [name, setName]=useState('')
  const [disable, setDisable]=useState(false)
  const settingName=()=>{  
    if(name.length>3){  
    setDisable(prevCount=>!prevCount)
    userNameFunction(name)
    }else{
      alert('Enter ur name more than 3 characters')
    }
  }

    return (
        <div>
          {!disable && <div>
          <Card style={{ width: '20rem',marginLeft:'auto',marginRight:'auto',marginTop:'72px'}} bg='info'>
            <Card.Img variant="top" src={tileImage} />
            <Card.Body>
              <Card.Title style={{fontFamily:'cursive'}}>Enter to the game rock paper scissor</Card.Title>
              <Card.Text style={{fontFamily:'inherit'}}>
                Enter ur name more than 3 characters to enter into game mode <br />
                <input placeholder='Enter ur Name' disabled={disable} type="text" id="userName" value={name} onInput={e=>setName(e.target.value)} autoComplete='off' />&nbsp;
              </Card.Text>
              <Button as="input" type="submit" value="Submit" disabled={disable} onClick={()=>{settingName()}} />
            </Card.Body>
          </Card>
            {/* <h3 style={{fontFamily:'cursive'}}>Enter to the game rock paper scissor</h3>
            <input placeholder='Enter ur Name' disabled={disable} type="text" id="userName" value={name} onInput={e=>setName(e.target.value)} autoComplete='off' />&nbsp;
            <Button as="input" type="submit" value="Submit" disabled={disable} onClick={()=>{settingName()}} /> */}
          </div>}
            <Container>
          {disable && <div>
          <div className='drop-me'>  
            <span style={{float:'left',display:'flex',left:'auto',fontFamily:'monospace'}}><img style={{display:'flex',width:'70px',height:'30px'}} src={computerGif} alt="computer gif"/></span>
            <ScoreCard/>
            <span style={{float:'right',fontFamily:'fantasy'}}>{name===' '?'user':name} &nbsp;</span>
          </div>
          <div >
            <ImageCard/>
          </div>
          <br />
          <Button variant="primary" disabled={!disable} onClick={()=>{
            resetFunction({data:'0',result:'Start the game'})
            setDisable(prevCount=>!prevCount)
            setName('')
            }}>Reset</Button>
          </div>}
          
          </Container>
            
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    userNameFunction:(name)=>dispatch(reduxName(name)),
    resetFunction:(data)=>dispatch(resetValue(data))
  }
}

export default connect(null,mapDispatchToProps)(HumanAndMachine)
