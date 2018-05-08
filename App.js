import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Gif from './components/Gif'
import About from './components/About'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 24
        }}>Gif Generator</Text>
        <Text>Get your random gif to cheer up your mood!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="About"
          color="red"
        />
        <Gif/>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: App
  },
  About: {
    screen: About
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
});
