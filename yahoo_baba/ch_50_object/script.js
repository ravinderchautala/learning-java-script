var a = {
    fname: "Ravinder",
    lname: "vinita",
    age: 23,
    email: "viniravi@gmail.com",
    favMovies:['dhoom','sholay','hum'],
    living:{
        'city':'jhunjhunu',
        'country':'India'
    },
    salary: function(){
        return 25000;
    },
    fullname: function(){
        return this.fname + " "+ this.lname;
    }
}
console.log(a);
document.write(a.lname+"<br>");
document.write(a.salary()+"<br>");
document.write(a.living.city+"<br>");
document.write(a.fullname());