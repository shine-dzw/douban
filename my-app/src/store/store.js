import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export let store=new Vuex.Store({
    state:{
        arr:[],
    },
    mutations:{
        axiosmutations(state,payload){
            state.arr=payload
        }
    },
    actions:{
        axiosactions(storeobj){
            axios({
                url:"/faxianhaodianying",
                method:"get",
            }).then((ok)=>{
                //把请求的数据传递给mutations
                storeobj.commit("axiosmutations",ok)

            })
        }
    }
})