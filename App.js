import React, { useState, useCallback, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,Dimensions, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import RBSheet from "react-native-raw-bottom-sheet";
const { height, width } = Dimensions.get('window')

const Splashscreen2 = ({ navigation }) => {
  const refRBSheet = useRef();
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View styles={styles.container}>
      <Text
        style={{
          color: '#000000',
          postion: 'absolute',
          top: 11,
          left: 138,
          fontSize:26,
          fontWeight:'bold',
          alignItems:'center',
        }}>
        Food List
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.txt}
          onPress={() => {
            refRBSheet.current.open()
          }}>
          Final Food item
        </Text>
      </TouchableOpacity>
      <RBSheet
      ref={refRBSheet}
      closeOnPressMask={true}
      height={300}
      animationType='slide'
      customStyles={{
        wrapper: {
       
        },

        container: {
          backgroundColor: '#FFFFFF',
        }
      }}
    >
    <Text  style={{
      color: '#000000',
      fontSize:13,
      left:45,
      top:23,
      alignItems:'center',
    }}>Food name</Text>
    <TextInput
    style={styles.input}
    onChangeText={onChangeNumber}
    value={number}
    placeholder="useless placeholder"
    keyboardType="default"
  />
    <TouchableOpacity style={styles.rbshett}>
    <Text
      style={styles.rbtxt}
      onPress={() => {
        refRBSheet.current.open()
      }}>
      Add Food item
    </Text>
  </TouchableOpacity>
    </RBSheet>

    </View>
  );
};

export default Splashscreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    top:36,
    padding:6,
    width:333,
    left:22,
    borderRadius: 7,

  },
  foodname:{
   fontSize:11,
   left:33,
  },
  rbshett: {
    position: 'absolute',
    top:233,
    left:30,
    backgroundColor: '#32CD32',
    width: 333,
    paddingLeft:22,
    height: 44,
    borderRadius: 7,
  },
  rbtxt: {
    position: 'absolute',
    top: 12,
    left:113,
    color: '#eee'
    },
   btn: {
    position: 'absolute',
    top:688,
    left: 30,
    backgroundColor: '#32CD32',
    width: 333,
    paddingLeft:46,
    height: 44,
    borderRadius: 7,
  },
  text: {
    position: 'absolute',
    top: 11,
  },
  txt: {
    top: 11,
    left: 77,
    color: '#FFFFFF',
  },
  tinyLogo: {
    position: 'absolute',
    top: -110,
    left: 59,
    flex: 1,
    width: '70%',
    height: 679,
    resizeMode: 'contain',
  },
});
