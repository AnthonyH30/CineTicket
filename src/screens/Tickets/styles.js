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
  },
  dateContainer: {
    width: 60,
    height: 90,
    backgroundColor: '#403d3d',
    marginHorizontal: 5,
    borderRadius: 27,
    alignItems: 'center',
  },
  circleDay: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textMonth: {
    color: 'white',
    fontWeight: '600',
    marginTop: 10
  },
  textDay: {
    fontWeight: '600'
  },
  hourContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10
  },
  textHour: {
    color: 'white'
  },
  finishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  priceContainer: {
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#ffa500',
    width: width / 1.9,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: '700',
    fontSize: 13
  }
});