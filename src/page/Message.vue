<template>
  <div class="message">
    <card>
      <div slot="header">title</div>
      <div slot="content">
        content
      </div>
      <div slot="footer">
        footer
      </div>
    </card>
  </div>
</template>

<script>
  import {Box, XButton, Card} from 'vux';
  
  export default {
    name: "Message",
    components: {Box, XButton, Card},
    data() {
      return {
        data: [],
        link: ""
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
