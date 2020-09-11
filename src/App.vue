<template>
  <div id="app">
    <TodoList v-for="per in list" :item="per" :key="per" @delete="handleDelete">
      <span
        slot="prefixTcon"
        slot-scope="props"
        :style="{ color: props.checked ? 'red' : 'blue' }"
        >（^-^）</span
      >
      <span
        slot="suffixTcon"
        slot-scope="props"
        :style="{ color: props.checked ? 'yellowgreen' : 'pink' }"
        >(●'◡'●)</span
      >
    </TodoList>
    <BaseLine title="TodoList.vue"></BaseLine>

    <Props
      :name="name"
      :type="type"
      :list="list2"
      :isVisible="true"
      :onChange="onChange"
    >
      <div
        slot="prefixTcon"
        slot-scope="just_A_Name"
        :style="{ color: just_A_Name.checked ? 'goldenrod' : 'paleturquoise' }"
      >
        (●'◡'●)
      </div>
    </Props>
    <BaseLine title="Props.vue"></BaseLine>

    <Event :name="eventName" @change="eventHandleChange"></Event>
    <BaseLine title="Event.vue"></BaseLine>

    <SlotDemo>
      <template v-slot:title>
        <p>title slot1</p>
        <p>title slot2</p>
      </template>
      <!-- v-slot:可缩写为# -->
      <template v-slot:item="obj">
        <p>item slot-scope:{{ obj.name }}</p>
      </template>
    </SlotDemo>

    <SlotDemo>
      <p slot="title">title slot1</p>
      <p slot="title">title slot2</p>
      <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
      <template v-slot:item="props">
        <p>item slot-scope{{ props }}</p>
      </template>
    </SlotDemo>
    <BaseLine title="SlotDemo.vue"></BaseLine>

    <OneWayDataFlow
      v-bind:initialCounter="initialCounter"
      :changeFatherProp2="changeFatherProp2"
      @change="changeFatherProp3"
    ></OneWayDataFlow>
    {{ initialCounter + "：父组件中的模板" }}
    <BaseLine
      title="OneWayDataFlow.vue 测试在子组件中如何修改父组件属性"
    ></BaseLine>

    <PropValidation
      :propA="43"
      :propB="32 + type"
      :propC="propValidationStr"
      :propE="{ name: 'HuiDT' }"
      :propF="type"
      :propG="list2"
      :propH="onChange"
    ></PropValidation>
    <BaseLine title="PropValidation.vue Props验证"></BaseLine>

    <NonPropAttributes
      type="text"
      class="dark"
      style="border: 2px yellowgreen solid"
    ></NonPropAttributes>
    <BaseLine title="NonPropAttributes.vue"></BaseLine>

    <NonPropAttributes2
      label="传入的label"
      value="传入的value"
      v-bind="{
        required: true,
        placeholder: 'Enter your username',
      }"
      @input="NonPropAttributes2function"
    ></NonPropAttributes2>
    <BaseLine title="NonPropAttributes2.vue"></BaseLine>

    <CustomizingVmodel
      v-model="lovingVue"
      @change="checkBoxChange"
    ></CustomizingVmodel>
    <p>这里主要是使用v-model，但不是在表单中使用</p>
    <BaseLine title="CustomizingVmodel.vue"></BaseLine>

    <!-- 这个组件还有些问题，没搞明白 -->
    <BaseInput label="Hui" value="DT"></BaseInput>
    <BaseLine title="BaseInput.vue"></BaseLine>

    <div>
      <p>
        <button @click="handleNameChange">change this.name</button>
        <button @click="handleInfoChange">change this.info</button>
        <button @click="handleListChange">change this.list</button>
      </p>
      <PropsAndData
        :info="PropsAndDatainfo"
        :name="PropsAndDataname"
        :list="PropsAndDatalist"
      />
    </div>
    <BaseLine title="PropsAndData.vue"></BaseLine>

    <navigation-link url="/profile" v-slot:default="NavigationLinkSlotProps">
      <!-- 添加一个 Font Awesome 图标 -->
      <span class="fa fa-user">SPAN</span>

      <blockquote>Your Profile: {{ user.name }}</blockquote>
      <!-- <blockquote> -->
      Clicking me will send you to: {{ NavigationLinkSlotProps.url }}
      <!-- </blockquote> -->
    </navigation-link>
    <BaseLine title="NavigationLink.vue"></BaseLine>

    <NameSlot>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <!-- 
      上面两个这么些会分发到默认插槽，也可以这么写：
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template> -->

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
      <template v-slot:小婷>
        {{ user.name }}
        {{ user.school }}
      </template>
    </NameSlot>
    <BaseLine title="NameSlot.vue"></BaseLine>

    <current-user>
      <template v-slot:CurrentUserDemo="slotProps">
        在父组件中如何使用子组件的数据？
        <blockquote>
          <p>firstName:{{ slotProps.user.firstName }}</p>
        </blockquote>

        <blockquote>
          <p>lastName:{{ slotProps.user.lastName }}</p>
        </blockquote>
      </template>
    </current-user>
    <BaseLine title="CurrentUser.vue"></BaseLine>
  </div>
