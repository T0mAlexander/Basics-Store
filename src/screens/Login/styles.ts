import { fonts, light } from '@theme/index'
import {
  ImageProps,
  StyleSheet,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container: React.FC<ViewProps> = styled.View`
  flex: 1;
`

export const CarouselContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${light.colours.secondary};
`

const SlideImg: React.FC<ImageProps> = styled.Image`
  flex: 1;
  object-fit: fill;
  max-height: 566px;
`
export const AnimatedSlideImg = Animated.createAnimatedComponent(SlideImg)

export const PaginationContainer: React.FC<ViewProps> = styled.View`
  flex: 1;
  position: absolute;
  flex-direction: row;
  column-gap: 8px;
  align-self: center;
  bottom: 36px;
`

export const SlideDot: React.FC<ViewProps> = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 50px;
`
export const AnimatedSlideDot = Animated.createAnimatedComponent(SlideDot)

export const SlideText = styled.View`
  align-items: center;
  margin-bottom: 40px;
`

export const style = StyleSheet.create({
  SlideTitle: {
    fontFamily: fonts.bold,
    color: light.colours.secondary,
    textTransform: 'uppercase',
    marginTop: 40,
    letterSpacing: 1,
    fontSize: 24,
    alignSelf: 'center',
  },
})

export const SlideDescription = styled.Text`
  font-family: ${fonts.regular};
  font-size: 16px;
  max-width: 250px;
  color: ${light.colours.text.lightGray};
  text-align: center;
  margin-top: 80px;
`

export const UserArea = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const RegisterButton: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  height: 60px;
  width: 80%;
  background-color: ${light.colours.secondary};
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const RegisterButtonText = styled.Text`
  text-transform: uppercase;
  color: ${light.colours.primary};
  font-family: ${fonts.bold};
`

export const LoginButton: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  height: 60px;
  width: 80%;
  background-color: ${light.colours.primary};
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  border-width: 0.5px;
`

export const LoginButtonText = styled.Text`
  text-transform: uppercase;
  color: ${light.colours.text.black};
  font-family: ${fonts.bold};
`
