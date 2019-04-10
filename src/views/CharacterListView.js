import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import {getCharacters} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return (<Loader type="ThreeDots" color="#somecolor" height={80} width={80} />)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
