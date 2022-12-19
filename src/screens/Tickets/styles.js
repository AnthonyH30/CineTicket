import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#151518',
    flex: 1,
  },
  imageCine: {
    width: width - width / 6,
    height: 80,
    alignSelf: 'center'
  },
  seatsContainer: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  seat: {
    backgroundColor: 'gray',
    width: 30,
    height: 30,
    borderRadius: 8,
    margin: 8
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flexDirection: 'row'
  }
});