import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../../Redux/Action";
import styled from "styled-components";
import ProfileAdm from "../ProfileAdm/ProfileAdm";
import Sidebar from "../Sidebar/Sidebar";
import ModifyProduct from "../../ModifyProducts/ModifyProducts";
 
import scrollreveal from "scrollreveal";
export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    border: 1px solid white;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    flex-direction: column;
    .grid {
      width: 100%;
    }
  }
`;
