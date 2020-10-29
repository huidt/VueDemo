<template>
  <div id="app">
    <ToTheBottom></ToTheBottom>

    <TodoList v-for="per in list" :item="per" :key="per" @delete="handleDelete">
      <span slot="prefixTcon">（^-^）</span>
      <span
        slot="suffixTcon"
        slot-scope="props"
        :style="{ color: props.checked ? 'yellowgreen' : 'red' }"
        >(●'◡'●)</span
      >
    </TodoList>
    <blockquote>
      这里的组件用到了作用域插槽，在TotoList子组件中使用v-bind="{ checked
      }"传了一个对象过来，在父组件中使用时，可以使用slot-scope="props"来接收这个对象，props就作为这个对象的别名，后续可以通过props来使用传入对象中的数据，当使用一个数据时会先在这个对象中找，找不到再从父组件的data里面找，相当于给这个插槽加了一个作用域一样，也可以理解为带数据的插槽<br /><br />
      这里slot="suffixTcon"这是2.6.0以前具名插槽的写法，suffixTcon就是在子组件中声明的插槽名
    </blockquote>
    <BaseLine title="TodoList.vue"></BaseLine>

    <Props
      :name="name"
      :type="type"
      :list="list2"
      :isVisible="true"
      :onChange="onChange"
    >
      <div
        style="display: inline"
        slot="prefixTcon"
        slot-scope="just_A_Name"
        :style="{ color: just_A_Name.checked ? 'red' : 'paleturquoise' }"
      >
        <br />
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
      <template v-slot:item="SlotDemoobj">
        <p>item slot-scope:{{ SlotDemoobj.name }}</p>
      </template>
    </SlotDemo>
    <blockquote>
      上面这种写法是现在vue推荐的写法，使用template v-slot
    </blockquote>

    <SlotDemo>
      <p slot="title">title slot1</p>
      <p slot="title">title slot2</p>
      <p slot="item" slot-scope="SlotDemoobj1">
        item slot-scope {{ SlotDemoobj1.name }}
      </p>
      <template v-slot:item="SlotDemoobj2">
        <p>item slot-scope{{ SlotDemoobj2 }}</p>
      </template>
    </SlotDemo>
    <blockquote>
      上面这种写法是2.6.0之前的写法，使用slot="XXX"。同时这个地方在代码中还出现了两个插入同一个插槽，后面的会覆盖前面的
    </blockquote>
    <BaseLine title="SlotDemo.vue"></BaseLine>

    <OneWayDataFlow
      v-bind:initialCounter="initialCounter"
      :changeFatherProp2="changeFatherProp2"
      @change="changeFatherProp3"
    ></OneWayDataFlow>
    {{ "右侧是父组件中的值：" + initialCounter }}
    <br />
    <a href="https://segmentfault.com/q/1010000019491720"
      >思否提问：Vue的单向数据流和双向数据绑定是冲突的吗？</a
    >
    <BaseLine title="OneWayDataFlow.vue 子组件如何修改父组件属性"></BaseLine>

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

    <NonPropAttributes type="text" class="dark"></NonPropAttributes>
    <blockquote>
      此处在使用NonPropAttributes组件时给组件的type属性赋值为text，按道理这个属性会自动挂载到组件的根元素上，所以显示的应该是普通文本框，
      但是这里通过inheritAttrs:
      false禁用了自动挂载，所以input还是按照子组件中的值，还是日期框
      <br />
      但是要注意 inheritAttrs: false 选项不会影响 style 和 class
      的绑定，所以这里class属性还是挂载到了根元素上，所以input是红色的
    </blockquote>
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
    <!-- <BaseInput label="Hui" value="DT"></BaseInput> -->
    <BaseLine title="BaseInput.vue"></BaseLine>

    <div>
      <PropsAndData
        :name="PropsAndDataname"
        :info="PropsAndDatainfo"
        :list="PropsAndDatalist"
      />
      <p>
        <button @click="handleNameChange">change this.name</button>
        <button @click="handleInfoChange">change this.info</button>
        <button @click="handleListChange">change this.list</button>
      </p>
    </div>
    <BaseLine title="PropsAndData.vue"></BaseLine>

    <navigation-link url="/profile" v-slot:default="NavigationLinkSlotProps">
      <!-- 添加一个 Font Awesome 图标 -->
      <span class="fa fa-user">SPAN</span>

      <blockquote>Your Profile: {{ user.name }}</blockquote>
      <a href="NavigationLinkSlotProps.url">Clicking me will send you to:</a
      >{{ NavigationLinkSlotProps.url }}
    </navigation-link>
    <BaseLine title="NavigationLink.vue"></BaseLine>

    <NameSlot>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      也可指定默认插槽，但会导致没有指明的内容被丢弃
      <!-- 上面两个这么些会分发到默认插槽，也可以这么写：
      <template v-slot:default>
        <p>B paragraph for the main content.</p>
        <p>And another one.</p>
      </template> -->

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>

      <template v-slot:xiaoting="nameSlotData">
        {{ nameSlotData.nameSlotUser2.name }}
        {{ nameSlotData.nameSlotUser2.school }}
      </template>
    </NameSlot>
    <BaseLine title="NameSlot.vue"></BaseLine>

    <fallback-content>
      <template>Save</template>
    </fallback-content>
    <BaseLine title="FallbackContent.vue"></BaseLine>

    <current-user>
      <template v-slot:CurrentUserDemo="slotProps">
        <p id="currentUser">
          在父组件中如何使用子组件的数据？在子件中需要使用<code>v-bind:user="user2"</code>这种方式传上去，在父件中需要使用<code>v-slot:CurrentUserDemo="slotProps"</code>这种方式来接收，此处的<code>CurrentUser.vue</code>子件中slot提供了后备内容，由于父件也提供了内容所以后备内容没有被渲染出
        </p>
        <blockquote>
          <p>firstName:{{ slotProps.user.firstName }}</p>
        </blockquote>

        <blockquote>
          <p>lastName:{{ slotProps.user.lastName }}</p>
        </blockquote>
      </template>
    </current-user>
    <BaseLine title="CurrentUser.vue"></BaseLine>

    <abbreviated-syntaxfor-lone-default-slot v-slot:default="loneSlot">
      <blockquote>
        当使用默认插槽时<code>v-slot:default="loneSlot"</code>
        可以直接写在组件上，像AbbreviatedSyntaxforLoneDefaultSlot.vue这里一样
      </blockquote>

      <blockquote>
        这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的
        v-slot 被假定对应默认插槽：就是直接<code>v-slot="slotProps"</code>
      </blockquote>

      {{ loneSlot.girl.totalHeigh }}

      <!-- <template v-slot:other> slotProps is NOT available here </template> -->
    </abbreviated-syntaxfor-lone-default-slot>
    <BaseLine title="AbbreviatedSyntaxforLoneDefaultSlot.vue"></BaseLine>

    <destructuring-slot-prop>
      <template v-slot:default="{ user: person }">
        <!-- { user: person }这种写法什么意思？user本就是子组件中dataDestr对象得别名，person有相当于user的别名 -->
        <!-- <template v-slot:default="person"> -->
        person:↓
        <blockquote>{{ person.midName }}</blockquote>
      </template>
      <template
        v-slot:otherSlot="{ user={midName:'我是备胎，只在子件插槽传来的数据为undefined时才出来'} }"
      >
        user:↓
        <blockquote>{{ user.midName }}</blockquote>
      </template>
    </destructuring-slot-prop>
    <base-line title="DestructuringSlotProp.vue"></base-line>

    <DynamicSlotName>
      <template v-slot:[mo_ren]="dynamic_user">
        {{ dynamic_user.user.name1 }}
        pp
        <br />
        <button
          class="dynamic_slot_name_btn"
          style="border: 5px solid white"
          @click="mo__ren"
        >
          开始 || 停止切换插槽名
        </button>
      </template>
    </DynamicSlotName>
    <a
      href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D"
      >动态插槽名</a
    >
    <base-line title="DynamicSlotName.vue"></base-line>

    <OtherExample>
      <!-- <template v-slot:todo="todo">
        {{ todo }}
      </template> -->
      <template v-slot:todo="{ todo }">
        <!-- <template v-slot:todo="todo"> -->
        <span v-if="todo.isComplete">✓ </span>
        {{ todo.text + "  这不是后备内容" + todo.isComplete }}
      </template>
    </OtherExample>
    <base-line title="OtherExample.vue"></base-line>

    这里的写法很巧妙，奥利干了兄弟萌
    <br />
    这里的keep-alive是内置组件包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
    <span style="color: goldenrod">(๑•̀ㅂ•́)و✧</span>
    <br />
    <code>v-on:click="currentTab = tab"</code
    >这一句很巧妙，因为渲染出了两个btn，每个btn都有个tab是一个字符串，点击使得currentTab等于当前btn上的tab字符串
    <br />
    <code>
      keep-alive：
      <a href="https://juejin.im/post/6844903918313406472"
        >keep-alive的深入理解和使用</a
      >
    </code>

    <br />
    <br />
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <keep-alive>
      <!-- component 和 keep-alive 都是内置组件，参考：https://v3.cn.vuejs.org/api/built-in-components.html -->
      <!-- 而下面的is属性就是 component 的一个属性，依 is 的值，来决定哪个组件被渲染-->
      <component v-bind:is="currentTabComponent" class="tab"></component>
      <!-- currentTabComponent为合成的组件名 -->
    </keep-alive>
    <blockquote>
      点击按钮→currentTab变化→btn的class变化→css变化，与此同时，计算属性依赖的变量变化，重新计算
    </blockquote>
    <base-line title="dynamic：TabArchive.vue+TabPost.vue"></base-line>

    <Computed></Computed>
    <base-line title="Computed.vue"></base-line>

    <Watch></Watch>
    <base-line title="Watch.vue"></base-line>

    <h2>计算属性 VS 侦听属性</h2>
    <Computed1></Computed1>

    <Watch1></Watch1>
    <blockquote>
      如何对这里的watch1进行防抖改造？清空定时器，添加定时器？√
    </blockquote>
    <base-line title="Computed1.vue ＋ Watch1.vue"></base-line>

    <Watch1_pro></Watch1_pro>
    <br />
    <base-line title="Watch1_pro.vue"></base-line>

    <button @click="destroyClock = !destroyClock">
      {{ destroyClock ? "加载时钟" : "销毁时钟" }}
    </button>
    <Clock v-if="!destroyClock" />
    <base-line title="Clock.vue"></base-line>

    <Functional :name="TempVarname" />
    <base-line title="Functional.vue"></base-line>

    <div class="nonymousComponent">
      <small> 红色虚线代表函数式组件</small>
      <TempVar
        :var1="`hello ${TempVarname}`"
        :var2="destroyClock ? 'hello vue' : 'hello world'"
      >
        <template v-slot="{ var1, var2 }">
          <BlockQuote>
            <template>
              TempVar组件使用时通过v-bind（缩写）传入了两个变量，然后又在在TempVar.js返回了数据
            </template>
          </BlockQuote>
          var1： {{ var1 }}
          <br />
          var2： {{ var2 }}
          <BlockQuote>
            <template>
              在这里又使用
              <code>template v-slot="{var1, var2}"></code>
              接收，如果这里不接收就会报错：var1、var2未定义
              <br />
              两个变量成了临时变量，现在在当前template中就可以随意地使用var1和var2了</template
            >
          </BlockQuote>
        </template>
      </TempVar>
    </div>
    <base-line title="TempVar.js函数式组件 临时变量"></base-line>

    <CountdownClock> </CountdownClock>
    <base-line title="CountdownClock.vue"></base-line>

    <div class="nonymousComponent">
      <small>红色虚线代表函数式组件</small>
      <br />
      <small
        >此处本想用函数式组件复现倒计时插件，由于模板中countTimeJS变量一直无法做到响应式，暂未成功，可能原因：<br />
        <ul>
          <li>函数式组件不维护响应数据</li>
          <li>无instance实例</li>
          <li>无生命周期</li>
        </ul></small
      >
      <br />
      <CountdownClockJS
        :countTimeJS="countTimeToSon"
        :startCountJS="startCountJS"
      >
        <template v-slot="{ countTimeJS, startCountJS }">
          <input
            v-show="startCountJS"
            v-model="countTimeToSon"
            placeholder="请输入倒计时（单位s）"
          />
          <!-- <button @click="startCountJS = !startCountJS"> -->
          <button @click="startClockJS">
            {{ startCountJS ? "开始" : "停止" }}
          </button>
          <br />
          <div v-show="countTimeJS != 0" class="hahahajs">
            s
            {{ "距离结束还有 " + countTimeJS + " s" }}
          </div>
          <div id="hahahajs" v-show="!countTimeJS">GG，回家恰饭</div>
        </template>
      </CountdownClockJS>
    </div>
    <base-line title="CountdownClockJS.js 函数式组件"></base-line>

    <functional-button :functionTempVar="TempVarname" @click="log"
      >click me

      <template v-slot="functionProp">{{
        functionProp
      }}</template></functional-button
    >
    <base-line title="FunctionalButton.js 函数式组件"></base-line>

    <Directives />
    <base-line title="Directives.vue 指令"></base-line>

    <CustomerDirectives />
    <base-line title="CustomerDirectives.vue 自定义指令"></base-line>

    <ProvideInject></ProvideInject>
    <base-line title="ProvideInject.vue"></base-line>
    <!-- <hr id="pagebottom" /> -->
  </div>
