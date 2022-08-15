import React from "react";

export interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Component: React.FunctionComponent<ComponentProps> = (props) => {
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
};

export default Component;
