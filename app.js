

function employee ( fullName, department ,level, imageURL){
        this.employeeID=uniqueNum();
        this.fullName=fullName;
        this.department=department;
        this.level=level;
        this.imageURL=imageURL;
        this.salary= this.calcSalary();

    }

    

employee.prototype.calcSalary = function(){

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


 function uniqueNum(){
   let min = 1000;
   let max = 9999;
   return Math.floor(Math.random() * (max - min) + min);
}

employee.prototype.card=function(){
   let section;
   if (this.department === "Administration") {
       section = document.getElementById('Administration');
   } else if (this.department  === "Marketing") {
       section = document.getElementById('Marketing');
   } else if (this.department  === "Development") {
       section = document.getElementById('Development');
   } else if (this.department  === "Finance") {
       section = document.getElementById('Finance');
   }
   let div1 =document.createElement('div');
div1.classList.add('card');
   section.appendChild(div1);

let img = document.createElement('img');
img.setAttribute('src', this.imageURL);
div1.append(img);
let div2 =document.createElement('div');
div2.classList.add('container');
div1.append(div2);
let h4 =document.createElement('h4');
h4.textContent= uniqueNum() + " " + this.fullName ;
div2.append(h4);
let h5 =document.createElement('h5');
h5.textContent=` ${this.department} / ${this.level} / ${this.employeeID}`;
div2.append(h5);




}


let buttunEle = document.getElementById("myBtn");
buttunEle.addEventListener('click', submitEHandeler);

function submitEHandeler(event){
   event.preventDefault();

   let fullName= document.getElementById('name').value;
   let department=document.getElementById('department').value;
   
   let level = document.getElementById('Level').value;
   let imageURL= document.getElementById('imageURL').value;
   if (imageURL === ""){
      imageURL = "https://cdn.discordapp.com/attachments/1220900090844155966/1224130424268390524/defult.jpg?ex=661c5f4c&is=6609ea4c&hm=a08773fdee3d380f2df1135024428d2b472bfe14c39974099e64042d3b802cbb&";
   }

   let addN = new employee(fullName, department ,level, imageURL);
   
   addN.card();
   addN.saveData(); 
  
}

let count = 0;

employee.prototype.saveData=function(){
   count++;

   localStorage.setItem("employeeID"+count , this.employeeID);

   localStorage.setItem("name" +count, this.fullName);
    
   localStorage.setItem("department" +count,this.department);
    
   localStorage.setItem("level" +count,this.level);
   
   localStorage.setItem("imageURL" +count, this.imageURL);

   localStorage.setItem("salary" +count, this.salary);

}




    
     let emplo1=   new employee( 'Ghazi Samer', 'Administration', 'Senior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
     let emplo2= new employee( 'Lana Ali', 'Finance', 'Senior', "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
     let emplo3=  new employee( 'Tamara Ayoub', 'Marketing', 'Senior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
     let emplo4= new employee( 'Safi Walid', 'Administration', 'Mid-Senior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
     let emplo5=  new employee('Omar Zaid', 'Development', 'Senior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
     let emplo6= new employee('Rana Saleh', 'Development', 'Junior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
     let emplo7= new employee('Hadi Ahmad', 'Finance', 'Mid-Senior',"https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");
 

    emplo1.card();
    emplo2.card();
    emplo3.card();
    emplo4.card();
    emplo5.card();
    emplo6.card();
    emplo7.card();
   
    emplo1.saveData();
    emplo2.saveData();
    emplo3.saveData();
    emplo4.saveData();
    emplo5.saveData();
    emplo6.saveData();
    emplo7.saveData();



// for(let i=0;i< emplo.length; i++){
//     emplo[i].calcSalary();
// }

// emplo1.renderInfo();
// emplo2.renderInfo();
// emplo3.renderInfo();
// emplo4.renderInfo();
// emplo5.renderInfo();
// emplo6.renderInfo();
// emplo7.renderInfo();
