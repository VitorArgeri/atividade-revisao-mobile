import React from 'react';
import { COLORS } from '../Constants/colors';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Contact({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Contato</Text>
                <Text style={styles.text}>Fale com o desenvolvedor ou envie sugestões para melhorar o app!</Text>
                <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:suporte@witcher.com')}>
                    <Text style={styles.contactButtonText}>Enviar E-mail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('https://wa.me/5511999999999')}>
                    <Text style={styles.contactButtonText}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('https://instagram.com/witcher_game')}>
                    <Text style={styles.contactButtonText}>Instagram</Text>
                </TouchableOpacity>
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
        padding: 32,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        width: '100%',
        maxWidth: 400,
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
        marginBottom: 24,
        lineHeight: 24,
    },
    contactButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
        alignItems: 'center',
        elevation: 2,
    },
    contactButtonText: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    button: {
        backgroundColor: COLORS.accent,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 8,
        elevation: 2,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