</template>

<script>
import Props from './components/1/Props'
import TodoList from './components/1/TodoList'
import BaseLine from './components/1/BaseLine.vue'
import Event from './components/1/Event'
import SlotDemo from './components/1/SlotDemo'
import OneWayDataFlow from './components/2/OneWayDataFlow'
import PropValidation from './components/2/PropValidation'
import NonPropAttributes from './components/2/NonPropAttributes'
import NonPropAttributes2 from './components/2/NonPropAttributes2'
import CustomizingVmodel from './components/2/CustomizingVmodel'
import BaseInput from './components/2/BaseInput'
import PropsAndData from './components/2/PropsAndData'
import NavigationLink from './components/2/NavigationLink'
import NameSlot from './components/2/NameSlot'
import CurrentUser from './components/2/CurrentUser'


let PropsAndDataname = "world";
export default {
  components: {
    TodoList, Props, BaseLine, Event, SlotDemo, OneWayDataFlow, PropValidation, NonPropAttributes, NonPropAttributes2, CustomizingVmodel, BaseInput, PropsAndData, NavigationLink, NameSlot, CurrentUser,
  },
  name: 'App',
  data () {

    this.PropsAndDataname = PropsAndDataname;

    //  注意vue官网上说的如何追踪变化，
    //  https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A6%82%E4%BD%95%E8%BF%BD%E8%B8%AA%E5%8F%98%E5%8C%96
    //  它说的是将一个JS对象传入作为data选项，vue会遍历此对象的所有property，但是在这个app中的代码我们第一行使用了：this.PropsAndDataname = PropsAndDataname;这样的写法，这就是一个表达式语句，貌似和所说的传入一个对象有所差别。

    return {
      user: {
        name: "HuiDT小麦"
      },
      PropsAndDatainfo: {},
      PropsAndDataname: PropsAndDataname,
      // PropsAndDatainfo: {
      //   // 为什么要把number在这里写一遍才会触发子组件更新？
      // number: undefined
      // },
      PropsAndDatalist: [],//即便它是一个空数组，想要在之后响应式，就必须提前在data中写出来
      // vue无法检测数组的某些变化，但是这里是可以检测到的

      lovingVue: false,
      propValidationStr: "Hui",
      list: ['学习Vue属性', '学习Vue事件', '学习Vue插槽',],
      list2: [`属性`, `事件`, `插槽`],
      name: "HuiDT",
      type: "danger",
      BaseLineContent: "Props",
      eventName: "",
      obj: {
        value: 'vue',
        name: "NOTian"
      },
      bigPropsName: "Hello World",
      initialCounter: "HuiDT"
    }
  },
  methods: {
    handleDelete (val) {
      const index = this.list.findIndex(text => text === val);
      this.list.splice(index, 1);
    },
    onChange (val) {
      this.type = val;
    },
    eventHandleChange (prams) {
      this.eventName = prams;
    },
    changeFatherProp2 () {
      this.initialCounter = "HuiDT2"
    },
    changeFatherProp3 () {
      this.initialCounter = "HuiDT3"
    },
    NonPropAttributes2function (e) {
      console.log(e);
    },
    checkBoxChange (e) {
      console.log(e);
      console.log(this.lovingVue);
    },
    onFocus () {
      console.log("我被调用了");
    },
    handleNameChange () {
      //  为什么未触发更新？
      this.PropsAndDataname = "vue" + Date.now();
      console.log("this.name 发生了变化，触发子组件更新了吗？", this.PropsAndDataname);
    },
    handleInfoChange () {
      this.PropsAndDatainfo.number = 1;
      // this.$set(this.PropsAndDatainfo, 'number', 1)
      console.log("this.info 发生了变化，触发子组件更新了吗？", this.PropsAndDatainfo);
    },
    handleListChange () {
      this.PropsAndDatalist.push('A', 'M');
      console.log("this.list 并没有发生变化，触发子组件更新了吗？", this.PropsAndDatalist);
    }
  },
} 
</script>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.fa-user {
  border: 2px red solid;
  display: inline-block;
  width: 100px;
  height: 30px;
}
blockquote {
  background-color: beige;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
