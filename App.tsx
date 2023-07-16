import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// no JSX os componentes sempre devem ter letra maiúscula
// para criar componentes a extensao sempre tem que ser .tsx
export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <StatusBar style="auto" />
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
});
