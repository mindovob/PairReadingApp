<template>
  <el-col :span="displaySpan">
    <div class="card">
        <img :src=person.imgUrl />
        <h2>{{person.title}}</h2>
        <p>{{person.author}}</p>
    </div>
  </el-col>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { State, Action } from "vuex-class"
import { Person } from "~/types";

@Component({
  mounted: function () { //ページ表示後に実行する
    this.getUserAgent();
    if(this.userAgent === 'sp'){
      this.displaySpan = 24;
    } else if (this.userAgent === 'tab'){
      this.displaySpan = 12;
    } else {
      this.displaySpan = 8;
    }
  }
})
export default class Card extends Vue {
  @Prop() person: Person //@Prop ⇒ 親コンポーネントから渡されている値
  @State userAgent: string //@State ⇒ storeのstateに格納されている値
  @State userId: string //@State ⇒ storeのstateに格納されている値
  @Action getUserAgent //@Action ⇒ storeのactionsに定義されている関数
  displaySpan = '';
}
</script>

<style scoped>
.card {
/*  width: 320px; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
  height: 150px;
}
.card img {
  position: absolute;
  width: 100px;
}
.card h2 {
  font-size: 1em;
  padding-left: 120px;
}
.card p {
  padding-left: 120px;
}

</style>
