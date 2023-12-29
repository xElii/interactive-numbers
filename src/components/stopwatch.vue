<template>
	<div class="badge">
		<div class="element" id="countdown"><font-awesome-icon icon="clock"/> {{ stopwatchMessage }}</div>
	</div>
</template>
<script>
export default {
  props: {
    startzeit: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stopwatchMessage: '',
    };
  },
  methods: {
    updateStopwatch() {
      const now = new Date();
      const startTime = new Date(this.startzeit);

      const elapsedTime = now - startTime;

      const totalSeconds = Math.floor(elapsedTime / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // Führende Nullen hinzufügen
      const formattedHours = hours < 10 ? "0" + hours : hours;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      // Stoppuhr-Nachricht erstellen
      this.stopwatchMessage = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    },
  },
  mounted() {
    // Stoppuhr aktualisieren alle 1 Sekunde
    setInterval(this.updateStopwatch, 1000);

    // Initialen Stoppuhr aufrufen
    this.updateStopwatch();
  },
};
</script>