<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png"></image>
	
    <view class="text-area">
      <text class="title">Hello RuoYi</text>
    </view>
  </view>
<!-- <view class="">
 	<div class="body">
 		  <div class="container">
 		      <div id="box1" @click="boxClicked" class="box">水稻害虫识别</div>
 		      <div id="box2" class="box">水稻病害识别</div>
 		      <div id="box3" class="box">水稻虫情测报害虫识别</div>
 		      <div id="box4" class="box">虫情测报灯设备</div>
 		  </div>
 	</div>
 </view> -->
</template>

<script>
 //  export default {
	// data(){
	// 	return {
	// 	  selectedImage: null,
	// 	  base64Image: null,
	// 	  apiUrl: 'YOUR_API_ENDPOINT', // 替换为你的接口地址
	// 	};
	// },
 //    methods:{
		// 将选择的图像转为base64编码
		// convertToBase64() {
		//       uni.getFileSystemManager().readFile({
		//         filePath: this.selectedImage,
		//         encoding: 'base64',
		//         success: (data) => {
		//           this.base64Image = 'data:image/jpeg;base64,' + data.data;
		//         },
		//       });
		// 	},
		  // convertToBase64() {
		  //     uni.getImageInfo({
		  //       src: this.selectedImage,
		  //       success: (info) => {
		  //         uni.getFileSystemManager().readFile({
		  //           filePath: this.selectedImage,
		  //           encoding: 'base64',
		  //           success: (data) => {
		  //             this.base64Image = 'data:' + info.type + ';base64,' + data.data;
		  //           },
		  //         });
		  //       },
		  //     });
		  //   },
		//handleImage(filePath) {
		      // 在这里可以处理选择的图片
		      // 例如，显示图片或上传到服务器等
		      // console.log('选择的图片路径：', filePath);  // 这里的图片可以通过互联网查看
		    // },
	// 		openCamera() {
	// 	      uni.chooseImage({
	// 	        sourceType: ['camera'],
	// 	        success: (res) => {	
	// 	          this.selectedImage = res.tempFilePaths[0];
	// 	          this.convertToBase64();
	// 	        },
	// 	      });
	// 	    },
	// 	    openGallery() {
	// 	      uni.chooseImage({
	// 	        sourceType: ['album'],
	// 	        success: (res) => {
	// 	          this.selectedImage = res.tempFilePaths[0];
	// 	          this.convertToBase64();
	// 	        },
	// 	      });
	// 	    },
	// 	boxClicked: function(){
	// 		// this.openGallery()
			 
	// 		  this.$tab.navigateTo('/pages/detect/rice_pest/upload/index')
		
	// 	},
	// },
 //    onLoad: function() {
		
 //    }
 //  }
</script>

<style>
.body {
	margin: 0;
	padding: 0;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 100vw;
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
