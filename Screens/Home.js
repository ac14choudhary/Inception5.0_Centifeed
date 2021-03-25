import React from 'react';
import {
  View,
  StyleSheet,
  button,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={styles.Base}>
      <View style={styles.PrimaryGrid}>
        <View style={styles.GridElement1}></View>
        <View style={styles.GridElement2}></View>
        <View style={styles.GridElement3}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Base: {
    flex: 1,
    backgroundColor: '#121212',
  },
  PrimaryGrid: {flex: 1, flexDirection: 'column'},
  GridElement1: {flex: 2, backgroundColor: 'blue'},
  GridElement2: {flex: 4, backgroundColor: 'green'},
  GridElement3: {flex: 6, backgroundColor: 'yellow'},
});
