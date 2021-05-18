import React from 'react'
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';

const Container = styled.div`
    padding: 15px;
    font-size: 30px;
    color: #00458B;

    background-color: #EEEEEE;
`

export default function Body() {

    return (
        <>
            <Container>
                <h2>Klongrich ......</h2>

                <div Style="text-align:right; margin-top: -87.5px;">
                <a Style="margin-right:42px;" href="/">Live Dapps</a>
                <a Style="margin-right:42px;" href="/">Blog</a>
                <Github size='42' color='black'  />
                </div>
            </Container>
        </>
    )
}