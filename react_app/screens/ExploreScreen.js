import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper-animated'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    backgroundColor: '#009688',
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673ab7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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


     export default () => <Swiper
  style={styles.wrapper}
  paginationStyle={{ container: { backgroundColor: 'transparent' } }}
  paginationLeft={''}
  paginationRight={''}
  smoothTransition
  stack
  dragDownToBack
  dragY
>
  <View style={styles.slide1}>
    <Text style={styles.text}>Hello Swiper</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Awesome</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>This is a test slide</Text>
  </View>
  <View style={styles.slide1}>
    <Text style={styles.text}>Isn&apos;t this just mind blowing?</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>Check it Out</Text>
  </View>
</Swiper>;

      </View>
    );
  }
}

export default ExploreScreen;
