import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';


// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';


// navList
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



const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className='w-full text-center' sx={{
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
                <Typography variant='body2' textAlign="center" color="gray">
                    @2024 The New Edge. Design by Aimco International.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;