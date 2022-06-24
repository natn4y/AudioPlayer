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

import theme from '../../global/styles/theme'

import {
  Container,
  BottomView,
  BottomWrapper,
} from './styles'

export default function Home() {
  return (
    <>
      <Container>
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
