import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
  } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics, Fonts } from 'Themes';
import SearchBar from 'react-native-searchbar';
import StarRating from 'react-native-star-rating';


const ITEMS = [
  {
    postCode: 75400,
    type    : 'Gym',
    name    : 'Forest Hill 5',
    rate    : 5,
  },
  {
    postCode: 93750,
    type    : 'Gym',
    name    : 'Basic Fit 5',
    rate    : 1,
  },
  {
    postCode: 94010,
    type    : 'Studio',
    name    : 'Neoness 12',
    rate    : 2,
  },
  {
    postCode: 94900,
    type    : 'Gym',
    name    : 'Neoness 3',
    rate    : 5,
  },
  {
    postCode: 93550,
    type    : 'Gym',
    name    : 'Basic Fit 6',
    rate    : 1,
  },
  {
    postCode: 75012,
    type    : 'Studio',
    name    : 'Neoness 9',
    rate    : 2,
  },
  {
    postCode: 93000,
    type    : 'Gym',
    name    : 'Forest Hill 10',
    rate    : 3,
  },
  {
    postCode: 93200,
    type    : 'Gym',
    name    : 'Neoness 1',
    rate    : 2,
  },
  {
    postCode: 93300,
    type    : 'Gym',
    name    : 'Basic Fit 1',
    rate    : 4,
  },
  {
    postCode: 75019,
    type    : 'Studio',
    name    : 'Neoness 2',
    rate    : 5,
  },
  {
    postCode: 93500,
    type    : 'Gym',
    name    : 'Neoness 3',
    rate    : 2,
  },
  {
    postCode: 75011,
    type    : 'Studio',
    name    : 'Basic Fit 2',
    rate    : 1,
  },
  {
    postCode: 75014,
    type    : 'Gym',
    name    : 'forest Hill 1',
    rate    : 5,
  },
  {
    postCode: 93100,
    type    : 'Studio',
    name    : 'Neoness 1',
    rate    : 2,
  },
];

export default class Search extends Component
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
      loading: false,
      results: [],
    };
    this.searchBar = null;
  }

  handleResults = (results) =>
  {
    this.setState({ results });
  }

  renderResult = (result, index) =>
 (
   <View style={styles.resultView} key={index}>
     <Text style={styles.text}>
       {result.name}
     </Text>
     <Text>
        type: {result.type}
     </Text>
     <Text>
        code postal: {result.postCode}
     </Text>
     <View style={styles.rating}>
       <StarRating
         disabled
         maxStars={5}
         starColor={Colors.staring}
         emptyStarColor={Colors.staring}
         rating={result.rate}
         starSize={20}
       />
     </View>
   </View>
    )

  render()
  {
    return (
      <View style={{ flex: 1 }} >
        <SearchBar
          ref={(ref) => (this.searchBar = ref)}
          data={ITEMS}
          placeholder={'noms, code postal, type et note'}
          heightAdjust={0}
          handleResults={this.handleResults}
          showOnLoad
          onBack={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <ScrollView style={styles.mainContainer}>
          {
            this.state.results.map((result, i) =>
            (
              this.renderResult(result, i)
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex     : 1,
    marginTop: 75,
  },
  text: {
    fontFamily: Fonts.type.globale,
    fontSize  : 20,
  },
  rating: {
    width: Metrics.screenWidth * 0.3,
  },
  resultView: {
    backgroundColor: 'white',
    borderRadius   : 10,
    padding        : 10,
    margin         : 10,
    shadowColor    : '#000000',
    shadowOffset   : {
      width : 0,
      height: 3,
    },
    shadowRadius : 5,
    shadowOpacity: 0.8,
  },
});

