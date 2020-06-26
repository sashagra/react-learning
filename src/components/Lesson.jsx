import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Lesson extends Component {
  state = {
    counter: 0
  }

  static propTypes = {
    children: PropTypes.element,
  }

  static defaultProps = {
    children: null,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state;
    const { children } = this.props;

    return (
      <div>
        {React.cloneElement(children, {counter: this.state.counter})}
        <button onClick={this.handleClick}>Count</button>
        <div>{counter}</div>
      </div>
    )
  }
}

export default Lesson;