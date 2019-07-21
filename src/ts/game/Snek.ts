import Game, { GameState } from './Game'

enum SnekBlock {
    Empty = 0,
    Dot,
    Food,
    Wall,
    Snake
}

interface SnekGameState extends GameState {
    tapped: boolean
    board: SnekBlock[][]
    snake: [number, number][]
    snakel: number
    dirx : number
    diry : number
}

export default class Snek extends Game {
    state: SnekGameState

    constructor() {
        super()

        this.state.tapped = false
        this.state.board = []
        this.state.snake = []
        this.state.snakel = 1
        this.state.dirx = 0
        this.state.diry = 0
    }

    gameOnStart() {
        console.log('SNEK start')

        super.gameOnStart()

        const w =  10 + Math.floor(this.state.level / 2)
        this.state.tapped = false
        this.state.board = Snek.genBoard(w)
        this.state.board[w-1][0] = SnekBlock.Snake
        this.state.snake = [[w-1, 0]]
        this.state.snakel = 5 + (this.state.level % 2) * 2
        this.state.dirx = 0
        this.state.diry = -1
        
        this.render()
    }

    gameOnTap() {
        this.state.tapped = true
    }

    gameFrame(frame: number, dt: number) {
        if (frame % 18 !== 0) {
            return;
        }

        console.log('FRAME ' + frame)

        const {board, snake} = this.state
        let {dirx, diry} = this.state

        // handle input
        if (this.state.tapped) {
            // turn right
            const t = dirx
            dirx = this.state.dirx = -diry
            diry = this.state.diry = t
            this.state.tapped = false
        }

        // move head of snake to snake
        const head = snake[snake.length - 1]
        const next = [head[0] + diry, head[1] + dirx] as [number, number]
        snake.push(next)
        const prevBlock = board[next[0]][next[1]]
        if (prevBlock == null || 
            (prevBlock !== SnekBlock.Dot && prevBlock !== SnekBlock.Food&& prevBlock !== SnekBlock.Empty)) {
            this.gameOnEnd('CRASH')
        }
        board[next[0]][next[1]] = SnekBlock.Snake

        // remove tail of snake
        if (prevBlock === SnekBlock.Food) {
            this.state.snakel++
        }
        if (snake.length > this.state.snakel) {
            const tail = snake.shift()
            board[tail[0]][tail[1]] = SnekBlock.Empty
        }

        // victory condition
        if(!board.some(b => b.some(c => c === SnekBlock.Dot || c === SnekBlock.Food))) {
            this.gameOnEnd(`LEVEL ${this.state.level} VICTORY`)
        }

        if (this.state.started) {
            this.state.score++
        }

        this.render()
    }

    render() {
        super.render()

        const {board} = this.state
        const rows = board.length
        const height = this.gameScreen.clientHeight / rows - 2

        const html = `
            <table class='PgSnekGrid'>
                ${board.map(b => `
                    <tr style='height: ${height}px'>
                        ${b.map(c => `<td class='PgSnek${c}'>&nbsp;</td>`).join('')}
                    </tr>
                `).join('')}
            </table>
        `

        this.gameScreen.innerHTML = html
    }

    static genBoard(w: number): SnekBlock[][] {
        const board = new Array(w) as SnekBlock[][]
        for (let i = 0; i < w; i++) {
            board[i] = new Array(w)
            for (let j = 0; j < w; j++) {
                board[i][j] = SnekBlock.Dot
            }
        }

        // place food
        for (let i = 0; i < 6; i++) {
            const ox = (Math.random() * w) | 0
            const oy = (Math.random() * w) | 0
            if (board[ox][oy] !== SnekBlock.Dot) {
                continue
            }
            board[ox][oy] = SnekBlock.Food
        }

        // place obstacles
        for (let i = 0; i < 4; i++){
            const ox = (Math.random() * (w - 3) + 1) | 0
            const oy = (Math.random() * (w - 3) + 1) | 0
            board[ox][oy] = SnekBlock.Wall
            board[ox][oy+1] = SnekBlock.Wall
            board[ox+1][oy] = SnekBlock.Wall
            board[ox+1][oy+1] = SnekBlock.Wall
        }

        return board
    }
}