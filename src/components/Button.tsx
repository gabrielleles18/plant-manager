import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet, Text} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} {...rest}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  }
})
