import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import PageLayout from '../../Layout/PageLayout';

const Login = () => {
    const { signWithGoogle, error, email, password, signInWithEmail, setEmail, setPassword, isLoading } = useAuth();

    const handleChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmail(data.get('email'))
        setPassword(data.get('password'))
    };

    return (
        <PageLayout>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#9C27B0' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        SIGN IN
                    </Typography>
                    {
                        error &&
                        <Typography variant="caption" sx={{ mt: 1, background: 'rgb(234, 56, 56)', color: 'white', px: '1.12rem', py: '0.2rem', borderRadius: 10 }}>
                            {error}
                        </Typography>
                    }
                    <Box component="form" onChange={handleChange} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={(email && password) ? false : true}
                            onClick={signInWithEmail}
                        >
                            {isLoading ? <CircularProgress disableShrink={true} size={25} color="inherit" /> : 'Sign In'}
                        </Button>
                        <hr />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: 'red' }}
                            onClick={signWithGoogle}
                        >
                            {isLoading ? <CircularProgress disableShrink={true} size={25} color="inherit" /> : 'Sign In with Google'}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <NavLink to="/signup">
                                    <Typography variant="body2" sx={{ "textDecoration": "none", color: "rgb(104, 104, 255)" }}>
                                        Don't have an account? Sign Up
                                    </Typography>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </PageLayout>
    );
}

export default Login;