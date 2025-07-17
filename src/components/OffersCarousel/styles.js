import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-left: 30px;
  padding-bottom: 35px;

`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61A120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70PX 0;
  margin-top: 70px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #61A120;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;


