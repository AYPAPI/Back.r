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

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 300
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 300
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 300
  },
  text: {
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold',
    height: 300
  },
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
  }
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
          name='lightbulb'
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
            name='user-o'
            type='font-awesome'
            iconStyle={styles.headerIcon}
            onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
          />

      ),
    };
  };

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View>
      <Button
          onPress={() => navigate("Edit")}
          title="Edit"
          buttonStyle={{ marginTop: 20 }}
      />

      <Swiper
      style={styles.wrapper}
      paginationStyle={{ container: { backgroundColor: 'transparent' } }}
      paginationLeft={''}
      paginationRight={''}
      smoothTransition
      stack
      dragDownToBack
      dragY
      >

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>

      <Card style={styles.slide1}
      title="Computer Science Enthusiast">
      <TouchableHighlight onPress={ () => this.onUserPress("Random_User") }>
        <Image
          source={require('../img/gary_mouse.png')}
        />
      </TouchableHighlight>
      <Text style={{marginBottom: 10}}>
      Gary is a computer Science Enthusiast!!!
      </Text>
      <Icon
      raised
      name='money'
      type='font-awesome'
      color='#f50'
      onPress={() => alert("Money")} />
      </Card>
      </Swiper>

      </View>
    );
  }
}

export default ExploreScreen;
