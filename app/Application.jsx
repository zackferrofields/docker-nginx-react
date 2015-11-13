import React, {createClass, PropTypes} from 'react';

const Header = ({title}) => <h1>{title}</h1>;

export default createClass({
  propTypes: {
    state: PropTypes.object.isRequired
  },
  render() {
    return <Header {...this.props.state}/>;
  }
});
