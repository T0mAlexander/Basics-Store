/* eslint-disable @typescript-eslint/no-var-requires */
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  LoginButton,
  LoginButtonText,
  PaginationContainer,
  RegisterButton,
  RegisterButtonText,
  SlideDescription,
  AnimatedSlideImg,
  SlideDot,
  SlideText,
  CarouselContainer,
  UserArea,
  style,
} from './styles'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import { light } from '@theme/index'
import Carousel from 'react-native-reanimated-carousel'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'

export default function Login() {
  const [CurrentSlide, SetCurrentSlide] = useState(0)

  const slide1 = require('@assets/slide-1.jpg')
  const slide2 = require('@assets/slide-2.jpg')
  const slide3 = require('@assets/slide-3.jpg')

  const SlideImages = [
    {
      title: 'Elegance in simplicity',
      img: slide1,
    },
    {
      title: 'Dare to be remarkable',
      img: slide2,
    },
    {
      title: 'Stylishly with minimal',
      img: slide3,
    },
  ]

  const { width } = Dimensions.get('window')
  const height = width * 1.5

  const Position = useSharedValue(0)

  const SlideGesture = Gesture.Pan().onStart((Event) => {
    Position.value = Event.translationX
  })

  const AnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: Position.value }],
  }))

  const Opacity = useSharedValue(0)
  const FadeInScroll = () => {
    Opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease,
    })
  }

  const TextAnimation = useAnimatedStyle(() => {
    return {
      opacity: Opacity.value,
    }
  })

  return (
    <Container>
      <StatusBar translucent />
      <CarouselContainer>
        <GestureHandlerRootView>
          <GestureDetector gesture={SlideGesture}>
            <Carousel
              data={SlideImages}
              autoPlay
              width={width}
              height={height}
              scrollAnimationDuration={2000}
              onScrollEnd={(index: number) => SetCurrentSlide(index)}
              onSnapToItem={(index) => SetCurrentSlide(index)}
              renderItem={({ item }) => (
                <AnimatedSlideImg
                  source={item.img}
                  style={[{ height, width }, AnimatedStyles]}
                />
              )}
            />
          </GestureDetector>
        </GestureHandlerRootView>
        <PaginationContainer>
          <Carousel
            data={SlideImages}
            height={7}
            width={16}
            loop={false}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
            renderItem={({ index }) => (
              <SlideDot
                key={index}
                style={
                  index === CurrentSlide
                    ? { backgroundColor: light.colours.primary }
                    : { backgroundColor: light.colours.text.altGray }
                }
              />
            )}
          />
        </PaginationContainer>
      </CarouselContainer>
      <SlideText>
        <Carousel
          style={{
            position: 'absolute',
          }}
          height={100}
          width={width}
          autoPlay
          onScrollBegin={FadeInScroll}
          scrollAnimationDuration={2000}
          data={SlideImages}
          renderItem={({ item, index }) => (
            <Animated.Text
              style={[style.SlideTitle, TextAnimation]}
              key={index}
            >
              {item.title}
            </Animated.Text>
          )}
        />
        <SlideDescription>
          Matching Simplicity and Comfort for your daily basic needs
        </SlideDescription>
      </SlideText>
      <UserArea>
        <RegisterButton activeOpacity={0.8}>
          <RegisterButtonText>register</RegisterButtonText>
        </RegisterButton>
        <LoginButton activeOpacity={0.5}>
          <LoginButtonText>log in</LoginButtonText>
        </LoginButton>
      </UserArea>
    </Container>
  )
}
