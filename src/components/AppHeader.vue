<template>
<div class="app-header-wrapper">
		<AppNav :navigation="navigation" />
		<header class="app-header">
			<div class="app-header__content">
				<h1>Vardas Pavarde</h1>
				<h3>Portfolio</h3>
			</div>
		</header>
	</div>
</template>

<script>
import AppNav from '@/components/AppNav'
import routes from '@/routes'
export default {
	name: 'AppHeader',
	components: {
		AppNav
	},
	computed: {
		navigation () {
			return routes
				.filter(route => route.meta.displayName)
				.map(route => ({
					name: route.meta.displayName,
					to: {
						name: route.name
					}
				}))
		}
	}
}

</script>

<style lang="scss">
	.app-header-wrapper {
		background-color:aqua;
		height: 40vh;
		width: 100%;
	}
	.app-header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
        height: 60%;


        &__content {
            color: rgb(139, 142, 145);
            text-transform: uppercase;
            text-align: center;
        }
	}
</style>
