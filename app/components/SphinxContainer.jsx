import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sphinx from './Sphinx';
import Riddle from './Riddle';
import {addImage,updateGuessed} from '../reducers/riddle';
import ChatBox from './ChatBox';
import PlayersList from './PlayersList';

const SphinxContainer = props => {
  return(
    <div className="home">
      <div className="chat">
        <ChatBox
        />
      </div>
      <div className="playerslist">
        <PlayersList />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentRiddle: state.riddle.currentRiddle,
    solution: state.riddle.solution,
    guessed: state.riddle.guessed,
    guessedCorrectly: state.riddle.guessedCorrectly,
    images: state.riddle.images,
    feedback: state.riddle.feedback
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    dispatchAddImage (image) {
      return dispatch(addImage(image));
    },
    dispatchUpdateGuessed (tags) {
      return dispatch(updateGuessed(tags));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SphinxContainer);

