<script>
import { state } from "../stores";
import Board from "./Board.svelte";

function handleClick(i) {
	const history = $state.history.slice(0, $state.stepNumber + 1);
	const current = history[history.length - 1];
	const squares = current.squares.slice();

	if (calculateWinner(squares) || squares[i]) {
		return;
	}

	squares[i] = $state.xIsNext ? 'X' : 'O';
	$state.history = history.concat([{ squares: squares }]);
	$state.stepNumber = history.length;
	$state.xIsNext = !$state.xIsNext;
	$state.squares = squares;
}

function jumpTo(step) {
	$state.stepNumber = step;
	$state.xIsNext = (step % 2) === 0;
	$state.squares = $state.history[step].squares;
}

function calculateWinner(squares) {
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
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
</script>


<div class="game">
	<div class="game-board">
		<Board bind:squares={$state.squares} onClick={(i) => handleClick(i)} />
	</div>
	<div class="game-info">
		<div>
			{#if calculateWinner($state.history[$state.stepNumber].squares)}
				<p>Winner: { calculateWinner($state.history[$state.stepNumber].squares) }</p>
			{:else}
				<p>Next player: { $state.xIsNext ? 'X' : 'O' }</p>
			{/if}
		</div>
		<ol>
			{#each $state.history as step, move}
				<li>
					<button on:click={() => jumpTo(move)}>
						{move ?	'Go to move #' + move : 'Go to game start'}
					</button>
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
.game {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
