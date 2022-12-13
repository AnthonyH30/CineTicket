import { Text } from 'react-native';
import React from 'react';
import { styles } from './styles'

export default function Title({text, style}) {
  return (
      <Text style={[styles.title, style]}>{text}</Text>
  )
}