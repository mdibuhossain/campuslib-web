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
import { Alert, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PageLayout from '../../Layout/PageLayout';

const Register = () => {
    const { signWithGoogle, name, setName, setEmail, setPassword, signUpWithEmail, isLoading, error, setError } = useAuth();
    const [emailWarning, setEmailWarning] = React.useState(" ");
    const [passwordWarning, setPasswordWarning] = React.useState(" ");

    const onChangeWarning = (event) => {
        if (event.target.name === 'email') {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))
                setEmailWarning("")
            else
                setEmailWarning("invalid email address")
        }
        else if (event.target.name === 'password') {
            if (event.target.value.length < 5)
                setPasswordWarning("At least 4 character")
            else
                setPasswordWarning("")
        }
    }

    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        setName(data.get('name'))
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
                        REGISTRATION
                    </Typography>

                    {/* Error message component start */}
                    {
                        error ? <Box sx={{ width: '100%' }}>
                            <Alert
                                variant="filled"
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setError('');
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mt: 2 }}
                            >
                                {error}
                            </Alert>
                        </Box> : null
                    }
                    {/* Error message component end */}

                    <Box component="form" onChange={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => onChangeWarning(e)}
                        />
                        <Typography variant="subtitle2">{emailWarning && emailWarning}</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => onChangeWarning(e)}
                        />
                        <Typography variant="subtitle2">{passwordWarning && passwordWarning}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!(!name || passwordWarning || emailWarning) ? false : true}
                            onClick={signUpWithEmail}
                        >
                            {isLoading ? <CircularProgress disableShrink={true} size={25} color="inherit" /> : 'SIGN UP'}
                        </Button>
                        <hr />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: 'red' }}
                            onClick={signWithGoogle}
                        >
                            {isLoading ? <CircularProgress disableShrink={true} size={25} color="inherit" /> : 'SIGN UP WITH GOOGLE'}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <NavLink to="/login">
                                    <Typography variant="body2" sx={{ "textDecoration": "none", color: "rgb(104, 104, 255)" }}>
                                        Already have an account?
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

export default Register;