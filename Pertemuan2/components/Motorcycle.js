import React, { Component } from 'react'
import { Text, View } from 'react-native'

var name = "Erbergrodeo";
const types = { type: 'Manual', model: 'KTM', harga: 1250000000 }
export default function Motorcycle() {
    return (
        <View>
            <Text>Hi i'm a motorcycle</Text>
            <Text>Merek : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model : {types.model}</Text>
            <Text>Harga : {types.harga}</Text>
            <Text>Mochammad Haris Febrian 212310013</Text>
        </View>
    )
}