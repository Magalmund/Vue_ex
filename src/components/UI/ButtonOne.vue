<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'ButtonOne'
}
</script>

<style scoped>
	.btn {
	padding: 10px 15px;
	background: none;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 10px;
	line-height: 8px;
	border: none;
	text-align: center;
	cursor: pointer
}
</style>