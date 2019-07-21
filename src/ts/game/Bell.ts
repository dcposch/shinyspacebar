import Game, { GameState } from './Game'

interface BellGameState extends GameState {
    pressed: boolean
}

const bells = window['bells'] = []

export default class Bell extends Game {
    state: BellGameState
    bellAudio: HTMLAudioElement
    bellB: HTMLDivElement
    bellBlocks: HTMLElement[]

    constructor() {
        super()

        this.bellAudio = document.querySelector('.JsBellAudio')
        this.bellB = document.querySelector('.JsBellB')
        this.bellBlocks = Array.prototype.slice.apply(document.querySelectorAll('.JsBellBlocks div'))

        this.state.pressed = false
    }

    gameOnStart() {     
        console.log('BELL START')
        super.gameOnStart()
        this.bellAudio.play()
        this.bellAudio.addEventListener('ended', this.onEnded)
        this.render()
    }

    gameOnTap() {
        this.state.pressed = true
        bells.push({start: this.curTime(), end: null})
    }

    gameOnTapEnd() {
        this.state.pressed = false
        if (bells.length > 0) {
            bells[bells.length - 1].end = this.curTime()
        }

        console.log(bells.map(b => JSON.stringify(b)).join(',\n'))
    }

    gameFrame(frame: number, dt: number) {
        this.render()
    }

    curTime() {
        return this.bellAudio.currentTime
    }

    onEnded = () => {
        this.gameOnEnd('NEEDS MORE COWBELL')
    }

    render() {
        const {pressed} = this.state
        this.bellB.classList.toggle('PgBellNone', !pressed)
        this.bellB.classList.toggle('PgBellGood', pressed)
        super.render()
    }
}