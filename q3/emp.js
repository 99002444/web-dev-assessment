let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}  

let empManager = function(){
    this.empData = [];  
    
    this.addEmployee = function(emp){
        this.empData.push(emp);
       
    }


    this.getAll = function(){
        return this.empData;
    }
}