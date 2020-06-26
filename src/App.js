import React, { Component } from 'react';
import Lesson from './components/Lesson';
import Counter from './components/Counter';
import Counditional from './components/Counditional';

class App extends Component {

  state = {
    activeTab: 1,
  }

  handleTab = e => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    })
  }

  render() {
    console.log(this.state)
    const { activeTab } = this.state
    return (
      <>
      <div>
        <Lesson>
          <Counter />
        </Lesson>
        <Counditional val={null} />
      </div>
      <div>
        <button data-name={1} onClick={this.handleTab}>Tab1</button>
        <button data-name={2} onClick={this.handleTab}>Tab2</button>
        <button data-name={3} onClick={this.handleTab}>Tab3</button>
        <h4>
          {`Active TAB is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </h4>
      </div>
      </>
    );
  }
}

export default App;
