import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.code = btoa("Hello darkness my old frined");
  }

  async clickOnMe(code) {
    let shareData = {
      title: 'Send me money',
      text: code,
      url: `url/?${code}`,
    }

    try {
      await navigator.share(shareData)
      alert('DONE');
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>PWA test</h1>
        <div>{this.code}</div>
        <button onClick={(e) => this.clickOnMe(this.code)}>Share My Code</button>
      </div>
    );
  }
}


export default App;
