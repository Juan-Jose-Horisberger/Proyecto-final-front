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
import AdminProduct from "../../ModifyProducts/AdminProduct";
import ModifyProduct from "../../ModifyProducts/ModifyProducts";

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

  return (
    <Section>
      <Sidebar />
      {/* <Navbar /> */}
      <div className="grid">
        <div className="row__two">
          {/* <ProfileAdm />
          <Earnings />
          <Transfers /> */}

          <ModifyProduct />
        </div>
        <div className="row__one">
          {/* <Cards /> */}
          {/* <FAQ /> */}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  height: 100%;
  background-color: black;
  .grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    border: 1px solid blue;
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
