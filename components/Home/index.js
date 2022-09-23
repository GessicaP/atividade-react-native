
import React from "react"
import { View, Text, Button} from "react-native"


export default function Home({ navigation }) {
    return (

        <View>
            <Text> Página inicial da Rede Social de Milhões</Text>
            <Button
                title="Ir para Perfil"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Ver Fotos"
                onPress={() => navigation.navigate('Photos')}
            />
        </View>
    );
}