import { getCurrentDateInfo } from '@/utils/getDate';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headerlogo from '../../assets/headerLogo.png'

const Header = () => {
    const date = getCurrentDateInfo()
    return (
        <Box>
            <Container className='my-5'>
                <Box>
                    <Image className=" mx-auto" src={headerlogo} alt='logo' ></Image>
                </Box>
                <Typography variant='body2' textAlign="center" color="gray" className='my-2'>
                    journalism Without Fear or Favour
                </Typography>
                <Typography variant='body1' textAlign="center" color="teal">
                    {date}
                </Typography>
            </Container>

        </Box>
    );
};

export default Header;