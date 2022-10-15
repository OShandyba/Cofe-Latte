import { Box, Grid, styled, Typography } from "@mui/material";

const HeadTypo = styled(Typography)({
    fontFamily: 'sans-serif',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '22px',
    textAlign: 'center',
    marginBottom: '20px'
})

const BodyTypo = styled(Typography)({
    fontWeight: '400',
    fontSize: '25px',
    lineHeight: '36px',
    textAlign: 'center',
})

export default function WorkHours() {
    return (
        <Box
            sx={{
                width: '1440px',
                height: '473px',
                bgcolor: '#AA9E54',
                color: '#fff'
            }}>
            <Grid container
                justifyContent='space-between'
                paddingTop='120px'>
                <Grid item>
                    <HeadTypo
                        sx={{
                            marginLeft: '141px'
                        }}>
                        Location
                    </HeadTypo>
                    <BodyTypo
                        sx={{
                            marginLeft: '141px'
                        }}>
                        101 Cuba St, <br /> Te Aro, Wellington
                    </BodyTypo>
                </Grid>
                <Grid item>
                    <HeadTypo
                        sx={{
                            textAlign: 'center'
                        }}>
                        Hours
                    </HeadTypo>
                    <BodyTypo>
                        Tuesday to Friday <br /> 7AM - 3PM
                    </BodyTypo>
                    <BodyTypo
                        sx={{
                            marginTop: '40px'
                        }}>
                        Saturday to Sunday <br /> 8AM - 3PM
                    </BodyTypo>
                </Grid>
                <Grid item>
                    <HeadTypo
                        sx={{
                            marginRight: '75px'
                        }}>
                        Mondays?
                    </HeadTypo>
                    <BodyTypo
                        sx={{
                            marginRight: '75px'
                        }}>
                        We are closed on Mondays <br />to reflect and refuel
                    </BodyTypo>
                </Grid>
            </Grid>
        </Box>
    )
}