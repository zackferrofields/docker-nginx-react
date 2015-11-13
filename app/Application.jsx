import React, {createClass, PropTypes} from 'react';

export default createClass({
  propTypes: {
    state: PropTypes.object.isRequired
  },
  render() {
    return (
      <h1>{this.props.state.title}</h1>
    );
  }
});
