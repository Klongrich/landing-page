import React from 'react'
import styled from 'styled-components';
import SmartContractBackground from './smart_contract.png'

const Container = styled.div`
    padding:15px;
    margin-bottom: 35px; 

    font-size: 50px;
    color: #99DDFa;

    background-color: #3E00FF ;

`

export default function Body() {

    return (
        <>
            <Container>
                <p>I help develope and test SmartContracts in the web3 space</p>
                
                
                <div Style="width:25%;"> 
                    <p>Over 5 years experince <strong> developing </strong> <strong> testing </strong> and <strong> shipping </strong> software</p>
                </div>

                <div Style="text-align:right; margin-top:-345px; margin-right:150px;">               
                <img src={SmartContractBackground} width="20%" height="350px"/>
                </div>
            </Container>
        </>
    )
}