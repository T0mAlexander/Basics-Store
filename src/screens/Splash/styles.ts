import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { fonts } from '@theme/index'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const style = StyleSheet.create({
  logo: {
    fontSize: 30,
    fontFamily: fonts.extraBold,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
})
