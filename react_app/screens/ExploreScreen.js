import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
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
};





class ExploreScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}  Explore`
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button
          onPress={() => navigate("UserProfile", {user: "Im a user"})}
          title="User Profile"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("MyProfile", {user: "fillinuserrrr", type: ""})}
          title="My Profile"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("Edit")}
          title="Edit"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("Matches")}
          title="Matches"
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
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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

      <Card style={styles.slide2}
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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

      <Card style={styles.slide3}
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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
      <Card style={styles.slide4}
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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
      title='Computer Science Enthusiast'
      image={require('../img/gary_mouse.png')}>
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
