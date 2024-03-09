import chicken_tikka from './icons/chicken_tikka.png'
const breakfast=[
    {
    url:require('./icons/pizza.png'),
    alt:'Pizza',
    heading:'Pizza',
    prize:350

},{
    url:'https://png.pngtree.com/png-clipart/20231005/original/pngtree-barger-fast-food-on-transparent-background-png-image_13279291.png',
    alt:"burger",
    heading:"Burger",
    prize:400
},{
    url:require('./icons/3.png'),
    heading:'Noodles',
    alt:'Noodles',
    prize:350

},{
    url:require('./icons/5.png'),
    heading:'Bread & Egg',
    alt:'Bread & Egg',
    prize:150
}
]
const lunch=[{
    url:'https://pngbuy.com/wp-content/uploads/2023/06/Crispy-Chicken-Handi-Biryani-PNG.png',
    alt:'chicken',
    heading:'Chicken Biryani',
    prize:550
},{
    url:chicken_tikka,
    heading:'Chicken Tikka',
    alt:'chicken-tikka',
    prize:350
},{
    url:require('./icons/1.png'),
    heading:'Mutton Beffis',
    alt:'Mutton Beffis',
    prize:350
},{
    url:require('./icons/2.png'),
    heading:'Mutton Duffy',
    alt:'Mutton Duffy',
    prize:450
}
]
const dinner=[{
    url:require('./icons/sushi.png'),
    heading:'sushi',
    alt:'sushi(chines dish)',
    prize:550
},{
    url:require('./icons/4.png'),
    heading:'Mushroom & Mutton Noodles',
    alt:'Mushroom & Mutton Noodles',
    prize:400
},{url:require('./icons/chinies.png'),
heading:'Pron Fry Noodles',
alt:'Pron Fry Noodles',
prize:650
},{
    url:require('./icons/6.png'),
heading:'Salad',
alt:'Salad',
prize:150
}
]
const data={breakfast,lunch,dinner}
export default data