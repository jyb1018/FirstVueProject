<template>

  <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <h4>{{modaltitle}}</h4>
      <p>{{modalcontent}}</p>
      <button @click="isModalOpen = false" class="closemodal-btn">닫기</button>
    </div>
  </div> 


  <div class="menu">
    <a v-for="(item, idx) in 메뉴들 " :key="idx">{{idx}}) {{item}}</a>
  </div>



  <div v-for="(item, idx) in data" :key="idx">
    <img :src="item.image" class="room-img">
    <h4 @click="openmodal(idx)">{{item.title}}</h4>
    <p>{{item.price}}원</p>
  </div>
  
</template>

<script>

import dataarr from './assets/data.js';

export default {
  name: 'App',
  data() {
    return {
      // UI State 공간, State라고도 부름
      // 현재 UI(ex. 모달, 탭, 등등) 상태
      data : dataarr,
      isModalOpen : false,
      메뉴들 : ['Home', 'Products', 'About'],
      products: ['천호동원룸', '강호동원룸', '아몰랑'],
      신고수 : [0, 0, 0],

      modaltitle : "기본 모달 타이틀",
      modalcontent : "기본 모달 내용",
    }
  },
  methods: {
    increase(idx) {
      this.신고수[idx]++;
    },
    openmodal(idx) {
      this.isModalOpen = true;
      this.modaltitle = this.data[idx].title;
      this.modalcontent = this.data[idx].content;
    }
  },
  components: {
  }
}
</script>

<style>

.room-img {
  width: 50%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position:fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.closemodal-btn {
  position: relative;
  top: 1px;
  left: 1px;
}
</style>
