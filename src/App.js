import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Title>
        <h1>Ryan Caulfield</h1>
        <h2>Software Engineer</h2>
      </Title>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  color: salmon;
  background-color: #3A3A3D;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: 10px solid salmon;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 5rem;
    color: salmon;
  }
  h2 {
    font-size: 2rem;
    color: salmon;
  }
`;
