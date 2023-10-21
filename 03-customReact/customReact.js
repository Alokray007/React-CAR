const reactElement = {
    type: "a",
    key: null,
    ref: null,
    children: "Google",
    props: {
        href: "https://www.google.com",
        target: "__blank"
    }
}

function customRender(reactElement, root) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        if (prop === "children" ) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domElement);
}

const root = document.getElementById("root")

customRender(reactElement, root);
