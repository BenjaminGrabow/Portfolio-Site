import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`

.off {
  display: none;
}

.contact {
  background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));
}

`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      contact: false,
     }
  }
  showContact = () => {
    this.setState({
      contact: true,
    });
  };

  render() { 
    return ( 
      <StyledFooter>
<div className={this.state.contact ? 'off' : 'contact'}>
<i class="fa fa-times"></i>
  <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
  <div>
  <input name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name"/>
  <input name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email"/>
  </div>
  <input name="message" value={this.state.message} onChange={this.changeHandler} placeholder="Message"/>
</div>
<button onClick={this.showContact}>Contact Me</button>
      </StyledFooter>
     );
  }
}
 
export default Footer;