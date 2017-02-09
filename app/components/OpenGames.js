import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

/* -----------------    COMPONENT     ------------------ */

const OpenGames = (props) => {
  return (
    <div className='splash'>
      <div className='landingTextBox ' >
        <div className='landingText'>
        <h1>Open Games</h1>
      {console.log(props)}
          {props.games.map((game, index) => {
            return (
              <Link to={`/game/${game.id}`} style={{color: 'white'} } key={index} >
                <h3> {game.name} </h3>
              </Link>
            )
          })}
          </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    games: state.game.games
  };
};

export default connect(mapStateToProps)(OpenGames);