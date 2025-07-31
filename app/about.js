import React from 'react';
import { COLORS } from '../Constants/colors';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('../assets/images/TheWitcherCellphoneWallpaper.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.title}>Sobre The Witcher 3</Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>The Witcher 3: Wild Hunt</Text> é um RPG de ação em mundo aberto, desenvolvido pela <Text style={styles.bold}>CD Projekt Red</Text>.
                </Text>
                <Text style={styles.text}>
                    Você controla <Text style={styles.bold}>Geralt de Rívia</Text>, um bruxo caçador de monstros, explorando cenários incríveis, enfrentando criaturas e tomando decisões que afetam o destino dos personagens e reinos.
                </Text>
                <Text style={styles.text}>
                    O jogo é reconhecido por sua narrativa profunda, gráficos impressionantes, trilha sonora épica e liberdade de escolhas. Prepare-se para viver uma aventura inesquecível!
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        width: '100%',
        maxWidth: 400,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginBottom: 18,
        borderWidth: 3,
        borderColor: COLORS.primary,
    },
    title: {
        color: COLORS.text,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
    },
    text: {
        color: COLORS.textSecondary,
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 28,
        lineHeight: 24,
    },
    bold: {
        color: COLORS.text,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 8,
        elevation: 2,
    },
    buttonText: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
