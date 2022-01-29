import styled from 'styled-components/native'

export const StyledTouchableOpacity = styled.TouchableOpacity(({ theme, width }) => ({
    width: `${width}%`,
    alignSelf: "flex-end",
    background: theme.INVERSE_BACKGROUND_COLOR
}))

export const StyledView = styled.View(({ theme }) => ({
    background: theme.PRIMARY_BACKGROUND_COLOR
}))

export const StyledImage = styled.Image(() => ({
    height: 20,
    width: 20,
    alignSelf: "center"
}))