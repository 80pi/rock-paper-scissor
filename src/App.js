import ImageCard from './components/ImageCard'
import ScoreCard from './components/ScoreCard';
import styled from 'styled-components';

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
        <span style={{color:'red',backgroundColor:'black',marginRight:'720px'}}>computer</span>
        <span>user</span>
      <ScoreCard/>
      </div>
      <div style={ImageBox}>
      <ImageCard/>
      </div>
      </Container>
      
    </div>
  );
}

export default App;
