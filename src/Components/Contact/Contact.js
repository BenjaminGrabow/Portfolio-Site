import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hideContact } from '../../store/actions';

const StyledFooter = styled.div`

.off {
  display: none;
}

.contact {
  background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));
}

`;

class Contact extends React.Component {
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

  closeContact = () => {
    this.setState({
      contact: false,
    });
  };

  render() { 
    return ( 
      <StyledFooter>
<div className={this.props.contact ? 'contact' : 'off'}>
<i 
onClick={this.props.hideContact}
className="fa fa-times" />
  <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
  <div>
  <input name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name"/>
  <input name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email"/>
  </div>
  <input name="message" value={this.state.message} onChange={this.changeHandler} placeholder="Message"/>
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
 
export default connect(mapStateToProps, { hideContact })(Contact);