

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
// console.log("aaaaaaaaaaaaaaa")
   

     var salaryRange={
        "Senior": {min:1500 , max : 2000},
        "Mid-Senior": {min : 1000 , max : 1500},
        "Junior":{min : 500, max :1000}
     }
      let reang = salaryRange[this.level];
      

      function randomNumber(min, max) {
        let salTax= Math.floor(Math.random() * (max - min) + min);
       return salTax -(salTax * 0.075);
        
    }

  this.salary=randomNumber(reang.min, reang.max);
    
    console.log(this.salary);
    
}


employee.prototype.renderInfo=function(){
//DOM
let root = document.getElementById("root");



}



    let emplo = [
        new employee(1000, 'Ghazi Samer', 'Administration', 'Senior',"https://exampl.com/image1.png"),
        new employee(1001, 'Lana Ali', 'Finance', 'Senior', "https://exampl.com/image2.png"),
        new employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior',"https://exampl.com/image3.png"),
        new employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior',"https://exampl.com/image4.png"),
        new employee(1004, 'Omar Zaid', 'Development', 'Senior',"https://exampl.com/image5.png"),
        new employee(1005, 'Rana Saleh', 'Development', 'Junior',"https://exampl.com/image6.png"),
        new employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior',"https://exampl.com/image7.png")
      ];

    
    



for(let i=0;i< emplo.length; i++){
    emplo[i].calcSalary();
}

