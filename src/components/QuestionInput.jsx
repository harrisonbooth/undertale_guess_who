import React from 'react'

class QuestionInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({currentKey: "name"})
  }

  handleKeySelect(event) {
    const newKey = event.target.value
    this.setState({currentKey: newKey})
  }

  capitalise(string) {
    let firstChar = string.charAt(0).toUpperCase()
    let restOfString = string.slice(1)
    return firstChar + restOfString
  }

  render() {
    const keySet = Object.keys(this.props.people[0])
    keySet.splice(keySet.length - 1, 1);
    const keyNodes = keySet.map((key, index) => {
      return <option key={index} value={key}>{this.capitalise(key)}:</option>
    })

    const currentKey = this.state.currentKey

    const valueSet = this.props.people.map((person) => {
      return person[currentKey]
    })

    const valueSetUniq = [...new Set(valueSet)];

    const valueNodes = valueSetUniq.map((value, index) => {
      return <option key={index} value={value}>{this.capitalise(value)}?</option>
    })

    return (
      <div id="question-input">
        <select id="key-select" onChange={this.handleKeySelect.bind(this)}>
          {keyNodes}
        </select>
        <select id="value-select">{valueNodes}</select>
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default QuestionInput
