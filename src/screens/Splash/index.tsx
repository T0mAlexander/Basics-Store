import React from 'react'
import { Container } from './styles'
import { Text } from 'react-native'
import { style } from './styles'

export function Splash() {
  return (
    <Container>
      <Text style={style.logo}>basics</Text>
    </Container>
  )
}