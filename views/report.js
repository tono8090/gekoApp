import React, { Component } from 'react';
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

export default function report({navigation}){
    return(
        <View >
         <View style={styles.rectangle}>
           <View style={styles.containeR}>
             <TouchableHighlight onPress={() => navigation.navigate('login')}>
            <Image
              style={styles.tinyIcon}
              source={require('./assets/return1.png')}
            />
      </TouchableHighlight>
      <View style={styles.containeR}>
      
         <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />

        </View>
        </View>
        </View>
         
        <View style={styles.containeReport}>
        <View style={styles.containeR}>
          <Text style={styles.textR}>REPORT</Text>
          </View>
          <View style={styles.containeCalculator}>
          <View style={[styles.buttonContainer]}>
            
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('calculadora')}>
            <View style={styles.hightlightIn}>
              <Image
                style={styles.calculator}
                source={require('./assets/calculator1.png')}
              />
              <Text style={styles.loginText}>CALCULATOR</Text>
            </View>
          </TouchableHighlight>
          </View>
      </View>
      </View>
      
      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>1</Text>
          </View>

        </View>

      </View>

      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>2</Text>
          </View>

        </View>

      </View>

      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>3</Text>
          </View>

        </View>

      </View>

      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>4</Text>
          </View>

        </View>

      </View>

      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>5</Text>
          </View>

        </View>

      </View>


      <View style={styles.containeR}>

        <View style={styles.rectangleBox}>

          <View style={styles.rectangleBoxGreen}>
            <Text style={styles.numbers}>6</Text>
          </View>

        </View>


        

      </View>
      
      </View>
    )
}

const styles = StyleSheet.create({

    logo: {
      width: 66,
      height: 58,
      
    },
    textR: {
      fontSize: 40,
      fontWeight:  "bold" ,
      color: '#0072b1',
      paddingBottom:30,
    },
    tinyIcon: {
      width: 40,
      height: 40,
      
    },
    calculator: {
      width: 40,
      height: 51,
      
      
    },
    hightlightIn: {
  
      flexDirection:"row",
      justifyContent: 'flex-start',
      
    },
    shareIcon: {
      flexDirection:"row",
      justifyContent: 'flex-start',
      
    },
    space: {
      width: 50,
      height: 50,
      
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"row"
    },
    containeR: {
      alignItems: 'center',
      flexDirection:"row",
      paddingLeft:60,
      paddingTop:20
    },
    containeReport: {
      alignItems: 'center',
      flexDirection:"row",
      paddingLeft:0,
      paddingTop: 50
  
    },
    containeCalculator: {
      alignItems: 'center',
      flexDirection:"row",
      paddingLeft:70
    },
    rectangle: {
      backgroundColor: '#eee',
      width: 600,
      height: 200,
      flexDirection: 'row'
      
    },
    rectangleBox: {
      width: 430,
      height: 80,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: "grey",
  
      
    },
    rectangleBoxGreen: {
      width: 80,
      height: 80,
      flexDirection: 'row',
      backgroundColor:'green'
  
      
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
      height:80,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:200,
      paddingTop:3
      
    },
    loginButton: {
      backgroundColor: "#0072b1",
    },
    loginText: {
      color: 'white',
      fontWeight:  "bold" ,
      paddingLeft:15,
      paddingTop:15,
      fontSize:15
    },
    numbers: {
      color: 'white',
      fontWeight:  "bold" ,
      paddingLeft:25,
      paddingTop:5,
      fontSize:50
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: width,
      height: height
      
    },
  });
  