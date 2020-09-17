<template>
  <div>
    <blockquote>v-text，替换</blockquote>
    <div v-text="'hello vue'">hello world</div>
    <blockquote>v-html，插入html</blockquote>
    <div v-html="'<span style=&quot;color: red&quot;>hello vue</span>'">
      hello world
    </div>
    <blockquote>v-show，控制显示</blockquote>
    <div v-show="show">hello vue</div>
    <button @click="show = !show">change show</button>
    <blockquote>v-if v-esle-if v-else，控制是否存在</blockquote>
    <div v-if="number === 1">hello vue {{ number }}</div>
    <div v-else-if="number === 2">hello world {{ number }}</div>
    <div v-else>hello geektime {{ number }}</div>
    <blockquote>v-for v-bind</blockquote>
    <div v-for="num in [1, 2, 3]" v-bind:key="num">hello vue {{ num }}</div>
    <blockquote>v-on</blockquote>
    <button v-on:click="number = number + 1">number++</button>
    <blockquote>v-model</blockquote>
    {{ message }}
    <br />
    <input v-model="message" />
    <blockquote>
      v-pre <br /><small
        >跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache
        标签。跳过大量没有指令的节点会加快编译。</small
      >
    </blockquote>
    <div v-pre>{{ this will not be compiled }}</div>
    <blockquote>
      v-once <br /><small
        >只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</small
      >
    </blockquote>
    <div v-once>
      {{ number }}
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    this.log = window.console.log;
    return {
      show: true,
      number: 1,
      message: "hello"
    };
  }
};
</script>
