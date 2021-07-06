scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`fons`)
let mySprite = sprites.create(img`
    . . 5 5 5 . 5 5 5 . 5 5 . 5 . . 
    . . . 5 4 5 4 5 5 5 8 5 5 5 . . 
    . . . 2 5 5 5 5 2 5 5 5 2 5 . . 
    . . . 5 5 a 5 5 5 5 a 5 5 5 . . 
    . . . 8 5 4 5 8 5 4 5 5 4 8 . . 
    . . . e d d d d d d d d d e . . 
    . . . e d d f d d f d d d e . . 
    . . . e d d d d d d d d d e . . 
    . . . e d d f d d d f d a e . a 
    . . . e d d d f f f d d a a a a 
    . . . e e d d d d d d d a a a a 
    . . 2 e e e e e 2 e e e a e f a 
    . . . 2 . . . . 2 . . . . . f . 
    . . . . 2 2 2 2 2 2 2 2 2 2 f . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
