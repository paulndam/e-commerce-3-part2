import React from "react";
import Directory from "../../components/Directory/Directory";

// CSS AND STYLED COMPONENTS
import { HomePageContainer } from "./HomePage.styles";
import "../../Sass/homepage.styles.scss";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
