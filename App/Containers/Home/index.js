import React, { Component } from 'react';
import {
View,
ScrollView,
Text,
Animated,
Image,
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

// import DrawerButton from 'Containers/Drawer/DrawerButton';
import Tchat from 'Containers/Tchat';
import Header from 'Containers/Header';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import { Colors } from 'Themes';
import styles from './style';

export default class Home extends Component
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
          scrollAnim={this.state.scrollAnim}
          navigation={this.props.navigation}
        />
        <Tchat  navigation={this.props.navigation} >
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
                source={{ uri: 'https://www.gymlib.com/img/home/header-large.jpg' }}
                title="Le Sport comme je veux !"
                style={{ backgroundColor: 'transparent' }}
              />
              <CardTitle
                title="+ de 1 800 salles"
                subtitle="Des salles de sport partenaires partout en France. Grandes enseignes et studios."
              />
              <CardTitle
                title="Sans engagement"
                subtitle="De 1 entrée à 3 mois, vos accès sont à la carte. Sans aucun engagement."
              />
              <CardTitle
                title="+ de 1 800 salles"
                subtitle="Les meilleurs tarifs négociés, toujours. Sans frais d'inscription."
              />
              <CardAction seperator inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Voir"
                  color={Colors.action}
                />
              </CardAction>
            </Card>

            <Card>
              <CardTitle title="ça bouge près de chez vous" subtitle="Notre sélection de salles les plus proches de vos envies." />

              <CardTitle
                title="Appollo Sporting Club Paris 19"
                avatarSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4MH1gwkp3oZpoDuOFLaKTjLJDZnBAhpXmByq2P8V5KnDmJ2m0w' }}
                subtitle="Situé dans le 19ème arrondissement, venez découvrir la nouvelle salle Apollo Sporting Club !"
              />
              <CardTitle
                title="Fitness Park Bercy 2"
                avatarSource={{ uri: 'http://fitnesspark.fr/wp-content/uploads/2016/05/trouver-club.jpg' }}
                subtitle="Le Fitness Park Bercy 2 vous offre le plaisir du sport à prix mini ! "
              />
              <CardTitle
                title="Magic Form Aubervilliers"
                avatarSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nuAVAhcQmgBhVS5Y2iireu2oXhEHVc5kezJ4Nc51VE_vqpyfCA' }}
                subtitle="Le sport pour tous, c'est le leitmotiv de Magic Form Aubervilliers !"
              />
            </Card>

            <Card>

              <CardTitle
                title="Rejoignez le mouvement."
                subtitle="Notre communauté et les médias prennent la parole."
              />

              <Swiper
                style={styles.swiper}
                showsButtons={false}
                autoplay
                autoplayTimeout={3}
              >
                <View>
                  <CardTitle
                    title="André Da Silva @DSAndre_"
                    avatarSource={{ uri: 'https://pbs.twimg.com/profile_images/913306420304588800/szOA3KVj_bigger.jpg' }}
                    subtitle="Et j'ai trouvé un site pas mal : http://gymlib.com  @Gymlib ! Ça permet de prendre des entrées à l'unité, et pas cher"
                  />
                </View>
                <View>
                  <CardTitle
                    title="pep'Sport @pepsport"
                    avatarSource={{ uri: 'https://www.gymlib.com/img/home/header-large.jpg' }}
                    subtitle="Bravo à @Gymlib et à toutes ces #startups qui œuvrent pour l'innovation ! #FrenchTech https://twitter.com/Gymlib/status/872070359872307200 …"
                  />
                </View>
              </Swiper>

            </Card>

          </ScrollView>
        </Tchat>

      </View>);
  }
}
