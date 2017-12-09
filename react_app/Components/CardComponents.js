import React, { Component } from 'react';
import {
    Button,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
import Swiper from 'react-native-swiper-animated'
import {Dimensions} from 'react-native';
import { getUser, getPotentialMatches, getBacker, getMaker } from '../router/api.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    moneyGreen,
    materialsOrange,
    knowledgePurple,
    manpowerRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';

export const window = Dimensions.get('window');
var cardHeight = window.height - 140;

var firstCardPhoto = require('../assets/images/shuttle-01.jpg');

export class CustomCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
          <Card style={styles.card}
              containerStyle={styles.cardContainer}
              image={firstCardPhoto}
              imageProps={styles.imagePropsStyle}
              imageWrapperStyle={styles.imageWrapper}
              imageStyle={styles.imageWrapper}>
              <View style={styles.descriptionContainer}>
                  <Text style={[styles.backerTitle, this.props.isMaker && styles.makerTitle]}
                      activeOpacity={0.5}>
                      {this.props.shortbio}
                  </Text>
                  <View style={styles.subTitleContainer}>
                      <Text style={styles.subtitleText}>
                          {this.props.name}
                      </Text>
                      <View style={styles.iconsContainer}>
                      { this.props.icons[0] && (
                          <Icon iconStyle={styles.iconStyle}
                          name='circle-o'
                          type='font-awesome'
                          color='#59C129'
                          size={15}
                          onPress={() => alert("Money")} />
                        )}
                      { this.props.icons[1] && (
                        <Icon iconStyle={styles.iconStyle}
                        name='circle-o'
                        type='font-awesome'
                        color='#EF2074'
                        size={15}
                        onPress={() => alert("Money")} />
                        )}
                        { this.props.icons[2] && (
                          <Icon iconStyle={styles.iconStyle}
                          name='circle-o'
                          type='font-awesome'
                          color='#FC8A2D'
                          size={15}
                          onPress={() => alert("Money")} />
                          )}
                        { this.props.icons[3] && (
                          <Icon iconStyle={styles.iconStyle}
                          name='circle-o'
                          type='font-awesome'
                          color='#57C4DD'
                          size={15}
                          onPress={() => alert("Money")} />
                          )}

                      </View>
                  </View>
              </View>

              <View style={styles.bioContainer}>
                  <Text style={styles.bioText}>
                    {this.props.longbio}
                  </Text>
              </View>
          </Card>
    )
  }
}

export class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

const styles = {
card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backGroundWhite,
},
imagePropsStyle:{
    borderRadius: 8,
    flexDirection: 'column',
},
imageWrapper:{
    height: cardHeight - 10,
},
cardContainer:{
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightGrey,
},
cardImageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
},
titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
},
makerTitle: {
    fontSize: 18,
    color: makerPurple,
    fontFamily: 'gotham-rounded',
},
backerTitle: {
    fontSize: 18,
    color: backerBlue,
    fontFamily: 'gotham-rounded',
},
subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
},
subtitleText: {
    fontSize: 14,
    fontFamily:'gotham-rounded'
},
iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
},
iconStyle: {
    marginRight: 3,
},
bioContainer: {
    marginTop: 3,
},
preferenceButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 8,
    zIndex: 0,
},
preferenceButtonsBorder: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 40/2,
    borderColor: lightGrey,
    backgroundColor: backGroundWhite,
},
};
