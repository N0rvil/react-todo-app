import React, { useContext } from 'react'
import { AppBar, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import { useAppDispatch } from '@/redux/store'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useNavigate, Link } from 'react-router-dom'
import { ThemeSwitchContext } from '@/theme/theme'

export const Header = () => {
    const themeMaterial = useTheme()
    const dispatch = useAppDispatch()
    const { toggleColorMode } = useContext(ThemeSwitchContext)
    const navigate = useNavigate()
    const linkStyle = {
        textDecoration: 'none',
        color: '#FFF',
    }
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Stack direction={`row`} spacing={3} alignItems={`center`}>
                    <Typography variant={'h6'} component={'div'}>
                        <Link to={'/'} style={linkStyle}>
                            Dashboard
                        </Link>
                    </Typography>
                    <Typography variant={'h6'} component={'div'}>
                        <Link to={'/pokemon'} style={linkStyle}>
                            Pokemons
                        </Link>
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate('/sign-in')}
                    ></IconButton>
                </Stack>
                {themeMaterial.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {themeMaterial.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
