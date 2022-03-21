<template>
	<div class="tabs_logic">

		<span
			class="tab"
			:class="{ activeTab: selectedTab === tab }"
			v-for="(tab, index) in tabs"
			:key="index"
			@click="selectedTab = tab"
		>
			{{ tab }}
		</span>

		<tab-list-one
			:posts="posts"
			v-if="!isPostsLoading"
			v-show="selectedTab === 'Viimased'"
		/>
		<tab-list-two
			:posts="posts"
			v-if="!isPostsLoading"
			v-show="selectedTab === 'Top Lood'"
		/>
		<preloader-one v-else></preloader-one>
	</div>
</template>
<script>
import TabListOne from "@/components/Tabs/TabListOne";
import TabListTwo from "@/components/Tabs/TabListTwo";
import axios from 'axios';
export default {
	components: {
		TabListOne, TabListTwo
	},
	data(){
		return {
			posts: [],
			tabs: ["Viimased", "Top Lood"],
			selectedTab: 'Viimased',
			isPostsLoading: false,
		}
	},
	methods: {
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
					const response = await axios.get('http://localhost:3000/posts');
					this.posts = response.data;
			} catch(e) {
				alert('Error')
			} finally {
				this.isPostsLoading = false;
			}
		}
	},
	mounted() {
		this.fetchPosts();
	}
}
</script>

<style>
	@media (min-width:768px) {
	.tabs_logic {
		flex:0 0 30%;
		max-width:30%;
	}
}
	.tab {
		padding: 10px 15px;
		color: #708597;
		background: #EDF2F4;
		
		cursor: pointer;
}
	.activeTab {
		color:#000;
		padding: 10px 15px;
		background: #fff;
}
</style>