 class employee {
      constructor(cno, ay, nubstud, cls_cmt) 
     {
        this.cno = cno;
        this.ay = ay;
        this.nubstud = nubstud;
        this.cls_cmt = cls_cmt;
        
      }
    }
$(functions() {
    var employeeArr = [];
  
    //To add employee
    $("#addEmployee").click(function () {
        var cno = $("#cno").val();
        var ay = $("#ay").val();
        var nubstud = $("#nubstud").val();
        var cls_cmt = $("#cls_cmt").val();
        
          employeeArr = JSON.parse(localStorage.getItem("employees"));
          var employeeRef = new employee(cno, ay, nubstud, cls_cmt);
          employeeArr.push(employeeRef);
          localStorage.setItem("employees", JSON.stringify(employeeArr));
          
                    var Row = table.insertRow();
                    var cell1=Row.insertCell(0);
                    var cell2=Row.insertCell(1);
                    var cell3=Row.insertCell(2);
                    var cell4=Row.insertCell(3);
                    var cell5=Row.insertCell(4);
                    
                    cell1.innerHTML=employee.cno;
                    cell2.innerHTML=employee.ay;
                    cell3.innerHTML=employee.nubstud;
                    cell4.innerHTML=employee.cls_cmt;
                    cell5.innerHTML=document.getElementById("edit").style="fa fa-user";
        });
  
  });

        