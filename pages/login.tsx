import React from 'react';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled'
import { MainLayout } from '@/component/layout/index'

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
    padding: 50px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0, 0, 0 / 0.1);
`

const StyledTypography = styled(Typography)`
    color: black;
    text-align: center;
    margin: 20px;
`

const StyledButton = styled(Button)`
    margin: 10px;
    width: 100%;
`

export default function LoginPage() {
    return (
        <MainLayout>
            {/* <Helmet title='Login' /> */}
            <StyledContainer>
                <StyledLoginContainer>
                    <StyledTypography variant='h2'>Login</StyledTypography>
                    <StyledButton variant="outlined">
                        Sign in with Google
                    </StyledButton>
                    <StyledButton variant="outlined">
                        Sign in with Email
                    </StyledButton>
                </StyledLoginContainer>
            </StyledContainer>
        </MainLayout>
    );
}
