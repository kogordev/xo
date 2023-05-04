<template>
	<div class="w-screen h-screen flex justify-center items-center">
		<div
			class="sm:border sm:border-gray-300 sm:w-[32rem] rounded mx-auto flex flex-col items-center"
		>
			<div class="flex flex-col items-center">
				<h1 class="uppercase text-4xl font-bold mt-12">tic tac toe</h1>
				<div class="w-full flex justify-between items-center mt-6">
					<PlayerInfo :playerObj="player1" />
					<h2 class="text-xl font-bold">vs</h2>
					<PlayerInfo :playerObj="player2" />
				</div>
				<Board
					:board="board"
					:player1="player1"
					:player2="player2"
					@draw="draw"
				/>
				<div class="w-full flex items-center justify-between mt-4">
					<PinkButton @NewGame="newGame(true)" />
					<BlueButton @ClearBoard="clear(true)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import PlayerInfo from './components/PlayerInfo.vue';
import Board from './components/Board.vue';
import PinkButton from './components/PinkButton.vue';
import BlueButton from './components/BlueButton.vue';
import Player from './player';
import { computed, onMounted, reactive, ref } from 'vue';
import io from 'socket.io-client';

const ENDPOINT = 'wss://tic-tac-toe-backend.glitch.me/';
const socket = io(ENDPOINT, { transports: ['websocket'] });

const board = ref([
	['', '', ''],
	['', '', ''],
	['', '', ''],
]);

const axes = {
	0: [0, 0],
	1: [0, 1],
	2: [0, 2],
	3: [1, 0],
	4: [1, 1],
	5: [1, 2],
	6: [2, 0],
	7: [2, 1],
	8: [2, 2],
};

const player1 = reactive({});
const player2 = reactive({});

player1.value = new Player('X', 'text-pink-500', 'border-pink-500');
player2.value = new Player('O', 'text-blue-500', 'border-blue-500');

const setActivePlayer = () => {
	if (!player1.value.active && !player2.value.active) {
		player1.value.active = true;
	} else if (player1.value.active && !player2.value.active) {
		player1.value.active = false;
		player2.value.active = true;
	} else if (!player1.value.active && player2.value.active) {
		player1.value.active = true;
		player2.value.active = false;
	}
};

const resetBoard = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];
};

const clear = (isToServer) => {
	if (isToServer) socket.emit('clear', '');
	if (winner.value) {
		winner.value.winAxes = null;
		//make the winner is the active player
		winner.value.active = true;
	} else {
		setActivePlayer();
	}
	resetBoard();
};

const newGame = (isToServer) => {
	if (isToServer) socket.emit('newGame', '');

	delete player1.value;
	delete player2.value;
	player1.value = new Player('X', 'text-pink-500', 'border-pink-500');
	player2.value = new Player('O', 'text-blue-500', 'border-blue-500');
	resetBoard();
	setActivePlayer();
};

onMounted(() => newGame(false));

//recieve from server
socket.on('draw', (data) => {
	console.log('recieved the axis:', data);
	//push isToServer = false [row,col,isToServer]
	data.push(false);
	draw(data);
});

//recieve from server
socket.on('clear', (data) => {
	console.log('recieved clear trigger');
	clear(false);
});

//recieve from server
socket.on('newGame', (data) => {
	console.log('recieved the axis:', data);
	newGame(false);
});

//get current active player
const activePlayer = computed(() => {
	if (player1.value.active && !player2.value.active) {
		return player1.value;
	} else if (!player1.value.active && player2.value.active) {
		return player2.value;
	} else return null;
});

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		let [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			const winner =
				player1.value.label === squares[a]
					? player1.value
					: player2.value.label === squares[a]
					? player2.value
					: null;

			a = axes[a];
			b = axes[b];
			c = axes[c];
			winner.winAxes = [a, b, c];
			return winner;
		}
	}
	return null;
};

const isBoardFull = computed(() => {
	return !board.value.flat().includes('');
});

const winner = computed(() => {
	const winner = calculateWinner(board.value.flat());
	if (winner) {
		winner.wins++;
	}

	return winner;
});

const draw = (cellAxis) => {
	let [row, column, isToServer] = [...cellAxis];
	//if cell is not empty or there is a winner already then return
	if (board.value[row][column] || winner.value) {
		return;
	}

	//send axes to server for the other player
	if (isToServer) socket.emit('draw', [row, column]);
	board.value[row][column] = activePlayer.value.label;
	if (winner.value || isBoardFull.value) {
		player1.value.active = false;
		player2.value.active = false;
	} else setActivePlayer();
};
</script>
