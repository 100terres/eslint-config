// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import React from "react";

const Component = (props) => {
  const { className, children } = props;

  return (
    <div
      data-test-boolean
      className={className}
      role="button"
      tabIndex={-1}
      onMouseDown={() => {
        // Multiline props are last
      }}
    >
      <img alt="hello-world" key={1} src="/hello-world.png" />

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
