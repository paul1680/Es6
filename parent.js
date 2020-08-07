class school {
    constructor(){
        this.school ='Uk High School';
    }
}
class student extends school{
    constructor(name, id){
        super();
        this.name = name;
        this.id = id;
    }
}
const s1 = new student('TOM', 123);
console.log(s1);