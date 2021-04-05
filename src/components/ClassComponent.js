import React from 'react'

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { testState: false, start: 0 }
    this.componentRef = React.createRef()
    this.customMethod = this.customMethod.bind(this)

  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  customMethod() {
    // console.log('click', this.state.testState);
    const tmp = this.state.start == 0 ? 1 : 0
    this.setState({ testState: !this.state.testState, start: tmp })
  }

  render() {
    /* CODE JS */
    return (
      <React.Fragment>
        {/* HTML HERE */}
        <h2 onClick={() => { this.customMethod() }}><a>Click here</a></h2>
        <span>Hello {this.state.testState ? 'ACtion 1' : 'ACtion 2'}</span>
        <SubComponent start={this.state.start} />
      </React.Fragment>
    )
  }
}
export default ClassComponent

/* ------------- */

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.start
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    
    // console.log('aaaa', prevProps, this.props.start);
    
    if (prevProps.start !== this.props.start) {
      this.setState({ count: this.props.start });
    }
  }

  render() {

    return (
      <div className="" style={{ backgroundColor: '#fafafa' }} onClick={() => { this.setState({ count: this.state.count + 1 }); }}>
        <h2>Sub Component</h2>
        <h3>Sub count: {this.state.count}, Props Start: {this.props.start}</h3>
      </div>
    )
  }
}