controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, -50)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    ship.startEffect(effects.fire)
    info.changeLifeBy(-1)
})
let invaders: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
ship = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 3 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 3 . . . . . . . 
    . . . . . . 8 8 1 a . . . . . . 
    . . . . . . 8 3 1 a . . . . . . 
    . . . . . c c c a a a . . . . . 
    . . . . 8 8 3 3 3 1 a a . . . . 
    . . 8 f f f c c a a f f a a . . 
    . 8 8 8 8 a a 3 3 3 3 1 3 a a . 
    8 8 8 8 8 8 a a 3 3 3 1 3 3 a a 
    8 8 8 8 8 8 a a 3 3 3 3 1 3 a a 
    `, SpriteKind.Player)
controller.moveSprite(ship)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1fff1fffffffffffffffffffffffff1f11ffffffffff1ff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffff1fffffffffff1ffffffffffff1fffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffff1fffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffff
    ffffffffffffffff1fffffff1ffffffffffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffff1ffffffffffffffffff1ffffffffffffffffffffff
    fff1ffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff11fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff11111ffff1ffffffffffff1ffffffffffffffff11ffffffff1fffffffffffffffffffffffff1fffffff8ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff11111fffffffff1fffffffffffffffffffffff11ffffffffffffffff1fffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff88ff8ff8ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff1fffff11fffffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffffffff11fffffffffff8f8f8fffffff1ffffffffffffffffffffffffffffffffffffffffff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1ffffffffffff888fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888fffffffffffffffff1fffffffff1ffff1fffffffff1ffffffffffffff
    fff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffff888888ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff8f88fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffffffffffff8ff8fffffffffffffffffffffffffffffffffffffffff7fffffffffffffff
    ffffffffffffffffffff1ffffffffffffffffffffffff1ffff1ffffffffffff11ffffffffff111fffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff111111fffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffff7f77fffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1ffffffffffffffff1111fffffffffffffffffffffffffffff8ffffffffffff1fffffffffffffffffffff77777ffffffffffff
    fffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff11fffffffffffffffffffffff8fffffffffffffff6fffffff1ffffffffff1ffffff7f777fffffffffffff
    ffffffff11ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffffffff1ffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffff7ff7f7ffffffffffff
    fffffffff1f1fffffffffffffffffffff4ffffffffffffffffffff1fffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffff4ffffffffffffffffffffffffffffff7ffffffffffffff
    ffffffff1fffffffff4ffffffffff1ffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffff1ffffffffffff6ffffffffffffffffffffffffffffffffffffffff
    fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1ffffffffffffffffffffffffffffffffffffffffffffff1ffffff1ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff6ffffffffffffffffffffffff11ffffffffffff
    fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffff1fffff1ffffff
    ffffffffffffffff1fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff
    fffff1ffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1fffffff4fffff1fffffffffffffffffffffffffffffffffffffff555ffffffffffff2fffffffff1ffff1fffff1fffffffffffff6ffffffff1fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5ffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff1ffffffffffffff1ffffffffffff4fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffff1fffffffffffffffffffff
    fffffffffffffffffff1fffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffffffffffffffff4fffffffffffffffffffffffffffffffffffff1ffffffffff
    ffff1fffff1fffffffffffffffffffffff1ffffffffffffffffffffffffffffff6ffffffffffffffffffffffffbfbffffffffffffffffffffffffff4ffffffffffff4ffffffffffffffffffffff1ffff
    ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffff555555bbbffffff1ffffffffffffffffffffffffffffffff44ffffff1fffffffffffffffffff
    ffff1fffffffffffffffff2ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff6fffff44ffffffffffffffffffffffffff
    fffff1ffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffff4fffffffffffffff44444fffffffffffffff1ffffffff
    ffffffffffffffffffffff22fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffff4ffffffffffffffffff4f4fffff11fffffffffffffffff
    fff1fffffffffffffffff222222ffffffffffffffff5ffffffffffffffffffffffffffffffffffffff55515555ffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffff
    ffffffff11fffff5fff22222fffff1ffffffffffff555fffffffffffffffffffffffffffffffffffff55515555ffffffffffffff1ffffffffffffffffffffffffffff4ffffffffffffffffffffffffff
    fffffffffffffffffffff2f22ffffffffffffffff55555ffffffffff6ffffffffff111ffffffffffff55115555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff2fffffffffffffffffff55ffffffffffffffffffffff1f1ffffffffffff55115555fffffff55551fffffffffffffffffffff4fffff6fffffffffffffffffffffff1ffffff
    fffffffffffffffffffffff2fffffffffffffffffff5fffffffffffffffffffffff111fffffffffff1111111155fffff5555551ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
    fffffffffffffff5ffffffffffffffff1fffffffff5ffffffffffffffffffffffffff55555555555ff511111555ff555555555ffffff4fff4fffff1fffffffffffffffffffffffffffffffffff1fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555551111555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffff555555555555551515555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555551555555555555555ffffffffffffffffffffffffffffffff4fffffffffff11fffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffbfffffffffffffff55555555555555555555555555555555ffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffff3355555555555555555555555555555ffff4fffffffffffffffffff1fffffffffffffffffffffffff1fffffffff
    ffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff333333355555555555555555555555555fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff33333333333555555555555555555555fffffffffbffbfbffffffffffffffffffffff6ffffffffffffffffffffffffff
    ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff333333333333665555555555555555555fffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffff3333333333666666655555555555555555ffffffffffffbbfbfffffffffffffffffffffffffffffff1fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff333333336666666666655555555555555555f4fffffffffbbbbfffffffffffffff6fffff66fffffffff1ffffffffff1fffff
    fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff33333336666666666666665555555555555555fffffffffffbbbfffffffffffff1fffffffffffffffffff1ffffffffffffffff
    ffff1fffffffffffffffffffffffffffffffffffffffffffffffffff333333366666666666666ddd5555555555555555ffffffffffbfbfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff1fffffffffffffffffffffffffffffffffffffffffffff2fff33333336666666666666dddddd55555555551555555fffffffffffbfbfffffffffffffffffffffffffffffffffffffffffffffff1f
    ffff1ffffffff1fffffffff5ffffffffffffffffffffffffffff33333333366666666666ddddddd555555555111555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1ffffffffffffffffffffffffffffffffffffffffffff3333333366666666666ddddddddd555555555111115555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1fffff1ffffffffffff5ffff1ffffffffffffffffff333333336666666666dddddddddaa5555555111111555555ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffff1f11fffffffffffffffffffffffffffffffffffffff333333336666666666ddddddddaaaa5555555511115555555ff1fffffffffffff4fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffff5fffff333313333666666666ddddddddaaaaaa5555555f111155555555ffffffffffffffffffff1fffffffff6ffffffffffffffff1fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff333333133666666666dddddddaaaaaaaa5555555fff1f555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
    fffffffffffffffffffffffffffffffffffffffffffff3333333166666666dddddddddaaaaaaaaa5555555fff1ff55555555ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff333333111166666ddddddddaaaaaaaaaaa555555ffffffff5555555fffffffffffffff4ffffffff6fffffffffffff6fffffffffffffffffffff
    fffffffffafffffffffffffffffffffffffffffffffff33333111666666dddddddaaaaaaaaaaaaa555555ffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1ff1f1afffffffffffffff1fffffffffffffffffff3333366166666dddddddaaaaaaaaaaaaaf555555ff4ffff2f555555fffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffff
    fffffffffafafffffffffffffffffffffffffffffffff33336661666dddddddaaaaaaaaaaaaafff55555fffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
    fffffffafafffffffffffffffffffffffffffffffffff3333666666dddddddaaaaaaaaaaaafffff55555fffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffff1fffffffffff
    fffffffaaaaffffffffffffffffffffffffffffffffffffff66666dddddddaaaaaaaaaaaaffffff55555ffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffff
    fffaaaaaaaaaaaaffff1ffff1ffffffffffffffffffffffff666dddddddaaaaaaaaaaafffffffffffff4fffffffffffffffffffffffff8ffffffffffffffffff4fffffffffffffffffff1fffffffffff
    ffff1fffaafaff1ffffffffffffff1ffffffffffffffffdff666ddddddaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffafaf1fffffffffffffffffffffffdffffffffffffffdddddaaaaaaaaaaaffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffff
    ffffffaf1faffffffff1ffffffffffffffffffffffffdfffffffddddaaaaa1aaaafffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffff1fffffffffffff
    ffffffffffafffffffffffffffffffffffffffffffffffffffffddaaaaaaa1aaafffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff66fffffffffffffffff1ffff
    ffff1fffffafffffffffffffffffffffffffffffffffffffffffddaaaaa1111afffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffff
    ffffffffffa1fffffffffffffffffffffff6ffffffffffffffffffaaaaaaa1ff1fffffffffffffffffffff8ffffffffffffffffffffffff8ffffffff4fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff6fffffffffffffffffffaaaaaaa11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffff
    fffffffffffffffffffff6ffffffffffffffffffffffffffdfffffaaaaaaf11f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1fffffffffffffffffffffffffffffffff6fffffffffffffffffff1f11fffffffffdffffffffffffffffffffffffff8fffffffffffffffffffffffffffffff8ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff6fffffffffffffffffffffffffdfffffffff1fffdfffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffff
    ffffffffffff1ffffffffffffffffffffffffffffff6ffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1fffffff1fffffffffffffffffbfffffffffffff6ffffffdffffffffffffffffffffffffffffffffffff8fffffffffff2fffffffffffffff8fffffffffff4ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
    ffffffff1fffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffff22ffffffffffffffffffffffffffffffffffff5fffffffffffffff1ffffff
    ffffffffffffffffffffffffffffffbffffffffffff6fffffffffffffffff5ffffffffffffffffffffffffffffffffff2f222ffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff
    ffffffffffffffffff1ffffffffffbbffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffff8fffffffff222222ffff8ffffffffffffffffffffffffffffff5fffff6fffffffffffffff
    fffffffffffffffffff1fffffffffbbbbfffffffffff6ffffffffffffffffffffffffffffdffffffffffffffffffffffff22f2ffffffffffffffffffffffffffffffffffff5fffffffff1fffffffffff
    ffffff1ffffffffff1ff1ffffffbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffff22ffffffffffffffffffffffffffffffffffff5f555fffffffffffffffffff
    ffffffffffffff1fffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff55fffffffffffffffffffff
    fffffffffffffff1ffffffffffffbfbbbffffffffffffffffffffffff6fffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffff5555fffffffffffffffffff
    ffffffffffffffffffffffffffffffbbffffffffffffffffff6ffffffffffffffffff6fffffffffff4fffffffffffffffffffff4fffffffffffffffffff6fffffffffff555555555555fffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6ffffff55fffffffffffffffffffff
    ffffffffffffffffffffffffffffffbffffffffffffffffffffffffffff6fffffffffffffffffffffff4ffffffffffffffffffffffffffffffffff6fffffffffffffffff555f55fffff1f1ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff6ffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffff5f15ffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffff1ffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffff
    fffffffffffffffffffff1ffffffffffffffff1ffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6fffffffffffffffffffffffffffffffffffff1ffffff
    ffffffffffff1fffffffff1ffffffffffffffffffffff1ffffffffffffffffff6ffffffffff1ffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff1ff11fffffffff1ffffffffffffff1ffffffffffffff1ffffffff6ffffffffffff1fffffffffffffffffffff6fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1fffffffffffff11fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffff11ffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffff1ffffffffffffff
    fffffff1ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1fffffffffffffffff1fffffffffffffffffffff1fffffffff1f1fffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffff1fffffffffffffffffffffff11fffffffffffffffffffff1fffffffffffffffff1fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffff11ffff1ffffffffffffff1fff1fffffffffffffffff1fffff1ffffff1fffffffffffffffffffffffffff11fffffffffff
    ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff1fffffff1fffffffffffff1ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1ffffffffffffffffffff1fffffffffff1ffffff
    ffffffffffffff1ffff1fffff1ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffff1ff111fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffff1fffffff11f1ffffffffffff11ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffffffffffffffff1ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff11fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffff111ffffffffffffffffffffff1fffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
ship.setStayInScreen(true)
ship.bottom = 120
let list = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
    . . 4 d 5 d 5 5 5 d d d 4 4 . . 
    . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
    . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
    . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
    . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
    . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
    . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
    . . 2 4 d d 5 5 5 5 d d 5 4 . . 
    . . . 2 2 4 d 5 5 d d 4 4 . . . 
    . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
    . . . 2 2 4 4 4 4 4 4 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `, img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . f f f f f f . 
    . f f 3 3 3 3 f f f 3 3 3 3 f f 
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
    . f 3 3 3 3 b b b b b 3 3 3 3 f 
    . f f 3 3 b b b b b b b 3 3 f f 
    . . f f 3 b b b b b b b 3 f f . 
    . . . f f b b b b b b b f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `]
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(500, function () {
    invaders = sprites.createProjectileFromSide(list[randint(0, 2)], 0, 50)
    invaders.setPosition(randint(3, 140), 0)
    invaders.setKind(SpriteKind.Enemy)
})
