<template>
  <section>
    <div class="cards">
      <p>{{userId}}さんのリスト</p>
      <Card
        v-for="person in matchedPeople"
        :key="person.title"
        :person="person"
      ></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State matchedPeople: Person
  @State userId: string
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.cards p{
  width: 100%;
  margin: auto;
  padding-top: 20px;
  color:saddlebrown;
  text-align: center;
}
</style>
