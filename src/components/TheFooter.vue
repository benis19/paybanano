<template>
	<footer class="footer">
		<a
			href="https://banano.cc/"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Banano.cc'"
		/>

		<a
			href="https://github.com/alecrios/paynano"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Source'"
		/>

		<a
			href="https://alecrios.com/contact/"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Feedback'"
		/>

		<RouterLink
			:to="donateLink"
			class="link"
			v-text="'Donate'"
		/>
	</footer>
</template>

<script>
import CONSTANTS from '@/constants';

export default {
	name: 'TheFooter',
	data() {
		return {
			donateLink: `/${CONSTANTS.DONATE_ADDRESS}`,
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	margin: 0 auto;
	margin-top: 1.5rem;

	.link {
		font-size: .75rem;
		line-height: 1rem;
		font-weight: 500;
		color: $color-stone-lighter;

		&:hover {
			text-decoration: underline;
		}
	}

	.link + .link {
		margin-left: 1.5rem;
	}
}
</style>
