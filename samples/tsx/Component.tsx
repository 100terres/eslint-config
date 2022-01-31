import React from "react";

export interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Component: React.VoidFunctionComponent<ComponentProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <img alt="hello-world" src="/hello-world.png" />

      {children}
    </div>
  );
};

export default Component;
