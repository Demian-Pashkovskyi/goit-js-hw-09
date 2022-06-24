import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');


form.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = new FormData(form);
	const delay = parseInt(data.get('delay'));
	const step = parseInt(data.get('step'));
	const amount = parseInt(data.get('amount'));

	for (let i = 1; i < amount + 1; i++) {
		createPromise(i, delay + step * i)
		.then(({ position, delay }) => {
			Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
		})
		.catch(({ position, delay }) => {
			Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
		});
	}
});

function createPromise(position, delay) {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve({ position, delay });
			}
				else {
					reject({ position, delay });
				}
		}, delay);
	});
};