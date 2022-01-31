import React from "react";

import Image from "./Image";

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

const Component: React.VoidFunctionComponent<ComponentProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <Image alt="hello-world" src="/hello-world.png" />

      {children}
    </div>
  );
};

export default Component;
