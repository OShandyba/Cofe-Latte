import { Box, Grid, Typography } from "@mui/material";

export default function Awards() {
    return (
        <Box
            sx={{
                width: '1440px',
                height: '461px',
                bgcolor: '#4A2B33',
            }}>
            <Grid container
                justifyContent='space-between'>
                <Grid item>
                    <Typography
                        sx={{
                            margin: '120px 0 0 56px',
                            width: '400px',
                            color: '#D27487',
                            fontSize: '47px',
                            lineHeight: '62px',
                            letterSpacing: '4px'
                        }}>
                        Award winning cafe and bar.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            margin: '139px 109px 0 0',
                            width: '600px',
                            fontSize: '18px',
                            lineHeight: '27px',
                            color: '#D27487',
                            letterSpacing: '1px'
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}