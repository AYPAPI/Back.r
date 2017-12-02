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
import { getUser } from '../router/api.js';



import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    moneyGreen,
    materialsOrange,
    knowledgePurple,
    manpowerRed } from '../assets/styles/colors.js';

var firstCardPhoto = require('../assets/images/shuttle-01.jpg');
var secondCardPhoto = require('../assets/images/ceo_photo.jpg');

export const window = Dimensions.get('window');
var cardHeight = window.height - 140;

const styles = {
    headerIcon: {
        color: lightGrey,
        margin: 15,
        fontSize: 30,
    },
    titleMaker: {
        color: '#75C9F9',
        margin: 15,
        fontSize: 40
    },
    titleBacker: {
        color: '#C753E0',
        margin: 15,
        fontSize: 40
    },
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
        zIndex: 1,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imagePropsStyle:{
        borderRadius: 8,
    },
    imageWrapper:{
        height: cardHeight - 135,
    },
    cardContainer:{
        borderRadius: 10,
        height: cardHeight,
        borderWidth: 2,
        borderColor: lightGrey,
    },
    cardImageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    titleText: {
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
        marginTop: 420,
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
        backgroundColor: 'white',
    },
};


class ExploreScreen extends Component {


  onUserPress(user) {
    const { name, email, isMaker } = this.props.navigation.state.params


    this.props.navigation.navigate("UserProfile", {user: user, name: name, email: email, isMaker: isMaker});
  }


    static navigationOptions = ({ navigation }) => {
        const { name, email, isMaker } = navigation.state.params;
        return {
            headerTitle: (
                <Icon
                name='lightbulb-outline'
                type='material-community'
                iconStyle={styles.titleMaker}
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
            headerLeft: (
                <Icon
                name='face'
                type='material-community'
                iconStyle={styles.headerIcon}
                onPress={ () => navigation.navigate("MyProfile", {name: name, email: email, isMaker: isMaker}) }
                />
            ),
        };
    };

    render() {

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
                >
                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={firstCardPhoto}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.titleText}
                                onPress={ () => alert('go to this user!')}
                                activeOpacity={0.5}>
                                Biology/Comp Sci Student
                            </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    David Owens
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#59C129'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#EF2074'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#FC8A2D'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#57C4DD'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                            Short bio goes here! This is where the maker or backer gives a quick description of their project or their skills. This should be just a few sentences. Heres one more sentence!
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={secondCardPhoto}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={styles.titleText}>
                                    Important CEO Guy
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    John Doe
                                </Text>
                                <View style={styles.iconsContainer}>
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#59C129'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                    <Icon iconStyle={styles.iconStyle}
                                    name='circle-o'
                                    type='font-awesome'
                                    color='#EF2074'
                                    size={15}
                                    onPress={() => alert("Money")} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text style={styles.bioText}>
                                Hi, Im important CEO guy, Im here because I have a lot of money and I want to spend it on you. Thats right, I said you. Pls swipe right on me so I can make you a millionare.
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
