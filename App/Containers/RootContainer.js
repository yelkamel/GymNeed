import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from 'Themes';
import StartupActions from 'Redux/StartupRedux';
import Login from 'Containers/Login';
import ReduxNavigation from '../Navigation/ReduxNavigation';

class RootContainer extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      accessToken: null,
    };
  }

  render()
  {
    if (this.state.accessToken == null)
    {
      return (<Login
        setAccessToken={(accessToken) => this.setState({ accessToken })}
      />);
    }

    return (
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
