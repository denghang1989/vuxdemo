<template>
  <div class="patientList">
    <ul class="list">
      <li class="item" v-for="(item ,index) in changePatientList" :key="index">
        <card>

        </card>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Card} from 'vux';

  export default {
    name: "PatientList",
    components: {Card},
    data() {
      return {
        patientList: []
      }
    },
    computed: {
      changePatientList() {
        return this.patientList.map((value, index, array) => {
        });
      }
    },
  }
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    align-items: flex-start;
  }

  .item {
    padding: 0;
    margin: 0;
  }

  .item a {
    text-decoration: none;
  }
</style>
