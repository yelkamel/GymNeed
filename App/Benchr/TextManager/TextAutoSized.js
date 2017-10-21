import React, {Component, PropTypes} from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  NativeModules 
} from 'react-native'

export default class TextAutoSized extends Component {

  static propTypes = {
     children: React.PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      size: 0.5,
      complete: false,
    }
  }

  setSize() {
    const maxHeight = this.props.height 
    this.refs.field.measure((x, y, width, height, px, py) =>
    {
      if (maxHeight < height) 
      {
        if (this.state.size == 0.5) 
        {
          this.setState({complete: true});
        } 
        else 
        {
          this.setState({size: this.state.size -= 0.5, complete: true});
          this.setSize()
        }
      } 
      else 
      {
        if (!this.state.complete) 
        {
          this.setState({size: this.state.size += 0.5})
          this.setSize()
        }
      }
    })
  }
  componentDidMount() {
    //this.setSize()
  }

  render() {
    return (
      <Text
        style={this.props.style}
        adjustsFontSizeToFit={true}
      >
        {this.props.children}
      </Text>
    )
  }
}


