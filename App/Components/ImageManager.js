import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResponsiveImage from 'react-native-responsive-image';

export default class ImageManager extends Component
{
  static propTypes = {
     sourceUri : PropTypes.string,
     sourceFile: PropTypes.number,
     initHeight: PropTypes.number.isRequired,
     initWidth : PropTypes.number.isRequired,
     style     : PropTypes.object,
  }

  static defaultProps = {
    style     : null,
    sourceUri : null,
    sourceFile: null,
  }

  constructor(props)
{
    super(props);
    this.state = {
    };
  }


  render()
{
  if (this.props.sourceUri !== null)
    {
return (
  <ResponsiveImage
    initHeight={this.props.initHeight}
    initWidth={this.props.initWidth}
    style={this.props.style}
    source={{ uri: this.props.sourceUri }}
  />
    );
}

  return (
    <ResponsiveImage
      initHeight={this.props.initHeight}
      initWidth={this.props.initWidth}
      style={this.props.style}
      source={this.props.sourceFile}
    />
      );
  }
}

