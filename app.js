

class employee  {
    constructor(employeeID, fullName, department ,level, imageURL){
        this.employeeID=employeeID;
        this.fullName=fullName;
        this.department=department;
        this.level=level;
        this.imageURL=imageURL;
        this.salary= 0;

    }
}



employee.prototype.calcSalary = function(){
console.log("aaaaaaaaaaaaaaa")
   

     var salaryRange={
        "Senior": {min:1500 , max : 2000},
        "Mid-Senior": {min : 1000 , max : 1500},
        "Junior":{min : 500, max :1000}
     }
      let reang = salaryRange[this.level];
      

      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

  this.salary=randomNumber(reang.min, reang.max);
    
    console.log(this.salary);
    
}



employee.prototype.calcNetSalary=function(){

}


employee.prototype.renderInfo=function(){
//DOM
let root = document.getElementById("root");

}


let emplo= [

    new employee(1, "abed ahmad", "Administration","Senior", "https://exampl.com/image1.png" ),
    new employee(2,"farah samer", "Marketing","Junior","https://exampl.com/image2.png"),
    new employee(3, "mohamad omer", "Development","Mid-Senior","https://exampl.com/image3.png"),
    new employee(4,"taha abed","Finance","Junior","https://exampl.com/image4.png")
    
];


for(let i=0;i< emplo.length; i++){
    emplo[i].calcSalary();
}

