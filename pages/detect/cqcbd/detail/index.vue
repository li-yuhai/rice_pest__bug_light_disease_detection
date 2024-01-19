<template>
  <view class="container" v-if="device">
	   <div class="body">
		  <div class="text">
			  <view class="item">
			    <text class="label">设备详细信息如下：</text>
				<br>
				<br>
			  </view>
			  <view class="item">
			    <text class="label">Device Name:</text>
			    <text class="value">{{ device.deviceName }}</text>
			  </view>
			  <view class="item">
			    <text class="label">Device URL:</text>
			    <text class="value">{{ device.deviceUrl }}</text>
			  </view>
			  <view class="item">
			    <text class="label">Status:</text>
			    <text class="value">{{ getStatusText(device.status) }}</text>
			  </view>
			  
			  <view class="item">
			    <text class="label">Create Time:</text>
			    <text class="value">{{ device.createTime }}</text>
			  </view>
			  <view class="item">
			    <text class="label">Update Time:</text>
			    <text class="value">{{ device.updateTime }}</text>
			  </view>
			  
			  <view class="item">
			    <text class="label">Remark:</text>
			    <text class="value">{{ device.remark }}</text>
			  </view>
		  </div> 
		  
		   <div class="video_box">
				 <video  ref="myVideo" :src="video_url"  :controls="controls" :autoplay="autoplay" style="width: 100%; height: 250px;" @loadeddata="captureFrame" ></video>
		   </div>
		   
		   <div class="detect_button">
			   <button class="cu-btn round bg-red shadow lg" @click="detectImgFromVedio" > 拍照识别 </button>
		   </div>
		   
		    <!-- Display the captured frame -->
		    <!-- <img :src="capturedImageBase64" alt="Captured Frame" /> -->
	   </div>
  </view>
</template>

<script>	
  import {  getDevice } from "@/api/device/device.js"    // 模拟请求数据
  export default {
	data(){
		return {
			deviceId: null, 
			device: null,  // 设备信息
			video_url: 'http://59.110.152.138/static/12_19.mp4',
			controls: true,  // 是否显示控制条
			autoplay: true,  // 是否自动播放
			capturedImageUrl: '/web_static/static/20230912222104.jpg',
			capturedImageBase64: null,
			
		};		
	},
    methods:{
		// captureFrame() {
		//       const video = this.$refs.myVideo; // 使用 ref 获取 video 元素引用
		// 	  console.log(video);
		//       if (video) {
		//         const canvas = document.createElement('canvas');
		//         const ctx = canvas.getContext('2d');
		
		//         // Set canvas dimensions to match video dimensions
		//         canvas.width = video.videoWidth;
		//         canvas.height = video.videoHeight;
		
		//         // Draw the current frame of the video onto the canvas
		//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		
		//         // Get the base64-encoded image data from the canvas
		//         const base64Image = canvas.toDataURL('image/png');
		
		//         // Update the capturedImage data property
		//         this.capturedImage = base64Image;
		//       }
		//     },
	
		onVideoEnd() {
		      // 视频播放结束后的处理
		},
		onVideoPause() {
		      // 视频暂停后的处理
		},
		detectImgFromVedio(){
			//console.log('拍照识别');
			//pages/detect/cqcbd/detect/index 
			// this.captureFrame();
			// console.log(this.capturedImage)
			// this.$tab.navigateTo('/pages/detect/cqcbd/detect/index?ImgBase64='+ 'base64xxxxx');
			this.getImageBase64();
		},
		async getImageBase64() {
		      try {
		        const res = await uni.request({
		          url: this.capturedImageUrl,
		          method: 'GET',
		          responseType: 'arraybuffer',
		        });
				//console.log('res: ', res[1].data);
		        // const base64 = uni.arrayBufferToBase64(res.data);
		        const base64 = uni.arrayBufferToBase64(res[1].data);
		        // this.capturedImageBase64 = 'data:image/jpeg;base64,' + base64;
				this.capturedImageBase64 =  base64;
				// console.log(base64);
				// console.log(this.capturedImageBase64);
				
				this.$tab.navigateTo('/pages/detect/cqcbd/detect/index?ImgBase64='+ encodeURIComponent(this.capturedImageBase64));
		        // this.capturedImageBase64 =  base64;
		      } catch (error) {
		         // console.error('Error:', error);
		        // 处理错误
		      }
		},
		getStatusText(status) {
		    return status === "0" ? "Active" : "Inactive";
		},
		getDeviceById(){
			getDevice(this.deviceId).then(response => {
				 this.device = response.data;
			})
		},	
	},
    onLoad: function(option) {
		 this.deviceId = option.deviceId;
		 this.getDeviceById();
		 
    },
	// beforeDestroy() {
	//     // 在组件销毁前移除事件监听，以防止内存泄漏
	//     this.$refs.myVideo.removeEventListener('loadeddata', this.captureFrame);
	//   },
  }
</script>

<style>

page{
	background-color: #fff;
}

.detect_button{
	margin-top: 50px;
}


.video {
  width: 100%; /* Ensure the video takes up 100% of the container width */
  max-width: 600px; /* Set a maximum width if needed */
}

.container {
	padding-left: 10px;
	padding-right: 10px;
}
.text{
	margin-top: 30px;
}

.video_box{
	margin-top: 50px;
	height: 200px;
	width: 90vw;
	background-color: aqua;
	display: inline-block;
}

.body{
	text-align: center;
}

.item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.label {
  font-weight: bold;
  color: #333;
}

.value {
  color: #666;
}

</style>
