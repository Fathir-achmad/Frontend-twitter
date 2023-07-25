import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavbarComp } from "../component/Navbar";
import { SidebarComp } from "../component/Sidebar";


export const HomePage = () => {
  return (
    <>
      <Grid bg="white" templateColumns="repeat(3, 1fr)">
        <GridItem>
          <NavbarComp />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
        <GridItem>
          <SidebarComp />
        </GridItem>
      </Grid>
    </>
  );
};
