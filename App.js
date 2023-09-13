import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, View } from 'react-native';
import { HomeScreen } from './src/screens/Home';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f222b',
    paddingTop: statusBarHeight
  },
});
