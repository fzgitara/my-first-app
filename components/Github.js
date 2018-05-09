import React, { Component } from 'react';
import { WebView } from 'react-native'

class Github extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/fzgitara'}}
      />
    )
  }
}

export default Github;