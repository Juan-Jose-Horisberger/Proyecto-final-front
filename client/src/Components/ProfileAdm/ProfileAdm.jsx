import React from "react";
import styled from "styled-components";
import image from "../ProfileAdm/profile.jpeg";
import { cardStyles } from "../ReusableStyles/ReusableStyles";
export default function ProfileAdm() {
  return (
    <Section>
      <div className="image">
        <img className="image" src={image} alt="" />
      </div>
      <div className="title">
        <h2>PEDRITO</h2>
      </div>
      <div className="info">
        <div className="container">
          <h5>Administrador</h5>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

    img {
      height: 10rem;
      width: 10rem;
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
      color: #ffc107;
     
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
