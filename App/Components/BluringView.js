import React, { Component } from 'react';
import { Platform, InteractionManager, findNodeHandle, View } from 'react-native';
import { BlurView } from 'react-native-blur';
import PropTypes from 'prop-types';

export default class BluringView extends Component
{
    static propTypes =  {
                            style: PropTypes.any,
                        }

    constructor(props)
    {
        super(props);
        this.state =    {
                            viewRef: null,
                        };
        this.backgroundWrapper = null;
        this._isMounted = false;
    }

    componentDidMount()
    {
        this._isMounted = true;
    }

    componentWillUnmount()
    {
        this._isMounted = false;
    }

    updateBackGround()
    {
        setTimeout(() =>
        {
            if (this._isMounted)
            {
                this.setState({ viewRef: findNodeHandle(this.backgroundWrapper),
            });
        }
        }, 20);
    }


    render()
    {
        const viewStyle = this.props.style;

        if (Platform.OS !== 'ios')
{
            return (
              <View style={[viewStyle, {
                    backgroundColor: 'black',
                    opacity        : 0.7,
                }]}
              />
            );
        }

        return (
          <View style={viewStyle}>
            <View
              ref={(input) => { this.backgroundWrapper = input; }}
              style={viewStyle}
              onLayout={
                        Platform.select({
                            ios    : () => this.setState({ viewRef: findNodeHandle(this.backgroundWrapper) }),
                            android: () => InteractionManager.runAfterInteractions(this.updateBackGround()),
                        })
                    }
            />

            {(this.state.viewRef || Platform.OS === 'ios') &&
            <BlurView
              style={viewStyle}
              viewRef={this.state.viewRef}
              blurType="dark"
              {...Platform.select({
                        ios: {
                            blurAmount: 3,
                            blurType  : 'dark',
                        },
                        android: {
                            blurAmount      : 31,
                            blurRadius      : 9,
                            downsampleFactor: 9,
                        },
                    })}
            />}
          </View>);
    }
}
