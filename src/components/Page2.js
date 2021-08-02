import React from "react";
import { connect } from 'react-redux'; 
import btnRDogs from '../actions/dogs';
import btnPrevDogs from '../actions/prev';
import './Page2.css';

const Page2 = ({ urlImg, dogBreed, btnRefresh, btnPrev, prevImg }) => {

  return <div>

    <div className="wrapper">
      <div className="wrapper-small">
        <button type='button' onClick={ btnPrev }>
          Prev
        </button>
        <br></br>
        <img src={ prevImg } alt='' />
      </div>
      <div className="wrapper-small">
        <button type='button' onClick={ btnRefresh }>
          REFRESH
        </button>
        <div>{ dogBreed.split('/')[4] }</div>
      
    <br></br>
    <img src={ urlImg } alt='' />
    </div>
    </div>
    
  </div>
};

const mapStateToProps = (state) => {
  return { 
    dogBreed: state.dogBreed,
    urlImg: state.urlDog,
    prevImg: state.prevDog,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    btnRefresh: () => dispath(btnRDogs()),
    btnPrev: () => dispath(btnPrevDogs()),
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Page2);
