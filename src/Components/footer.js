import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: white;
    padding-top:50px;
    background-color:black;

    h2 {
        font-size: 42px;
    }
`

const ContactForum = styled.div`
    border: 2px solid white;

    padding-top: -30px;
    padding: 15px;
    margin-left: 50px;

    height: 80%;
    width: 20%;
`

const InputBox = styled.input`
    width: 300px;
    height: 25px;
`

const MessageBox = styled.input`
    width: 300px;
    height: 75px;

`


export default function Footer() {
    return (
        <>
        <Container> 

            <ContactForum> 
            <h2>Contanct</h2>

            <h1>First Name</h1>
            <InputBox />

            <h1>Last Name</h1>
            <InputBox />

            <h1>E-Mail </h1>
            <InputBox />

            <h1> Message: </h1>
            <MessageBox />

            <br />
            <button>
                Submit
            </button>
            </ContactForum>


        </Container>
        </>
    )
}