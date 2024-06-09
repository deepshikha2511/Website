import React from "react";
import styled from 'styled-components'
import Wallpaper from '../../assets/images/wallpaper.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const Dashboard = () => {
    return (
    <MainContainer>
        <Body>
        <HeaderContainer>
            <Header>
                 <ShopName>Raj Pet Shop</ShopName>
                <Subheader>One stop destination for all that your pet needs</Subheader>
            </Header>
            <Contact>
                <ContactUs>Contact Us</ContactUs>
                <Mobile><FontAwesomeIcon icon={faPhone} />+91-9876543210</Mobile>
                <Email><FontAwesomeIcon icon={faEnvelope} />abcd@gmail.com</Email>
                <Youtube><FontAwesomeIcon icon={faYoutube} /><a href="https://www.youtube.com/@sonusaha2836">Youtube</a></Youtube>
                <Address>Address: Shop no-12, Buddha Colony, Boring Road, Patna.</Address>
            </Contact>
        </HeaderContainer>
            <img src={Wallpaper} alt='developer'/></Body>
    </MainContainer>)
}

export default Dashboard;


const MainContainer = styled.div`
    background-color: #979e92;
    
`;

const HeaderContainer = styled.div`
    color: #fff;
    box-sizing: border-box;
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    `

const Header = styled.div``;   

const ShopName = styled.div``; 

const Subheader = styled.div`
    color: #ebf3f9;
    font-size: 1.75rem;
`

const Body = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 50rem;
    background-color: #979e92;
    color: #fff;
    object-fit: fill;
    `;

const Contact = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius:.25rem;
    border: 4px solid #313a40 ;
    padding: 2rem;
    box-sizing: border-box;
    width: 40rem;
    
    `
const ContactUs = styled.div`
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-decoration: underline;
`

const Mobile = styled.div`
    font-size: 1.5rem;
    display: flex;
    gap: .5rem;
    cursor: pointer;
    transition: transform .5s ease;
    &:hover{
        color: #313a40;
        transform: scale(1.1);
    }`
    

const Email = styled.div`
    font-size: 1.5rem;
    display: flex;
    gap: .5rem;
    cursor: pointer;
    transition: transform .5s ease;
    &:hover{
        color: #313a40;
        transform: scale(1.1);
    }`

const Youtube = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform .5s ease;
    svg{
        height: 1.6rem;
    width: 1.6rem;}

    a{
        color: #fff;
        text-decoration: none;
    }

    &:hover{
        color: #313a40;
        transform: scale(1.1);
    }
    `;
    

const Address = styled.div`
    display: flex;
    font-size: 1.25rem;
    text-wrap: wrap;
    overflow-wrap: break-word;`
    