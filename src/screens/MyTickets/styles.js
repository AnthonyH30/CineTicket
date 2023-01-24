import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#151518"
    },
    titulo:{
        alignSelf: 'center',
        marginVertical: 40
    },
    ticket:{
        height: 80,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#2e2e33',
        borderRadius: 10,
        alignItems: 'center'
    },
    ticketImage:{
        height: '100%',
        width: 50
    },
    content:{
        justifyContent: 'space-around',
        paddingLeft: 10,
        minWidth: '73%',
        height: '100%'
    },
    titlePrice:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ticketTitle:{
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },
    price:{
        color: 'white',
        fontSize: 16
    },
    seatsHour:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seats:{
        flexDirection: 'row'
    }
})