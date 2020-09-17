export default {
    name: "functional-button",
    functional: true,
    render(createElement, {
        data,
        children
    }) {
        // console.log("this+++", this); // => null
        // console.log({
        //     data
        // });

        // return createElement("button", data, children);
        return createElement('button', data, ['hello', ...children])

    }
};