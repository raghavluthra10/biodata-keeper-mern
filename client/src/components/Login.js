import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const login = (e) => {
        e.preventDefault();
    }

    return (
        <Container>

            <Form onClick={login} >
                <Head>
                    Login
                </Head>

                <div>
                    <label> Email </label>
                    <input type='text' />
                </div>
                <div>
                    <label> Password </label>
                    <input type='password' />
                </div>

                <Button type='submit' variant='outlined' style={{ margin: '10px 0' }}>
                    Login
                </Button>

                <p>
                    Not a user? 
                    <Link to='/signup'>
                        Sign up
                    </Link>
                </p>
            </Form>
        </Container>

    )
}

export default Login;

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    height: 350px;
    justify-content: space-between;
    background-color: aliceblue;
    border-radius: 10px;

    div{
        display: flex;
        flex-direction: column;
    }
`;

const Head = styled.h1`
    text-align: center;
`;