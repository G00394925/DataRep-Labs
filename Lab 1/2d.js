const ages = [25, 31, 42, 77];

let d = ages.map((age)=>{

    if (age < 70)
        return age * 2; // Multiply the age if its below 70

    else
        return age;
})

console.log(d);