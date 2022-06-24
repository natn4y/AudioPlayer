import React from 'react'
import {
  View,
  Text,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'

import theme from '../../global/styles/theme'

import {
  Container,
  Title,
  MainContainer,
  BottomView,
  Wrapper,
  BottomWrapper,
  ArtworkWrapper,
  Artwork,
  ArtistName,
  ArtistMusic,
  SliderWrapper,
} from './styles'

export default function Home() {
  const styles = StyleSheet.create({
    ArtworkWrapperStyle: {
      elevation: 6,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: '#0062ff',
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  })
  return (
    <>
      <Container>
        <Wrapper>
          <MainContainer>
            <Title>https://github.com/natn4y</Title>

            <ArtworkWrapper
              style={styles.ArtworkWrapperStyle}
            >
              <Artwork
                source={require('../../assets/images/nirvana.webp')}
              />
            </ArtworkWrapper>
            <ArtistName>NIRVANA</ArtistName>
            <ArtistMusic>Something in the Way</ArtistMusic>
            <SliderWrapper
              value={10}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={theme.colors.primary.light}
              minimumTrackTintColor={
                theme.colors.primary.light
              }
              maximumTrackTintColor={theme.colors.shape}
              onSlidingComplete={() => {}}
            />
          </MainContainer>
        </Wrapper>
        <BottomWrapper>
          <BottomView>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="heart-outline"
                size={30}
                color={theme.colors.shape}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="repeat"
                size={30}
                color={theme.colors.shape}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="share-outline"
                size={30}
                color={theme.colors.shape}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="ellipsis-horizontal"
                size={30}
                color={theme.colors.shape}
              />
            </TouchableOpacity>
          </BottomView>
        </BottomWrapper>
      </Container>
    </>
  )
}
