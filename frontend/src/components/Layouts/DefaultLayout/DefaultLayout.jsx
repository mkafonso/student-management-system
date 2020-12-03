import React from "react";
import PropTypes from "prop-types";

// import styles
import { Container, Content } from "./styles";

// import components
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
};

DefaultLayout.defaultProps = {
  children: null,
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default DefaultLayout;
