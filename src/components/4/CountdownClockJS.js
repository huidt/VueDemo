export default {
    functional: true,
    render: function (h, ctx) {
        return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {})
    }
};
// 函数式组件参考：
// https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
// https://segmentfault.com/q/1010000012972808
// https://juejin.im/post/6844903630575763470
// https://segmentfault.com/a/1190000022937276