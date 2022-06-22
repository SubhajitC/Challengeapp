import React, { useState, useCallback, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window')

const Splashscreen2 = ({ navigation }) => {
  const refRBSheet = useRef();
  return (
    <View styles={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/img/3.png')} />
      <Text
        style={{
          color: '#000000',
          postion: 'absolute',
          top: 427,
          left: 133,
          fontSize: 16,
        }}>
        Chat with Drala Community
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.txt}
          onPress={() => {
            refRBSheet.current.open()
          }}>
          Next
        </Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={300}
        animationType='slide'
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },

          container: {
            backgroundColor: '#FFFFFF',


          }
        }}
      >
      </RBSheet>
    </View>
  );
};

export default Splashscreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    position: 'absolute',
    top: 533,
    left: 98,
    backgroundColor: '#ff8000',
    width: 210,
    paddingLeft: 11,
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
