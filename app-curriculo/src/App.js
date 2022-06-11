import React from 'react';
import {Text, View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import foto from '../assets/img/photo.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

const App = () => {
    function handleRedeSocial(redeSocial) {
        switch(redeSocial) {
            case 'linkedin' :
                Alert.alert('Meu Linkedin: ','https://www.linkedin.com/in/priscilla-correa/')
            break
            case 'github' :
                Alert.alert('Meu Github: ', 'https://github.com/prissycorrea/')
            break
        }
    }
    return (
        <>
        <View style={style.page}>
            <View style={style.cabecalho}>
                <Image source={foto} style={style.photo} />
                <Text style={style.nome}>
                    Priscilla Correa
                </Text>
                <Text style={style.funcao}>
                    Front-End Developer
                </Text>
                <View style={style.redesSociais}>
                    <TouchableOpacity onPress={
                        () => handleRedeSocial('github')}>
                        <Icon name="github" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => handleRedeSocial('linkedin')}>
                        <Icon name="linkedin" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <Card titulo="Skills">
                <Text style={style.cardContentText}>
                    HTML / CSS
                </Text>
                <Text style={style.cardContentText}>
                    JavaScript
                </Text>
                <Text style={style.cardContentText}>
                    ReactJS
                </Text>
                <Text style={style.cardContentText}>
                    SASS
                </Text>
            </Card>
            <Card titulo="Formação">
            <Text style={style.cardContentText}>
                Análise e desenvolvimento de sistemas - Estácio
                01/2022 - 06/2025
            </Text>
            <Text style={style.cardContentText}>
                Pedagogia - Faculdades Integradas Guarulhos
                01/2013 - 12/2016
            </Text>
            <Text style={style.cardContentText}>
                Sistemas para internet
                01/2008 - 06/2011
            </Text>
            </Card>
        </View>
        </>
        );
};

const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
    },
    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10
    },
    redesSociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        marginTop: 20
    },
    cardContentText: {
        color: '#939393',
        marginBottom: 10
    },
});

export default App;