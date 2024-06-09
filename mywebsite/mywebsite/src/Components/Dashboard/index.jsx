import React from "react";
import styled from "styled-components";
import Wallpaper from "../../assets/images/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <MainContainer>
      <Body>
        <HeaderContainer>
          <Header>
            <ShopName>Raj Pet Shop</ShopName>
            <Subheader>
              One stop destination for all that your pet needs
            </Subheader>
          </Header>
          <Contact>
            <ContactUs>Contact Us</ContactUs>
            <ContactDetail as="a" href="tel:+919504632020">
              <FontAwesomeIcon icon={faPhone} />
              +91-9504632020
            </ContactDetail>
            <ContactDetail as="a" href="mailto:nirbhaysingh7688@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              Mail me
            </ContactDetail>
            <Address>
              Address: Shop no-12, Buddha Colony, Boring Road, Patna.
            </Address>
          </Contact>
        </HeaderContainer>
        <WallpaperImage src={Wallpaper} alt="developer" />
      </Body>
    </MainContainer>
  );
};

export default Dashboard;

const MainContainer = styled.div`
  background-color: #979e92;
  height: 100vh;
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
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    font-size: 2rem;
  }
`;

const Header = styled.div``;

const ShopName = styled.div``;

const Subheader = styled.div`
  color: #ebf3f9;
  font-size: 1.75rem;
`;

const Body = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50rem;
  background-color: #979e92;
  color: #fff;
  object-fit: fill;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WallpaperImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const Contact = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 4px solid #313a40;
  padding: 2rem;
  box-sizing: border-box;
  width: 40rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 0.5rem;
  }
`;

const ContactUs = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ContactDetail = styled.a`
  font-size: 1.5rem;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.5s ease;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #313a40;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Address = styled.div`
  display: flex;
  font-size: 1.25rem;
  text-wrap: wrap;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;
