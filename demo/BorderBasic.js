import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';


const deviceWidth = Dimensions.get('window').width;

// Using a border function and a backgroundColor function to better understand flexbox styling.
// Style property can take both plain objects and functions, multiple objects can be passed as an array

export default class BorderBasic extends Component {

  border(color){
    return {
      borderColor: color,
      borderWidth: 2,
      margin: 3
    }
  }

  background (color){
    return {
      backgroundColor: color
    }
  }

  render() {
    return (
        <View style={styles.container}>

          <View style={[styles.topNavyContainer, this.border('navy')]}>

            <View style={[styles.nestedPurpleContainer, this.border('darkmagenta')]}>
              <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold'}}>React Native</Text>
              <Text>React Native</Text>
              <Text>React Native</Text>


            </View>

            <View style={[styles.nestedRedContainer, this.border('crimson')]}>
              <View style={[styles.smallBlock, this.background('pink')]}></View>
              <View style={[styles.smallBlock, this.background('pink')]}></View>
              <View style={[styles.smallBlock, this.background('pink')]}></View>

            </View>

          </View>

          <View style={[styles.bottomGreenContainer, this.border('green')]}>
            <Text>React Native</Text>
          </View>

        </View>
    );
  }
}

// Comment and uncomment the below styling to see the effect
// Containers styles are labled by color for ease of reference

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
    // flexDirection: 'row',
    // alignItems: 'stretch',
    // flexWrap: 'wrap',
  },
  topNavyContainer: {
    flex: 1,
    // flexDirection: 'row',
    // height: 850,
  },
  nestedPurpleContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: 850,
  },
  nestedRedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // height: 850,
  },
  bottomGreenContainer: {
    flex: 1,
    // flex: 0,
    // flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // height: 850,
  },
  navyBlock: {
    height: 50,
    width: 50,
  },
  smallBlock: {
    height: 50,
    width: 50
  }

});
