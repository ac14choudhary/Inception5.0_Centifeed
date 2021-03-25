import React from 'react';
import {
  View,
  StyleSheet,
  button,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
export default function Results({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
