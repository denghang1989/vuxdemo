<template>
  <div class="message">
    <box gap="10px 10px">
      <card v-for="(patientInfo,index) in patientList" :key="index">
        <div slot="header" class="header">
        
        </div>
        <div slot="content" class="content">
        
        </div>
        <div slot="footer" class="footer">
        
        </div>
      </card>
    </box>
  </div>
</template>

<script>
  import {Box, XButton, Card} from 'vux';
  
  export default {
    name: "Message",
    components: {Box, XButton, Card},
    data() {
      return {
        data: []
      }
    },
    computed: {
      patientList() {
        return this.data;
      }
    },
  }
</script>

<style scoped>

</style>
