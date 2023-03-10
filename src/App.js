import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiForkKnifeSpoon />
          <Logo to={"/"}>Recipe App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
