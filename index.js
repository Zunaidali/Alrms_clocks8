const clockElement = document.getElementById('clock');
const alarmTimeElement = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm');
const alarmSoundElement = document.getElementById('alarm-sound');

// Update the clock display every second
setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  clockElement.textContent = currentTime;
}, 1000);

// Set the alarm
setAlarmButton.addEventListener('click', () => {
  const alarmTime = alarmTimeElement.value;
  const alarmHours = alarmTime.split(':')[0];
  const alarmMinutes = alarmTime.split(':')[1];

  // Convert alarm time to milliseconds
  const alarmTimeMs = alarmHours * 3600 * 1000 + alarmMinutes * 60 * 1000;

  // Get the current time in milliseconds
  const currentTimeMs = new Date().getTime();

  // Calculate the time difference between the alarm time and the current time
  const timeDiff = alarmTimeMs - currentTimeMs;

  // If the time difference is positive, set the alarm
  if (timeDiff > 0) {
    setTimeout(() => {
      alarmSoundElement.play();
    }, timeDiff);
  }
});