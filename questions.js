// ========== IMAGE POOLS ==========
const imagePools = {
  vanilla: {
    people: [
    // Smiles & faces
    { src: "images/vanilla/people/soft-smile-female.jpeg", gender: "female", label: "this soft warm smile" },
    { src: "images/vanilla/people/soft-smile-male.jpeg", gender: "male", label: "this soft warm smile" },
    { src: "images/vanilla/people/laughing-female.jpeg", gender: "female", label: "this big laughing face" },
    { src: "images/vanilla/people/laughing-male.jpeg", gender: "male", label: "this big laughing face" },
    { src: "images/vanilla/people/playful-female.jpeg", gender: "female", label: "this playful mischievous smile" },
    { src: "images/vanilla/people/playful-male.jpeg", gender: "male", label: "this playful mischievous smile" },
    { src: "images/vanilla/people/morning-messy-female.jpeg", gender: "female", label: "this sleepy messy-haired look" },
    { src: "images/vanilla/people/morning-messy-male.jpeg", gender: "male", label: "this sleepy messy-haired look" },
    { src: "images/vanilla/people/morning-coffee-female.jpeg", gender: "female", label: "this happy-to-see-you face" },
    { src: "images/vanilla/people/morning-coffee-male.jpeg", gender: "male", label: "this happy-to-see-you face" },
    { src: "images/vanilla/people/morning-peaceful-female.jpeg", gender: "female", label: "this peaceful look" },
    { src: "images/vanilla/people/morning-peaceful-male.jpeg", gender: "male", label: "this peaceful look" },
    { src: "images/vanilla/people/flirty-female.jpeg", gender: "female", label: "this slightly flirty glance" },
    { src: "images/vanilla/people/flirty-male.jpeg", gender: "male", label: "this slightly flirty glance" },
    { src: "images/vanilla/people/silly-face-female.jpeg", gender: "female", label: "this ridiculous silly face" },
    { src: "images/vanilla/people/silly-face-male.jpeg", gender: "male", label: "this ridiculous silly face" },
    { src: "images/vanilla/people/surprised-face-female.jpeg", gender: "female", label: "this over-the-top surprised face" },
    { src: "images/vanilla/people/surprised-face-male.jpeg", gender: "male", label: "this over-the-top surprised face" },
    { src: "images/vanilla/people/dramatic-pose-female.jpeg", gender: "female", label: "this dramatic pose" },
    { src: "images/vanilla/people/dramatic-pose-male.jpeg", gender: "male", label: "this dramatic pose" },
    { src: "images/vanilla/people/peace-sign-female.jpeg", gender: "female", label: "this cheesy peace-sign face" },
    { src: "images/vanilla/people/peace-sign-male.jpeg", gender: "male", label: "this cheesy peace-sign face" },

    // Outfits / full body
    { src: "images/vanilla/people/smart-casual-female.jpeg", gender: "female", label: "this smart casual look" },
    { src: "images/vanilla/people/smart-casual-male.jpeg", gender: "male", label: "this smart casual look" },
    { src: "images/vanilla/people/dressy-female.jpeg", gender: "female", label: "this slightly dressy outfit" },
    { src: "images/vanilla/people/dressy-male.jpeg", gender: "male", label: "this slightly dressy outfit" },
    { src: "images/vanilla/people/cosy-sexy-female.jpeg", gender: "female", label: "this cosy but sexy look" },
    { src: "images/vanilla/people/cosy-sexy-male.jpeg", gender: "male", label: "this cosy but sexy look" },
    { src: "images/vanilla/people/hoodie-female.jpeg", gender: "female", label: "this soft hoodie and shorts" },
    { src: "images/vanilla/people/hoodie-male.jpeg", gender: "male", label: "this soft hoodie and shorts" },
    { src: "images/vanilla/people/unbuttoned-female.jpeg", gender: "female", label: "this shirt slightly unbuttoned" },
    { src: "images/vanilla/people/unbuttoned-male.jpeg", gender: "male", label: "this shirt slightly unbuttoned" }
  ],

  objects: [
    { src: "images/vanilla/objects/coffee-cup.jpeg", gender: "neutral", label: "this cup of hot chocolate" },
    { src: "images/vanilla/objects/soft-onesie.jpeg", gender: "neutral", label: "this soft onesie" },
    { src: "images/vanilla/objects/handwritten-note.jpeg", gender: "neutral", label: "this handwritten note" },
    { src: "images/vanilla/objects/single-flower.jpeg", gender: "neutral", label: "this single flower" },
    { src: "images/vanilla/objects/umbrella.jpeg", gender: "neutral", label: "this umbrella" },
    { src: "images/vanilla/objects/pillow.jpeg", gender: "neutral", label: "this pillow" },
    { src: "images/vanilla/objects/book.jpeg", gender: "neutral", label: "this book" },
    { src: "images/vanilla/objects/takeaway.jpeg", gender: "neutral", label: "this takeaway" },
    { src: "images/vanilla/objects/bath.jpeg", gender: "neutral", label: "this warm bath" },
    { src: "images/vanilla/objects/rubber-duck.jpeg", gender: "neutral", label: "this rubber duck" },
    { src: "images/vanilla/objects/giant-teddy.jpeg", gender: "neutral", label: "this giant teddy bear" },
    { src: "images/vanilla/objects/silly-hat.jpeg", gender: "neutral", label: "this ridiculous hat" },
    { src: "images/vanilla/objects/whoopee-cushion.jpeg", gender: "neutral", label: "this whoopee cushion" },
    { src: "images/vanilla/objects/pizza-box.jpeg", gender: "neutral", label: "this pizza box" },
    { src: "images/vanilla/objects/remote-control.jpeg", gender: "neutral", label: "the TV remote" },
    { src: "images/vanilla/objects/plant-pot.jpeg", gender: "neutral", label: "this slightly sad houseplant" },
    { src: "images/vanilla/objects/socks.jpeg", gender: "neutral", label: "these mismatched socks" },
    { src: "images/vanilla/objects/rubber-gloves.jpeg", gender: "neutral", label: "these rubber gloves" },
    { src: "images/vanilla/objects/banana.jpeg", gender: "neutral", label: "this banana" },
    { src: "images/vanilla/objects/cucumber.jpeg", gender: "neutral", label: "this cucumber" },
    { src: "images/vanilla/objects/spatula.jpeg", gender: "neutral", label: "this spatula" },
    { src: "images/vanilla/objects/tie.jpeg", gender: "neutral", label: "this necktie" },
    { src: "images/vanilla/objects/wooden-ruler.jpeg", gender: "neutral", label: "this wooden ruler" },
    { src: "images/vanilla/objects/ice-lolly.jpeg", gender: "neutral", label: "this ice lolly" },
    { src: "images/vanilla/objects/balloon.jpeg", gender: "neutral", label: "this balloon" },
    { src: "images/vanilla/objects/whisk.jpeg", gender: "neutral", label: "this whisk" },
    { src: "images/vanilla/objects/oven-mitt.jpeg", gender: "neutral", label: "this oven mitt" },
    { src: "images/vanilla/objects/clothes-peg.jpeg", gender: "neutral", label: "these clothes pegs" },
    { src: "images/vanilla/objects/silly-straw.jpeg", gender: "neutral", label: "this silly straw" }
  ],

  activities: [
    { src: "images/vanilla/activities/cooking.jpeg", gender: "neutral", label: "cooking together" },
    { src: "images/vanilla/activities/sofa-reading.jpeg", gender: "neutral", label: "reading on the sofa" },
    { src: "images/vanilla/activities/slow-dancing.jpeg", gender: "neutral", label: "slow dancing in the living room" },
    { src: "images/vanilla/activities/picnic.jpeg", gender: "neutral", label: "a picnic in the park" },
    { src: "images/vanilla/activities/walking.jpeg", gender: "neutral", label: "going for a long walk" },
    { src: "images/vanilla/activities/bath-together.jpeg", gender: "neutral", label: "having a bath together" },
    { src: "images/vanilla/activities/hug-from-behind.jpeg", gender: "neutral", label: "a long hug from behind" },
    { src: "images/vanilla/activities/paintballing.jpeg", gender: "neutral", label: "paintballing" },
    { src: "images/vanilla/activities/rainy-window.jpeg", gender: "neutral", label: "sitting by the window in the rain" },
    { src: "images/vanilla/activities/breakfast-bed.jpeg", gender: "neutral", label: "breakfast in bed" },
    { src: "images/vanilla/activities/pillow-fight.jpeg", gender: "neutral", label: "a pillow fight" },
    { src: "images/vanilla/activities/dance-party.jpeg", gender: "neutral", label: "a living-room dance party" },
    { src: "images/vanilla/activities/building-sandcastle.jpeg", gender: "neutral", label: "building a sandcastle" },
    { src: "images/vanilla/activities/tickle-fight.jpeg", gender: "neutral", label: "a tickle fight" }
  ]
  },

  medium: {

    people: [
    { src: "images/medium/people/neck-kiss-female.jpeg", gender: "female", label: "this soft neck" },
    { src: "images/medium/people/neck-kiss-male.jpeg", gender: "male", label: "this soft neck" },
    { src: "images/medium/people/lower-back-female.jpeg", gender: "female", label: "this lower back" },
    { src: "images/medium/people/lower-back-male.jpeg", gender: "male", label: "this lower back" },
    { src: "images/medium/people/collarbone-female.jpeg", gender: "female", label: "these collarbones" },
    { src: "images/medium/people/collarbone-male.jpeg", gender: "male", label: "these collarbones" },
    { src: "images/medium/people/nude-female-back.jpeg", gender: "female", label: "this woman viewed from behind" },
    { src: "images/medium/people/nude-male-back.jpeg", gender: "male", label: "this man viewed from behind" },
    { src: "images/medium/people/lingerie-female.jpeg", gender: "female", label: "this woman wearing lingerie" },
    { src: "images/medium/people/y-fronts-male.jpeg", gender: "male", label: "this man wearing budgie smugglers" },
    { src: "images/medium/people/babydoll-female.jpeg", gender: "female", label: "this woman wearing a babydoll" }

  ],

    objects: [
    { src: "images/medium/objects/silk-blindfold.jpeg", gender: "neutral", label: "this silk blindfold" },
    { src: "images/medium/objects/perfume.jpeg", gender: "neutral", label: "this favourite perfume" },
    { src: "images/medium/objects/satin-ribbon.jpeg", gender: "neutral", label: "this satin ribbon" },
    { src: "images/medium/objects/dice.jpeg", gender: "neutral", label: "these playful dice" },
    { src: "images/medium/objects/chocolate.jpeg", gender: "neutral", label: "this box of chocolates" },
    { src: "images/medium/objects/rose-petals.jpeg", gender: "neutral", label: "these scattered rose petals" },
    { src: "images/medium/objects/candlelight.jpeg", gender: "neutral", label: "this flickering candle" },
    { src: "images/medium/objects/necklace.jpeg", gender: "female", label: "this delicate necklace" },
    { src: "images/medium/objects/ice-cubes.jpeg", gender: "neutral", label: "these melting ice cubes" },
    { src: "images/medium/objects/feather.jpeg", gender: "neutral", label: "this soft feather" },
    { src: "images/medium/objects/handcuffs.jpeg", gender: "neutral", label: "these playful restraints" },
    { src: "images/medium/objects/lingerie.jpeg", gender: "female", label: "this lingerie" }
    ],

    activities: [
    { src: "images/medium/activities/kissing-neck.jpeg", gender: "neutral", label: "kissing your neck" },
    { src: "images/medium/activities/pressed-against-wall.jpeg", gender: "neutral", label: "being pressed against the wall" },
    { src: "images/medium/activities/on-the-sofa.jpeg", gender: "neutral", label: "on the sofa together" },
    { src: "images/medium/activities/slow-undressing.jpeg", gender: "neutral", label: "slow undressing" },
    { src: "images/medium/activities/lap-sitting.jpeg", gender: "neutral", label: "sitting on your lap" },
    { src: "images/medium/activities/paintballing.jpeg", gender: "neutral", label: "paintballing" },
    { src: "images/medium/activities/kitchen-counter.jpeg", gender: "neutral", label: "on the kitchen counter" },
    { src: "images/medium/activities/shower-together.jpeg", gender: "neutral", label: "in the shower together" },
    { src: "images/medium/activities/massage.jpeg", gender: "neutral", label: "a long massage" },
    { src: "images/medium/activities/car-kiss.jpeg", gender: "neutral", label: "kissing in the car" },
    { src: "images/medium/activities/parked-car-touch.jpeg", gender: "neutral", label: "touching in a parked car" },
    { src: "images/medium/activities/changing-room.jpeg", gender: "neutral", label: "sneaking a kiss in a changing room" },
    { src: "images/medium/activities/shop-aisle.jpeg", gender: "neutral", label: "a quick touch while shopping" },
    { src: "images/medium/activities/lift-kiss.jpeg", gender: "neutral", label: "kissing in a lift" },
    { src: "images/medium/activities/cinema-kiss.jpeg", gender: "neutral", label: "a secret kiss in the cinema" },
    { src: "images/medium/activities/balcony-kiss.jpeg", gender: "neutral", label: "kissing on a balcony" },
    { src: "images/medium/activities/car-park.jpeg", gender: "neutral", label: "pressed against a car in a quiet car park" },
    { src: "images/medium/activities/alley-kiss.jpeg", gender: "neutral", label: "a secret kiss down an alley" },
    { src: "images/medium/activities/beach-blanket.jpeg", gender: "neutral", label: "touching under a beach blanket" },
    { src: "images/medium/activities/forest-path.jpeg", gender: "neutral", label: "kissing on a quiet forest path" },
    { src: "images/medium/activities/garden-night.jpeg", gender: "neutral", label: "kissing in the garden after dark" },
    { src: "images/medium/activities/public-dare.jpeg", gender: "neutral", label: "a daring touch in a public place" },
    { src: "images/medium/activities/couple-paddleboarding.jpeg", gender: "neutral", label: "paddleboarding together in the sea" },
    { src: "images/medium/activities/shaving-pubes.jpeg", gender: "neutral", label: "shaving each others' pubes" },
    { src: "images/medium/activities/couple-yoga.jpeg", gender: "neutral", label: "doing yoga together in our underwear" },
]
  },

  spicy: {
    people: [
    { src: "images/spicy/people/spread-legs-female.jpeg", gender: "female", label: "these open legs" },
    { src: "images/spicy/people/rock-hard-penis.jpeg", gender: "male", label: "this rock hard penis" },
    { src: "images/spicy/people/wet-vagina.jpeg", gender: "female", label: "this wet vagina" },
    { src: "images/spicy/people/bum-up.jpeg", gender: "neutral", label: "this bum in the air" },
    { src: "images/spicy/people/mouth-ready.jpeg", gender: "female", label: "this open mouth ready" },
    { src: "images/spicy/people/arching-moaning.jpeg", gender: "female", label: "this arched back moaning" },
    { src: "images/spicy/people/holding-penis.jpeg", gender: "male", label: "your penis being held" },
    { src: "images/spicy/people/touching-labia.jpeg", gender: "female", label: "touching your labia" },
    { src: "images/spicy/people/small-penis-male.jpeg", gender: "male", label: "this man with a small penis" },
    { src: "images/spicy/people/large-penis-male.jpeg", gender: "male", label: "this man with a large penis" },
    { src: "images/spicy/people/topless-large-breasted-female.jpeg", gender: "female", label: "this topless woman with large breasts" },
    { src: "images/spicy/people/topless-muscular-male.jpeg", gender: "male", label: "this topless muscular man" },
    { src: "images/spicy/people/topless-small-breasted-female.jpeg", gender: "female", label: "this topless woman with small breasts" },
    { src: "images/spicy/people/seductive-lying-female.jpeg", gender: "female", label: "this woman lying seductively" },
    { src: "images/spicy/people/seductive-lying-male.jpeg", gender: "male", label: "this man lying seductively" },
  
  ],
    objects: [
    { src: "images/spicy/objects/thick-dildo.jpeg", gender: "female", label: "this thick dildo" },
    { src: "images/spicy/objects/vibrator-wand.jpeg", gender: "neutral", label: "this vibrator wand" },
    { src: "images/spicy/objects/butt-plug.jpeg", gender: "neutral", label: "this butt plug" },
    { src: "images/spicy/objects/nipple-clamps.jpeg", gender: "neutral", label: "these metal nipple clamps" },
    { src: "images/spicy/objects/anal-beads.jpeg", gender: "neutral", label: "these anal beads" },
    { src: "images/spicy/objects/condom.jpeg", gender: "male", label: "this condom" }
  ],
    activities: [
    { src: "images/spicy/activities/woman-oral.jpeg", gender: "female", label: "giving oral" },
    { src: "images/spicy/activities/man-oral.jpeg", gender: "male", label: "giving oral" },
    { src: "images/spicy/activities/from-behind.jpeg", gender: "neutral", label: "from behind" },
    { src: "images/spicy/activities/anal.jpeg", gender: "neutral", label: "anal" },
    { src: "images/spicy/activities/riding-face.jpeg", gender: "neutral", label: "riding face" },
    { src: "images/spicy/activities/straddling.jpeg", gender: "neutral", label: "you on top" },
    { src: "images/spicy/activities/against-the-wall.jpeg", gender: "neutral", label: "against the wall" },
    { src: "images/spicy/activities/tied-up-male.jpeg", gender: "male", label: "being tied up" },
    { src: "images/spicy/activities/tied-up-female.jpeg", gender: "female", label: "being tied up" },
    { src: "images/spicy/activities/spanking.jpeg", gender: "neutral", label: "a good spanking" },
    { src: "images/spicy/activities/rough-doggy.jpeg", gender: "neutral", label: "rough doggy style" },
    { src: "images/spicy/activities/riding-hard.jpeg", gender: "neutral", label: "riding hard" },
    { src: "images/spicy/activities/holding-penis.jpeg", gender: "male", label: "holding your penis" },
    { src: "images/spicy/activities/touching-labia.jpeg", gender: "female", label: "touching your labia" }
  ]
  }
};


