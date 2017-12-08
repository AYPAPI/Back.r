import React, { Component } from 'react';
import { Text,
    Button,
    Image,
    View,
    ScrollView,
    StyleSheet,
    Card } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {getBacker, getMaker, getUser} from '../router/api.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';

var profilePhoto = require('../assets/images/shuttle-01.jpg');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const styles = {
    headerIcon: {
      color: lightGrey,
      margin: 15,
      fontSize: headerIconSize,
    },
  container: {
      flexDirection: 'column',
      backgroundColor: backGroundWhite,
  },
  avatarContainer: {
      alignItems: 'center',
      zIndex: 0,
  },
  descriptionContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  subTitleContainer: {
      flexDirection: 'row',
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
  subtitleText: {
      fontSize: 14,
      fontFamily: 'gotham-rounded',
  },
  iconsContainer: {
      flexDirection: 'row',
      marginLeft: 10,
  },
  iconStyle: {
    marginRight: 3,
  },
  bioContainer: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  bioText: {
      fontSize: 16,
      textAlign: 'justify',
  },
};

class UserProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => {
    const { user, mainUser } = navigation.state.params;
    const { goBack } = navigation.goBack;
    isMaker = navigation.state.params.isMaker;

    return {
        headerTitle: (
            <Icon
            name='chevron-down'
            type='material-community'
            iconStyle={styles.headerIcon}
            onPress={ () => navigation.goBack }
            />
        ),
    };
};

constructor(props) {
  super(props);
  this.state = {
    makerBacker: {},
    userProfile: {}
  }
}

setProfileState() {
  const {email} = this.props.navigation.state.params.email

  if(this.state.isMaker) {
    getMaker(email)
    .then((data) => {
      this.setState({
        "makerBacker": data,
      })
    });
  } else {
    getBacker(email)
    .then((data) => {
      this.setState({
        "makerBacker": data,
      })
    });
  }
}

componentDidMount() {
  const { name, email, isMaker, shortbio } = this.props.navigation.state.params

  //Set Maker/Backer profile using this.state.makerBacker as dependency.
  this.setProfileState()
}

  render() {

    const { navigate } = this.props.navigation;
    const { name, email, isMaker, shortbio } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                width={window.width}
                height={window.width}
                source={profilePhoto}/>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={[styles.backerTitle, isMaker && styles.makerTitle]}>
                    {shortbio}
                </Text>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subtitleText}>
                        {name}
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
                  {this.state.makerBacker.longbio}
                </Text>
            </View>
        </ScrollView>
    );
  }
}

export default UserProfileScreen;
