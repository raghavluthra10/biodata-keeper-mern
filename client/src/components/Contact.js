import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Contact = () => {


    const sendMessage = e => {
        e.preventDefault();
    
    };

    return (
        <Container>
            
            <Form onClick={sendMessage}>
                <h1>
                    Contact us
                </h1>
                
                <div>
                    <label> Name </label>
                    <input type='text' required />
                </div>
                <div>
                    <label> Phone </label>
                    <input type='number' required />
                </div>
                <div>
                    <label> Email </label>
                    <input type='text' required />
                </div>
            
               
               <div>
                    <label> Message </label>
                    <textarea type='text' required />
               </div>
               <Button variant='outlined' type='submit'>
                    Send Message
               </Button>
            </Form>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding-top: 100px;
`;

const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
    }
`;

