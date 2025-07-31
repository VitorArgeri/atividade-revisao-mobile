import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';
import { COLORS } from '../Constants/colors';
import CustomButton from '../components/CustomButton';
import WitcherSkeleton from '../components/Skeleton';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function WitcherIndex({ navigation }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return <WitcherSkeleton />;
    }
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/images/TheWitcherAmulet.png')} style={styles.image} />
                    <Card.Content>
                        <Title style={styles.title}>The Witcher 3</Title>
                        <Paragraph style={styles.description}>
                            Viva aventuras épicas com <Text style={styles.bold}>Geralt de Rívia</Text> em um mundo repleto de monstros, magia e escolhas difíceis. Prepare-se para explorar, lutar e decidir o destino dos reinos!
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <CustomButton
                            title="Sobre o Jogo"
                            onPress={() => navigation.navigate('About')}
                            style={styles.button}
                            textStyle={styles.buttonText}
                        />
                        <CustomButton
                            title="Contato"
                            onPress={() => navigation.navigate('Contact')}
                            style={styles.button}
                            textStyle={styles.buttonText}
                        />
                    </Card.Actions>
                </Card>
            </View>
        </PaperProvider>
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
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        letterSpacing: -2,
    },
    description: {
        color: COLORS.textSecondary,
        fontSize: 18,
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
        marginBottom: 12,
        width: '100%',
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});


