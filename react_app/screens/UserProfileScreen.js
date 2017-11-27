import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View,
  StyleSheet
} from 'react-native';

import Svg, { Circle } from 'react-native-svg';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';

var profilePhoto = require('../images/bread.jpg');

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.user}`
  });

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
