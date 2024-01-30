import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Welcome from './views/Welcome';

export default function App() {
  return (
    <View>
      <Welcome />
      <StatusBar style="auto" />
    </View>
  );
}
