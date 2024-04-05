//Administration//
let countAdministration =0; 
let depASalary=0;
let avregASalary=0;
//Marketing//
let countMarketing=0
let depMSalary=0;
let avregMSalary=0;
//Development//
let countDevelopment =0;
let depDSalary=0;
let avregDSalary=0;
//Finance//
let countFinance=0;
let depFSalary=0;
let avregFSalary=0;


for(let i =0 ;i<localStorage.length; i++){
   
  let dep = localStorage.getItem("department" + i);
  
  if(dep  == "Administration"){
    countAdministration++;
    depASalary += parseFloat(localStorage.getItem("salary" + i));
    avregASalary=depASalary/countAdministration;
  }if(dep == "Marketing"){
    countMarketing++;
    depMSalary += parseFloat(localStorage.getItem("salary" + i));
    avregMSalary=depMSalary/countMarketing;
  }if(dep == "Development"){
    countDevelopment++;
    depDSalary += parseFloat(localStorage.getItem("salary" + i));
    avregDSalary=depDSalary/countDevelopment;
  }if(dep == "Finance"){
    countFinance++;
    depFSalary += parseFloat(localStorage.getItem("salary" + i));
    avregFSalary=depFSalary/countFinance;
  } 
}
let AdministrationN=document.getElementById("AdministrationN");
AdministrationN.textContent=countAdministration;
let MarketingN=document.getElementById("MarketingN");
MarketingN.textContent=countMarketing;
let DevelopmentN=document.getElementById("DevelopmentN");
DevelopmentN.textContent=countDevelopment;
let FinanceN=document.getElementById("FinanceN");
FinanceN.textContent=countFinance;
///////////////////////////////////////////////////////////////////
  let AdministrationAv= document.getElementById("AdministrationA");
  AdministrationAv.textContent=avregASalary;
  let Marketing=document.getElementById("MarketingA");
  Marketing.textContent=avregMSalary;
  let Development=document.getElementById("DevelopmentA");
  Development.textContent=avregDSalary;
  let Finance=document.getElementById("FinanceA");
  Finance.textContent=avregFSalary;
///////////////////////////////////////////////////////////////////
let AdministrationT=document.getElementById("AdministrationT");
AdministrationT.textContent=depASalary;
let MarketingT=document.getElementById("MarketingT");
MarketingT.textContent=depMSalary;
let DevelopmentT=document.getElementById("DevelopmentT");
DevelopmentT.textContent=depDSalary;
let FinanceT=document.getElementById("FinanceT");
FinanceT.textContent=depFSalary;
//////////////////////////////////////////////////////////////////////
let TotalEmplo=document.getElementById("TotalEmplo");
TotalEmplo.textContent=countAdministration+countMarketing+countDevelopment+countFinance;
let AverageAll=document.getElementById("AverageAll");
AverageAll.textContent=avregASalary+avregMSalary+depDSalary+avregFSalary;
let TotalSalaryAll=document.getElementById("TotalSalaryAll");
TotalSalaryAll.textContent=depASalary+depMSalary+depDSalary+depFSalary;



console.log(countAdministration);
console.log(depASalary);
console.log(avregASalary);

console.log(countMarketing);
console.log(depMSalary);
console.log(avregMSalary);

console.log(countDevelopment);
console.log(depDSalary);
console.log(avregDSalary);

console.log(countFinance);
console.log(depFSalary);
console.log(avregFSalary);


