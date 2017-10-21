import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class TextAutoSized extends Component
{
  static propTypes = {
     children: PropTypes.any,
  }

  constructor(props)
{
    super(props);
    this.state = {
      size    : 0.5,
      complete: false,
    };
  }
/*
  setSize()
{
    const maxHeight = this.props.height;
    this.refs.field.measure((x, y, width, height, px, py) =>
    {
      if (maxHeight < height)
      {
        if (this.state.size == 0.5)
        {
          this.setState({ complete: true });
        }
        else
        {
          this.setState({ size: this.state.size -= 0.5, complete: true });
          this.setSize();
        }
      }
      else
      if (!this.state.complete)
        {
          this.setState({ size: this.state.size += 0.5 });
          this.setSize();
        }
    });
} */


  render()
{
    return (
      <Text
        style={this.props.style}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {this.props.children}
      </Text>
    );
  }
}

