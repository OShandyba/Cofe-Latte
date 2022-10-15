import styled from "@emotion/styled";
import { Box, Button, Grid, Typography, Avatar } from "@mui/material";
import MenuImg from '../img/5.png'

const Img = styled(Avatar)({
    height: '100%',
    width: '100%',
    borderRadius: '0%',
})

const MenuButton = styled(Button)({
    width: '530px',
    height: '58px',
    background: '#6F6F64',
    padding: '0',
    borderRadius: '0px',
    border: '2px solid #6F6F64',
    marginTop: '70px',
})

export default function Menu() {
    return (
        <Box
            sx={{
                height: '1277px',
                width: '1440px',
                bgcolor: '#E9E9E3'
            }}>
            <Grid container
                justifyContent="space-between">
                <Grid item
                    sx={{
                        margin: '120px 0 0 56px',
                    }}>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#6F6F64',
                        }}>
                        Menu
                    </Typography>

                    <Typography
                        sx={{
                            width: '558px',
                            fontSize: '32px',
                            lineHeight: '44px',
                            color: '#6F6F64',
                            letterSpacing: '1px'
                        }}>
                        We change our menu every season. Here is what we are currently dishing up.
                    </Typography>

                    <MenuButton variant="contained">Food</MenuButton>
                </Grid>
                <Grid item
                    sx={{
                        margin: '120px 56px 0 0',
                    }}>
                    <Img alt='menu' src={MenuImg} />
                </Grid>
            </Grid>
        </Box>
    )
}