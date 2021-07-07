namespace SpriteKind {
    export const Prop = SpriteKind.create()
}

function displayText(text: string, pauseLength: number){
    gameText.setText(text)
    gameText.setPosition(80, 30)
    pause(pauseLength)
}

function beginNextRound(){
    for (let i = 0; i <= sequenceSize; i++){
        sequence.set(randint(0, 5), i)
    }
    inputSprite.setImage(assets.image`QuestionMark`)
    displayText("Watch and remember!", 3000)
    let currentImg = sprites.create(inputImgs[4])
    // displaySequence(sequence)
}

// function displaySequence(sequence: number[]){
//     for (let j = 0; j < sequence.length; j++){
//         let imgNumber = sequence.get(j)
//         let currentInputImg = sprites.create(inputImgs[imgNumber])
//     }
// }


let sequenceSize: number = 1
let sequence: number[] = []

let inputImgs: Image[] = [
    assets.image`A`,
    assets.image`B`,
    assets.image`Up`,
    assets.image`Down`,
    assets.image`Left`,
    assets.image`Right`
]

let gameText: TextSprite = textsprite.create("")
let inputSprite = sprites.create(assets.image`QuestionMark`,
SpriteKind.Prop)
info.setScore(0)
// Show instructions
game.showLongText("Watch the pattern and memorize it!\nRepeat it using buttons!",
 DialogLayout.Full)

displayText("Hello there! :)", 2000)
displayText("You got some text.", 0)

beginNextRound()