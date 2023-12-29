<template>
	<div class="badge">
		<div class="element" id="countdown">{{ icon }} {{ count }}</div>
	</div>
</template>
<script>
export default {
    props: [
      'icon',
      'count'
    ]
}
</script>