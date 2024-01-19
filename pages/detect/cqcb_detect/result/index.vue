<template>
  <view class="container">	 
	   <div class="imgBox">
		   <image class="resImg" :src="detectResBase64" mode="aspectFit"> </image>
	   </div>
	   
	   <div class="infoText">
		    <view v-for="(count, value) in predict_info" :key="value">
		         {{ value }}  ：{{ count }}
		    </view>
	   </div>
    </view>
</template>

<script>
	import { mock_data, pestdetect_url, cqcb_pestdetect_url} from "@/api/detect/detect.js"    // 模拟请求数据
	export default {
		data(){
			return {
			selectedImage: null,         // 选择的图像虚拟化的地址
			selectedImageBase64: null,  // 将选择的图像转为base64编码
			
			detectResBase64: null,   // 返回的检测图像base64编码信息
			predict_info: null    // 检测出来的害虫位置类别文字信息
		};
	},
    methods:{
		
		// 异步获取接口数据，调用接口数据
		 async sendPostRequest(img) {
		      try {
		        const response = await uni.request({
		          url: '/web_detect/predict/',   // 将接口统一保存在一个配置文件中 js
		          method: 'POST',
		   //        header: { 
					//     'content-type': 'application/json', // 根据实际情况设置请求头
					//     'Access-Control-Allow-Origin': '*', // 允许所有来源
					//     'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE', // 允许所有方法
					//     'Access-Control-Allow-Headers': '*', // 允许所有标头
					// },
		          data: { 'data': [ {'name':'test.jpg', 'img': img} ] },
				 
		        });
				// console.log('response:', response)
				// console.log('detectResBase64:', response[1].data[0])         
				// console.log('detectResBase64:', response[0].image)
				this.detectResBase64 = 'data:image/jpeg;base64,' + response[1].data[0].image  // 检测结果图像保存
				this.predict_info = this.getValueCounts(response[1].data[0].pred_info);  // 坐标位置信息保存
				
				
		      } catch (error) {		
		      }
		    },
			getDetectRes(){
				this.selectImgToBase64();
				// console.log('selectedImageBase64:', this.selectedImageBase64)
				// console.log('detectResBase64:', this.detectResBase64)
			},
			
			selectImgToBase64() {
			  uni.request({
			    url: this.selectedImage,
			    method: 'GET',
			    responseType: 'arraybuffer',
			    success: (res) => {
			      let base64 = uni.arrayBufferToBase64(res.data);
			      this.selectedImageBase64 = base64;
			      // 使用 $nextTick 等待下次页面渲染完成， 在这里发送post请求
				  
			      this.$nextTick(() => {
					   // console.log(this.selectedImageBase64)
					   this.sendPostRequest(this.selectedImageBase64)
					   // this.selectedImageBase64 = base64;
			           // console.log('Selected Image Base64:', this.sendPostRequest(this.selectImgToBase64));
			        // 执行其他操作
			      });
			    },
			    fail: (error) => {
			      console.error('Error:', error);
			      // 处理错误
			    },
			  });
			},
		//  统计数组中的信息
		 getValueCounts(arr) {
		      // 使用reduce将数组中的元素映射到一个对象，记录每个值出现的次数
		      return arr.reduce((counts, value) => {
		        counts[value.class_name] = (counts[value.class_name] || 0) + 1;
		        return counts;
		      }, {});
		    },
		
	},
	// 拿到上传的参数信息
    onLoad: function(option) {
		 // console.log('option:', option);
		 this.selectedImage = option.selectedImage;
		 this.getDetectRes()
    }
  }
</script>


<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}


.imgBox{
	margin-top: -300px;
}
.resImg{
	width: 400px; /* 设置宽度为100% */
	height: 200px; /* 设置固定的高度，根据需要调整 */
	object-fit: cover; /* 使用 cover 保持纵横比并裁剪图像，你也可以使用其他值如 contain 或 fill */
	border-radius: 8px;
}
.infoText {
  margin-top: 50px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow for a subtle effect */
  border-radius: 8px; /* Add border-radius for rounded corners */
}
.infoText view {
  margin-bottom: 10px;
}
</style>
