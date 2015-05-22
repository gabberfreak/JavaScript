function findYoungestPerson(persons) {
    var min = Number.MAX_VALUE;
    var yougest = {};
    for (var i in persons) {
        if (persons[i].age < min) {
            min = persons[i].age;
            yougest = persons[i];
        }
    }
    return 'The youngest person is ' + yougest.firstname + ' ' + yougest.lastname;
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}
];


console.log(findYoungestPerson(persons));