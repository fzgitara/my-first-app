import React, { Component } from 'react';
import { WebView } from 'react-native'

class GhibliWiki extends Component {
  render() {
    const title = this.props.navigation.getParam('title')
    const url = title.split(' ').join('_')
    return (
      <WebView
        source={{uri: `http://studio-ghibli.wikia.com/wiki/${url}`}}
      />
    );
  }
}

export default GhibliWiki;