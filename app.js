

function employee (employeeID, fullName, department ,level, imageURL){
        this.employeeID=employeeID;
        this.fullName=fullName;
        this.department=department;
        this.level=level;
        this.imageURL=imageURL;
        this.salary= this.calcSalary();

    }




employee.prototype.calcSalary = function(){
// console.log("aaaaaaaaaaaaaaa")
   

     var salaryRange={
        'Senior': {min:1500 , max : 2000},
        'Mid-Senior': {min : 1000 , max : 1500},
        'Junior':{min : 500, max :1000}
     }
      let reang = salaryRange[this.level];
      

      function randomNumber(min, max) {
        let salTax= Math.floor(Math.random() * (max - min) + min);
       return salTax -(salTax * 0.075);
        
    }

 let salary=randomNumber(reang.min, reang.max);
    return salary;
    // console.log(this.salary);
    
}


employee.prototype.renderInfo=function(){
//DOM
let fullName=this.fullName;
let salary=this.salary;

let root1 = document.createElement("p");

root1.textContent=fullName +" "+ salary;
document.body.appendChild(root1);
let footer =document.querySelector("footer");
document.body.insertBefore(root1,footer);

}

    
     let emplo1=   new employee(1000, 'Ghazi Samer', 'Administration', 'Senior',"https://exampl.com/image1.png");
     let emplo2= new employee(1001, 'Lana Ali', 'Finance', 'Senior', "https://exampl.com/image2.png");
     let emplo3=  new employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior',"https://exampl.com/image3.png");
     let emplo4= new employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior',"https://exampl.com/image4.png");
     let emplo5=  new employee(1004, 'Omar Zaid', 'Development', 'Senior',"https://exampl.com/image5.png");
     let emplo6= new employee(1005, 'Rana Saleh', 'Development', 'Junior',"https://exampl.com/image6.png");
     let emplo7= new employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior',"https://exampl.com/image7.png");
    


// for(let i=0;i< emplo.length; i++){
//     emplo[i].calcSalary();
// }

emplo1.renderInfo();
emplo2.renderInfo();
emplo3.renderInfo();
emplo4.renderInfo();
emplo5.renderInfo();
emplo6.renderInfo();
emplo7.renderInfo();
