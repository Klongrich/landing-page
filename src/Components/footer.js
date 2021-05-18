import React, {useState, useEffect} from 'react';
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

    float: left;
    padding-top: -80px;
    padding: 15px;
    margin-left: 50px;

    height: 80%;
    width: 20%;
`

const InputBox = styled.input`
    width: 300px;
    height: 25px;

    :focus{
        outline: 3px solid white;
    }
`

const MessageBox = styled.textarea`
    width: 300px;
    height: 75px;
    resize: none;

    :focus{
        outline: 3px solid white;
    }

`

const SubmitButton = styled.button`
    margin-top: 30px;
    padding: 10px;
    padding-left: 35px;
    padding-right: 35px;
    border: 2px solid white;
    font-size: 28px;
    color: white;
    background-color: black;

    :hover {
        background-color: purple;
    }
`

export default function Footer() {
    
    const [wordCount, setWordCount] = useState(0);
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [email, setEmail] = useState("Email");
    const [message, setMessage] = useState("Messages");

    function submitData() {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(message);
    }

    function updateWordCount(key) {
        if (key == 8) {
            if (wordCount > 0) {
                setWordCount(wordCount - 1);
            }
        } else {
            if (wordCount < 150) {
                setWordCount(wordCount + 1);
            }
        }
    }

    return (
        <>
        <Container> 

            <ContactForum> 
                <h2>Contanct</h2>

                <h1>First Name</h1>
                <InputBox onChange={e => setFirstName(e.target.value)} />

                <h1>Last Name</h1>
                <InputBox onChange={e => setLastName(e.target.value)} />

                <h1>E-Mail </h1>
                <InputBox onChange={e => setEmail(e.target.value)} />

                <h1> Message: </h1>
                <MessageBox onChange={e => setMessage(e.target.value)}
                            onKeyDown={e => updateWordCount(e.keyCode)} 
                            maxLength="150"
                            />

                <p>Word Count: {wordCount} / 150</p>
                <br />
                <SubmitButton onClick={() => submitData()}>
                    Submit
                </SubmitButton>
            </ContactForum>

        <div Style="border: 2px solid white; 
                    padding: 15px; 
                    height: 750px;
                    margin-left: 500px;
                    maring-bottom: 200px;">
            <h2>About</h2>

            <p>Starting computer programming at ages 16 - 17. </p>
            <p>Pursured further education at <a href="https://www.42.fr/"> Ecole 42 </a> in the SF / bay year. </p>
            <p>Now full time freelance software developer</p>

            <h2>Visitd Countries</h2>
            <p>Large fan of travel, have been able to see a good amouhnt of Eurpope</p>
            
            <ul>
                <li>Iceland</li>
                <li>Netherlands</li>
                <li>Belguim</li>
                <li>France</li>
                <li>Switzerland</li>
                <li>Germany</li>
                <li>Denmark</li>
                <li>Sweden</li>
                <li>Norway</li>
            </ul>

            <ul>
                <li>Poland</li>
                <li>Austria</li>
                <li>Slovika</li>
                <li>Chezc Republic</li>
                <li>Hungray</li>
                <li>Croaita</li> 
                <li>Slovenia</li>
                <li>Linchestien</li> 
                <li>United Kingdom</li>
                <li>Ireland</li>             
            </ul>

            <p>Have a blog <a href="/"> here </a> </p>
        </div>

        </Container>
        </>
    )
}