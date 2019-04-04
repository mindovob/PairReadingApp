<template>
    <div class="header">
        <h1><nuxt-link to="/">三</nuxt-link></h1>
        <el-form :inline="true" :model="searchForm" ref="searchForm" @submit.native.prevent>
            <el-form-item prop="keyword">
                <el-input
                    placeholder="search by keyword" v-model="searchForm.keyword" 
                    prefix-icon="el-icon-search" @keyup.enter.native="search('searchForm')"/>
            </el-form-item>
            <!-- <el-form-item>
                <el-button @click="search('searchForm')">search</el-button>
            </el-form-item> -->
        </el-form>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
 } from "nuxt-property-decorator"
import { State, Action } from "vuex-class"

@Component({})
export default class extends Vue {
    @Action searchItems //@Action ⇒ storeのactionsに定義されている関数
    searchForm = {
        keyword: ''
    }
    search (form) {
        this.searchItems({ keyword:this.searchForm.keyword });
    }
}
</script>

<style>
.header {
    background-color :#79DAD0;
}
.header a{
    text-decoration: none;
}
.header form{
    position: absolute;
    top: 5px;
    right: 5px;
}
</style>