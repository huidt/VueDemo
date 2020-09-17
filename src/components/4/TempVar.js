export default {
    functional: true,
    // 在render中写这么一个函数什么意思？返回的数据返回到了哪里？
    // 参考 https://cn.vuejs.org/v2/api/#render
    // 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
    // 如果组件是一个函数组件，渲染函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。

    // scopedSlots：(2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。

    // render: (h, ctx) => {
    //     return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
    // }

    // 两种写法
    render: function (h, ctx) {
        // 这里的ctx.props就是{var1: "hello vue", var2: "hello world"}
        return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {})
    }
};