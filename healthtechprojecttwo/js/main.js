//Note to self: Make game more OOP


const players = {
	playerOne: '💊',
	playerTwo: '😷',
	whoseTurn: 0


}
console.log(players)
const thePlayers = Object.values(players)
console.log(thePlayers)


function theFirstPlayer() {
	return thePlayers[0]

}
function theSecondPlayer() {
	return thePlayers[1]

}

document.querySelector('#one').addEventListener('click', playGameOne)
function playGameOne() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let one = theFirstPlayer()
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let one =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerTwo()
	}

	


}

document.querySelector('#two').addEventListener('click', playGameTwo)
function playGameTwo() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let two = theFirstPlayer()
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let two =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#three').addEventListener('click', playGameThree)
function playGameThree() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let three = theFirstPlayer()
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let three =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#four').addEventListener('click', playGameFour)
function playGameFour() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let four = theFirstPlayer()
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let four =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#five').addEventListener('click', playGameFive)
function playGameFive() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let five = theFirstPlayer()
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let five =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#six').addEventListener('click', playGameSix)
function playGameSix() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let six = theFirstPlayer()
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let six =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#seven').addEventListener('click', playGameSeven)
function playGameSeven() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let seven = theFirstPlayer()
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let seven =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerTwo()
	}
	

}

document.querySelector('#eight').addEventListener('click', playGameEight)
function playGameEight() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let eight = theFirstPlayer()
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let eight =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#nine').addEventListener('click', playGameNine)
function playGameNine() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let nine = theFirstPlayer()
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let nine =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerTwo()
	}
	
	
}

function threeInARowPlayerOne() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsOne()

	}
	else {
		//displayLosingResults()
	}

}
function threeInARowPlayerTwo() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsTwo()

	}
	else {
		//displayLosingResults()
	}

}

function displayWinningResultsOne() {
	document.querySelector('#results').innerText = ("PLAYER ONE WINS! 💊 💊 💊 ")
	
}
function displayWinningResultsTwo() {
	document.querySelector('#results').innerText = ("PLAYER TWO WINS! 😷 😷 😷 ")
	
}
