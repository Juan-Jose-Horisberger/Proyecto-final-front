import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import image from "./profile.jpeg";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../../Redux/Action";
import { cardStyles } from "../ReusableStyles/ReusableStyles";
export default function ProfileAdm() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);

  return isAuthenticated ? (
    <Section>
      <div className="image">
        <img className="image" src={user.picture} />
      </div>
      <div className="title">{/* <h2>{userDetail.username}</h2> */}</div>
      <div className="info">
        <div className="container">
          <h5>Administrador</h5>
        </div>
      </div>
    </Section>
  ) : (
    ""
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-button: 10px !important;
    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
     
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
