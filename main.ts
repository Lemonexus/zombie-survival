function addZombie () {
    zombieNumber = randint(0, zombieImgs.length)
    zombie = sprites.create(zombieImgs[zombieNumber], SpriteKind.Enemy)
    tiles.placeOnRandomTile(zombie, sprites.castle.tilePath5)
    zombie.follow(oldLady, randint(32.672, 43.634))
    leftImg = zombieImgs[zombieNumber].clone()
    leftImg.flipX()
    sprites.setDataImage(zombie, "costume-right", zombieImgs[zombieNumber])
sprites.setDataImage(zombie, "costume-left", leftImg)
}
info.onCountdownEnd(function () {
    wave = wave + 1
    if (wave == 4) {
        game.splash("you were pathetic so the army came to save you")
        game.over(true)
    }
    game.splash("the wave " + wave + " is coming so stop reading this")
    nextWave()
})
function nextWave () {
    info.startCountdown(23)
    if (wave == 1) {
        for (let index = 0; index < 5; index++) {
            addZombie()
        }
    } else if (wave == 2) {
        for (let index = 0; index < 3; index++) {
            addZombie()
        }
    } else if (wave == 3) {
        for (let index = 0; index < 5; index++) {
            addZombie()
        }
    }
}
// words.exe
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    oldLady.setImage(zombieImgs[randint(0, zombieImgs.length - 1)])
    game.splash("you were bitten you pathetic person")
    game.over(false)
})
let randomSaying = ""
let randomZombie: Sprite = null
let zombies2: Sprite[] = []
let left: Image = null
let right: Image = null
let zombies: Sprite[] = []
let leftImg: Image = null
let zombie: Sprite = null
let zombieNumber = 0
let wave = 0
let zombieImgs: Image[] = []
zombieImgs = [
img`
    ...cccccccccccccc...
    ..c67777777777777c..
    ..c67777777777777c..
    .cc111177777777771c.
    c1111111777f77f7111c
    c111111177fd77df111c
    c111111177ff77ff111c
    .c1111177777777771c.
    ..c67777777dfffd7c..
    ..c67777777d777d7c..
    ..c67777777dd7dd7c..
    ...c677777777777c...
    ..c67777777777777c..
    ..c677cc777777777cc.
    ..c67667c7777777767c
    ..c67667c7777777767c
    ..c677cc777777777cc.
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ..c67777777777777c..
    ...cc677cccc677cc...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `,
img`
    .....44444444444...
    ..444444444444444..
    .44444444444444444.
    4444444744444444444
    4444477777444447444
    444477777c7777c744.
    4447777777f77f7744.
    4411777777f77f77c..
    4411417777777771c..
    4c11114444444141c..
    .c11141114411141c..
    .c11114111411111c..
    ..c677711111414c...
    .c67777771411177c..
    .c677cc777111e77cc.
    .c67667c7effdee767c
    .c67667c7f..d.e767c
    .c677ccdf......ecc.
    .c67777ef.....fec..
    .c67777ef.df.fe7c..
    .c67777eefdfdee7c..
    .c677773eeeeee37c..
    .c6777737e77e377c..
    .c67777777777377c..
    ..cc677cccc677cc...
    ...c677c..c677c....
    ...c677c..c677c....
    ....ccc....ccc.....
    `,
img`
    .......cccccccc....
    ...cccc77777777c...
    ..c4b4477777777c...
    .cbb4bb77777777c...
    .c44bb76ffff6fff...
    .cb4b77ffff7ffff...
    c63d777ffff7ffff...
    c67377777777777c...
    c6737777fff7777c...
    c67777777777777c...
    c67777777777777c...
    .c677777777777c....
    c6777f677777777c...
    c6777cc76777777cc..
    c677667cf67777767c.
    c677667ce77777767c.
    c6777cc7e776777cc..
    c6777777777f677c...
    c6777777777e677c...
    c6777777777ef67c...
    c6777777777ee77c...
    c67777777777e77c...
    c67777777777777c...
    .cc6677cc6677cc....
    ....cd....cd.......
    ....cd....cd.......
    ...c.cd..c.cd......
    ...................
    ...................
    `,
img`
    .........4444..........
    .......4444444...44....
    ...44444444444444444...
    ..4444444444444444444..
    .444444444444444444444.
    4444444444444444444444.
    44444444447444444444444
    44444444777774444474444
    4444444777777777777444.
    .444447777777f7ff7744..
    .44441177777777ff77c...
    4444411417777777771c...
    4444c11114444444141c...
    .444c11141114411141c...
    ..44c11114111411111c...
    .....c677711111414c....
    ....c67777771411177c...
    ....c67777777111777cc..
    ....e6e77777777e77767c.
    .....e.e777eeee.e77e7c.
    ........eee3333d3eecc..
    .............3.........
    ..........d3ddd33......
    .............d.........
    ....ee....eeee.eeeee...
    ....c6eeee7777e7777c...
    ....c67777777777777c...
    .....cc677cccc677cc....
    ......cbddc..cbddc.....
    ......cbddc..cbddc.....
    .......ccc....ccc......
    `,
img`
    ....fffffffff......
    ..ffeeeeeeeeeff....
    .feeeeeeeeeeeeef...
    feeeeeeeeeeeeeef...
    feeeeeeeeeeeeeef...
    feeeeeeeceeeec7c...
    feeeeeeeefcdf77c...
    feeeeeeedfccfd7c...
    feee7777cccccc7c...
    c6777777cccccc7c...
    c6777777dcddcd7c...
    c67777777777777c...
    .c677777777777c....
    cddddddddddddd1c...
    cddddccddddddd1ccc.
    cddd667cddddd21c67c
    cddd667cdddd222c67c
    cddddccdddddd21ccc.
    cddddddddddddd1c...
    cddddddddddddd1c...
    cdded4dddddddd1c...
    cdd2d7dddddddd1c...
    cddddddddbbbdddc...
    cdd2d7dddddddd1c...
    .cdddddccdddd1c....
    ..ccbbc..ccbbc.....
    ..ccbbc..ccbbc.....
    ...ccc....ccc......
    `,
img`
    ...cccccccccccccc....
    ..c67777777777777c...
    ..c67777777777777c...
    .cc1111777cccccc71c..
    c111111177bddfdb111c.
    c111111177b3d3db111c.
    c1111111777bbbb7111c.
    .c1111177777777771c..
    ..c6777777dccc777c...
    ..c6777777cccc777c...
    ..c6777777eeee777c...
    ...c6777777ee777c....
    ..fffffff117e711ff...
    ..ffffccff11e11fffcc.
    ..fff667cf11c11fff67c
    ..fff667cff1c1ffff67c
    ..ffffccfff1f1fddfcc.
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffffdfdffff...
    ..ffffffffffffffff...
    ..ffffffffffffffff...
    ..fffffffffdfdffff...
    ...ffffffffffffff....
    ......bb.....bb......
    ......bd.....bd......
    ......bd.....bd......
    `,
img`
    ...cccccc.......
    ..c444bbbc......
    .c44bbb44bccccc.
    c6b4444bbb77777c
    c6bb4bbb4b77777c
    c63b4b44b377777c
    c673b4b77377777c
    c6733377ff77ff7c
    c67373777f77f77c
    c67377777777777c
    c67777777ccc777c
    c6777777c777c77c
    c67777777777777c
    .c677777777777c.
    eeee88eeeeee882e
    eeee88eeeeee882e
    eeee88eeeeee882e
    cc8888888888888c
    cc8c5588888c5d8c
    cc8c5588888c558c
    cc8888888888888c
    cc8888888888888c
    cc888cccccccc88c
    cc8888cccccc888c
    cc8888888888888c
    .cc888cccc888cc.
    ..ceeec..ceeec..
    ..ceeec..ceeec..
    ...ccc....ccc...
    `,
img`
    ....fffffffff...
    ..ffeeeeeeeeeff.
    .feeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeeeeeeeeeeef
    feeeeee6ffff6fff
    feeeeeeffffeffff
    feeeeeeffff7ffff
    feee77777777777c
    c67777777ccc777c
    c6777777c777c77c
    c67777777777777c
    .c677777777777c.
    cccc88cccccc88cc
    cccc88cccccc88cc
    cccc88cccccc88cc
    cc8888888888888c
    cc8c5588888c558c
    cc8c5588888c558c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    cc8888888888888c
    .cc888cccc888cc.
    ..cc88c..cc88c..
    ..cc88c..cc88c..
    ...ccc....ccc...
    `,
img`
    .....44444444444...
    ..444444444444444..
    .44444444444444444.
    4444444744444444444
    4444477777444447444
    444477777c7777c744.
    4447777777f77f7744.
    4447777777f77f77c..
    4447777777777777c..
    4444777777777777c..
    .444777777277777c..
    .447777777777777c..
    ..c677777777777c...
    .c67777777777777c..
    .c677cc7777e7e77c..
    .c67667ce77777ee...
    .c67667c77777ee....
    .c677cc7777e7eede..
    .c6777777e77eee....
    .c677777777eeeee...
    .c6777777777eeede..
    .c6777777e7eee7dc..
    .c6777777777ee77c..
    .c677777777e7e77c..
    ..cc677cccc677cc...
    ...fffcf..fffcf....
    ...fffcf..fffcf....
    ....fff....fff.....
    `,
img`
    ...cccccccccccccc...
    ..c67777777777777c..
    ..c67777777777777c..
    .cc1111777f77777f1c.
    c111111177ff777ff11c
    c11111117775f7f5111c
    c111111177777777111c
    .c1111177777777771c.
    ..c6777777dffffd7c..
    ..c677777dd7777ddc..
    ..c67777777777777c..
    ...c677777777777c...
    ..cddddddddddddd1c..
    ..cddddccddddddd1ccc
    ..cddd667cddddd21c67
    ..cddd667cdddd222c67
    ..cddddccdddddd21ccc
    ..cddddddddddddd1c..
    ..cddddddddddddd1c..
    ..cdded4dddddddd1c..
    ..cdd2d7dddddddd1c..
    ..cddddddddbbbdddc..
    ..cdd2d7dddddddd1c..
    ...cdddddccdddd1c...
    ....ceeec...cce.....
    ....ceeec....c......
    .....ccc.....e......
    `,
img`
    ....fffffffff...
    ..ffeeeeeeeeeff.
    .feeeeeeeeeeeeef
    ffeeeeeeeeeeeeef
    ffeeeeeeeeeeeeef
    ffeeeee6ffff6fff
    ffeeeeeffffeffff
    ffeeeeeffff7ffff
    feee77777777777c
    eeeef7771111177c
    eeee7ff1111111fc
    eeee77711111117c
    eeeefff1111111c.
    eeeeddddffddddcc
    ceeeddddffddddcc
    cceeddddffd38acc
    cceeddddffd83cdc
    ccddddddffdddddc
    ccdddddddddddddc
    ccdddddddddddddc
    ccdddddddddddddc
    ccdddddddddffffc
    ccdddddddddffffc
    ccdddddddddddddc
    .cc111cccc111cc.
    ..cc11c..cc11c..
    ..cc11c..cc11c..
    ...ccc....ccc...
    `
]
let zombieSayings = [
"Arr",
"Grr",
"scary text",
"boo",
"spooky word",
"brainsss",
"i want hungry",
"this is a rare text",
"should zombies even be speaking",
"how am i speaking",
"argggggg",
"zombie noises.mp4",
"more brains",
"i want more hungry",
"hungryyyyyy",
"my name is ashley",
"i am just a piece of code",
"noises.mp4",
"hi",
"i want you to go bye"
]
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level_1`)
wave = 1
nextWave()
game.onUpdate(function () {
    zombies = sprites.allOfKind(SpriteKind.Enemy)
    for (let z of zombies) {
        if (z.vx > 0) {
            right = sprites.readDataImage(z, "costume-right")
            z.setImage(right)
        } else {
            left = sprites.readDataImage(z, "costume-left")
            z.setImage(left)
        }
    }
})
game.onUpdateInterval(1500, function () {
    zombies2 = sprites.allOfKind(SpriteKind.Enemy)
    randomZombie = zombies2[randint(0, zombies2.length - 1)]
    randomSaying = zombieSayings[randint(0, zombieSayings.length - 1)]
    randomZombie.say(randomSaying, 1000)
})
