import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {TextInput} from 'react-native-gesture-handler';
import DrawerNavigator from './screens/DrawerNavigator';



class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Username"
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        />
        <TextInput
        placeholder="Password"
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        />
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    if(userInfo.username===this.state.username && userInfo.password==this.state.password){
      await AsyncStorage.clear();
    this.props.navigation.navigate('App');
    }
    else{
      alert('Username or Password wrong!');
    }
  };
}

class HomeScreen extends React.Component {
  static navigationOptions =  ({ navigation }) =>  {
    return{
      title: 'Welcome to the app!',
    headerRight: (
      <Button
        onPress={ () => navigation.navigate('Auth')}
        title="Log Out" 
        color="red"
      />
    ),
    } 
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class OtherScreen extends React.Component {
  static navigationOptions =  ({ navigation }) =>  {
    return{
      title: 'Drawer App Page',
    headerRight: (
      <Button
        onPress={ () => navigation.navigate('Auth')}
        title="Log Out"
        color="red"
      />
    ),

    }
    
  };

  render() {
    return (
      <DrawerNavigator/>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const userInfo= {username:'admin',password:'123'};

export default createAppContainer(createSwitchNavigator(
  {

    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));