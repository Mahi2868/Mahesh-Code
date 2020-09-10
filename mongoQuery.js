//db.persons.aggregate([ {$group: {_id: {name: "$name", age: "$age"}}} ,{$sort: {"_id.name": 1}} ])
//db.persons.aggregate([{$group: {_id: {age: "$age", gender: "$gender"}}},{$sort: {"_id.age": 1, "_id.gender": 1}}])
//db.persons.aggregate({$group: {_id: "$favoriteFruit"}}, {$sort:{_id : 1}})

//db.persons.aggregate([{$match: {eyeColor: {$ne: "blue"}}},
//{$group: {_id: {eyeColor: "$eyeColor", favoriteFruit: "$favoriteFruit"}}},
//{$sort: {"_id.eyeColor" : 1, "_id.favoriteFruit": -1 }} ])

//db.persons.aggregate({$sort: {age: 1}})


