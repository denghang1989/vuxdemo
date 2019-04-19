<template>
  <div>
    <card v-for="(patientInfo,index) in changePatientList" :key="index" @click.native="itemOnClickListener(patientInfo,index)">
      <div class="titleHeader" slot="header">
        <span class="bedNo">{{patientInfo.BedNo}}</span>
        <span class="patientName">{{patientInfo.Name}}</span>
      </div>
      <div slot="content">
      
      </div>
      <div slot="footer">
      
      </div>
    </card>
  </div>
</template>

<script>
  import {Card} from 'vux';
  import {eventBus} from '../utils/eventBus';
  
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
        return this.patientList.sort(function (patientInfo1, patientInfo2) {
          return patientInfo1.BedNo > patientInfo2.BedNo;
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
      },
      itemOnClickListener(patientInfo, index) {
        eventBus.$emit("itemOnClickListener", patientInfo, index);
      }
    },
  }
</script>

<style lang="less" scoped>
  .titleHeader {
    display: flex;
    padding: 5px;
  }
  
  .patientName {
    margin-left: 10px;
  }

</style>