</template>

<script>

import ToTheBottom from '../components/1/ToTheBottom'
import BlockQuote from '../components/1/BlockQuote'
import Props from '../components/1/Props'
import TodoList from '../components/1/TodoList'
import BaseLine from '../components/1/BaseLine.vue'
import Event from '../components/1/Event'
import SlotDemo from '../components/1/SlotDemo'
import OneWayDataFlow from '../components/2/OneWayDataFlow'
import PropValidation from '../components/2/PropValidation'
import NonPropAttributes from '../components/2/NonPropAttributes'
import NonPropAttributes2 from '../components/2/NonPropAttributes2'
import CustomizingVmodel from '../components/2/CustomizingVmodel'
import BaseInput from '../components/2/BaseInput'
import PropsAndData from '../components/2/PropsAndData'
import NavigationLink from '../components/2/NavigationLink'
import NameSlot from '../components/2/NameSlot'
import CurrentUser from '../components/2/CurrentUser'
import FallbackContent from '../components/2/FallbackContent'
import AbbreviatedSyntaxforLoneDefaultSlot from '../components/2/AbbreviatedSyntaxforLoneDefaultSlot'
import DestructuringSlotProp from '../components/2/DestructuringSlotProp'
import OtherExample from '../components/2/OtherExample'
import TabArchive from '../components/2/dynamic/TabArchive'
import TabPost from '../components/2/dynamic/TabPost'
// import DynamicSlotName from '../components/2/DynamicSlotName'//还没写好

