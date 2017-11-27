import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = {
  headerIcon: {
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
  }
};

import Svg, { Circle } from 'react-native-svg';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';

var profilePhoto = require('../images/bread.jpg');

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
  const { user, mainUser } = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb'
        type='material-community'
        iconStyle={styles.titleMaker}
        onPress={ () => navigation.navigate("Explore", {user: mainUser}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        color='#999999'
        onPress={ () => navigation.navigate("Matches", {user: mainUser}) }
      />
    ),
    headerLeft: (
        <Icon
          name='user-o'
          type='font-awesome'
          color='#999999'
          iconStyle={styles.headerIcon}
          onPress={ () => navigation.navigate("MyProfile", {user: mainUser}) }
        />
    ),
  };
};

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex:1,
        flexDirection:'column' }}
      >
        <View
        style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}
        >
      
        <Button
          onPress={() => navigate("Explore", {user: "hiimauser"})}
          title="Explore Page"
          buttonStyle={{ marginTop: 20 }}
        />
        <Avatar
        padding={10}
        width={225}
        height={225}
        rounded
        source={profilePhoto}
        activeOpacity={0.7}
        />
        <Text>
        IDEA TITLE/NAME
        </Text>

        <Text>
        This is a bio. It describes either the backer or the idea to back.
        </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            //alignItems: 'center'
          }}
        >
          {/*
          <Icon name="attach-money" size={30}/>
          <Icon name="open-book" type="entypo" size={30}/>
          <Icon name="md-people" type="ionicon" size={30}/>
          <Icon name="tools" type="entypo" size={30}/>
           <Icon name="cubes" type="font-awesome" size={30}/> */}

          <Svg height="50"
                width="50"
                style={{
                  //alignItems: "center",
                  justifyContent: 'center'
                }}>
               <Icon name="attach-money" size={30}/>
               <Circle
              cx="25"
              cy="25"
              r="25"
              fill="white"/>
          </Svg>

          <Svg height="50"
                width="50"
                style={{
                  //alignItems: "center",
                  justifyContent: 'center'
                }}>
               <Icon name="open-book" type="entypo" size={30}/>
               <Circle
                            cx="25"
                            cy="25"
                            r="25"
                            fill="white"/>
          </Svg>

          <Svg height="50"
                width="50"
                style={{
                  //alignItems: "center",
                  justifyContent: 'center'
                }}>
               <Icon name="md-people" type="ionicon" size={30}/>
               <Circle
                            cx="25"
                            cy="25"
                            r="25"
                            fill='#3fd3df'/>
          </Svg>

          <Svg height="50"
                width="50"
                        style={{
                          //alignItems: "center",
                          justifyContent: 'center'
                        }}>
                       <Icon name="tools" type="entypo" size={30}/>
                       <Circle
                                    cx="25"
                                    cy="25"
                                    r="25"
                                    fill="white"/>
                  </Svg>

                  <Svg height="50"
                        width="50"
                        style={{
                          //alignItems: "center",
                          justifyContent: 'center'
                        }}>
                       <Icon name="cubes" type="font-awesome" size={30}/>
                       <Circle
                                    cx="25"
                                    cy="25"
                                    r="25"
                                    fill="#3fd3df"/>
                      </Svg>



        </View>
      </View>
    );
  }
}

export default UserProfileScreen;
