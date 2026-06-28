function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeamaker("dhruv")
consol.log(teaMaker("green tea"))