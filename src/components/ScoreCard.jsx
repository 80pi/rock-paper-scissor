import React from 'react'
import { connect } from 'react-redux'

function ScoreCard({data}) {    
    const humanData=data.humanValue
    const computerData=data.computerValue
    const result=data.result
    const name=data.name
    return (
        <div>
             <div style={{float:'right',fontSize:'20px',fontWeight:'bold'}}>{humanData}/10</div>
             <div style={{float:'center',fontFamily:'Cursive',fontSize:'24px',fontWeight:'bold',color:result==='User Win'?'blueviolet':'chocolate'}}>{result==='User Win'?name+" Win":result}</div>
             <div style={{float:'left',fontSize:'20px',fontWeight:'bold'}}>{computerData}/10</div>
        </div>
    )
}

const mapStateToProps=store=>{
    return{
        data:store.allReducer
    }
}

export default connect(mapStateToProps)(ScoreCard)
