import React, { Component } from 'react';
import {
    Button,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Swiper from 'react-native-swiper-animated'
import {Dimensions} from 'react-native';
import { getUser, getPotentialMatches, getBacker, getMaker } from '../router/api.js';
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
      loadingCards: true
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
            cardStack.push({name: userName, email: data.email, shortbio:
                              shortbio, longbio: longbio, icons: icons, isMaker: cardIsMaker})
            if(cardStack.length === this.state.emailList.length) {
              this.setState({"loadingCards": false})
              this.setState({"cardStack": cardStack})
            }
          });
        } else {
          getMaker(data.email)
          .then((data) => {
            longbio = data.longbio
            icons = data.icons
            cardStack.push({name: userName, email: data.email, shortbio:
                              shortbio, longbio: longbio, icons: icons, isMaker: cardIsMaker})
            if(cardStack.length === this.state.emailList.length) {
              this.setState({"loadingCards": false})
              this.setState({"cardStack": cardStack})

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
    handleYup (card) {
      //HANDLE MATCHING
    }
    handleNope (card) {
      //Add to swiped on.
      console.log(`Nope for ${card.text}`)
    }
    handleMaybe (card) {
      //Show user profile.
      this.onUserPress(card.email, card.name, card.shortbio, card.longbio)
    }


    render() {

      if (this.state.loadingCards) {
        return <Expo.AppLoading />;
      }

        const { navigate } = this.props.navigation;
        const { name, email, isMaker } = this.props.navigation.state.params;

        return (

            <View style={styles.container}>

            <SwipeCards
              cards={this.state.cardStack}
              loop={false}

              renderCard={(cardData) => <CustomCard {...cardData} />}
              renderNoMoreCards={() => <NoMoreCards />}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              handleMaybe={this.handleMaybe}
              hasMaybeAction
              />

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
