import React, {Component} from 'react';
import {
    Image,
    TouchableHighlight,
    StyleSheet,
    View,
    Text
  } from 'react-native';
  import {DrawerActions} from 'react-navigation-drawer';
  export default class HomePage extends Component{
      static navigationOptions={
          drawerLabel: 'Home',
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
                  <Text style = {styles.text}>This is Home Screen</Text>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
      view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

      },
      text:{
          fontSize: 26,
          color:'purple'
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
      open: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
          alignItems: 'center',
          top: 10
      },
  })