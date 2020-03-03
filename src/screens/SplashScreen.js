/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class SplashScreen  extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        )
      }
    
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.props.navigation.navigate('App');
        }
    }
    render() {
        return (
          <View style={styles.viewStyles}>
            {/* <Text style={styles.textStyles}>
              Blitz Reading
            </Text> */}
            <Image source={require('../../assets/launch.png')} />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      }
});

//export default App;
