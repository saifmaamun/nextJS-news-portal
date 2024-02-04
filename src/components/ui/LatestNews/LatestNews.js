import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import latestImage from '../../../app/assets/latest1.png';
import gridImage1 from '../../../app/assets/latest2.png';
import gridImage2 from '../../../app/assets/latest3.png';
import gridImage3 from '../../../app/assets/latest4.png';
import gridImage4 from '../../../app/assets/latest5.png';
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box>
            <Card className='w-full my-4'>
                <CardActionArea>
                    <CardMedia>

                        <Image src={latestImage} width='800' alt='latestNews' />
                    </CardMedia>

                    <CardContent>
                        <p className=
                            "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                        >
                            Technology
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-2'>
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card className='w-full my-4'>
                        <CardActionArea>
                            <CardMedia>

                                <Image src={gridImage1} width='800' alt='latestNews' />
                            </CardMedia>

                            <CardContent>
                                <p className=
                                    "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                >
                                    Technology
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className='w-full my-4'>
                        <CardActionArea>
                            <CardMedia>

                                <Image src={gridImage2} width='800' alt='latestNews' />
                            </CardMedia>

                            <CardContent>
                                <p className=
                                    "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                >
                                    Technology
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className='w-full my-4'>
                        <CardActionArea>
                            <CardMedia>

                                <Image src={gridImage3} width='800' alt='latestNews' />
                            </CardMedia>

                            <CardContent>
                                <p className=
                                    "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                >
                                    Technology
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className='w-full my-4'>
                        <CardActionArea>
                            <CardMedia>

                                <Image src={gridImage4} width='800' alt='latestNews' />
                            </CardMedia>

                            <CardContent>
                                <p className=
                                    "bg-red-500 px-2 text-white my-5 rounded w-[100px]"
                                >
                                    Technology
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    By Saif Maamun - Feb 04 2024
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default LatestNews;