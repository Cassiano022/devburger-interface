import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ContainerItems = styled.div`
  background: url("${(props) => props.imageUrl}");
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
  height: 200%;

  p {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold; 
    margin-top: 80px ;
  }
`;
