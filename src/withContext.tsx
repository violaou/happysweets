import React from "react";
import Context from "./Context";

const withContext = (WrappedComponent: JSX.IntrinsicAttributes) => {
  const WithHOC = (props: JSX.IntrinsicAttributes) => {
    return (
      <Context.Consumer>
        {/* {context => <WrappedComponent {...props} context={context} />} */}
      </Context.Consumer>
    );
  };

  return WithHOC;
};

export default withContext;