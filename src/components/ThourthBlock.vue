<template>
	<div class="thourth_block">
		<!--<div class="col-12">
			<input type="radio" id="var1" name="variant" value="">
			<label for="var1">Variant 1</label>
			<input type="radio" id="var2" name="variant" value="">
			<label for="var2">Variant 2</label>
			<input type="radio" id="var3" name="variant" value="">
			<label for="var3">Variant 3</label>
		</div>-->
		<div class="col-md-4"></div>
		<div class="col-md-4">
			<span>Suur lugu</span>
			<h3>TOP 15 Tallinna kolemaja. Kaua need linnapilti risustavad?</h3>
		</div>
		<div class="col-md-4">
			<button-one>Vaata siia</button-one>
		</div>
	</div>
</template>

<script>
import ButtonOne from "@/components/UI/ButtonOne.vue"
export default {
	components: {ButtonOne}
}
</script>

<style scoped>
.thourth_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin: 30px 0;
		background: #002436;
		border-radius: 0;
		padding: 15px;
	}
	.col-md-4:nth-child(1) {
		background-image: url('../../img/6.jpg');
		height: 165px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border-radius: 10px 0 0 10px;
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
		color: #E5513E;
		margin: 15px 0;
		text-transform: uppercase;
		font-size: 10px;
		line-height: 8px;
	}
	.thourth_block .btn {
		display: block;
		margin: auto;
		background: #E5513E;
		color: #fff!important;
		border-radius: 20px;

	}

	@media (min-width:768px) {
		.thourth_block {
		padding: 0;
		border-radius: 20px;
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