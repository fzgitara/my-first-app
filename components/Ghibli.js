import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, WebView } from 'react-native'
import Browser from 'react-native-browser'
import axios from 'axios';

class Ghibli extends Component {
  constructor() {
    super()
    this.state = {
      listAnime: []
    }
  }
  componentDidMount() {
    this.getAnime()
  }
  getAnime = () => {
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      this.setState({
        listAnime: response.data
      })
    })
  }
  render() {
    return (
      <FlatList
        data={this.state.listAnime}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => 
          <View style={styles.container}>
            <Text style={{fontSize: 20, paddingBottom: 10}}>{item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Director: {item.director}</Text>
            <Text>Producer: {item.producer}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Text>Score: {item.rt_score}</Text>
            <Button 
              title='More Details'
              onPress={() => this.props.navigation.navigate('GhibliWiki', {
                title: item.title
              })}
              color='steelblue'
            />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
});

export default Ghibli;