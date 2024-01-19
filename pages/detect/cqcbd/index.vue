<template>
<view>			
	<div class="body">
		<div class="itemBox" v-for="(item, index) in device_list" :key="index">
			<uni-section :title="index + 1  + ''" type="line" >
				<uni-card :title="item.deviceName" :sub-title="getStatus(item.status)" extra="点击查看详情" :thumbnail="avatar" @click="onClick(item.deviceId)">
					<text class="uni-body">连接地址：{{ item.deviceUrl }} <br> 设备备注：{{item.remark}}</text>
				</uni-card>
			</uni-section>
		</div>
	</div>
</view>
</template>

<script>
  import {  listDevice } from "@/api/device/device.js"    // 模拟请求数据
  export default {
	data(){
		return {
			device_list: null,    // 设备的列表
			avatar: '/static/shebei.jpeg',  // 设备的logo
		};
	},
    methods:{
		getStatus: function(status){
			return status === "0" ? "激活" : "非激活";
		},
		onClick: function(id){
			// console.log(item);
			this.$tab.navigateTo("/pages/detect/cqcbd/detail/index?deviceId=" + id);
		},
		
		getList: function(){   
			listDevice().then(response => {
				 this.device_list = response.rows;
			})
		}
	},
    onLoad: function() {
		this.getList();
    }
  }
</script>

<style>
page{
	background-color: #fff;
}
.body{
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.itemBox{
	/* margin-top: 50px; */
}


</style>
