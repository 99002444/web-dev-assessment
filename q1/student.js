let Student = function(name, course,gender){
    this.name=name;
    this.course= course;
    this.gender=gender;
}


let db = function(){
    this.studentData = [];  
    
    this.addStudent = function(student){
        this.studentData.push(student);}


    this.getAll = function(){
            return this.studentData;
        }
    
    
    }