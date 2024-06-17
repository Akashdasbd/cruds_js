const creatStudentForm = document.getElementById("creat_student_form");
const student_data_list = document.getElementById("student_data_list");
const mgs = document.querySelector(".mgs");
const studensSilgeShow = document.querySelector(".studens_single");


const getAllStudents = () => {

    const students = getDataLds("students");
    let dataList = "";
    let crunt = 1;
    if (students) {
        students.forEach((element, index) => {
            dataList += `
                                                   <tr>
                                            <td>${crunt++}</td>
                                            <td>${element.name}</td>
                                            <td>
                                                <img src="${element.photo}" alt="">
                                            </td>
                                            <td>${element.mobile}</td>
                                            <td>${element.email}</td>
                                            <td>${element.location}</td>
                                            <td>${timeAgo(element.time)}</td>
                                            <td>
                                                <button class=" btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_student" onclick = "showSingleItem('${element.id}')">
                                                    <i class="fa-regular fa-eye"></i>
                                                </button>
                                                <button class=" btn btn-sm btn-warning">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button class=" btn btn-sm btn-danger" onclick = "deletSingleItem('${element.id}')">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
           `
        });
    }else{
        dataList=`
        <tr>
        <th  colspan="8" class="text-center">Not data found </th>
        </tr>
        `
    };

    student_data_list.innerHTML= dataList;
}


const deletSingleItem = (id)=>{
    deletStudent("students", id)
    getAllStudents();
}


const showSingleItem = (id)=>{
    const singleStudens = (getSingleData("students", id));
    const {name, photo, email, mobile, location} = singleStudens;

    studensSilgeShow.innerHTML = `
    
                        <div class="student_img">
                        <img src="${photo}" alt="">
                    </div>
                    <div class="student_info m-2">
                        <h2>Name: ${name}</h2>
                        <h3>Mobile: ${mobile}</h3>
                        <h4>Email: ${email}</h4>
                        <h4>Location: ${location}</h4>
                    </div>

    `
};

getAllStudents();

creatStudentForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, photo, email, mobile, location } = Object.fromEntries(formData);

    if (!name || !photo || !email || !mobile || !location) {
        mgs.innerHTML = careatMgs("All fields are required ");
    } else if (!isEmail(email)) {
        mgs.innerHTML = careatMgs("Invlid email")
    } else if (!isMobile(mobile)) {
        mgs.innerHTML = careatMgs("Invlid Mobile Numbal")
    } else {
        setDataLds("students", {
            id: generateUniqueId(),
            time: Date.now(),
            name,
            photo,
            email,
            mobile,
            location
        });
        mgs.innerHTML = careatMgs("Creat Students Done", "success");
        e.target.reset();
        getAllStudents();
    }
}