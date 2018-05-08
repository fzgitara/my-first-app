import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import axios from 'axios'

class Gif extends Component {
  constructor() {
    super()
    this.state = {
      gif: {}
    }
  }
  componentDidMount() {
    this.getGif()
  }
  getGif = () => {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=SFS527rWxCUfBNK4b2xibHg5zvJyxsQD&tag=funny&rating=G')
    .then(response => {
      this.setState({
        gif: response.data.data
      })
    })
  }
  render() {
    return (
      <View style={styles.image}>
        <Image
          style={{
            width: +this.state.gif.fixed_height_downsampled_width,
            height: +this.state.gif.fixed_height_downsampled_height
          }}
          source={{uri: `${this.state.gif.image_url}`}}
        />
        <Text style={{
          fontSize: 20
        }}>{this.state.gif.title}</Text>
        <Button
          onPress={this.getGif}
          title="Click to get random gif"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    backgroundColor: 'azure',
    borderColor: 'grey',
    borderRadius: 12,
  },
});

export default Gif;