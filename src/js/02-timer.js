import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

// let selectedTime = null;
// startBtn.setAttribute('disabled', 'disabled');

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
 
	const days = addLeadingZero(Math.floor(ms / day));
	const hours = addLeadingZero(Math.floor((ms % day) / hour));
	const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
	const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
 
	return { days, hours, minutes, seconds };
 }
 
 function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

 const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: Date.now(),
	minuteIncrement: 1,
	onClose(selectedDates) {
	  if (selectedDates[0] < Date.now() < 0) {
		 Notify.failure('Please choose a date in the future');
		//  selectedDates[0] = new Date();
		return;
	  } else {
		 refs.startBtn.disabled = false;
		 selectedTime = selectedDates[0];
	  }
	},
 };
 
class Timer {
	constructor() {
	this.timerID = null;
	this.isActive = false;
	refs.startBtn.disabled = true;
}
 
	startTimer() {
	  if (this.isActive) {
		//  return;
	  }
 
	  this.isActive = true;
	  this.timerID = null;
	  this.timerID = setInterval(() => {
		 const currentTime = Date.now();
		 const deltaTime = selectedTime - currentTime;
		 const componentsTimer = convertMs(deltaTime);
		 if (deltaTime < 0) {
			clearInterval(this.timerId);
			return;
		 }
		 this.updateComponentsTimer(componentsTimer);
	  }, 1000);
	  Notiflix.Notify.success();
	}
 
	updateComponentsTimer({ days, hours, minutes, seconds }) {
	  refs.days.textContent = days;
	  refs.hours.textContent = hours;
	  refs.minutes.textContent = minutes;
	  refs.seconds.textContent = seconds;
	}
 
	stopTimer() {
	  clearInterval(this.timerID);
	  return;
	}
 }
 
 const timer = new Timer();
 flatpickr(refs.inputDate, options);
 refs.startBtn.addEventListener('click', () => timer.startTimer());

// const options = {	
// 	enableTime: true,
// 	time_24hr: true,
// 	defaultDate: new Date(),
// 	minuteIncrement: 1,
// 	onClose(selectedDates) {
// 		if (selectedDates[0] < new Date()) {
// 			Notiflix.Report.failure("Please choose a date in the future")
// 		}
// 		else {
// 			currentTime = selectedDates[0];
// 			refs.startBtn.disabled = false;	
// 		}
// 	},
// };

// class Timer {
// 	constructor() {
// 		this.intervalId = null;
// 		this.timerID = null;
// 		this.isActive = false;
// 	}
// 	start() {
// 		if(this.isActive) {
// 			return;
// 		}
// 		this.isActive = true;
// 		this.intervalId = setInterval(() => {
// 			const currentTime = Date.now();
// 			const deltaTime = startTime - currentTime;
// 			const componentsTimer = convertMs(deltaTime);
// 			this.updateComponentsTimer(componentsTimer);
// 			if (deltaTime <= 1000) {
// 				this.stopTimer();
// 		}
// 		}, 1000);
// 	}
// 		updateComponentsTimer({ days, hours, minutes, seconds }) {
// 			refs.days.textContent = days;
// 			refs.hours.textContent = hours;
// 			refs.minutes.textContent = minutes;
// 			refs.seconds.textContent = seconds;
// 		}
	
// 		stop() {
// 			clearInterval(this.timerID);
// 		}
// }

// const timer = new Timer();
// flatpickr(inputDate, options);
// refs.startBtn.addEventListener('click', () => timer.startTimer());