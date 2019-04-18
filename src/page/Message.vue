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
  import {Card} from 'vux';
  
  export default {
    name: "Message",
    components: {Card},
    data() {
      return {
        patientList: []
      }
    },
    computed: {
      changePatientList() {
        return this.patientList.map((value, index, array) => {
          return value;
        });
      }
    },
    mounted() {
      this.getPatientList();
    },
    methods: {
      getPatientList() {
        this.$http.get("/api/web.DHCTools.PatientList.cls?LocID=47").then(({data}) => {
          this.patientList = data
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  .message {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #1296DB;
  }

</style>
