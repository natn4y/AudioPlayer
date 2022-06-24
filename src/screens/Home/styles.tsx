import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.primary.main};
`
export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.primary.main};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`

export const ArtworkWrapper = styled.View`
  margin-top: 50px;
  margin-bottom: 25px;
  width: 250px;
  height: 320px;
`

export const Artwork = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

export const ArtistName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`

export const ArtistMusic = styled.Text`
  color: ${({ theme }) => theme.colors.secondary.gray[300]};
  font-size: ${RFValue(13)}px;
  font-weight: 600;
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
