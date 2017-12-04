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
var khosla = require('../assets/images/khosla.jpg');
var eggers = require('../assets/images/eggers.png');
var cao = require('../assets/images/cao.jpg');
var bananaGary = require('../assets/images/bananaGary.jpg');
var tejas = require('../assets/images/tejas.jpg');
var ajeya = require('../assets/images/ajeya.jpg');
var christine = require('../assets/images/christine.jpg');



export const window = Dimensions.get('window');
var cardHeight = window.height - 140;


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

  onUserPress(user) {
    this.props.navigation.navigate("UserProfile", {user: user, mainUser: this.props.navigation.state.params.user});
  }
    static navigationOptions = ({ navigation }) => {
        const { user } = navigation.state.params;
        isMaker = navigation.state.params.isMaker;
        
        isMaker = true;

        return {
            headerLeft: (
                <Icon
                name='face'
                type='material-community'
                iconStyle={styles.headerIcon}
                onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
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
                onPress={ () => navigation.navigate("Matches", {user: user}) }
                />
            ),
        };
    };
    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Swiper
                style={styles.wrapper}
                showPagination={false}
                smoothTransition
                stack
                stackDepth={3}
                dragDownToBack
                dragY
                >
          
                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        
                        image={khosla}
                        
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                            <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}
                                onPress={ () => alert('go to this user!')}
                                activeOpacity={0.5}>
                                UCSD Chancellor
                            </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    Pradeep Khosla
                                </Text>
                                <View style={styles.iconsContainer}>
                                  
                                  <Icon iconStyle={styles.iconStyle}
                                      name='circle-o'
                                      type='font-awesome'
                                      color={knowledgePurple}
                                      size={15}
                                      onPress={() => alert("Knowledge")} />
                
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                            Setting fire to coffee carts, taking money from millennials, inspiring SPICY memes, taming the 'stache
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={eggers}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}>
                                    Thiccest Math Professor Around
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    John Eggers
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={knowledgePurple}
                                        size={15}
                                        onPress={() => alert("Knowledge")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={backerBlue}
                                        size={15}
                                        onPress={() => alert("Collaboration")} />
                                    <Icon iconStyle={styles.iconStyle}
                                      name='circle-o'
                                      type='font-awesome'
                                      color={manpowerRed}
                                      size={15}
                                      onPress={() => alert("Manpower")} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                                 Basic Calculus, losing a lot of weight and talking about it, mom jeans, personal training (body and mind)
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={cao}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}>
                                    Tall, Sweet Computer Scientist
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    Yingjun (Paul) Cao
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={knowledgePurple}
                                        size={15}
                                        onPress={() => alert("Knowledge")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={backerBlue}
                                        size={15}
                                        onPress={() => alert("Collaboration")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={moneyGreen}
                                        size={15}
                                        onPress={() => alert("Money")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={materialsOrange}
                                        size={15}
                                        onPress={() => alert("Materials")} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                                 Driving my kids around, Dr.Java, Null Pointer Exceptions, C/C++, HTML/CSS
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={bananaGary}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}>
                                    Computer Science Professor and Banana Enthusiast
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    Gary
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={backerBlue}
                                        size={15}
                                        onPress={() => alert("Collaboration")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={materialsOrange}
                                        size={15}
                                        onPress={() => alert("Materials")} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                                 Professionalism, growing banana trees, catching banana thieves, gradesource (h8ers gonna h8)
                            </Text>
                        </View>
                    </Card>


                       <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={firstCardPhoto}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}>
                                    Project Manager
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    David Owens
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={knowledgePurple}
                                        size={15}
                                        onPress={() => alert("Knowledge")} />
                                    <Icon iconStyle={styles.iconStyle}
                                        name='circle-o'
                                        type='font-awesome'
                                        color={backerBlue}
                                        size={15}
                                        onPress={() => alert("Collaboration")} />
                                    <Icon iconStyle={styles.iconStyle}
                                      name='circle-o'
                                      type='font-awesome'
                                      color={manpowerRed}
                                      size={15}
                                      onPress={() => alert("Manpower")} />
                                </View>
                            </View>
                        </View>


                         <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                                 I'm the best PM around.  Would love to collaborate and work on projects so long as I am in charge.
                            </Text>
                        </View>
                        </Card>


                        
                </Swiper>

                <View style={styles.preferenceButtonsContainer}>
                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='close'
                    type='material-community'
                    activeOpacity={0.5}
                    color= {noRed}
                    size={25}
                    onPress={() => forceLeftSwipe()}
                    />
                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='check'
                    type='material-community'
                    activeOpacity={0.5}
                    color={checkGreen}
                    size={25}
                    onPress={() => forceRightSwipe()} />
                </View>
            </View>

           
        );
    }
}

export default ExploreScreen;
