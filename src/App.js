import styled from 'styled-components';
import Header from './Components/header'
import Body from './Components/body';
import PastCompanys from './Components/past_companys'
import PastWritings from './Components/past_writings'
import Footer from './Components/footer'

const Container = styled.div`
  margin:0px;
  padding:15px;
  

  li {
    color: #99DDFa;
    display: inline-block;
  }

  h2 {
    color: #3FD2C7;
    font-size: 42px;
  }
`

export default function App() {
  return (
    <>
    <Header />
    <Container>
      <Body />
      <PastCompanys />
      <PastWritings />
    </Container>
    <Footer />
    </>
  );
}
