import React from 'react'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      message:'hello'
    }
  }
  render(){
    const {message} = this.state
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }
}
export default App