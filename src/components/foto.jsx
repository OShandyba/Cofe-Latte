import styled from "@emotion/styled";
import { Avatar, Box, Grid } from "@mui/material";
import FotoOne from '../img/2.png'
import FotoTwo from '../img/3.png'
import FotoThree from '../img/4.png'

const Img = styled(Avatar)({
    width: '644px',
    height: '300px',
    borderRadius: '0%',
    paddingLeft: '56px',
})

const ImgBig = styled(Avatar)({
    width: '644px',
    height: '640px',
    borderRadius: '0%',
    paddingRight: '56px',
})

export default function Foto() {
    return (
        <Box
            sx={{
                width: '1440px',
                height: '750px',
                paddingTop: '152px',
            }}>
            <Grid container
                justifyContent='space-between'>
                <Grid item>
                    <Grid item marginBottom='40px'><Img alt='foto' src={FotoOne} /></Grid>
                    <Grid item><Img alt='foto' src={FotoTwo} /></Grid>
                </Grid>
                <Grid item>
                    <ImgBig alt='foto' src={FotoThree} />
                </Grid>
            </Grid>
        </Box>
    )
}