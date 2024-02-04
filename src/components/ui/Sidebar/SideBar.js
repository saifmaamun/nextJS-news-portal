import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import sideImage from '../../../assets/sidebar1.png'
import lowBarImage from '../../../assets/lowbar1.png'
import Image from 'next/image';

const SideBar = () => {
    return (
        <Box>
            <Box className='w-full border-b-2'>
                <CardActionArea>
                    <CardMedia>

                        <Image src={sideImage} alt='latestNews' />
                    </CardMedia>

                    <CardContent>
                        <p className=
                            "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                        >
                            Technology
                        </p>
                        <Typography gutterBottom variant="h6" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="body2" className='my-2'>
                            By Saif Maamun - Feb 04 2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full border-b-2 py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full py-4'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={sideImage} alt='latestNews' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle2" fontWeight='bold' component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography gutterBottom variant="caption" color='gray' className='my-2'>
                            Feb 04 2024
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box className='w-full  py-4'>
                <Image src={lowBarImage} alt='lowbar image' />
            </Box>
        </Box>
    );
};

export default SideBar;