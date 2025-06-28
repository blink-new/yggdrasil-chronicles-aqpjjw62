import { View, Text, StyleSheet } from 'react-native';

export default function Inventory() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inventory Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
});
