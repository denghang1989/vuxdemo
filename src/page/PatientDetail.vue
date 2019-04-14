<template>
  <div class="detail">
    hehe
  </div>
</template>

<script>
  export default {
    name: "PatientDetail",
    data() {
      return {
        patient: {}
      }
    },
    methods: {
      changeName() {
      
      }
    },
    mounted() {
    
    },
    props: {
      patientId: {
        type: String,
        default: ""
      },
    },
  }
</script>

<style scoped>

</style>
