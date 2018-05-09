import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getGif } from '../store/gif/actions'
import store from '../store/index'
import axios from 'axios'

class Gif extends Component {
  constructor() {
    super()
    this.state = {
      gif: {}
    }
  }
  componentDidMount() {
    this.props.getGif()
  }
  getGif = () => {
    this.props.getGif()
  }
  render() {
    if(this.props.gif.loading === true){
      return (
        <View>
          <Text>Loading . . . </Text>
          <Button
            onPress={this.getGif}
            title="Click to get random gif"
            color="#841584"
          />
        </View>
      )
    } else if(this.props.gif.error.status === true){
      return (
        <View>
          <Text>{this.props.gif.error.message}</Text>
          <Button
            onPress={this.getGif}
            title="Click to get random gif"
            color="#841584"
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={{
                width: +this.props.gif.data.fixed_height_downsampled_width,
                height: +this.props.gif.data.fixed_height_downsampled_height
              }}
              source={{uri: `${this.props.gif.data.image_url}`}}
            />
            <Text style={{
              fontSize: 20
            }}>{this.props.gif.data.title}</Text>
          </View>
            <Button
              onPress={this.getGif}
              title="Click to get random gif"
              color="#841584"
            />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    alignItems: 'center'
  },
});

const mapStateToProps = (state) => ({
  gif: state.gif
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGif
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gif)