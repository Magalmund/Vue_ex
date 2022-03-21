
import Main from "@/pages/Main";
import DelfiPost from "@/pages/DelfiPost";
import MaaLehtPost from "@/pages/MaaLehtPost";
import ExpressPost from "@/pages/ExpressPost";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/delfi',
		component: DelfiPost
	},
	{
		path: '/maaleht',
		component: MaaLehtPost
	},
	{
		path: '/express',
		component: ExpressPost
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;