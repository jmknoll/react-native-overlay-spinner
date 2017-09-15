import React, { Component } from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';



export default class LoadingSpinner extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ActivityIndicator
          color={'white'}
          size={'large'}
          style={{ flex: 1 }}
        />
        <Text>{this.props.loadingText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
  })