import styled from 'styled-components/native'

export const FooterView = styled.View(() => ({
    flex: 1,
    alignItems: 'center',
    marginTop: '20px',
}))

export const FooterText = styled.Text(({ theme }) => ({
    fontSize: 16,
    color: theme.SECONDARY_TEXT_COLOR
}))

export const FooterLink = styled.Text(({ theme }) => ({
    fontWeight: "bold",
    fontSize: 16,
    color: theme.LINK_COLOR
}))

export const AppView = styled.View(({ theme }) => ({
    background: theme.PRIMARY_BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
}))

export const TextInput = styled.TextInput(({ theme }) => ({
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    border: `1px solid ${theme.BORDER_COLOUR}`,
    marginTop: 10,
    marginBottom: 10,
    width: '85%',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 5,
    paddingRight: 5
}))

export const TouchableOpacityButton = styled.TouchableOpacity(() => ({
    backgroundColor: '#5FB6CD',
    marginTop: 10,
    marginBottom: 10,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    width: '85%',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 5,
    paddingRight: 5
}))

export const TouchableOpacityButtonText = styled.Text(({ theme }) => ({
    color: theme.PRIMARY_BUTTON_COLOR,
    fontSize: 16,
    fontWeight: "bold"
}))

export const LogoImage = styled.Image(() => ({
    flex: 1,
    height: 120,
    width: 200,
    alignSelf: "center",
    margin: 30
}))

export const SiteText = styled.Text(({ theme }) => ({
    color: theme.PRIMARY_TEXT_COLOR,
    fontSize: 16
}))