import React, { Component } from 'react';
//import classNames from 'classnames/bind';
//import styles from './App.scss';
//import Button from './components/Button';
import StyledButton from './components/StyledButton';
//const cx = classNames.bind(styles);

//console.log(styles); // box:"src-App__box--1qndh"

class App extends Component {
  render() {
    /*
    const isBlue = true;
    return (
      <div className={cx('box',{
        blue : isBlue
      })}>
        <div className={cx('box-inside')}/>
      </div>
    );
    */
   return (
     /*
     <div>
      <Button>버튼</Button>
     </div>
     */
    <div>
      <StyledButton big>버튼</StyledButton>
    </div>
   )
  }
}

export default App;