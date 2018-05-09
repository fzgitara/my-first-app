import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Gif from './components/Gif'
import About from './components/About'
import Ghibli from './components/Ghibli'
import GhibliWiki from './components/GhibliWiki'
import Github from './components/Github'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{
              fontSize: 24
            }}>Gif Generator</Text>
            <Text>Get your random gif to cheer up your mood!</Text>
          </View>
          <Gif/>
        </View>
      </Provider>
    );
  }
}

const Home = createStackNavigator ({
  Home: {
    screen: App
  }
})
const GhibliScreen = createStackNavigator ({
  Ghibli: {
    screen: Ghibli
  },
  GhibliWiki: {
    screen: GhibliWiki
  }
})
const AboutScreen = createStackNavigator ({
  About: {
    screen: About
  },
  Github: {
    screen: Github
  }
})

export default createBottomTabNavigator({
  Home: Home,
  Ghibli: GhibliScreen,
  About: AboutScreen
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Ghibli') {
        iconName = `ios-paw${focused ? '' : '-outline'}`;
      } else if (routeName === 'About') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'skyblue',
    inactiveTintColor: 'gray',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  title: {
    alignItems: 'center',
    padding: 20
  }
});
