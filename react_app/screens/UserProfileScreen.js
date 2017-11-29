import React, { Component } from 'react';
import {Text, Button, Image, View, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

var backerBlue = '#57C4DD';
var makerPurple = '#75C9F9';
var lightGrey = '#BFBFBF';

var profilePhoto = require('../img/gary_mouse.png');

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
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      color: 'white',
  },
  avatarContainer: {
      alignItems: 'center',
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
  titleText: {
      fontSize: 16,
      color: backerBlue,
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas sapien nec lobortis tincidunt. Donec commodo, felis id convallis ultrices, velit arcu efficitur libero, at hendrerit dui felis eu massa. Donec tincidunt dolor quis erat dignissim, at vestibulum nisl placerat. Nunc pellentesque orci et convallis congue. Nam congue tortor urna, at consectetur nisl tincidunt id.
                </Text>
            </View>
        </ScrollView>
    );
  }
}

export default UserProfileScreen;
