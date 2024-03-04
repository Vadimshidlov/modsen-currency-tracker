// module.exports = { ReactComponent: "IconMock" };

// export default "div";
// export default "IconMock";
// export default ReactComponent = "IconMock";
// module.exports = { ReactComponent: "icon-mock" };
// export const ReactComponent = "div";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require("react");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = React.forwardRef((props: unknown, ref: unknown) =>
    React.createElement("svg", props),
);
