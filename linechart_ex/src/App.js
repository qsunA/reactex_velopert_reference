import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios'
import Buttons from './components/Buttons';
import LineChart from './components/LineChart';

class App extends Component {
  state = {
    pair : 'BTCUSD',
    data : []
  }

  handleChangePair = (pair) => {
    this.setState({pair});
  }

  getData = async () => {
    const {pair} = this.state;
    try{
      const response = await axios.get(`https://api.bitfinex.com/v2/candles/trade:5m:t${pair}/hist?limit=288`);
      const data = response.data.map(
        (candle) =>({
          date: moment(candle[0]).format('LT'),
          value : candle[2]
        })
      ).reverse();
      this.setState({
        data
      });
    }catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.pair !== this.state.pair){
      this.getData();
    }
  }
  
  render(){
    return(
      <div className = "App">
        <Buttons onChangePair={this.handleChangePair} />
        {this.state.data.length>0 && <LineChart data={this.state.data} pair={this.state.pair}/>}
      </div>
    )
  }
}

export default App;
