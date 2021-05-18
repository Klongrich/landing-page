import React from "react";
import styled from 'styled-components';
import LIDlogo from '../lid.png';
import NFTYlogo from '../nftyswaps.jpg';

const Container = styled.div`
  margin: 0p;
  
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  
  background-color: #EEEEEE;

  p {
      font-size: 28px;
  }

  a {
      font-size: 24px;
  }
  
  li {
    color: #99DDFa;
    display: block;
    font-size:32px;
  }

  h2 {
    color: #3FD2C7;
    font-size: 42px;
  }

  ul {
      list-style-type: circle;
  }
`

const CompnayContainer = styled.div`
  margin-top: 20px;
  margin-left: -35px;
  border-top: 2px solid black;
`

export default function PastCompanys () {

    return (
        <>
        <Container>
            <h2 Style="color:#3FD2C7;">Past Companys</h2>

            <ul>
                <CompnayContainer>
                    <h2>LID</h2> 
                    <img src={LIDlogo} />
                    <p>Time: 3 - months</p>
                    <p>Acomplished:</p>
                    <ul>
                        <li>Created a wrote a decentralized blog</li> <br />
                        <li>Helped implement analyatic tools and tracking of the webstie</li> <br />
                        <li>Created app to help automate creationg of pre-sales</li> <br />
                        <li>Impoved Staking Dapp by fixing broken refferal code links</li> <br />
                    </ul>
                    <br />
                    <a href ="https://www.lid.sh">https://www.lid.sh</a>
                </CompnayContainer>

                <CompnayContainer>
                    <h2>Nfty Swaps</h2> <img src={NFTYlogo} />
                    <p> Time: 2 - months</p>
                    <p>Acomplished</p>
                        <ul>
                            <li>Created a decentralized swapping contract for NFTs</li> <br />
                            <li>Implemented functionality for ERC20, ETH, or NFT transfers</li> <br />
                        </ul>
                    <br />
                    <a href ="https://nftyswaps.com/"> https://www.nftyswaps.com</a>
                </CompnayContainer>  
            </ul>
        </Container>
        </>
    )
}