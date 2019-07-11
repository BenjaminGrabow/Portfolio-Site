import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hideContact } from '../../store/actions';

const StyledContact = styled.div`
text-align: center;

.off {
display: none;
}

.contact {
  background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));

top: 50%;
left: 50%;
position: fixed;
transform: translate(-50%, -50%);
width: 50%;
height: 50%;
border-radius: .5rem;
}

.close {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

i {
  font-size: 3rem;
  transition: .6s ease-in-out;

  &:hover{
    color: red;
  }
}

.name-mail {
  width: 100%;
  display: flex;
  justify-content: space-around;

  input {
    height: 2.5rem;
    width: 30%;
    border-radius: .5rem;
    font-size: 2rem;
  }
}

.message {
width: 100%;
display: flex;
justify-content: center;

input {
  margin-top: 2rem;
  height: 10rem;
  width: 80%;
  border-radius: .5rem;
  font-size: 2rem;
}
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
      <StyledContact>
        <div className={this.props.contact ? 'contact' : 'off'}>
          <div className="close">
            <i
            onClick={this.props.hideContact}
            className="fa fa-times" />
            </div>
          <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
          <div className="name-mail">
            <input name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name" />
            <input name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" />
          </div>
          <div 
          className="message">
          <input name="message" value={this.state.message} onChange={this.changeHandler} placeholder="Message" />
        </div>
        </div>
      </StyledContact>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact,
  }
};

export default connect(mapStateToProps, { hideContact })(Contact);