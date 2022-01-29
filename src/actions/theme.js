// define type
export const SWITCH_THEME = 'SWITCH_THEME'

// dispatch actions
export const switchTheme = (theme) => dispatch => {
    dispatch({
        type: SWITCH_THEME,
        theme
    })
}
