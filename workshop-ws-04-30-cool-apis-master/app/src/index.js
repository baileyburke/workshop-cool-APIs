import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Recorder from './components/Recorder';


import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      audioText: 'click the microphone to record some audio!',
      audioBlob: null,
    };
  }

  handleLoading = () => {
    if (this.state.loading) {
      return <CircularProgress color="secondary" />;
    }
    return <Recorder microphoneStarted={this.microphoneStarted} sendAudioBlob={this.getAudioBlob} />;
  }

  sendRequest = () => {
    console.log('sending a request to IBM...');
  }

  microphoneStarted = () => {
    this.setState({
      audioText: 'listening...',
    });
  }

  getAudioBlob = (blob) => {
    this.setState({
      audioBlob: blob,
    });

    this.sendRequest();
  }


  render() {
    return (
      <div className="container">
        {this.handleLoading()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
