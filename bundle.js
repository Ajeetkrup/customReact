const container = document.getElementById("root");

const reactEle = {
  type: "a",
  prop: {
    href: "/hello",
    target: "_blank",
  },
  children: "Hello World",
};

const render = (reactEle, container) => {
  const domEle = document.createElement(reactEle.type);
  domEle.innerHTML = reactEle.children;
  Object.keys(reactEle.prop).forEach((key, value) => {
    domEle.setAttribute(key, value);
  });
  container.appendChild(domEle);
};

render(reactEle, container);
