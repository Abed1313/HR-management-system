

class employee  {
    constructor(employeeID, fullName, department ,level, imageURL ,salary){
        this.employeeID=employeeID;
        this.fullName=fullName;
        this.department=department;
        this.level=level;
        this.imageURL=imageURL;
        this.salary=salary;

    }
}

let emplo= [

    new employee(1, "abed ahmad", "Administration","Senior", "https://exampl.com/image1.png",1700 ),
    new employee(2,"farah samer", "Marketing","Junior","https://exampl.com/image2.png",700),
    new employee(3, "mohamad omer", "Development","Mid-Senior","https://exampl.com/image3.png",1200),
    new employee(4,"taha abed","Finance","Junior","https://exampl.com/image4.png",700)
    
];



employee.prototype.calcSalary =function(){

   

     var salaryRange={
        "Senior": {min:1500 , max : 2000},
        "Mid-Senior": {min : 1000 , max : 1500},
        "Junior":{min : 500, max :1000}
     }
      let reang = salaryRange[this.level];

      let salar = Math.random(reang);
      

      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
//     switch(salar){
//     case Junior:
//         salar1=
//         max =1000;
//         min =500;
//     ;
//     break;
//     case "Mid-Senior":
//          salar2=
//          max =1500;
//         min =1000;
//     ;
//     break;
//         case "Senior":
//             salar3=
//          max =2000;
//         min =1500;
//     ;

// }
console.log(calaSalary(salar));
}


employee.prototype.calcNetSalary=function(){

}


employee.prototype.renderInfo=function(){

}

