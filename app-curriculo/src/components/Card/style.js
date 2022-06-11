import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    cardContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF'
    },
    cardContent: {
        marginTop: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default style;