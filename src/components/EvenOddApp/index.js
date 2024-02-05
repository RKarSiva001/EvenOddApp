// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count, isEven} = this.state

    return (
      <div className="bg-container">
        <h1>Count {count}</h1>
        <p>Count is {count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}</p>
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
