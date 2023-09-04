<script>
	export let squares;
	export let onClick;
</script>

<div>
	<div class="board-row">
		<button class="square" on:click={() => onClick(0)}>{squares[0] || ""}</button>
		<button class="square" on:click={() => onClick(1)}>{squares[1] || ""}</button>
		<button class="square" on:click={() => onClick(2)}>{squares[2] || ""}</button>
    </div>
	<div class="board-row">
		<button class="square" on:click={() => onClick(3)}>{squares[3] || ""}</button>
		<button class="square" on:click={() => onClick(4)}>{squares[4] || ""}</button>
		<button class="square" on:click={() => onClick(5)}>{squares[5] || ""}</button>
	</div>
	<div class="board-row">
		<button class="square" on:click={() => onClick(6)}>{squares[6] || ""}</button>
		<button class="square" on:click={() => onClick(7)}>{squares[7] || ""}</button>
		<button class="square" on:click={() => onClick(8)}>{squares[8] || ""}</button>
	</div>
</div>

<style>
.board-row::after {
    content: "";
    display: block;
    clear: both;
}

.square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
}
</style>
