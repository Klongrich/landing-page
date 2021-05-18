import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 45px;
    padding: 15px;

    background-color: #EEEEEE;

    h2 {
        font-size: 42px;
    }

    p {
        font-size: 28px;
    }

    a {
        color:black;
    }
`

const ArticleBox = styled.div`
    border-top: 2px solid black;
    padding: 42px;
`

export default function PastWritings () {

    return (
        <>
        <Container> 
            <h2>Past Wirtings</h2>

            <ArticleBox>
                <p>05/21/2021</p>
               <a href="/"> <p>Crypto Econmical and Polictial Turn Over</p> </a>
            </ArticleBox>

            <ArticleBox>
                <p>05/21/2021</p>
                <a href="/"> <p>Ethereum</p> </a>
            </ArticleBox>

            <ArticleBox>
                <p>05/21/2021</p>
                <a href="/"> <p>What is Mining?</p> </a>
            </ArticleBox>
        </Container>
        </>
    )
}