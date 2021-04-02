import React from 'react';
import {
  View,
  StyleSheet,
  button,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Results({route}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/BG.png')}
        resizeMode={'cover'}
        style={{
          height: height,
          width: width,
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={styles.one}>
          <Text
            style={{
              fontSize: 30,
              marginVertical: 5,
              marginHorizontal: 10,
              fontWeight: 'bold',
              color: '#26538E',
            }}>
            Lets see the Results now
          </Text>
          <Text
            style={{fontSize: 14, marginHorizontal: 10, fontWeight: 'bold'}}>
            Sentifeed provides you with your individual feedback as well as
            total count
          </Text>
        </View>
        <View style={styles.two}>
          <View style={styles.twoone}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 20,
                marginBottom: 5,
                marginLeft: 10,
                fontWeight: 'bold',
                color: '#26538E',
              }}>
              Your entered the statement -
            </Text>
            <View style={styles.twotwo}>
              <Text style={{fontSize: 16, margin: 10}}>
                {route.params.paramKey}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <View style={styles.threeone}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: '#26538E',
              }}>
              Your Statement was -
            </Text>
          </View>
          <View style={styles.threetwo}>
            <View style={styles.threetwoone}>
              <LottieView
                style={{alignSelf: 'center'}}
                source={require('../assets/happy.json')}
                autoPlay
                loop
              />
            </View>
            <View style={styles.threetwotwo}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  margin: 10,
                  alignSelf: 'center',
                  color: '#31AE33',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#31AE33',
                  paddingHorizontal: '4%',
                  padding: '3%',
                }}>
                Positive
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.four}>
          <View style={styles.fourone}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: '#26538E',
              }}>
              Ovreall Results are -
            </Text>
          </View>
          <View style={styles.fourtwo}>
            <View style={styles.fourtwoone}></View>
            <View style={styles.fourtwotwo}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  color: '#31AE33',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#31AE33',
                  paddingHorizontal: '4%',
                  padding: '3%',
                }}>
                Positive
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 20,
                  alignSelf: 'center',
                  color: '#FA0A1B',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#FA0A1B',
                  paddingHorizontal: '4%',
                  padding: '3%',
                }}>
                Negative
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  one: {
    flex: 3,
  },
  two: {
    flex: 6,
  },
  twoone: {flex: 1},
  twotwo: {flex: 2, margin: 10, backgroundColor: 'white', borderRadius: 10},

  three: {
    flex: 6,
  },
  threeone: {flex: 2},

  threetwo: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  threetwoone: {flex: 1},
  threetwotwo: {flex: 1, alignSelf: 'center'},
  four: {
    flex: 8,
  },
  fourone: {flex: 2},
  fourtwo: {flex: 10, flexDirection: 'row', justifyContent: 'center'},
  fourtwoone: {flex: 1},
  fourtwotwo: {flex: 1, alignSelf: 'center'},

  fourtwooneimage: {
    alignSelf: 'center',
    flex: 1,
    height: '75%',
    width: '75%',
  },
});
