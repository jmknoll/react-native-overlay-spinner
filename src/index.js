import React, { Component } from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';



export default class LoadingSpinner extends Component {
  render() {
    const { color, size, backgroundColor, text, textColor, textSize } = this.props
    return(
      <View style={{
        flex: 1,
        backgroundColor: backgroundColor,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator
          color={color}
          size={size}
          style={{ flex: 1 }}
        />
        <Text style={{
          color: textColor,
          fontSize: textSize
        }}>{text}</Text>
      </View>
    )
  }
}

LoadingSpinner.defaultProps = {
  color: '#ffffff',
  size: 'large',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  textColor: '#ffffff',
  textSize: 18
}