import Logo from "../../assets/logo2.svg";
import { CartItems } from "../../components/CartItems";
import { Container, Banner, Title, Content  } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>
      <Title>Checkout - Pedido </Title>
      <Content>
        <CartItems />
        {/* <CartResume /> */}
      </Content>
    </Container>
  );
}
