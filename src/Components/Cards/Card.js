import React from 'react';
import sytled from "styled-components";

const StyledCard = styled.div`

`;

const Card = (props) => {
  const {img, text} = props;

  return ( 
  <StyledCard>
    <div>
<img src={img} alt={text}/>
    </div>

    <div>
      <p>{text}</p>
    </div>
  </StyledCard> );
}
 
export default Card;