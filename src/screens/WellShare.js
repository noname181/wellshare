import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Screen from '../components/Screen';

function WellShare({ navigation }) {
  return (
    <Screen showHeader={false}>
      <TouchableOpacity

        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text style={styles.text}>Login Page</Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={() => navigation.navigate('User')}
        style={styles.button}
      >
        <Text style={styles.text}>User App</Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={() => navigation.navigate('Hospital')}
        style={styles.button}
      >
        <Text style={styles.text}>Hospital App</Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={() => navigation.navigate('Delivery')}
        style={styles.button}
      >
        <Text style={styles.text}>Delivery Man App</Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={() => navigation.navigate('Admin')}
        style={styles.button}
      >
        <Text style={styles.text}>Admin App</Text>
      </TouchableOpacity>

    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 200
  },
  text: {
    color: "#000"
  }
})

export default WellShare;