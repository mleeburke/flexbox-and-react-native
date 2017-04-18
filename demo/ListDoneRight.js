import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, ListView } from 'react-native';

import SmallBlock from '.././components/SmallBlock';


import list from '.././data/List';

// Demo highlights the alignItems flex-start bug in ListView
// see StyleSheet below
export default class ListDoneRight extends Component {
  constructor(){
      super()

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
      this.state = {
        details: list,
        dataSource: ds.cloneWithRows(list)
      }
      this.renderMyList = this.renderMyList.bind(this)
    }

    renderMyList(rowData){

        return (
          <SmallBlock />
        )

    }

    render() {
      return (
        <View style={styles.container}>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(this.renderMyList)}
          >
          </ListView>
      </View>

      )}
  }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,

    },
    // Uncomment alignItems
    list: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // alignItems: 'flex-start',
      marginRight: 10,
      marginLeft: 10,
    },
    inlinetext: {
      marginTop: 19,
      paddingLeft: 20,
      paddingBottom: 15,
      fontWeight: 'bold',
      fontSize: 22,
    }
  })
