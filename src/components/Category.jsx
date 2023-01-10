import React from "react";
import { FaEarlybirds } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiIndianPalace } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

function Category() {
  return (
    <div>
      <List>
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Indian"}>
          <GiIndianPalace />
          <h4>Indian</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </SLink>
        <SLink to={"/cuisine/Chinese"}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </SLink>
        <SLink to={"/cuisine/Korean"}>
          <GiChopsticks />
          <h4>Korean</h4>
        </SLink>
      </List>
    </div>
  );
}

export default Category;
