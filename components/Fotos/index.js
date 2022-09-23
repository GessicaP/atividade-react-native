import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Image } from "react-native";
class Fotos extends React.Component {
    state = {
        data: [
            { id: "00", src: require('../../imgs/gato1.jpg')},
            { id: "01", src: require('../../imgs/gato.jpg')},
            { id: "02", src: require('../../imgs/gato2.jpg')},
            { id: "03", src: require('../../imgs/cao1.jpg')},
            { id: "04", src: require('../../imgs/cao2.jpg')},
            { id: "05", src: require('../../imgs/cao3.jpg')},
        ]
    };
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <Image
                                    source={item.src}
                                />
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}

export default Fotos;