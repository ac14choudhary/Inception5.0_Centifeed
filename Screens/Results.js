import React, {useState} from 'react';
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
import {PieChart} from 'react-native-svg-charts';
import LottieView from 'lottie-react-native';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Results({route}) {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const data = [50, 10];

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

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
                style={{alignSelf: 'center', height: height / 2.5}}
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
            <View style={styles.fourtwoone}>
              <PieChart
                style={{height: height / 6}}
                data={pieData}
                outerRadius="90%"
                innerRadius="3%"
              />
            </View>
            <View style={styles.fourtwotwo}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  color: '#31AE33',
                  borderRadius: 4,
                  paddingHorizontal: '4%',
                  padding: '3%',
                }}>
                Positive - {positive}%
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 20,
                  alignSelf: 'center',
                  color: '#FA0A1B',
                  borderRadius: 4,
                  paddingHorizontal: '4%',
                  padding: '3%',
                }}>
                Negative - {negative}%
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
  threetwoone: {flex: 1, justifyContent: 'center'},
  threetwotwo: {flex: 1, alignSelf: 'center'},
  four: {
    flex: 8,
  },
  fourone: {flex: 2},
  fourtwo: {flex: 10, flexDirection: 'row', justifyContent: 'center'},
  fourtwoone: {flex: 1, justifyContent: 'center'},
  fourtwotwo: {flex: 1, alignSelf: 'center', justifyContent: 'center'},

  fourtwooneimage: {
    alignSelf: 'center',
    flex: 1,
    height: '75%',
    width: '75%',
  },
});
