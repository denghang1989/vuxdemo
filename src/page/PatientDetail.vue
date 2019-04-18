<template>
  <div class="detail">
    <swiper auto height="180px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
    </swiper>
    <div class="content">
      <box gap="10px 10px">
        <x-button :link="link">确定11</x-button>
        <x-button :link="link">确定22</x-button>
        <x-button :link="link">确定33</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定</x-button>
        <x-button :link="link">确定55</x-button>
        <x-button :link="link">确定66</x-button>
        <x-button :link="link">确定77</x-button>
      </box>
    </div>
  </div>
</template>

<script>
  import {SwiperItem, Swiper, Box, XButton} from 'vux';
  
  export default {
    name: "PatientDetail",
    components: {SwiperItem, Swiper, Box, XButton},
    data() {
      return {
        patient: {},
        link:"/listPage"
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
