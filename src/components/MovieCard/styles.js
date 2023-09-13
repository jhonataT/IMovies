import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 8,
    },
    banner: {
        height: 200,
        width: 140,

        borderRadius: 8,
    },
    content: {
        height: 200,
        width: 140,

        marginHorizontal: 8,

        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 25, .3)',

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#efe'
    },
    scoreContainer: {
        width: 50,
        height: 50,

        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center'
    }
})