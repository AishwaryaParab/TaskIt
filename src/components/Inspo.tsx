import React from 'react';
import quote from '../images/quote.png';
import vector from '../images/vector.jpg';
import "./Inspo.css";

interface Props {
  dailyQuote: string
}

const Inspo = ({dailyQuote}: Props) => {
  return (
    <div className="inspo">
        <div className="quote">
            <img src={quote}></img>
            <p>{dailyQuote}</p>
            {/* <p>If you accept the expectations of others, especially negative ones, then you never will change the outcome.</p> */}
        </div>

        <div className="vector">
            <img src={vector}></img>
        </div>
    </div>
  )
}

export default Inspo