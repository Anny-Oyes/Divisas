import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Conversor from './Components/Conversor';


export default function Divisas() {
return (
  <View style={styles.container}>
    <Conversor/>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dbad5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

