import React, { Component } from 'react';
import {
    Button,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';
import { Icon, Text, Card } from 'react-native-elements';
import Swiper from 'react-native-swiper-animated';
import {Dimensions} from 'react-native';
import { getUser,
  getPotentialMatches,
  getBacker,
  getMaker,
postSwipe } from '../router/api.js';
import SwipeCards from 'react-native-swipe-cards';
import { CustomCard, NoMoreCards } from '../Components/CardComponents.js'

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

var firstCardPhoto = require('../assets/images/shuttle-01.jpg');
var secondCardPhoto = require('../assets/images/ceo_photo.jpg');

export const window = Dimensions.get('window');
var cardHeight = window.height - 140;


//Methods for getting data for each card in cardStack.
const getUserForEmail = function(email) {
  console.log("inside getUserForEmail " + email)
};

const getMakerBackerForEmail = function(email, isMaker) {
  if(isMaker) {
    getMaker(email)
    .then((data) => {
      return data
    });
  } else {
    getBacker(email)
    .then((data) => {
      return data
    });
  }
}

const styles = {
    headerIcon: {
      color: lightGrey,
      margin: 15,
      fontSize: headerIconSize,
    },
    makerIcon: {
        color: makerPurple,
        margin: 15,
        fontSize: headerIconSize,
    },
    backerIcon: {
        color: backerBlue,
        margin: 15,
        fontSize: headerIconSize,
    },
    wrapper: {
        backgroundColor: backGroundWhite,
        flex: 1,
        zIndex: 1,
    },
    container: {
        backgroundColor: backGroundWhite,
        flex: 1,
    },
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
        height: cardHeight - 140,
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


class ExploreScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailList: [],
      name: "",
      cardStack: [],
      loadingCards: true,
      currentIndexInStack: 0
    }
  }

  onUserPress(userEmail,userName, userShortBio, userLongBio) {
    const { name, email, isMaker } = this.props.navigation.state.params
    var userIsMaker = !isMaker

    this.props.navigation.navigate("UserProfile", {userEmail: userEmail, userName:this.state.name, userIsMaker: userIsMaker, name: name, email: email, isMaker: isMaker, shortbio: userShortBio, longbio: userLongBio});
  }

  async createCardStack() {
    const { name, email, isMaker } = this.props.navigation.state.params

    cardStack = []

    var shortbio = ""
    var longbio = ""
    var userName = ""
    var icons = []
    var cardIsMaker = !isMaker
    var totalCount = this.state.emailList.length

    for(var i = 0; i < this.state.emailList.length; i++) {
      //Get data for current card in stack.
      getUser(this.state.emailList[i])
      .then((data) => {
        shortbio = data.shortbio
        userName = data.name
        if(isMaker) {
          getBacker(data.email)
          .then((data) => {
            longbio = data.longbio
            icons = data.icons
            if(icons === null) {
              totalCount = totalCount - 1
            } else {
            cardStack.push({name: userName, email: data.email, shortbio:
                              shortbio, longbio: longbio, icons: icons, isMaker: cardIsMaker})
            }
            if(cardStack.length === totalCount) {
              this.setState({"loadingCards": false})
              this.setState({"cardStack": cardStack})
              console.log(cardStack)

            }
          });
        } else {
          getMaker(data.email)
          .then((data) => {
            longbio = data.longbio
            icons = data.icons
            if(icons === null) {
              totalCount = totalCount - 1
            } else {
              cardStack.push({name: userName, email: data.email, shortbio:
                              shortbio, longbio: longbio, icons: icons, isMaker: cardIsMaker})
            }
            if(cardStack.length === totalCount) {
              this.setState({"loadingCards": false})
              this.setState({"cardStack": cardStack})
              console.log(cardStack)

            }
          });
        }
      })
    }
  }

  async componentDidMount() {
    const { email, name, isMaker } = this.props.navigation.state.params
    //If user logged in via email and password, retrieve the name.

    if(name === "" ) {
      this.setState({"name": "Edit your name in Edit Profile!"})
    } else {
      this.setState({"name": name})
    }

    await getPotentialMatches(email, isMaker)
    .then((data) => {
      console.log(data)
      this.setState({"emailList": data})
      this.createCardStack()
    })
  }

    static navigationOptions = ({ navigation }) => {
        const { name, email, isMaker } = navigation.state.params;
        console.log("inside explore " + email)

        return {
            headerLeft: (
                <Icon
                name='face'
                type='material-community'
                iconStyle={styles.headerIcon}
                onPress={ () => navigation.navigate("MyProfile", {name: name, email: email, isMaker: isMaker}) }
                />
            ),
            headerTitle: (
                <Icon
                name='lightbulb-outline'
                type='material-community'
                iconStyle = {[styles.backerIcon, isMaker && styles.makerIcon]}
                />
            ),
            headerRight: (
                <Icon
                name='message-text-outline'
                type='material-community'
                iconStyle={styles.headerIcon}
                onPress={ () => navigation.navigate("Matches", {name: name, email: email, isMaker: isMaker}) }
                />
            ),
        };
    };

    //Methods for handling card swiping.
    handleSwipe (bool) {
      const { name, email, isMaker } = this.props.navigation.state.params;
      const card = this.state.cardStack[this.state.currentIndexInStack]

      console.log(card)
      const newIndex = this.state.currentIndexInStack + 1
      this.setState({"currentIndexInStack": newIndex})

      postSwipe(email, card.email, isMaker, bool)
    }

    handleOnClick () {
      const { name, email, isMaker } = this.props.navigation.state.params;
      const card = this.state.cardStack[this.state.currentIndexInStack]

      this.onUserPress("UserProfile", {userEmail: card.email, userName: card.name, shortbio: card.shortbio, longbio: card.longbio})
    }

    render() {

      if (this.state.loadingCards) {
        return <Expo.AppLoading />;
      }

        const { navigate } = this.props.navigation;
        const { name, email, isMaker } = this.props.navigation.state.params;

        return (

            <View style={styles.container}>
            <Swiper
                  style={styles.wrapper}
                  showPagination={false}
                  smoothTransition
                  stack
                  dragDownToBack
                  dragY
                  onRightSwipe={() => this.handleSwipe(true)}
                  onLeftSwipe={() => this.handleSwipe(false)}
                  onClick={() => this.handleOnClick()}
              >
                            {this.state.cardStack.map((card, index) => (
                              <Card style={styles.card}
                                  containerStyle={styles.cardContainer}
                                  image={firstCardPhoto}
                                  imageProps={styles.imagePropsStyle}
                                  imageWrapperStyle={styles.imageWrapper}
                                  imageStyle={styles.imageWrapper}>
                                  <View style={styles.descriptionContainer}>
                                      <Text style={[styles.backerTitle, card.isMaker && styles.makerTitle]}
                                          onPress={ () => alert('go to this user!')}
                                          activeOpacity={0.5}>
                                          {card.shortbio}
                                      </Text>
                                      <View style={styles.subTitleContainer}>
                                          <Text style={styles.subtitleText}>
                                              {card.name}
                                          </Text>
                                          <View style={styles.iconsContainer}>
                                          { card.icons[0] && (
                                              <Icon iconStyle={styles.iconStyle}
                                              name='circle-o'
                                              type='font-awesome'
                                              color='#59C129'
                                              size={15}
                                              onPress={() => alert("Money")} />
                                            )}
                                          { card.icons[1] && (
                                            <Icon iconStyle={styles.iconStyle}
                                            name='circle-o'
                                            type='font-awesome'
                                            color='#EF2074'
                                            size={15}
                                            onPress={() => alert("Money")} />
                                            )}
                                            { card.icons[2] && (
                                              <Icon iconStyle={styles.iconStyle}
                                              name='circle-o'
                                              type='font-awesome'
                                              color='#FC8A2D'
                                              size={15}
                                              onPress={() => alert("Money")} />
                                              )}
                                            { card.icons[3] && (
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
                                        {card.shortbio}
                                      </Text>
                                  </View>
                              </Card>
                            ))}

                      </Swiper>

                <View style={styles.preferenceButtonsContainer}>
                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='close'
                    type='material-community'
                    activeOpacity={0.5}
                    color= {noRed}
                    size={25}
                    onPress={() => alert("No!")}
                    />

                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='check'
                    type='material-community'
                    activeOpacity={0.5}
                    color={checkGreen}
                    size={25}
                    onPress={() => alert("Yes!")} />
                </View>
            </View>
        );
    }
}

export default ExploreScreen;
