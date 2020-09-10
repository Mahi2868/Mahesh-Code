//db.persons.aggregate([{$project: {name: 1, "company.location.country": 1}} ])
//db.persons.aggregate([{$group:{_id:  {name: "$name", country: "$company.location.country"}}}])
//db.persons.aggregate([{$project: {isActive: 1, name: 1, gender: 1}}])

//db.persons.aggregate([ {$project: {_id: 0, name: 1,
//info: {
//    eyes: "$eyeColor",
//    fruit: "$favoriteFruit",
//    country: "$company.location.country"   
//
//}}}])

//db.persons.aggregate([{$match : {age: {$gte: 25}}},
//{$group: {_id: {name: "$name", age: "$age"}}},
//{$sort: {"_id.name": 1, "_id.age": -1}}, {$limit: 100} ])





