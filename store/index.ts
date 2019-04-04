import { RootState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";

//Vuex 状態管理
//なんかVuexではstate、mutaitions、actionを定義するみたい？

//state : 親子間で受け渡したいデータ
export const state = (): RootState => ({
  people: [],
  matchedPeople: [],
  userAgent: 'others',
  userId: '',
})

//mutations : stateに値をセットするSetter
export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
    state.matchedPeople = people
  },
  setMatchedPeople(state: RootState, people: Person[]): void {
    state.matchedPeople = people
  },
  setUserAgent(state: RootState, userAgent: string): void {
    state.userAgent = userAgent
  },
  setUserId(state: RootState, userId: string): void {
    state.userId = userId
  }
}

//actions : stateに対して行う操作？
export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    //認証処理
    commit("setUserId", "mindovob");
    let people: Person[] = []
    await context.app.$axios.$get("https://us-central1-reading-application.cloudfunctions.net/useBookData?id="+"mindovob")
    .then(res => {
       people = res;
    })
    // people = context.isStatic ?
    //   localRandomData :
    //   await context.app.$axios.$get("./random-data.json")    
    commit("setPeople", people.slice())
  },
  async searchItems({ commit }, context) {
    console.log(context.keyword)
    let matched = this.state.people.filter(
      person => person.title.match(context.keyword) ||
      person.author.match(context.keyword)
      // person.???.match(context.keyword)
    );
    commit("setMatchedPeople", matched)
  },
  async getUserAgent({ commit }) {
    let userAgentFullData = navigator.userAgent;
    console.log(userAgentFullData);
    let userAgent = 'others';
    if(userAgentFullData.indexOf('iPhone') > 0 || userAgentFullData.indexOf('iPod') > 0 || userAgentFullData.indexOf('Android') > 0 && userAgentFullData.indexOf('Mobile') > 0){
        userAgent = 'sp';
    }else if(userAgentFullData.indexOf('iPad') > 0 || userAgentFullData.indexOf('Android') > 0){
        userAgent = 'tab';
    }
    commit("setUserAgent", userAgent)
  }
}
