<template>
  <div class="message">
    <ul>
      <li v-for="(patientInfo,index) in changePatientList" :key="index">
        <card>
          <div slot="header" class="header">
            <span>{{patientInfo.Name}}</span>
          </div>
          <div slot="content" class="content">
          
          </div>
          <div slot="footer" class="footer">
          
          </div>
        </card>
      </li>
    </ul>
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
