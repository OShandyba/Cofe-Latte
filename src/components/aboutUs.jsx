import { Box, Typography } from "@mui/material";

export default function AboutUs() {
    return (
        <Box
            sx={{
                height: '740px',
                width: '1440px',
                bgcolor: '#F5F5F5',
            }}>
            <Typography
                sx={{
                    width: '100px',
                    fontWeight: '700',
                    fontSize: '17px',
                    lineHeight: '22px',
                    paddingTop: '230px',
                    margin: '0 auto',
                }}>
                About Us
            </Typography>
            <Typography
                width='869px'
                sx={{
                    fontWeight: '400',
                    fontSize: '32px',
                    lineHeight: '44px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                Tucked away in the corner of Wellington, Latte Cafe is a local neighbourhood cafe and bar. Latte is all about doing what we love, in a city that we love. We keep stocked with local produce and pastries. Bring your family for a bite, or meet your friends for a coffee or warm drink.
            </Typography>
        </Box>
    )
}