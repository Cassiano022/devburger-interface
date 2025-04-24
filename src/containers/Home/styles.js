import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import background from "../../assets/background.svg";

export const Banner = styled.div`
  background: url("${BannerHome}");
  background-size: cover;
  background-position: center;
  height: 380px;
  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 60px;
    color: #f4f4f4;
    position: absolute;
    right: 10%;
    top: 20%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${background}");
  height: 380px;
`;

export const Content = styled.div``;
