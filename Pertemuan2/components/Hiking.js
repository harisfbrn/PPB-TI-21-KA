import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default function Hiking() {
    const city = "south west";
    const peoples = [{ name: 'Haris', fams: 'Brother' }, { name: 'Boris', fams: 'Brother' }];
    return (
        <View>
            <Text>Hi i'm Haris</Text>
            <TakeARide bebas={peoples} />
            {Place2Go(city)}
            <View>
                <Text>Merbabu</Text>
                <Image source={require("../assets/merbabu.jpg")} style={{ width: 200, height: 200 }} />
            </View>

            <View>
                <Text>Salak</Text>
                <Image source={require("../assets/salak.jpg")} style={{ width: 200, height: 200 }} />
            </View>
        </View>
    )
}

const TakeARide = ({ bebas }) => {
    return (
        <View>
            <Text>Let's go Hiking with me:</Text>
            {bebas.map((v, index) => (
                <View key={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View>
    )
};

function Place2Go(value) {
    return <Text>Lets Hiking {value} with me , now </Text>
}