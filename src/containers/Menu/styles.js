import styled from "styled-components";
import BannerHamburger from "../../assets/bannerhamburger.svg";
import background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;

  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${background}");
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div`
  background: url(${BannerHamburger}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  width: 100%;
  height: 480px;
  position: relative;

  h1 {
    font-family: "Road Rage", sans-serif;
    color: #fff;
    font-size: 80px;
    line-height: 65px;
    columns: #fff;
    position: absolute;

    right: 20%;
    top: 30%;
  }

  span {
    font-family: Poppins;
    font-weight: 400;
    font-size: 19.11px;
    line-height: 69%;
    letter-spacing: 0%;
    text-align: center;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 28px;
  font-weight: 300;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${ (props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
