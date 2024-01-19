<template>
 <view class="">
 	<div class="body">
 		  <div class="container">
 		      <div id="box1" @click="boxClicked1" class="box">水稻害虫识别</div>
 		      <div id="box2" @click="boxClicked2" class="box">水稻病害识别</div>
 		      <div id="box3" @click="boxClicked3" class="box">水稻虫情测报害虫识别</div>
 		      <div id="box4" @click="boxClicked4" class="box">虫情测报灯设备</div>
 		  </div>
 	</div>
 </view>
</template>

<script>
  export default {
	data(){
		return {
		  selectedImage: null,
		  base64Image: null,
		  apiUrl: 'YOUR_API_ENDPOINT', // 替换为你的接口地址
		};
	},
    methods:{
		boxClicked1: function(){
			  this.$tab.navigateTo('/pages/detect/rice_pest/upload/index')
		},
		boxClicked2: function(){
			  this.$tab.navigateTo('/pages/detect/bing/upload/index')
		},
		boxClicked3: function(){
			  this.$tab.navigateTo('/pages/detect/cqcb_detect/upload/index')
		},
		boxClicked4: function(){
			  this.$tab.navigateTo('/pages/detect/cqcbd/index')
		},
	},
    onLoad: function() {
		
    }
  }
</script>

<style>
.body {
	margin: 0;
	padding: 0;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: #ffffff;
}
.container{
	margin-top: -200px;
}
/* .container {
	display: flex;
} */

.box {
	width: 70vw; /* 每个盒子的宽度占整个屏幕宽度的40% */
	height: 15vh;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	/* font-size: 3em; */
	color: white;
	margin: 25px 0 ; /* 可以根据需要调整盒子之间的间距 */
	border-radius: 15px; /* 圆角的半径，根据需要进行调整 */
}


#box1 {
	background-image: url('@/static/chonghai.jpeg');
	/* background-color: #3498db; */ /* 替换为你的颜色代码 */
	margin-top: 100px; /* 上外边距，可以根据需要调整 */
	font-size: 2em;
	
}

#box2 {
	background-image: url('@/static/binghai.jpeg');
	/* background-color: #e74c3c; */ /* 替换为你的颜色代码 */
	font-size: 2em;
}

#box3 {
	background-image: url('@/static/cqbaodeng.jpeg');
	/* background-color: #2ecc71; */ /* 替换为你的颜色代码 */
	font-size: 1.8em;
}

#box4 {
	background-image: url('@/static/shebei.jpeg');
	/* background-color: #f39c12; */ /* 替换为你的颜色代码 */
	font-size: 2em;
}

	/* ===== 注释掉的css */
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
