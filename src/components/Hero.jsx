import React from 'react';
import styled from 'styled-components';
import CN from '../assets/Logos/Cartoon_Network_logo.svg'
import Booking from '../assets/Logos/Booking.com_logo.svg'
import CocaCola from '../assets/Logos/CocaCola_logo.svg'
import Dropbox_logo from '../assets/Logos/Dropbox_logo.svg'
import Netflix_logo from '../assets/Logos/Netflix_logo.svg'
import Slack from '../assets/Logos/Slack_logo.svg'
import Spotify from '../assets/Logos/Spotify_logo.svg'
import Toshiba from '../assets/Logos/Toshiba_logo.svg'
import { Button, Form, Input } from './SignInPage/Styles';
import HeroCards from './HeroSection/HeroCards';
const Container = styled.div`
  display: flex;
  justify-content: space-evenly ;
  width: 100%;
  overflow: hidden;
  padding: 0 ;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    height: fit-content;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:30%;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family : Rubik
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  top: 575px;
  font-family : Poppins;
  line-height:35px ;
  left: 180px;
  height: 116px;
  text-align: left;
  color: #B1AAAA;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const LogosContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: repeat(3, 3fr);
  gap: 30px;
  grid-gap: 2.5rem;
  margin-left: -1.5rem;
  margin-top:300px;
  scale: 90%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 3fr);
  }
  
`;

const Logo = styled.svg`
margin-right:1rem;
`;

const HeroSVG = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    bottom: -20rem;
    height: 30vh;

  }
`;

const Hero = () => (<>
  <Container>
    <TextContainer>
      <Title>Task Management And Lists Tool</Title>
      <Subtitle>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Subtitle>
      <Form initial={{ y: '25%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.7 }}>
        <Input placeholder="Name@company.com" />
        <Button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>Try for free</Button>
      </Form>
      <LogosContainer>
        <img src={CN} style={{ width: '97px' }} />
        <img src={Booking} style={{ width: '232px' }} />
        <img src={Dropbox_logo} style={{ width: '200px' }} />
        <img src={Toshiba} style={{ width: '207px' }} />
        <img src={Slack} style={{ width: '156px' }} />
        <img src={Netflix_logo} style={{ width: '142px' }} />
        <img src={CocaCola} style={{ width: '157px' }} />
        <img src={Spotify} style={{ width: '189px' }} />

      </LogosContainer>

    </TextContainer>
    <HeroSVG>
      <HeroCards />
    </HeroSVG>
  </Container>
</>
)
export default Hero;
