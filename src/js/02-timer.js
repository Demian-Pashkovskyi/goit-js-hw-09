import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';


const startBtn = document.querySelector("[data-start]");
const inputDate = document.getElementById("datetime-picker");

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const days = Math.floor(ms / day);
   const hours = Math.floor((ms % day) / hour);
   const minutes = Math.floor(((ms % day) % hour) / minute);
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

startBtn.disabled = true;
let selectedTime = null;
const timerID = null;

function checkDate(date) {
	startBtn.disabled = true;

	const currentTime = new Date();
	if (date < currentTime) {
		// refs.startBtn.removeAttribute('disabled');
		Notiflix.Report.failure("Please choose a date in the future");
      // return;
	} else {
	startBtn.disabled = false;
	selectedTime = date.getTime();
	}
}

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		checkDate(selectedDates[0]);
	},
};

flatpickr(inputDate, options);

startBtn.addEventListener('click', () => {
	const timerId = setInterval(() => {
		const currentTime = new Date().getTime();
		const deltaTime = selectedTime - currentTime;
		const componentsTimer = convertMs(deltaTime);
		if (deltaTime < 0) {
			clearInterval(timerId);
			startBtn.disabled = true;
			return;
		}
		const updateComponentsTimer = convertMs(deltaTime);

		days.innerHTML = addLeadingZero(updateComponentsTimer.days);
      hours.innerHTML = addLeadingZero(updateComponentsTimer.hours);
      minutes.innerHTML = addLeadingZero(updateComponentsTimer.minutes);
      seconds.innerHTML = addLeadingZero(updateComponentsTimer.seconds);

	}, 1000);
	Notiflix.Notify.success();
});