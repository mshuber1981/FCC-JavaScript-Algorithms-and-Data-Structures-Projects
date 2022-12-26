import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

export default function SEO({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
};
