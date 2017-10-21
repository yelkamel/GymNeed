import React, { Component } from 'react';
import {
View,
ScrollView,
Text,
Animated,
} from 'react-native';
import { Card, CardImage } from 'react-native-material-cards';

import Header from 'Containers/Header';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import styles from './style';

export default class Help extends Component
{
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static defaultProps = {
    navigation: null,
  }

  constructor(props)
  {
    super(props);
    this.state = {
      scrollAnim: new Animated.Value(0),
      loading   : false,
    };
  }

  componentWillMount()
  {

  }

  render()
  {
    if (this.state.loading === true)
      { return (<View />); }
    return (
      <View style={styles.mainContainer}>
        <Header
          title={'Aide'}
          scrollAnim={this.state.scrollAnim}
          navigation={this.props.navigation}
        />
        <ScrollView
          style={styles.scroll}
          onEndReachedThreshold={50}
          scrollRenderAheadDistance={10}
          scrollEventThrottle={16}
          onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
              )}
        >
          <Card>
            <CardImage
              source={{ uri: 'https://www.gymlib.com/img/home/manual.jpg' }}
              title="Mode d'emploi"
              subtitle="Se (re)mettre au sport n’a jamais été aussi simple."
              style={{ backgroundColor: 'transparent' }}
            />
            <Swiper
              style={styles.swiper}
              showsButtons={false}
              autoplay
            >
              <View style={styles.slide}>
                <Text style={styles.text}>1 - Recherchez une salle et une activité proches de vous.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.text}>2 - Sélectionnez le pass qui correspond à vos envies.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.text}>3 - Achetez exclusivement en ligne. L'effort c'est maintenant.</Text>
              </View>
            </Swiper>
          </Card>
        </ScrollView>

      </View>);
  }
}
