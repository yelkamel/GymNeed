import React from 'react';
import PropTypes from 'prop-types';

import ImageManager from 'Components/ImageManager';
import Notification from 'Components/Notification';
import { Images } from 'Themes';
import { TouchableOpacity, ScrollView, Switch, Text, View } from 'react-native';
import FbLogin from 'Components/FbLogin';
import FbProfil from 'Components/FbProfil';
import styles from './style';

export default class Drawer extends React.Component
{
  static propTypes = {
    navigation: PropTypes.any,
  }

 static defaultProps = {
    navigation: null,
 }

 constructor(props)
 {
   super(props);
   this.state = {
    hasNotification: true,
   };
 }

  onSwicthChangeValue = (value) =>
  {
    Notification.setGlobalNotification();
    this.setState({ hasNotification: value });
  }

  renderButton(type, image, label)
  {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(type)}
      >
        <View style={styles.drawerButtonView} >
          <ImageManager
            sourceFile={image}
            initWidth={20}
            initHeight={20}
          />
          <Text style={styles.drawerButtonText}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator = () =>
  (
    <View style={styles.drawerSeparatorView}>
      <View style={styles.drawerSeparator} />
    </View>
  )

  renderSwitch = (label) =>
  (
    <View style={styles.logoDrawerView}>
      <View style={styles.switchView}>
        <Text style={styles.switchLabel}>
          {label}
        </Text>
        <Switch
          onValueChange={this.onSwicthChangeValue}
          value={this.state.hasNotification}
        />
      </View>
    </View>
    )

  render()
  {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoDrawerView}>
          <Text style={styles.text}> GymNeed </Text>
          <FbProfil />
        </View>
        {this.renderSeparator()}
        {this.renderButton('Home', Images.BM_Icon_Dashboard, 'Accueil')}
        {this.renderButton('Search', Images.BM_Icon_Timeshifting, 'Recherche')}
        {this.renderSeparator()}

        {this.renderButton('CorporateProgram', Images.BM_Icon_MOTD, "Programme d'entreprise")}
        {this.renderButton('Help', Images.BM_Icon_Tuto, 'Aide')}
        {this.renderSeparator()}

        <View style={styles.switchContainer}>
          {this.renderSwitch('Notification')}
          <View style={{ marginTop: 50 }}>
            <FbLogin />
          </View>
        </View>

      </ScrollView>
    );
  }
}
