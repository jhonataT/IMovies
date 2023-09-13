import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 500,

        backgroundColor: '#efe',
        padding: 8,
        borderRadius: 8,

        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        right: 8,
        top: 8,

        zIndex: 2000,
    },
    content: {
        flex: 1,
    }
})