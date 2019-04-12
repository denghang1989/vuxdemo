import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Me from '@/page/Me.vue';
import Message from '@/page/Message.vue';
import PatientList from '@/page/PatientList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/me",
      name:"Me",
      component:Me
    },
    {
      path:"/message",
      name:"Message",
      component:Message
    },
    {
      path:"/patientlist",
      name:"PatientList",
      component:PatientList
    }
  ]
})
