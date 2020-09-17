export default {
    functional: true,
    render: function (h, ctx) {
        return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {})
    }
};