import React, { useState} from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero() {
        const novoNumero = Math.floor(Math.random() * 100)
        setNumero(novoNumero)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.textoTitulo}>
                Gerador de números aleatórios
            </Text>
            <Text style={style.numero}>
                {numero}
            </Text>
            <TouchableOpacity style={style.botao} onPress={handleNumero}>
                <Text style={style.textoBotao}>
                    Gerar número
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
        );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#038db2',
        flex: 1,
        justifyContent: 'center'
    },
    numero: {
        color: '#FFFFFF',
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 20
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#fadee1',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '80%'
    },
    textoBotao: {
        color: '#206491',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoTitulo: {
        color: '#d9f1f1',
        fontSize: 20,
        marginBottom: 20
    }
})

export default App;