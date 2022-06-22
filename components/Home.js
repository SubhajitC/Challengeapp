import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';
import Iconins from 'react-native-vector-icons/Entypo';
import {Card,Title, Paragraph} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
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
          fontSize: 26,
          fontWeight: 'bold',
          alignItems: 'center',
        }}>
        Food List
      </Text>
      <Card style={styles.card}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
    <TouchableOpacity style={styles.secondbtn}>
    <Text
      style={styles.txt}
     >
      Add Food item
    </Text>
  </TouchableOpacity>
    <View style={styles.border}>
    </View>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.addtxt}
          onPress={() => {
            refRBSheet.current.open();
          }}>
          Final Food list
        </Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={300}
        animationType="slide"
        customStyles={{
          wrapper: {},

          container: {
            backgroundColor: '#FFFFFF',
            borderRadius: 22,
          },
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 13,
            left: 35,
            top: 11,
            fontWeight: 'bold',
            alignItems: 'center',
          }}>
          Add Food
        </Text>
        <Iconins
          name="cross"
          style={styles.backArrow}
          color="#000000"
          onPress={() => {
            navigation.navigate('Food');
          }}
        />

        <Text
          style={{
            color: '#000000',
            fontSize: 13,
            left: 35,
            top: 37,
            alignItems: 'center',
          }}>
          Food name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="default"
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 13,
            left: 35,
            top: 37,
            alignItems: 'center',
          }}>
          Food price
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.rbshett}>
          <Text
            style={styles.rbtxt}
            onPress={() => {
              refRBSheet.current.open();
            }}>
            Add Food item
          </Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#B0C4DE',
    top: 36,
    padding: 6,
    width: 323,
    left: 22,
    borderRadius: 7,
  },
  border:{
    width: 333,
    height: 1,
    left:27,
    top:53,
    borderColor: '#000000',
    borderWidth:2,
    borderStyle:'dashed',
  },
  card:{
   top:33,
   height:155
  },
  backArrow: {
    left: 350,
    fontSize: 17,
  },
  foodname: {
    fontSize: 11,
    left: 33,
  },
  rbshett: {
    position: 'absolute',
    top: 248,
    left: 30,
    backgroundColor: '#32CD32',
    width: 333,
    paddingLeft: 22,
    height: 44,
    borderRadius: 7,
  },
  rbtxt: {
    position: 'absolute',
    top: 12,
    left: 113,
    color: '#eee',
  },
  btn: {
    position: 'absolute',
    top: 688,
    left: 30,
    backgroundColor: '#32CD32',
    width: 333,
    paddingLeft: 46,
    height: 44,
    borderRadius: 7,
  },
  secondbtn: {
    position: 'absolute',
    top: 266,
    left: 22,
    borderWidth: 1,
    borderColor: '#32CD32',
    backgroundColor: '#cdf7cd',
    width: 348,
    paddingLeft: 46,
    height: 44,
    borderRadius: 7,
  },
  text: {
    position: 'absolute',
    top: 11,
  },
  txt: {
    top: 11,
    left: 3,
    color: '#000000',
    fontWeight:'bold'
  },
  addtxt: {
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
