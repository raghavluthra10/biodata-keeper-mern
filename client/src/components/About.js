import React from 'react';
import styled from 'styled-components';
import raghavImage from '../images/raghavImage.jpeg'
import Button from '@material-ui/core/Button';

const About = () => {
    return (
        <Container>
            <FirstRow className='about__first'>
                <Form method=''>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Image src={raghavImage} alt='' />
                        </div>

                        <div className='col-md-4'>
                            <div>
                                <h5> Raghav Luthra </h5>
                                <h6> web developer </h6>
                            </div>
                        </div>
                    </div>

                    <Button type='submit' variant='outlined' >
                        Edit
                    </Button>
                </Form>
            </FirstRow>
            
            <SecondRow>
                <div>
                    <p> User Id </p>
                    <p> 7289373297703 </p>
                </div>
                <div>
                    <p> Name</p>
                    <p> Raghav Luthra </p>
                </div>
                <div>
                    <p> Email </p>
                    <p> ftdwyg@hudi.com  </p>
                </div>
                <div>
                    <p> Phone </p>
                    <p> 72893732 </p>
                </div>
                <div>
                    <p> Profession </p>
                    <p> web developer </p>
                </div>
                
            </SecondRow>
        </Container>
    )
}

export default About;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
`;

const FirstRow = styled.div`

`;

const Form = styled.form`

`;

const Image = styled.img`
    height: 250px;
`;

const SecondRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    div{
        display: flex;
        justify-content: space-between;
    }
`;