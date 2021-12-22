import React from 'react'
import { connect } from 'react-redux'

function ScoreCard({data}) {    
    const humanData=data.humanValue
    const computerData=data.computerValue
    return (
        <div>
             <div style={{float:'right'}}>{humanData}/10</div>
             <div style={{float:'left'}}>{computerData}/10</div>
        </div>
    )
}

const mapStateToProps=store=>{
    console.log('data in store be',store.allReducer);
    return{
        data:store.allReducer
    }
}

export default connect(mapStateToProps)(ScoreCard)
