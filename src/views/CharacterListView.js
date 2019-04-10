import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import {getCharacters} from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    console.log(this.props.error)
    return (
      <div>
        {this.props.isFetching && (
          <Loader type="ThreeDots" color="#somecolor" height={50} width={50} />
        )}
        {this.props.characters && (
          <CharacterList characters={this.props.characters} />
        )}
        {this.props.error && (
          alert(this.props.error)
        )}
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
