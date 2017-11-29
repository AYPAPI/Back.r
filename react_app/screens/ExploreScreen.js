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
const { width } = Dimensions.get('window')

var backerBlue = '#57C4DD';
var lightGrey = '#BFBFBF';
var checkGreen = '#1DDB2F'
var noRed = '#E5456F'

const styles = {
    headerIcon: {
        color: '#999999',
        margin: 15,
        fontSize: 30
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
        borderRadius: 10,
    },
    imageWrapper:{
        height: 280,
    },
    cardContainer:{
        borderRadius: 10,
        height: 425,
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
        fontSize: 16,
        color: backerBlue,
    },
    subTitleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    subtitleText: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    iconsContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    iconStyle: {
        marginRight: 3,
    },
    bioContainer: {
        marginTop: 5,
    },
    preferenceButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 420,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
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
        this.props.navigation.navigate("UserProfile", {user: user, mainUser: this.props.navigation.state.params.user});
    }

    static navigationOptions = ({ navigation }) => {
        const { user } = navigation.state.params;
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
                onPress={ () => navigation.navigate("Matches", {user: user}) }
                />
            ),
            headerLeft: (
                <Icon
                name='face'
                type='material-community'
                iconStyle={styles.headerIcon}
                onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
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
                dragDownToBack
                dragY
                >
                    <Card style={styles.card}
                        containerStyle={styles.cardContainer}
                        image={require('../img/gary_mouse.png')}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={styles.titleText}>
                                    Computer Science Lecturer
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    Gary Gillespie
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
                        image={require('../img/gary_mouse.png')}
                        imageProps={styles.imagePropsStyle}
                        imageWrapperStyle={styles.imageWrapper}
                        imageStyle={styles.imageWrapper}>
                        <View style={styles.descriptionContainer}>
                                <Text style={styles.titleText}>
                                    Disney Land Entertainer
                                </Text>
                            <View style={styles.subTitleContainer}>
                                <Text style={styles.subtitleText}>
                                    Micky Mouse
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
                            Short bio goes here! This is where the maker or backer gives a quick description of their project or their skills. This should be just a few sentences. Heres one more sentence!
                            </Text>
                        </View>
                    </Card>
                </Swiper>

                <View style={styles.preferenceButtonsContainer}>
                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='close'
                    type='material-community'
                    color= {noRed}
                    size={25}
                    onPress={() => alert("No!")}
                    />
                    <Icon
                    containerStyle={styles.preferenceButtonsBorder}
                    name='check'
                    type='material-community'
                    color={checkGreen}
                    size={25}
                    onPress={() => alert("Yes!")} />
                </View>
            </View>
        );
    }
}

export default ExploreScreen;
