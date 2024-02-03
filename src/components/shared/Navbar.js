"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { Stack } from '@mui/material';


// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';

const navList = [
    {
        route: "Home",
        path: "/"
    },
    {
        route: "Page",
        path: "/page"
    },
    {
        route: "Category",
        path: "/category"
    },
    {
        route: "News",
        path: "/news"
    },
    {
        route: "About Us",
        path: "/about"
    },
    {
        route: "Contact",
        path: "/contact"
    },
];


const Navbar = () => {


    return (
        <AppBar className="bg-black" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            px: 2,
                            mx: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box className="w-full text-center">
                        {navList.map((route) => (
                            <Link key={route} href={route.path}>
                                <Button className='text-white'>
                                    {route.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box >
                        <Stack direction="row" className='space-x-2'>
                            <FacebookIcon />
                            <XIcon />
                            <RedditIcon />
                        </Stack>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