import DynamicSlotName from '../components/2/DynamicSlotName'//还没写好
// 3
import Computed from '../components/3/Computed'
import Computed1 from '../components/3/Computed1'
import Watch from '../components/3/Watch'
import Watch1 from '../components/3/Watch1'
import Watch1_pro from '../components/3/Watch1_pro'
// 4
import Clock from '../components/4/Clock'
import Functional from '../components/4/Functional'
import TempVar from '../components/4/TempVar'
import CountdownClock from '../components/4/CountdownClock'
import CountdownClockJS from '../components/4/CountdownClockJS'
import FunctionalButton from '../components/4/FunctionalButton'
import Directives from '../components/5/Directives'
import CustomerDirectives from '../components/5/CustomerDirectives'
import ProvideInject from '../components/6/index'



let PropsAndDataname = "world";
export default {
  components: {
    // VueRouter,
    ProvideInject,
    CustomerDirectives,
    Directives,
    ToTheBottom,
    TodoList, Props, BaseLine, Event, SlotDemo, OneWayDataFlow, PropValidation, NonPropAttributes, NonPropAttributes2, CustomizingVmodel, BaseInput, PropsAndData, NavigationLink, NameSlot, CurrentUser, FallbackContent, AbbreviatedSyntaxforLoneDefaultSlot, DestructuringSlotProp, OtherExample, TabArchive, TabPost, Computed, Computed1, Watch, Watch1, Watch1_pro, Clock, Functional, TempVar, CountdownClock, CountdownClockJS, BlockQuote, FunctionalButton,
    DynamicSlotName,
  },
  name: 'App',
  data () {

    this.PropsAndDataname = PropsAndDataname;

    //  注意vue官网上说的如何追踪变化，
    //  https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A6%82%E4%BD%95%E8%BF%BD%E8%B8%AA%E5%8F%98%E5%8C%96
    //  它说的是将一个JS对象传入作为data选项，vue会遍历此对象的所有property，但是在这个app中的代码我们第一行使用了：this.PropsAndDataname = PropsAndDataname;这样的写法，这就是一个表达式语句，貌似和所说的传入一个对象有所差别。

    return {
      destroyClock: false,
      TempVarname: "vue",
      currentTab: "Post",
      tabs: ["Post", "Archive"],
      user: {
        name: "HuiDT小麦"
      },
      PropsAndDatainfo: {},
      PropsAndDataname: PropsAndDataname,
      //   PropsAndDatainfo: {
      //     // 为什么要把number在这里写一遍才会触发子组件更新？
      //     number: undefined
      //   },
      PropsAndDatalist: [],//即便它是一个空数组，想要在之后响应式，就必须提前在data中写出来
      // vue无法检测数组的某些变化，但是这里是可以检测到的

      lovingVue: false,
      propValidationStr: "Hui",
      list: ['学习Vue属性', '学习Vue事件', '学习Vue插槽'],
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
      initialCounter: "HuiDT",
      countTimeToSon: undefined,
      startCountJS: true,
      countTimeJS: undefined,
      mo_ren: "moren1",
      dynamicSlotName_Bool: true,
      clouse_arr: ['moren1', 'moren2', 'moren3'],
      clouse_i: 0,
      intervalID: setInterval(() => {
        if (this.clouse_i == 3) this.clouse_i = 0;
        this.mo_ren = this.clouse_arr[this.clouse_i];
        this.clouse_i++;
      }, 500),
    }
  },
  methods: {
    log () {
      console.log("click");
    },
    handleDelete (val) {
      // list: ['学习Vue属性', '学习Vue事件', '学习Vue插槽',],
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

      //   像下面这么写可以直接触发更新，而不用考虑属性是否在声明对象是注明
      //   this.$set(this.PropsAndDatainfo, 'number', 1)
      console.log("this.info 发生了变化，触发子组件更新了吗？", this.PropsAndDatainfo);
    },
    handleListChange () {
      this.PropsAndDatalist.push('A', 'M');
      console.log("this.list 并没有发生变化，触发子组件更新了吗？", this.PropsAndDatalist);
    },

    startClockJS () {
      this.countTimeJS = this.countTimeToSon;
      this.startCountJS = !this.startCountJS;

      this.clockJSInterval = setInterval(() => {
        this.countTimeJS = Number((this.countTimeJS));
        if (this.countTimeJS == 1) {
          clearInterval(this.clockJSInterval);
        }
        this.countTimeJS--;
      }, 1000);
    },
    mo__ren () {
      if (this.dynamicSlotName_Bool == false) {
        this.intervalID = setInterval(() => {
          if (this.clouse_i == 3) this.clouse_i = 0;
          this.mo_ren = this.clouse_arr[this.clouse_i];
          this.clouse_i++;
        }, 500),
          console.log("开始动态切换插槽名");
        this.dynamicSlotName_Bool = true;
        return;
      }
      if (this.dynamicSlotName_Bool == true) {
        console.log("停止动态切换插槽名");
        clearInterval(this.intervalID);
        this.dynamicSlotName_Bool = false;
        return;
      }

    }
  },
  computed: {
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
      //   合成 TabArchive 和 TabPost
    },

  },
  watch: {
    startCountJS: function () {
      //   console.log("在侦听startCountJS");
      //   this.startClockJS();
    }
  }
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
  margin-bottom: 170px;
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
#currentUser {
  background-color: #cfe6e9;
}
code {
  font-size: 18px;
}
#hahahajs {
  width: 200px;
  height: 30px;
  background-color: yellowgreen;
  margin: 0 auto;
}
.hahahajs {
  width: 200px;
  height: 30px;
  background-color: rgb(226, 206, 24);
  margin: 6px auto;
}
.nonymousComponent {
  border: 2px red dashed;
}
code {
  background-color: #cfe6e9;
}
button:hover {
  cursor: pointer;
}
</style>
