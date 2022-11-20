import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled'

const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: whitesmoke;
`
const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0, 0, 0 / 0.1);
`

export default function LoginPage() {
    return (
        // <MainLayout>
        //     <Helmet title='Login' />
        <StyledContainer>
            <StyledLoginContainer>
                <Button variant="outlined">
                    Sign in with Google
                </Button>
                <Button variant="outlined">
                    Sign in with Email
                </Button>
            </StyledLoginContainer>
        </StyledContainer>
        // </MainLayout>
    );
}