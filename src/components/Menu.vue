<template>
	<div class="menu_wrap">
		<div class="menu_left col-3">
			<div class="item" v-for="item in menus" @click="menuClk(item.id)" :class="{active:active==item.id}">
				<img :src="item.img" />
				<span>{{item.name}}</span>
			</div>
		</div>
		<div class="menu_right col-7">
			<div class="content">
				<div class="item" v-for="i in 20" :key="i">
					<img src="../assets/img/food.png" alt="" />
					<span class="title">口水鸡</span>
					<span class="price">48元</span>
					<img class="add" src="../assets/img/add.png"></img>
					<span class="number">1</span>
					<img class="del" src="../assets/img/del.png"></img>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: "menu_1",
				menus: [{
					id: "menu_1",
					img: require("@/assets/img/menu_1.png"),
					name: "地方特色菜"
				}, {
					id: "menu_2",
					img: require("@/assets/img/menu_2.png"),
					name: "炒饭"
				}, {
					id: "menu_3",
					img: require("@/assets/img/menu_3.png"),
					name: "火锅"
				}, {
					id: "menu_4",
					img: require("@/assets/img/menu_4.png"),
					name: "啤酒"
				}, {
					id: "menu_5",
					img: require("@/assets/img/menu_5.png"),
					name: "凉菜"
				}, {
					id: "menu_6",
					img: require("@/assets/img/menu_6.png"),
					name: "时蔬"
				}, {
					id: "menu_7",
					img: require("@/assets/img/menu_1.png"),
					name: "地方特色菜"
				}, {
					id: "menu_8",
					img: require("@/assets/img/menu_2.png"),
					name: "炒饭"
				}, {
					id: "menu_9",
					img: require("@/assets/img/menu_3.png"),
					name: "火锅"
				}, {
					id: "menu_10",
					img: require("@/assets/img/menu_4.png"),
					name: "啤酒"
				}, {
					id: "menu_11",
					img: require("@/assets/img/menu_5.png"),
					name: "凉菜"
				}, {
					id: "menu_12",
					img: require("@/assets/img/menu_6.png"),
					name: "时蔬"
				}]
			}
		},
		methods: {
			menuClk(id) {
				this.active = id;
			}
		},
		mounted() {}
	}
</script>

<style scoped>
	.menu_wrap {
		display: flex;
		height: 100%;
		margin-bottom: 55px;
	}
	
	.col-3 {
		flex: 0 0 30%;
	}
	
	.col-7 {
		flex: 0 0 70%;
	}
	
	.menu_left {
		background-color: #261E1D;
		overflow-y: scroll;
	}
	
	.menu_left .item {
		height: 1.17rem;
		line-height: 1.17rem;
		color: #FFFFFF;
		font-size: 0.34rem;
	}
	
	.menu_left .active {
		background: #821F1F;
	}
	
	.menu_left .item>img {
		margin: 0 0.18rem;
		width: 0.37rem;
		height: 0.44rem;
	}
	
	.menu_left .item>span {
		position: relative;
		top: -0.06rem;
	}
	
	.menu_right {
		background-color: #F3F3F3;
		overflow-y: scroll;
	}
	
	.menu_right .content {
		margin: 0.13rem;
	}
	
	.menu_right .content .item {
		background-color: #FFFFFF;
		width: 100%;
		margin-bottom: 0.13rem;
		height: 1.6rem;
		position: relative;
	}
	
	.menu_right .content .item>img {
		width: 1.6rem;
		height: 1.6rem;
	}
	
	.menu_right .content .item>.title{
		top:0.26rem;
		left: 1.86rem;
		color: #323232;
		font-size: 0.37rem;
		position: absolute;
	}
	
	.menu_right .content .item>.price{
		bottom: 0.26rem;
		left: 1.86rem;
		color: #DA2C2F;
		font-size: 0.37rem;
		position: absolute;
	}
	
	.menu_right .content .item>.add{
		position: absolute;
		width: 0.58rem;
		height: 0.58rem;
		right: 0.26rem;
		bottom: 0.26rem;
	}
	.menu_right .content .item>.number{
		position: absolute;
		font-size: 0.4rem;
		color:#DA2C2F;
		right: 0.98rem;
		bottom: 0.26rem;
	}
	
	.menu_right .content .item>.del{
		position: absolute;
		width: 0.58rem;
		height: 0.58rem;
		right: 1.33rem;
		bottom: 0.26rem;
	}
</style>