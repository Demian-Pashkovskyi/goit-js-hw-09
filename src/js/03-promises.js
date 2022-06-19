import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const from = document.querySelector('.form');

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function createPromise(position, delay) {
	const promiseProps = { position, delay };
	const shouldResolve = Math.random() > 0.3;
	const promise = new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(promiseProps);
			}
				else {
				reject(promiseProps);
			  }
		}, delay);
	});
	return promise;
}


createPromise().then((position, delay) => {
	Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { timeout: 5000 });
})
.catch((position, delay) => {
	Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { timeout: 5000 });
})

// function onFulfilled(position, delay) {
// 	Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
// }
// function onRejected(position, delay) {
// 	Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
// };
