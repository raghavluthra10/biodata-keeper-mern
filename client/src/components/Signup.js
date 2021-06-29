import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Signup = () => {

    const signup = (e) => {
        e.preventDefault();
    }

    return (
        <Container>

            <Form onClick={signup} >
                <Head>
                    Sign up
                </Head>

                <div>
                    <label> name </label>
                    <input type='text' />
                </div>
                <div>
                    <label> Email </label>
                    <input type='text' />
                </div>
                <div>
                    <label> Phone no.: </label>
                    <input type='text' />
                </div>
                <div>
                    <label> Work </label>
                    <input type='text' />
                </div>
                <div>
                    <label> Password </label>
                    <input type='password' />
                </div>
                <div>
                    <label> Confirm Password </label>
                    <input type='password' />
                </div>

                <Button type='submit' variant='outlined' style={{ margin: '10px 0' }}>
                    Signup
                </Button>

                <p>
                    already a user? 
                    <Link to='/login'>
                        Login
                    </Link>
                </p>
            </Form>
        </Container>      
    )
}

export default Signup

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
    height: 500px;
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