import ImageCard from './components/ImageCard'
import ScoreCard from './components/ScoreCard';
import styled from 'styled-components';
import computerGif from './img/computer.gif';

const Container=styled.div`
width: 75%;
text-align: center;
margin: 100px 150px;
padding: 25px;
`
const ScoreBox={
  border: "5px solid red",
  margin: "100px 150px",
  padding: "25px"

}

const ImageBox={
  border: "5px solid red",
  margin: "100px 150px",
  padding: "25px"
}



function App() {
  return (
    <div>
      <Container>
      <div style={ScoreBox}>  
        <span style={{float:'left',display:'flex',left:'auto',fontFamily:'fantasy'}}><img style={{display:'flex',width:'70px',height:'30px'}} src={computerGif} alt="computer gif"/></span>
      <ScoreCard/>
        <span style={{float:'right',fontFamily:'fantasy'}}>user &nbsp;</span>
      </div>
      <div style={ImageBox}>
      <ImageCard/>
      </div>
      </Container>
      
    </div>
  );
}

export default App;
