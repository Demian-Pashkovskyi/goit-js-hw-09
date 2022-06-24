import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type="submit"]');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(form);
	const delay = parseInt(data.get('delay'));
	const step = parseInt(data.get('step'));
	const amount = parseInt(data.get('amount'));

	setTimeout(() => {
		submitBtn.removeAttribute('disable');
	}, delay + amount * step);

	for (let position = 1; position < amount + 1; position++) {
		createPromise(position, delay)
		.then(({ position, delay }) => {
			Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
		})
		.catch(({ position, delay }) => {
			Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
		});
		position += step;
	}
};

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay });
			}	else {
				reject({ position, delay });
			}
		}, delay);
	});
};

