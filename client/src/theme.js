import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#52c7b8',
            main: '#009688',
            dark: '#00675b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffd95b',
            main: '#ffa726',
            dark: '#c77800',
            contrastText: '#000',
        },
    },
})

export default theme