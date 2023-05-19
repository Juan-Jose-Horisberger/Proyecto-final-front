import React, { useState } from "react";
import styled from "styled-components";
import { getProductByName } from "../../../Redux/Action";
import { useDispatch } from "react-redux";
import { GiMagnifyingGlass } from "react-icons/gi";
export default function Navbar() {
  const [productName, setProductName] = useState("");
  //eslint-disable-next-line
  const [errorsExist, setErrorsExist] = useState(false);
  const dispatch = useDispatch();

  function handleOnClick() {
    productName
      ? dispatch(getProductByName(productName))
      : setErrorsExist(true);
    setProductName("");
  }

  return (
    <Nav>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{ outline: "none" }}
        />
        <span onClick={handleOnClick}>
          <GiMagnifyingGlass size="27px" color="grey" />
        </span>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;

  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    svg {
      color: white;
    }
    input {
      width: 146px !important;
      background-color: #272a2c;
      border: none;
      color: white;
      padding: 10px;
      letter-spacing: 1px;
      &::placeholder {
        color: white;
      }
    }
    span {
      cursor: pointer;
      padding: 9px;
      border-radius: 2px;
      background-color: #121212;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
