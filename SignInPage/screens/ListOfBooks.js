import React, {Component} from 'react';
import {
    Image,
    TouchableHighlight,
    StyleSheet,
    View,
    Text
  } from 'react-native';
  import {DrawerActions} from 'react-navigation-drawer';
  export default class ListOfBooks extends Component{
      static navigationOptions={
          drawerLabel: 'List',
          drawerIcon:()=>(
            <Image
            source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{ width: 30, height: 30 }}
          />
          ),
      }
      render(){
          return(
              <View style={styles.view}>
                  <TouchableHighlight onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}
                  style={styles.touchableHighlight} underlayColor={'rgba(0,0,0,0.8'}>
                  <Text style={styles.open}> OPEN </Text>
                  </TouchableHighlight>
                  <Text style = {styles.text}>This is List of Books</Text>
                  <TouchableHighlight onPress={()=>this.props.navigation.goBack()}
                  style={styles.touchableHighlight1} underlayColor={'#f1f1f1'}>
                      <Text style={styles.text}> Go Back </Text>
                  </TouchableHighlight>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
      view:{
          flex:1,
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor: 'yellow',

      },
      text:{
          fontSize: 26,
          color:'black'
      },
      touchableHighlight: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        position:'absolute',
        left: 10,
        top: 10,
    },
      touchableHighlight1: {
          backgroundColor: 'orange',
         paddingVertical: 20,
         paddingHorizontal: 50,
         margin: 10,
      },
      open: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
          alignItems: 'center',
          top: 10
      },
  })