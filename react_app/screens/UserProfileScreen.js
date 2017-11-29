import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
    Avatar,
    Icon
} from 'react-native-elements';

var backerBlue = '#57C4DD';
var makerPurple = '#75C9F9';
var lightGrey = '#BFBFBF';

var profilePhoto = require('../images/bread.jpg');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const styles =  StyleSheet.create({
  headerIcon: {
    margin: 15,
    fontSize: 30
  },
  titleMaker: {
    color: makerPurple,
    margin: 15,
    fontSize: 40
  },
  titleBacker: {
    color: backerBlue,
    margin: 15,
    fontSize: 40
  },
  containter: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
  },
  avatarContainer: {
      alignItems: 'center',
  },
  titleContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  titleText: {
      fontSize: 20,
  },
  iconsContainer: {
      flexDirection: 'row',
  },
  descriptionContainer: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  bioText: {
      fontSize: 16,
      textAlign: 'justify',
  },
});

class UserProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => {
    const { user, mainUser } = navigation.state.params;
    const { goBack } = navigation.goBack;


  return {
    headerTitle: (
      <Icon
        name='chevron-down'
        type='material-community'
        iconStyle={styles.titleMaker}
      //  onPress={ () => navigation.navigate() }
        onPress={ () => goBack() }
      />
    ),
  };
};

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>

                <Avatar
                width={window.width}
                height={window.width}
                source={profilePhoto}/>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    IDEA TITLE/NAME
                </Text>

                <View style={styles.iconsContainer}>
                    <Icon
                        size={20}
                        name= 'school'
                        type='MaterialCommunityIcons'/>

                    <Icon
                        size={20}
                        name= 'attach-money'
                        type='MaterialCommunityIcons'/>

                    <Icon
                        size={20}
                        name= 'group'
                        type='MaterialCommunityIcons'/>

                    <Icon
                        size={20}
                        name= 'work'
                        type='MaterialCommunityIcons'/>

                    <Icon
                        size={20}
                        name= 'gavel'
                        type='MaterialCommunityIcons'/>
                </View>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.bioText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas sapien nec lobortis tincidunt. Donec commodo, felis id convallis ultrices, velit arcu efficitur libero, at hendrerit dui felis eu massa. Donec tincidunt dolor quis erat dignissim, at vestibulum nisl placerat. Nunc pellentesque orci et convallis congue. Nam congue tortor urna, at consectetur nisl tincidunt id. å
                </Text>
            </View>
        </ScrollView>
    );
  }
}

export default UserProfileScreen;
