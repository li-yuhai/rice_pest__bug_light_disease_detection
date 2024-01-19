<template>
  <view>
	  <div id="container">
			<!-- <div id="captureBox" class="box" @click="openCamera">拍摄照片</div>
			<div id="uploadBox" class="box" @click="openGallery">上传本地</div> -->
			<div id="captureBox" class="box" @click="openCamera"></div>
			<div id="uploadBox" class="box" @click="openGallery"></div>
		</div>
    </view>
</template>

<script>
	
	export default {
		data(){
			return {
			selectedImage: null,  // 选择的图像虚拟化的地址
			base64Image: null,   // 上传图像的base64编码
			apiUrl: 'YOUR_API_ENDPOINT', // 替换为你的接口地址
		};
	},
    methods:{
			selectImgToBase64(){
					uni.request({		
						url: this.selectedImage,
						method:'GET',
						responseType:'arraybuffer',
						success: ress => {
							let base64 = uni.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64 ;
							this.base64Image = base64
						},fail: (e) => {
						}
					})
			},
			openCamera() {
		      uni.chooseImage({
		        sourceType: ['camera'],
		        success: (res) => {	
		          this.selectedImage = res.tempFilePaths[0];
		          this.convertToBase64();
		        },
		      });
		    },
		    openGallery() {
		      uni.chooseImage({
		        sourceType: ['album'],
		        success: (res) => {
		          this.selectedImage = res.tempFilePaths[0];
		          this.selectImgToBase64();
				  this.$tab.navigateTo('/pages/detect/rice_pest/result/index?selectedImage='+ this.selectedImage)
		        },
		      });
		    },
	},
    onLoad: function() {
		
    }
  }
</script>

<style lang="scss">
page {
	background-color: #ffffff;
}

body {
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: Arial, sans-serif;
}

#container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh; /* 使 #container 高度占据整个页面 */
}
  
.box {
	width: 40vw;
	height: 18vh;
	background-color: #3498db;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 40px;
	border-radius: 10px;
	cursor: pointer;
}
  
#captureBox {
	// background-color: #2ecc71;
	background-image: url('@/static/xiangji1.jpeg');
	background-repeat: no-repeat;
	font-size: 2em;
}

#uploadBox {
	// background-color: #e74c3c;
	background-image: url('@/static/shangchuan1.jpeg');
	background-repeat: no-repeat;
	font-size: 2em;
}

#fileInput {
	display: none;
}


</style>
