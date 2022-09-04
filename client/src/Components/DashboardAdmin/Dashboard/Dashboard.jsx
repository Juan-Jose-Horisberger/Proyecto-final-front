import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../../Redux/Action";
import styled from "styled-components";
import Cards from "../Cards/Cards";
import Earnings from "../Earnings/Earnings";
import FAQ from "../FAQ/FAQ";
import Navbar from "../NavBar/Navbar";
import ProfileAdm from "../ProfileAdm/ProfileAdm";
import Transfers from "../Transfers/Transfers";
import Sidebar from "../Sidebar/Sidebar";

import scrollreveal from "scrollreveal";
export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });

    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  if (isLoading || !userDetail) {
    return <div>Loading...</div>;
  } else if (!isAuthenticated) {
    return <h1>no estas autenticado</h1>;
  } else if (userDetail.admin === true) {
    return (
      <Section>
        <Sidebar />
        {/* <Navbar /> */}
        <div className="grid">
          <div className="row__two">
            <ProfileAdm />
            <Earnings />
            <Transfers />
          </div>
          <div className="row__one">
            <Cards />
            {/* <FAQ /> */}
          </div>
        </div>
      </Section>
    );
  } else {
    return <h1>no tienes permiso para acceder aqui</h1>;
  }
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color: black;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
