<template>
	<div class="badge">
		<div class="element" id="countdown"><font-awesome-icon icon="clock"/> {{ countdownMessage }}</div>
	</div>
</template>
<script>
export default {
	props: {
		zeit: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			countdownMessage: '',
		};
	},
	methods: {
		updateCountdown() {
			const now = new Date();
			const targetDate = new Date(this.zeit);

			const timeRemaining = targetDate - now;

			if (timeRemaining <= 0) {
				// Countdown abgelaufen
				this.countdownMessage = "AINTNOWAY";
			} else {
				const totalSeconds = Math.floor(timeRemaining / 1000);
				const hours = Math.floor(totalSeconds / 3600);
				const minutes = Math.floor((totalSeconds % 3600) / 60);
				const seconds = totalSeconds % 60;

				// Führende Nullen hinzufügen
				const formattedHours = hours < 10 ? "0" + hours : hours;
				const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
				const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

				// Countdown-Nachricht erstellen
				this.countdownMessage = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
			}
		},
	},
	mounted() {
		// Countdown aktualisieren alle 1 Sekunde
		setInterval(this.updateCountdown, 1000);

		// Initialen Countdown aufrufen
		this.updateCountdown();
	},
};
</script>