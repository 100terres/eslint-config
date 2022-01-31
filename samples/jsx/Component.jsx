/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import React from "react";

const Component = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <img alt="hello-world" src="/hello-world.png" />

      {children}
    </div>
  );
};

Component.defaultProps = {
  className: undefined,
  children: null,
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Component;
