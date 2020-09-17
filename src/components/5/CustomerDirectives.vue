<template>
  <div>
    <button @click="show = !show">销毁</button>
    <button v-if="show" v-append-text="`hello ${number}`" @click="number++">
      按钮
    </button>
    <blockquote>
      <small
        >如上，`hello
        ${number}`实现了追加到“按钮”后面的功能，而不是像v-text一样替换</small
      >
    </blockquote>
  </div>
</template>
<script>
export default {
  directives: {
    appendText: {
      // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind () {
        console.log("bind");
      },
      // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中) 。
      inserted (el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log("inserted", el, binding);
      },
      // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
      update () {
        console.log("update");
      },
      // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      componentUpdated (el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        console.log("componentUpdated");
      },
      // unbind：只调用一次，指令与元素解绑时调用。
      unbind () {
        console.log("unbind");
      }
    }
  },
  data () {
    return {
      number: 1,
      show: true
    };
  }
};
</script>
