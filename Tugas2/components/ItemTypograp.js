import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ItemTypograp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>History of Hiking</Text>
            <Text style={styles.paragraph}>A Hiking, also called a
                <Text style={[styles.paragraph, { color: 'red' }]}> Hiker</Text>,
                <Text style={[styles.paragraph, { fontWeight: 'bold' }]}> Hiking</Text>,
                <Text style={[styles.paragraph, { fontStyle: 'italic' }]}>Hiking, or Hiker</Text>,
                is a hobby of mountain climbing, the fun made by yourself and friends is very meaningful, and can feel money is meaningless when in nature</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 250,
        borderWidth: 1
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "brown",
        color: "#fff",
        textAlign: "center",
        textDecorationLine: "underline",
        padding: 50,
        marginBottom: 10
    },
    paragraph: {
        fontSize: 20,
        textAlign: "justify"
    }
})
export default ItemTypograp