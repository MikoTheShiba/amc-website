import React from 'react';
import {Typography, Box} from '@mui/material';
import hmo01 from '../media/hmo01.png'
import hmo02 from '../media/hmo02.png'
import hmo03 from '../media/hmo03.png'
import hmo04 from '../media/hmo04.png'
import hmo05 from '../media/hmo05.png'
import hmo06 from '../media/hmo06.png'
import hmo07 from '../media/hmo07.png'
import hmo08 from '../media/hmo08.png'
import hmo09 from '../media/hmo09.png'
import hmo10 from '../media/hmo10.png'
import hmo11 from '../media/hmo11.png'
import hmo12 from '../media/hmo12.png'
import hmo13 from '../media/hmo13.png'
import hmo14 from '../media/hmo14.png'
import hmo15 from '../media/hmo15.png'
import hmo16 from '../media/hmo16.png'
import hmo17 from '../media/hmo17.png'
import hmo18 from '../media/hmo18.png'
import hmo19 from '../media/hmo19.png'
import hmo20 from '../media/hmo20.png'
import hmo21 from '../media/hmo21.png'
import hmo22 from '../media/hmo21.png'

import Slider from "react-slick"; import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";

const settings = { infinite: true, speed: 2500, autoplay: true, autoplaySpeed: 0, cssEase: "linear", slidesToShow: 4, slidesToScroll: 1, };

const images = [
    hmo01,
    hmo02,
    hmo03,
    hmo04,
    hmo05,
    hmo06,
    hmo07,
    hmo08,
    hmo09,
    hmo10,
    hmo11,
    hmo12,
    hmo13,
    hmo14,
    hmo15,
    hmo16,
    hmo17,
    hmo18,
    hmo19,
    hmo20,
    hmo21,
    hmo22,
  
];



const Home = () => {
    return (
        <div>
            <Typography>1Under Construction</Typography>
            <Typography>2Under Construction</Typography>
            <Typography>3Under Construction</Typography>
            <Typography>4Under Construction</Typography>
            <Typography>5Under Construction</Typography>
            <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", height: 200 }} >
            <Slider {...settings}>
                {images.concat(images).map((src, i) => (
                    <Box
                        key={i}
                        component="img"
                        src={src}
                        alt={`gallery-${i}`}
                        sx={{
                            height: 200,          // uniform height
                            width: "100%",        // fill slide width
                            objectFit: "cover",   // crop to fit nicely
                            p: 1,                 // padding for spacing
                        }}
                    />
                ))}
            </Slider>
            </Box>
        </div>
    )
}

export default Home;




