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
      <div className="grid">
        <ProfileAdm />
        {/* <Earnings /> */}

        <ModifyProduct />
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  .grid {
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    border: 1px solid blue;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    flex-direction: column;
    .grid {
      width: 100%;
    }
  }
`;
