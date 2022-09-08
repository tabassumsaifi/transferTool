import React, { Component } from 'react';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";


import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
// import 'sweetalert/dist/sweetalert.css';
// import '../../../../node_modules/sweetalert-react/'
import './alert.css'



class AsweetAlert extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        show: false,
        //  history : useHistory()

      };
    }
  
    componentDidMount() {
      window.addEventListener('popstate', this.hiddenAlert);
    }
  
    componentWillUnmount() {
      window.removeEventListener('popstate', this.hiddenAlert);
    }
  
    hiddenAlert = () => {
      this.setState({ show: false });
    };
  
    pushNextState = () => {
      window.history.pushState(null, 'next', 'nkjdfkj');
    };
  
    render() {
              // const history =  useHistory()

      return (
        <div>
          <button onClick={this.pushNextState}>Next Page</button>
          <button onClick={() => this.setState({ show: true })}>Alert</button>
          <SweetAlert
            show={this.state.show}
            title="Demo"
            text="SweetAlert in React"
            onConfirm={this.hiddenAlert}
          />
        </div>
      );
    }
  }
  
  
  export default AsweetAlert;