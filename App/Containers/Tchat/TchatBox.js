import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Metrics, Fonts } from 'Themes';
import BluringView from 'Components/BluringView';
import { GiftedChat } from 'react-native-gifted-chat';

export default class TchatBox extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      messages: [
        {
          _id      : 1,
          text     : 'Bonjour! Comment puis-je vous aider ? 😀',
          createdAt: new Date(),
          user     : {
            _id   : 2,
            name  : 'Support',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknuBtHIFaTYm8NJwej_nX2d6Ei7GOkpJPfTaLjkU3ffNWUShe',
          },
        },
      ],
    };
  }

  onSend(messages = [])
  {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    }

  render()
  {
    return (
      <View style={styles.mainModal}>
        <BluringView style={styles.absolute} />
        <View style={styles.tchatBox}>
          <View style={styles.header}>
            <View style={{ flex: 1, margin: 10 }}>
              <Text style={styles.text}>
                    Posez-moi vos questions
            </Text>
              <Text style={styles.text}>
                    Support absent
            </Text>
            </View>
            <TouchableOpacity onPress={this.props.closeTchatBox}>
              <Icon name="ios-close-circle" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{ width: Metrics.screenWidth - 100, height: Metrics.screenHeight - 200 }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={(messages) => this.onSend(messages)}
              user={{ _id: 1 }}
            />
          </View>
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
    header: {
       width          : Metrics.screenWidth - 100,
       height         : 80,
       backgroundColor: Colors.headerTchat,
       justifyContent : 'space-between',
       flexDirection  : 'row',
       borderRadius   : 10,
    },
    text: {
        color     : 'white',
        fontFamily: Fonts.type.global,
    },
    icon: {
        color   : 'white',
        fontSize: 25,
        margin  : 10,
    },
    absolute: {
        position: 'absolute',
        top     : -Metrics.screenHeight,
        left    : 0,
        right   : 0,
        bottom  : 0,
    },
    mainModal: {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center',
    },
    tchatBox: {
        alignItems     : 'center',
        justifyContent : 'flex-start',
        height         : Metrics.screenHeight - 100,
        width          : Metrics.screenWidth - 100,
        backgroundColor: 'white',
        borderRadius   : 10,
    },
});

