<template>
	<div class="navbar">
		<div class="col-lg-8">
			<div class="row">
				<div @click="$router.push('/')">Vue 3</div>
				<div class="nav_list">
					<button-one @click="$router.push('/')">Main</button-one>
					<button-one @click="$router.push('/delfi')">Delfi</button-one>
					<button-one @click="$router.push('/maaleht')">Maaleht</button-one>
					<button-one @click="$router.push('/express')">Express</button-one>
			</div>
			</div>
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
.navbar {
	height:70px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.navbar .row {
	justify-content: space-between;
	align-items: center;
}
.navbar .row:after {
	content: "";
	width:100%;
	height:2px;
	background: gray;
}
.navbar_list {
	margin-left:auto
}

.btn {
	font-size: 15px;
	font-weight: 600;
	line-height: 1;
	color:black;
	text-transform: none;
}
</style>