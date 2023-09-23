// getting data from json file

 const ab = async ()=>{

    let Student = await fetch('./demo-json-data.json')
    .then(response => {
        return response.json();
    }).then (data =>  data);

    // displaying data from json file

    let body = document.getElementById("tBody");
    function display(Student){

        for(let i=0;i<Student.length;i++){
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${Student[i].id}</td>
            <td><img src=${Student[i].img_src} alt=""/> ${Student[i].first_name} ${Student[i].last_name}</td>
            <td>${Student[i].gender}</td>
            <td>${Student[i].class}</td>
            <td>${Student[i].marks}</td>
            <td>${Student[i].passing?"passing":"failed"}</td>
            <td>${Student[i].email}</td>
            `;
            body.appendChild(tr);
        }
    }
    display(Student);
     
    // searching data

    function searchedData(){
        let input = document.getElementById("search-input").value.toLowerCase();
        let arr = Student.filter((stud)=>{
            let fname = stud.first_name.toLowerCase();
            let lname = stud.last_name.toLowerCase();
            let email = stud.email.toLowerCase();
            if(input===fname || input===lname || input===email){
                return [stud];
             }
        });
        body.innerHTML = `<tr></tr>`;
        display(arr);
        // for(let i=0;i<Student.length;i++){
        //     let fname = Student[i].first_name.toLowerCase();
        //     let lname = Student[i].last_name.toLowerCase();
        //     let email = Student[i].email.toLowerCase();
        //     if(input===fname || input===lname || input===email){
        //        var stud = [Student[i]];
        //        console.log(stud);
        //         display(stud);
        //     }
        // }
    }

    let search = document.getElementById("search-btn");
    search.addEventListener("click",searchedData);

    // sort A->Z
     
    function ascendingSort(){
        const arr = Student.sort((a,b)=>{
              let full1 = `${a.first_name} ${a.last_name}`;
              let full2 = `${b.first_name} ${b.last_name}`;
              if(full1 > full2){
                return +1;
              }
              else{
                return -1;
              }
        });
        body.innerHTML = `<tr></tr>`;
        display(arr);
    }
    
    let asc = document.getElementById("sort-asc");
    asc.addEventListener("click",ascendingSort);

    // sort Z->A
    
    function descendingSort(){
        const arr = Student.sort((a,b)=>{
              let full1 = `${a.first_name} ${a.last_name}`;
              let full2 = `${b.first_name} ${b.last_name}`;
              if(full1 < full2){
                return +1;
              }
              else{
                return -1;
              }
        });
        body.innerHTML = `<tr></tr>`;
        display(arr);
    }
    
    let dsc = document.getElementById("sort-dsc");
    dsc.addEventListener("click",descendingSort);

    // sort by marks

    function marks(){
        const arr = Student.sort((a,b)=>{
              return (a.marks-b.marks);
        });
        body.innerHTML = `<tr></tr>`;
        display(arr);
    }
    let sortMarks = document.getElementById("sort-marks");
    sortMarks.addEventListener("click",marks);

    // sort by passing

    function passing(){
        const arr = Student.filter((ele)=>ele.passing===true);
        body.innerHTML = `<tr></tr>`;
        display(arr);
    }
    let sortPass = document.getElementById("sort-pass");
    sortPass.addEventListener("click",passing);

    // sort by class

    let cls = document.getElementById("sort-class");
    cls.addEventListener("click",()=>{
        const arr = Student.sort((a,b)=>{
            return (a.class-b.class);
        });
        body.innerHTML = `<tr></tr>`;
        display(arr);
    });

    // sort by gender
    
    function gender(){
        const arr1 = Student.filter((ele)=>ele.gender==="Female");
        body.innerHTML = `<tr></tr>`;
        display(arr1);
        
        const arr2 = Student.filter((ele)=>ele.gender==="Male");
        let table2 = document.getElementsByClassName("secTable")[0];
        table2.style.display = "table";
        let body2 = document.getElementById("tBody2");
        function display2(Student){

            for(let i=0;i<Student.length;i++){
                let tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${Student[i].id}</td>
                <td><img src=${Student[i].img_src} alt=""/> ${Student[i].first_name} ${Student[i].last_name}</td>
                <td>${Student[i].gender}</td>
                <td>${Student[i].class}</td>
                <td>${Student[i].marks}</td>
                <td>${Student[i].passing?"passing":"failed"}</td>
                <td>${Student[i].email}</td>
                `;
                body2.appendChild(tr);
            }
        }
        display2(arr2);
    }
    let gen = document.getElementById("sort-gender");
    gen.addEventListener("click",gender); 

 }
ab();
