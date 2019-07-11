import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledFooter = styled.div`

.button {
  font-family: "eurostile",sans-serif;
  font-size: 1rem;
  text-decoration: none;
  border: .1rem solid white;
  border-radius: .5rem;
  height: 3.5rem;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  transition: .6s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
}

`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  

  render() { 
    return ( 
      <StyledFooter>
<div 
className={!this.props.contact ? "button" : "off"}
onClick={this.showContact}>
  Contact Me
  </div>
      </StyledFooter>
     );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact,
  }
};
 
export default connect(mapStateToProps)(Footer);