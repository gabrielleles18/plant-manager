import {SafeAreaView, View, StyleSheet, Text} from "react-native";
import React from "react";
import Emoji from "react-native-emoji";
import {Button} from "../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {useNavigation} from "@react-navigation/native";

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Emoji name="wink" style={styles.emoji}/>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das
          suas plantinhas com muito cuitado
        </Text>
        <View style={styles.footer}>
          <Button
            title="Começar"
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
