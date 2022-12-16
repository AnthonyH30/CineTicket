import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    width: width / 4.5,
    height: width / 4.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    marginTop: 5,
    textAlign: 'center'
  },
  content: {
    color: 'white',
  }
});