import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
// const submitBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', handleSabmit);

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay });
			} else {
				reject({ position, delay });
				}
		}, delay);
		return;
	});
};

function handleSabmit(event) {
	event.preventDefault();
	const data = event.currentTarget;
	let delay = Number(data.elements.delay.value);
	const step = Number(data.elements.step.value);
	const amount = Number(data.elements.amount.value);

	for (let i = 1; i < amount + 1; i ++) {
		createPromise(i, delay).then(({ position, delay }) => {
			Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
		}).catch(({ position, delay }) => {
			Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
		});
		delay += step;
	}
};
