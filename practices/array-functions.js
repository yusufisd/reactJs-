const users = [{
    name : "yusuf",
    surname: "damar",
    age : 24,
},{
    name : "mustafa",
    surname : "tolunay",
    age : 36,
},{
    name : "ayşe",
    surname : "fatma",
    age : 45,
}];

// MAP
// array'i tek tek döner
users.map((item) => {
    console.log("isim : " + item.name + ", soyisim : " + item.surname + ", yaş : " + item.age);
});

// FİND
// array'da istenilen değerdeki objeyi bulur, koşula uyan obje yoksa undefined döner
const result = users.find((item) => item.name === "mustafa");
console.log(result);

// FİLTER
// girilen değere uygun objeleri döner
const filtered = users.filter((item) => item.age <= 25);
console.log(filtered);

// SOME
// verilen değere uyan varsa true, yoksa false döner
const some = users.some((item) => item.age ===31);
console.log(some); 

// EVERY
// verilen koşula tüm elemanlar uyuyorsa true, uymuyorsa false döner
const every = users.every((item) => item.age > 20);
console.log(every);

// INCLUDE
// array içerisinde girilen değer varsa true, yoksa false döner
const cars = [ "volvo", "fiat" , "porsche"];
const isInclude = cars.includes('a');
console.log(isInclude);



