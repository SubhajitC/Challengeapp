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
import Icon from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/Foundation';
import Material from 'react-native-vector-icons/MaterialIcons';
import {Card, Title, Paragraph} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const Food = ({navigation}) => {
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
          <View style={styles.firstView}>
            <View style={styles.firsthalfView}>
              <Edit
                name="pencil"
                style={{
                  color: '#000000',
                  postion: 'absolute',
                  top: 8,
                  left:17,
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}
                color="#000000"
              />
              <Material
                name="delete-outline"
                style={{
                  color: '#000000',
                  postion: 'absolute',
                  bottom: 12,
                  left: 44,
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}
                color="#000000"
              />
            </View>
          </View>
          <View style={styles.secondView}>
            <View style={styles.secondhalfView}>
              <Edit
                name="pencil"
                style={{
                  color: '#000000',
                  postion: 'absolute',
                  top: 8,
                  left:17,
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}
                color="#000000"
              />
              <Material
                name="delete-outline"
                style={{
                  color: '#000000',
                  postion: 'absolute',
                  bottom: 12,
                  left:44,
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}
                color="#000000"
              />
            </View>
          </View>
        </Card.Content>
      </Card>
      <TouchableOpacity style={styles.secondbtn}>
        <Text style={styles.txt}>
          <Icon
            name="md-add-outline"
            style={styles.midbackArrow}
            color="#000000"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          Add Food item
        </Text>
      </TouchableOpacity>
      <View style={styles.border}></View>
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
            navigation.navigate('Home');
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

export default Food;

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
  border: {
    width: 333,
    height: 1,
    left: 27,
    top: 53,
    borderColor: '#B0C4DE',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  card: {
    top: 33,
    height: 155,
  },
  backArrow: {
    left: 350,
    fontSize: 17,
  },
  midbackArrow: {
    left: 350,
    fontSize: 20,
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
  firstView: {
    position: 'absolute',
    top: 25,
    left: 23,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#f2f2f2',
    width: 310,
    paddingLeft: 46,
    height: 44,
    borderRadius: 7,
  },
  firsthalfView: {
    position: 'absolute',
    top: -1,
    left: 250,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#f2f2f2',
    width: 90,
    paddingright: 7,
    height: 44,
    borderRadius: 7,
  },
  secondView: {
    position: 'absolute',
    top:88,
    left: 23,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#f2f2f2',
    width: 310,
    paddingLeft: 46,
    height: 44,
    borderRadius: 7,
  },
  secondhalfView: {
    position: 'absolute',
    top: -1,
    left: 250,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#f2f2f2',
    width: 90,
    paddingright: 7,
    height: 44,
    borderRadius: 7,
  },
  text: {
    position: 'absolute',
    top: 11,
  },
  txt: {
    top: 8,
    left: -33,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
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
