import React from 'react';
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'ciao',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }
  checkPass(e) {
    const password = e.target.value;
    password === this.state.password ? document.querySelector('p').innerHTML = 'ok' : document.querySelector('p').innerHTML = 'ko';
  }

  render() {
    const login = (
      <form onSubmit={this.authorize}>
        <input onKeyUp={this.checkPass} type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );
    const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
        <p></p>
      </div>
    );
  }
}

export default Contact;