import styled from "@emotion/styled";
import { Box, Grid, Link, Typography } from "@mui/material";

const LastLine = styled(Typography)({
    color: '#696969',
    fontSize: '13px',
    lineHeight: '20px',
    display: 'inline-block',
    margin: '50px 20px 0 0'
})

const FooterLink = styled(Link)({
    color: '#1f1f1f',
    fontSize: '15px',
    lineHeight: '22px',
    marginRight: '40px'
})

export default function Footer() {
    return (
        <Box
            sx={{
                width: '1440px',
                height: '187px',
            }}>
            <Grid container
                justifyContent='center'
                alignItems='center'
                marginTop='56px'
                direction='column'>
                <Grid item
                    direction='row'>
                    <FooterLink href="#" target='_blank' underline='none'>Home</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>About</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Menu</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Info</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Contact</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Bookings</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Privacy Policy</FooterLink>
                </Grid>
                <Grid item
                    direction='row'
                    marginTop='20px'>
                    <FooterLink href="#" target='_blank' underline='none'>Style Guide</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Licenses</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Instructions</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Changelog</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>Password</FooterLink>
                    <FooterLink href="#" target='_blank' underline='none'>404</FooterLink>
                </Grid>
                <Grid item
                    direction='row'>
                    <LastLine>© Latte Cafe 2022.</LastLine>
                    <LastLine>Built by Nikolai Bain.</LastLine>
                    <LastLine>Powered by Webflow.</LastLine>
                </Grid>
            </Grid>
        </Box >
    )
}