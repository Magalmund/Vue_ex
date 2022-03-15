<template>
	<form @submit.prevent>
		<input-one 
			v-model="post.title" 
			type="text" 
			placeholder="Название"
		></input-one>
		<input-one
			v-model="post.body"
			class="input" 
			type="text" 
			placeholder="Описание"
		></input-one>
		<button-one
			style="align-self: flex-end; margin-top: 15px"
			@click="createPost"
			>
			Создать
		</button-one>
	</form>
</template>

<script>

export default {
	data(){
		return {
			post: {
				title: '',
				body: ''
			}
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now(); 
			this.$emit('create', this.post);
			this.post = {
				title: '',
				body: ''
			}
		}
	}
}
</script>

<style scoped>
	form {
	display: flex;
	flex-direction: column;
}
</style>