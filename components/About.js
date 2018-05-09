import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontSize: 24,
          color: 'white'
          }}>About Page</Text>
        <Text style={{color: 'lightgray'}}>Apps Gif Generator with Ghibli Movie List</Text>
        <Button 
          title='Github'
          onPress={() => this.props.navigation.navigate('Github')}
          color='skyblue'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'midnightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

export default About;