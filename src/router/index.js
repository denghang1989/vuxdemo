import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Me from '@/page/Me.vue';
import Message from '@/page/Message.vue';
import PatientList from '@/page/PatientList.vue';
import PatientDetail from '@/page/PatientDetail.vue';
import ListPage from '@/page/ListPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    },
    {
      path: "/message",
      name: "Message",
      component: Message
    },
    {
      path: "/patientlist",
      name: "PatientList",
      component: PatientList
    },
    {
      path: "/patientDetail",
      name: "PatientDetail",
      component: PatientDetail
    },
    {
      path: "/listPage",
      name: "ListPage",
      component: ListPage
    }
  ]
})
