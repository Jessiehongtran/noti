import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount(){
    if (!("Notification" in window)){
      console.log("This browser does not support desktop notification")
    } else {
      // console.log("Notifications are supported")
      Notification.requestPermission()
    }
  }

  showNotification(){
    new Notification('Hey')
  }

  render(){
    return (
      <div>
        <button onClick={this.showNotification}>
          Click to show notification
        </button>
      </div>
    )
  }
}

