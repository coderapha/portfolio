import styled from "styled-components";
import BoxIcon from "./components/BoxIcon";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  text-align: center;
  background-color: #282a36;
  font-size: 1rem;
  color: #f8f8f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-image: url("https://github.com/coderapha.png");
  background-size: cover;
  margin: 0.5rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #bd93f9;
  margin: 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

function App() {
  return (
    <Wrapper>
      <Icon />
      <Title>Raphael Cardoso</Title>
      <Subtitle>Desenvolvedor front-end.</Subtitle>
      <p>
        Site em construção. <br /> Me acompanhe nas redes:
      </p>

      <BoxIcon></BoxIcon>
    </Wrapper>
  );
}

export default App;
