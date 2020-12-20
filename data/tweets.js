const uuid = require('uuid');

module.exports = [
  {
    id: uuid.v4().toString(),
    user: 'pepe',
    message: 'Lorem fistrum a gramenawer condemor jarl a peich te voy a borrar el cerito qué dise usteer está la cosa muy malar a wan.',
    createdAt: new Date('12-10-2020 11:00:00'),
    fav: true
  },
  {
    id: uuid.v4().toString(),
    user: 'juan',
    message: 'Lorem fistrum quietooor al ataquerl caballo blanco caballo negroorl amatomaa fistro la caidita jarl tiene musho peligro.',
    createdAt: new Date('02-18-2017 11:00:00'),
    fav: false
  },
  {
    id: uuid.v4().toString(),
    user: 'otro',
    message: 'Lorem fistrum quietooor al ataquerl caballo blanco caballo negroorl amatomaa fistro la caidita jarl tiene musho peligro.',
    createdAt: new Date('05-18-2019 11:00:00'),
    fav: false
  },
]
