import { Box, Grid, Icon, Link, styled, Typography, Avatar } from "@mui/material";
import { MailOutline, Facebook, Instagram } from "@mui/icons-material";
import HeaderImg from '../img/1.png';

const HeaderLinkLeft = styled(Link)({
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '24px',
    color: '#D27487',
    fontWeight: '400',
    marginRight: '20px',
})

const HeaderLinkRight = styled(Link)({

    color: '#C67A88',
})

const Img = styled(Avatar)({
    margin: '20px 0 0 56px',
    width: '1328px',
    height: '644px',
    borderRadius: '0%'
})

export default function Header() {
    return (
        <Box
            sx={{
                bgcolor: '#4A2B33',
                width: '1440px',
                height: '800px'
            }}>
            <Grid container
                justifyContent='space-between'>
                <Grid item
                    margin='40px 0 0 56px'>
                    <HeaderLinkLeft
                        href="#"
                        target='_blank'
                        underline="none">
                        About
                    </HeaderLinkLeft>
                    <HeaderLinkLeft
                        href="#"
                        target='_blank'
                        underline="none">
                        Menu
                    </HeaderLinkLeft>
                    <HeaderLinkLeft
                        href="#"
                        target='_blank'
                        underline="none">
                        Info
                    </HeaderLinkLeft>
                    <HeaderLinkLeft
                        href="#"
                        target='_blank'
                        underline="none">
                        Booking
                    </HeaderLinkLeft>
                </Grid>
                <Grid item>
                    <Typography
                        marginTop='20px'
                        fontFamily='Inter'
                        fontSize='40px'
                        color='#D27487'
                        wordSpacing='10px'
                        fontWeight='700'> LATTE CAFE </Typography>
                </Grid>
                <Grid item
                    margin='40px 56px 0 0'>
                    <HeaderLinkRight
                        href="#"
                        target='_blank'
                        underline="none">
                        <Icon
                            style={{ width: '40px', height: '39px' }}>
                            <MailOutline style={{ fontSize: 26 }} />
                        </Icon>
                    </HeaderLinkRight>
                    <HeaderLinkRight
                        href="#"
                        target='_blank'
                        underline="none">
                        <Icon
                            style={{ width: '40px', height: '40px' }}>
                            <Facebook style={{ fontSize: 26 }} />
                        </Icon>
                    </HeaderLinkRight>
                    <HeaderLinkRight
                        href="#"
                        target='_blank'
                        underline="none">
                        <Icon
                            style={{ width: '40px', height: '40px' }}>
                            <Instagram style={{ fontSize: 26 }} />
                        </Icon>
                    </HeaderLinkRight>
                </Grid>
            </Grid>
            <Img alt="foto1" src={HeaderImg} />
        </Box>
    )
}