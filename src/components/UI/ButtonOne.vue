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
	color: teal;
	border: 1px solid teal;
	text-align: center;
	cursor: pointer
}
</style>