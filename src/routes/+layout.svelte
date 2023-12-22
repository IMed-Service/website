<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
    <svelte:fragment slot="pageHeader">
        <AppBar background="bg-primary-500/60 shadow-xl">Bar</AppBar>
    </svelte:fragment>
    <slot />
</AppShell>
