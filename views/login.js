import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    Dimensions
  } from 'react-native';
  const { width, height } = Dimensions.get("window");

export default function logIn({navigation}){
    return(
        <View style={styles.container}>
        <ImageBackground source={require('./assets/background1.jpg')} style={styles.image}>
        <View style={styles.container}>
        <Image style={styles.shareIcon} source={require('./assets/share1.png')}/>
        <View style={styles.space}></View>
        <View style={styles.rectangle}>
        <View style={styles.container}>
        <Image
         style={styles.tinyLogo}
         source={require('./assets/logo.png')}
        />
       <View style={styles.inputContainer}>
         <Image style={styles.inputIcon} source={require('./assets/user.png')}/>
         <TextInput style={styles.inputs}
             placeholder="User"
             keyboardType="password"
             underlineColorAndroid='transparent'
             onChangeText={(email) => this.setState({email})}/>
       </View>
       
       <View style={styles.inputContainer}>
         <Image style={styles.inputIcon} source={require('./assets/pass.png')}/>
         <TextInput style={styles.inputs}
             placeholder="Password"
             secureTextEntry={true}
             underlineColorAndroid='transparent'
             onChangeText={(password) => this.setState({password})}/>
       </View>

       <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('report')}>
         <Text style={styles.loginText}>Login</Text>
       </TouchableHighlight>

       </View>
       </View>
       </View>
       </ImageBackground>
     </View>
    )

}

const styles = StyleSheet.create({

    logo: {
      width: 66,
      height: 58,
    },
    shareIcon: {
      width: 150,
      height: 150,
      
    },
    space: {
      width: 50,
      height: 50,
      
    },
    container: {
      flexDirection: "column",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rectangle: {
      backgroundColor: 'white',
      width: 400,
      height: 600,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      
    },
    loginButton: {
      backgroundColor: "green",
    },
    loginText: {
      color: 'white',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: width,
      height: height
      
    },
  });
  