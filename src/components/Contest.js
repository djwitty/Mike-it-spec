import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-description">
          {this.props.summary}
        </div>
        <div className="summary-responsibilities">
          {this.props.responsibilities}
        </div>
        <div className="summary-history">
          {this.props.history}
        </div>
        <div className="summary-expectations">
          {this.props.expectations}
        </div>
        {/* <div className="content-nav">
          <div className="home-link">
            Home text
          </div>
        </div> */}
      </div>
    );
  }
}

Contest.propTypes = {
  //summary: PropTypes.isRequired,
  //responsibilities: PropTypes.isRequired,
  //history: PropTypes.isRequired,
  //expectations: PropTypes.isRequired,
  //contestListClick: PropTypes.func.isRequired
};

export default Contest;
