import {SafeAreaView, View, StyleSheet, Text} from "react-native";
import React from "react";
import Emoji from "react-native-emoji";
import {Button} from "../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {useNavigation} from "@react-navigation/native";
import {useRoute} from "@react-navigation/core";

interface Params {
    title: string,
    subTitle: string,
    buttonTitle: string,
    icon: 'wink' | 'hugging_face',
    nextSreen: string
}

export function Confirmation() {
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        nextSreen
    } = routes.params as Params;

    function handleMoveOn() {
        navigation.navigate(nextSreen);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Emoji name={icon} style={styles.emoji}/>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subTitle}
                </Text>
                <View style={styles.footer}>
                    <Button
                        title={buttonTitle}
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    emoji: {
        fontSize: 78
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 35
    }
})
