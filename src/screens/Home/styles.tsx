import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image } from 'react-native'
import Slider from '@react-native-community/slider'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.primary.main};
`


export const MainContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`
export const BottomWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  border-top-color: ${({ theme }) =>
    theme.colors.primary.light};
  border-top-width: 2px;
`

export const BottomView = styled.View`
  width: 100%;
  padding: 0 50px;
  justify-content: space-between;
  flex-direction: row;
`
