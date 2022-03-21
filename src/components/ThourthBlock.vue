<template>
	<div>
		<div class="col-12">
			<div class="parent">
				<input type="radio" v-model="radio" :value="false"/>Style 1
			</div>
			<div class="parent">
				<input type="radio" v-model="radio" :value="true"/>Style 2
			</div>
		</div>
	</div>
	<div class="thourth_block" :class="{'style1': !radio, 'style2': radio}">
		<div class="col-md-4"></div>
		<div class="col-md-6">
			<span :class="{'style1': !radio, 'style2': radio}">Suur lugu</span>
			<h3>TOP 15 Tallinna kolemaja. Kaua need linnapilti risustavad?</h3>
		</div>
		<div class="col-md-2">
			<button-one :class="{'style1': !radio, 'style2': radio}">Vaata siia</button-one>
		</div>
	</div>
</template>

<script>
import ButtonOne from "@/components/UI/ButtonOne.vue"
export default {
	components: {ButtonOne},
	data(){
		return {
			radio: false,
		}
	},
}
</script>

<style scoped>
.thourth_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin: 30px 0;
		border-radius: 0;
		padding: 15px;
		transition: all 0.3s;
	}
	.thourth_block.style1{
		background: #002436;
		transition: all 0.3s;
	}
	.thourth_block.style2{
		background: #e5513e;
		transition: all 0.3s;
	}

	.col-md-4:nth-child(1) {
		background-image: url('../../img/6.jpg');
		height: 165px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	h3 {
		display: block;
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #fff;
		margin: 0 0 15px 0;
	}
	span {
		display: block;
		margin: 15px 0;
		text-transform: uppercase;
		font-size: 10px;
		line-height: 8px;
		transition: all.3s;
	}

	span.style1{
		color: #E5513E;
		transition: all.3s;
	}
	span.style2{
		color: #002436;
		transition: all.3s;
	}

	.thourth_block .btn {
		display: block;
		margin: auto;
		color: #fff!important;
		border-radius: 20px;
		font-size: 10px;
		line-height: 12px;
		padding: 15px 30px;
		transition: all.3s;
	}

	.thourth_block .btn.style1{
		background: #E5513E;
		transition: all.3s;
	}
	.thourth_block .btn.style2{
		background: #002436;
		transition: all.3s;
	}

	@media (min-width:768px) {
	.thourth_block {
		padding: 0;
		border-radius: 20px;
	}

	.thourth_block .btn {
		padding: 10px 15px;
	}

	.col-md-4:nth-child(1) {
		border-radius: 10px 0 0 10px;
	}

	h3 {
		font-size: 20px;
		line-height: 18px;
	}
	span {
		margin: 0 0 15px 0;
		
	}
}

</style>