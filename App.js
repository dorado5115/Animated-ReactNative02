import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default function App() {
  const color = new Animated.Value(0);

  const changeColor = () => {
    Animated.timing(color, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start(() => {
      color.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={[styles.text, { backgroundColor: color.interpolate({
        inputRange: [0, 1],
        outputRange: ['red', 'green']
      })}]} >
        <Text style={styles.text} >Alooo policia</Text>
      </Animated.View>
      <Button title="Change Color" onPress={changeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: 100,
    height: 100,
  },

  text: {
    fontSize: 60,
    color: 'red',
  },
});
