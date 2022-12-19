import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#151518',
    flex: 1,
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moviePoster: {
    height: 350,
    width: width - width / 2.5,
    borderRadius: 20
  },
  info: {
    justifyContent: 'space-around'
  },
  movieName: {color: 'white',
  fontWeight: '600',
  fontSize: 22,
  marginVertical: 15
  },
  subtitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 20
  },
  description: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  btnSection: {
    height: 50,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  btn: {
    backgroundColor: '#ffa500',
    width: width / 1.9,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontWeight: '700',
    fontSize: 13
  }
});