// ========== QUESTIONS ==========
const questions = {
  vanilla: [
    {
  question: "Which would you rather kiss right now?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most like to kiss"
},
{
  question: "Which would you most want to wake up next to?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to wake up next to"
},
{
  question: "Which would you most want to do with me if we had a completely free afternoon?",
  pools: ["activities", "objects", "people"],
  count: 3,
  reveal: "would most want to do"
},
{
  question: "Which would make you laugh the most if it appeared right now?",
  pools: ["people", "objects", "activities"],
  count: 3,
  reveal: "would make you laugh the most"
},
{
  question: "Which would you most want to find waiting for you on the sofa?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to find on the sofa"
},
{
  question: "Which would you most want me to bring you in bed?",
  pools: ["objects", "people"],
  count: 3,
  reveal: "would most want me to bring you in bed"
},
{
  question: "Which would you most want to do together in complete silence?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want to do in silence"
},
{
  question: "Which would you most want to turn into a silly tradition?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want to turn into a silly tradition"
},
{
  question: "Which would you most want to wake up and find next to you?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to wake up next to"
},
{
  question: "Which would you most want me to do while making ridiculous faces?",
  pools: ["people", "activities"],
  count: 3,
  reveal: "would most want me to do while making ridiculous faces"
},
{
  question: "Which would you most want to share under a blanket fort?",
  pools: ["objects", "activities", "people"],
  count: 3,
  reveal: "would most want to share under a blanket fort"
},
{
  question: "Which would you most want to do if we both became five years old again for one hour?",
  pools: ["activities", "objects", "people"],
  count: 3,
  reveal: "would most want to do as five-year-olds"
},
{
  question: "Which would you most want me to wear for you?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want me to wear"
},
{
  question: "Which would you most want to do with me on a lazy Sunday?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want to do"
},
{
  question: "Which would you most want me to surprise you with?",
  pools: ["objects", "activities"],
  count: 3,
  reveal: "would most want me to surprise you with"
},
{
  question: "Which would you most want to hold right now?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to hold"
},
{
  question: "Which would you most want to watch / look at together tonight?",
  pools: ["people", "objects", "activities"],
  count: 3,
  reveal: "would most want to watch"
},
{
  question: "Which would you most want me to leave on the pillow for you?",
  pools: ["objects"],
  count: 3,
  reveal: "would most want me to leave on the pillow"
},
{
  question: "Which would you most want to share with me right now?",
  pools: ["objects", "activities"],
  count: 3,
  reveal: "would most want to share"
},
{
  question: "Which would you most want to hear / see when I walk in the door?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to see when I walk in the door"
},
{
  question: "Which would you most want us to do the next time it rains?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want us to do"
},
{
  question: "Which would you most want to fall asleep next to?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to fall asleep next to"
},
{
  question: "Which would you most want me to steal from you and wear?",
  pools: ["objects", "people"],
  count: 3,
  reveal: "would most want me to steal and wear"
},
{
  question: "Which would you most want to do the second we get a free evening?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want to do"
},
{
  question: "Which would you most want to feel against your skin right now?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to feel against your skin"
},
{
  question: "Which would you most want me to do while you’re cooking?",
  pools: ["activities", "people"],
  count: 3,
  reveal: "would most want me to do while you’re cooking"
},
{
  question: "Which would you most want to recreate with me?",
  pools: ["activities", "objects"],
  count: 3,
  reveal: "would most want to recreate"
},
{
  question: "Which would you most want to see across the table from you?",
  pools: ["people", "objects"],
  count: 3,
  reveal: "would most want to see across the table"
},
{
  question: "Which would you most want waiting for you when you get home?",
  pools: ["people", "objects", "activities"],
  count: 3,
  reveal: "would most want waiting for you when you get home"
},
{
  question: "Which would you most want to do with me right now if we had no plans?",
  pools: ["activities", "objects", "people"],
  count: 3,
  reveal: "would most want to do"
}
  ],

  medium: [{
    question: "Which would you most want to kiss first?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to kiss first"
  },
  {
    question: "Which would you most want my hands on right now?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want my hands on"
  },
  {
    question: "Which would you most want me to wear to bed tonight?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want me to wear to bed"
  },
  {
    question: "Which would you most want to feel against you right now?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to feel against you"
  },
  {
    question: "Which would you most want me to do the moment we’re alone?",
    pools: ["people", "activities"],
    count: 3,
    reveal: "would most want me to do"
  },
  {
    question: "Which would you most want to explore with your mouth?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to explore with your mouth"
  },
  {
    question: "Which would you most want me to leave on while everything else comes off?",
    pools: ["objects", "people"],
    count: 3,
    reveal: "would most want me to leave on"
  },
  {
    question: "Which would you most want to do in the kitchen when no one’s watching?",
    pools: ["activities", "people"],
    count: 3,
    reveal: "would most want to do in the kitchen"
  },
  {
    question: "Which would you most want to feel my breath on?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to feel my breath on"
  },
  {
    question: "Which would you most want to start with tonight?",
    pools: ["people", "activities", "objects"],
    count: 3,
    reveal: "would most want to start with"
  }
],
  spicy: [{
    question: "Which would you most want my mouth on first?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want my mouth on first"
  },
  {
    question: "Which would you most want to do to me right now?",
    pools: ["people", "activities"],
    count: 3,
    reveal: "would most want to do to me"
  },
  {
    question: "Which would you most want to feel inside you / around you?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to feel"
  },
  {
    question: "Which would you most want me to do with my hands?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want me to do with my hands"
  },
  {
    question: "Which position would you most want to try in the next 30 minutes?",
    pools: ["people", "activities"],
    count: 3,
    reveal: "would most want to try"
  },
  {
    question: "Which would you most want to taste right now?",
    pools: ["people", "objects"],
    count: 3,
    reveal: "would most want to taste"
  },
  {
    question: "Which would you most want me to say while I’m doing it?",
    pools: ["people"],
    count: 3,
    reveal: "would most want me to say"
  },
  {
    question: "Which would you most want to do until one of us can’t take it anymore?",
    pools: ["people", "activities"],
    count: 3,
    reveal: "would most want to do"
  },
  {
    question: "Which would you most want me to leave marks on?",
    pools: ["people"],
    count: 3,
    reveal: "would most want me to leave marks on"
  },
  {
    question: "Which would you most want to do with the lights on?",
    pools: ["people", "activities"],
    count: 3,
    reveal: "would most want to do with the lights on"
  }
]
};