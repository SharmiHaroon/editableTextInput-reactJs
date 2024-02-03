import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {text: '', isSaved: false}

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {isSaved, text} = this.state

    return (
      <div className="main-con">
        <div className="c-con">
          <h1 className="header">Editable Text Input</h1>
          <div className="inp-con">
            {isSaved ? (
              <div className="p-con">
                <p className="p">{text}</p>
                <button type="button" className="but" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={text}
                  className="inp"
                  onChange={this.onChangeInput}
                />
                <button className="but" type="button" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
