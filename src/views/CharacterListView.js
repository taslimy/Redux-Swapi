import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
// import actions
import { getChar } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    console.log(this.props.fetching);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
       <Loader
         type="Ball-Triangle"
         color="#00BFFF"
         height="90"
         width="60"
       />;
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

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { getChar }
)(CharacterListView);
