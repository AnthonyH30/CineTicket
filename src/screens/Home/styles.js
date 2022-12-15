import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151518",
  },
  searchInput: {
    height: 50,
    backgroundColor: '#18181a',
    marginVertical: 30,
    paddingLeft: 20,
    fontSize: 20,
    color: 'white',
    borderRadius: 23,
    marginLeft: 24
  },
  card: {
    margin: 24,
    marginTop: 40
  },
  cardImage: {
    height: height / 2.2,
    width: width - width / 2.2,
    borderRadius: 20
  }
});