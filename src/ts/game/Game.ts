export interface GameState {
    /** True if the game's started. Initially false. Tap to start. */
    started: boolean
    /** 1 on the first frame when the game's running, increments ~60x per second */
    frame: number
    /** Unix ms of last frame */
    lastFrameMs: number
    /** Each game starts on Level 1 */
    level: number
    /** Each game starts with a score of 0 */
    score: number
}

export default abstract class Game {
    gameModal: HTMLElement
    gameScreen: HTMLElement
    gameLevel: HTMLElement
    gameScore: HTMLElement
    state: GameState

    constructor() {
        this.gameModal = document.querySelector('.JsGameModal')
        this.gameScreen = document.querySelector('.JsGameScreen')
        this.gameLevel = document.querySelector('.JsGameLevel')
        this.gameScore = document.querySelector('.JsGameScore')

        this.state = {
          started: false,
          frame: 1, 
          lastFrameMs: new Date().getTime(),
          level: 1,
          score: 0
        }
    }

    gameOnStart() {
        this.state.frame = 1
        this.state.level = 1
        this.state.score = 0
        this.state.started = true
    }

    abstract gameOnTap()
    abstract gameFrame(frame: number, dt: number)

    gameOnEnd(message: string) {
        this.gameModal.innerText = message
        this.state.started = false
        this.render()
    }

    init() {
        document.addEventListener('keydown', this.onKeyDown)
        document.addEventListener('touchstart', this.onTap)
        this.frame()
    }

    frame = () => {
        const nowMs = new Date().getTime()
        if (this.state.started) {
            const dt = (nowMs - this.state.lastFrameMs) * 0.001
            this.gameFrame(this.state.frame, dt)
        }
        this.state.frame++
        this.state.lastFrameMs = nowMs
        window.requestAnimationFrame(this.frame)
    }

    render() {
        const {started, score, level} = this.state
        if (level < 1 || level >= 100) throw new Error(`Level must be in [0, 99] got ${level}`)
        if (score < 0 || score >= 10000) throw new Error(`Score must be in [0, 9999] got ${score}`)

        this.gameModal.style.visibility = started ? 'hidden' : 'visible'
        this.gameLevel.innerHTML = 'L' + (100 + level).toString().substr(1)
        this.gameScore.innerHTML = (10000 + score).toString().substr(1)
    }

    onKeyDown = (e: KeyboardEvent) => {
        if(e.key === ' ') {
            this.onTap()
        }
    }

    onTap = () => {
        if(this.state.started) {
            this.gameOnTap()
        } else {
            this.gameOnStart()
        }
    }
}