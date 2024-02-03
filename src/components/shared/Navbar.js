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
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from './Header';
import logo from '../../app/assets/Logo.png'
import Image from 'next/image';

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
        <>
            <Header />
            <AppBar className="bg-black" position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{
                            m: 2,
                            display: { xs: 'none', md: 'flex' },

                        }}>
                            <Image src={logo} alt='logo' ></Image>
                        </Box>
                        <Box sx={{
                            m: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,

                        }}>
                            <Image src={logo} alt='logo' ></Image>
                        </Box>

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
                            <Stack direction="row" sx={{
                                "& svg": {
                                    color: 'white',
                                }
                            }}>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <XIcon />
                                </IconButton>
                                <IconButton>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton>
                                    <RedditIcon />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                            </Stack>
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar >
        </>
    );
}
export default Navbar;
