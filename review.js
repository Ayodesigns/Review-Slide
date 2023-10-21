const name = document.querySelector('.author');
const job = document.querySelector('.job');
const review = document.querySelector('.review');
const modelImg = document.querySelector('.model');
const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');

let reviewCount = 0;

const profiles = [
	{
		name: 'John Adams',
		job: 'UX Designer',
		review: 'Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.laborum ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		modelImg: 'bellion-model.png'
	},
		{
			name: 'Sarah Quincy',
				job: 'Software Engineer',
				review: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.laborum',
				modelImg: 'model.png'
			},
			{
			name: 'Ayusha Gupta',
				job: 'Lawyer',
				review: ' dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.laborum voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu',
				modelImg: 'model.png'
			},
			{
			name: 'Juilo Anderson',
				job: 'Creative Director',
				review: 'laborum voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cuipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				modelImg: 'bellion-model.png'
			}
	];
	
	/*window.addEventListener('DOMContentLoaded', () => {
		swapReview()
	});*/
	function swapReview() {
		let item = profiles[reviewCount]
		name.textContent = item.name;
		job.textContent = item.job;
		review.textContent = item.review;
		modelImg.src = item.modelImg
	};
	nextBtn.addEventListener('click', () => {
		reviewCount++;
		if (reviewCount > profiles.length - 1) {
			reviewCount = 0;
		}
		swapReview();

	});
	prevBtn.addEventListener('click', () => {
		reviewCount--;
		if (reviewCount < 0) {
			reviewCount = profiles.length - 1;
		}
		swapReview()
	})