<<<<<<< HEAD
import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';
=======
import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import DrawerNavigation from './AppNavigation'
>>>>>>> master


// here is our redux-aware our smart component
function ReduxNavigation(props) 
{
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
<<<<<<< HEAD
    state: nav,
  });

=======
    state: nav
  })
  
>>>>>>> master

  return <AppNavigation navigation={navigation} />;
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
