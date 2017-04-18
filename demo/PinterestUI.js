import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

import Circle from '.././components/Circle';


const deviceWidth = Dimensions.get('window').width;
const widthHalves = deviceWidth/2;


// Illustrates mortar layout or Pinterest Grid
export default class PinterestUI extends Component {

  // generates elements by taking a number from 30 to 15,
  // the map function below then loops through the number of items
  // and returns a ui component for each number
  generateMapArray(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
      numbers.push(i);
    }
    return numbers
  }


  // If you don't use Exponent via Create React Native App (https://github.com/react-community/create-react-native-app),
  // then you will need to modify the App Transport Security settings (https://forums.developer.apple.com/thread/3544),
  // otherwise the calls to fillmurray.com will not work
  render() {

    // Demo also used to explain contentContainerStyle (https://facebook.github.io/react-native/docs/scrollview.html#contentcontainerstyle)
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scroll}
        >
          <View>
            {this.generateMapArray(Math.floor((Math.random() * 30) + 15)).map((number, key) =>
              <View key={key} style={styles.gridElements}>
                <View style={styles.leftColumn}>
                  <View style={styles.imageStyling}>
                    <Image
                    resizeMode='cover'
                    style={{ width: widthHalves - 15, height: Math.floor((Math.random() * 300) + 100)}}
                    source={{uri: `http://fillmurray.com/${Math.round(widthHalves)}/${Math.round(Math.floor((Math.random() * 300) + 100))}`}} />
                    <Circle />
                  </View>
                  <View style={styles.textPanel}>
                    <Text style={styles.textStyling}>{number}: Some Description would be here...</Text>
                    <Text style={styles.pinStyling}>📌</Text>
                  </View>
                </View>
              </View>)
            }
          </View>
          <View>
            {this.generateMapArray(Math.floor((Math.random() * 30) + 15)).map((number, key) =>
              <View key={key} style={styles.gridElements}>
                <View style={styles.rightColumn}>
                  <View style={styles.imageStyling}>
                    <Image
                    resizeMode='cover'
                    style={{ width: widthHalves - 15, height: Math.floor((Math.random() * 300) + 100)}}
                    source={{uri: `http://fillmurray.com/${Math.round(widthHalves)}/${Math.round(Math.floor((Math.random() * 300) + 100))}`}} />
                    <Circle />
                  </View>
                  <View style={styles.textPanel}>
                    <Text style={styles.textStyling}>{number}: Some Description would be here...</Text>
                    <Text style={styles.pinStyling}>📌</Text>
                  </View>
                </View>
              </View>)
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

// image styling was kept inline to create a more random effect,
// however, best practice is to avoid using inline styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    marginTop: 20,
    flexDirection: 'row',
  },
  gridElements: {
    width: widthHalves,
    justifyContent: 'center'
  },
  leftColumn: {
    flex:1,
    marginLeft:20,
    marginRight: 8,
    marginTop:10
  },
  rightColumn: {
    flex:1,
    marginLeft:8,
    marginRight: 20,
    marginTop:10
  },
  imageStyling: {
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  textPanel: {
    flex:1,
    padding: 5,
    flexDirection: 'row',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    marginBottom: 15
  },
  textStyling: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 12,
  },
  pinStyling: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    fontSize: 8
  }

});
