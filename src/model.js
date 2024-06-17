const getDataLds = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        false;
    }
}


const setDataLds = (key, newData) => {
    const data = localStorage.getItem(key);
  let mydata;
  if (data) {
    mydata = JSON.parse(data);
  }else{
    mydata=[];
  };

  mydata.push(newData);
  localStorage.setItem(key , JSON.stringify(mydata));
}


const getSingleData = (key , id) =>{
  const data = JSON.parse(localStorage.getItem(key));
  
  if (data) {
    return data.find((data)=>data.id == id);
    
  }else{
    return false;
  }
}

const deletStudent = (key, id)=>{
  const data = JSON.parse(localStorage.getItem(key));
  const deletStudentData = data.filter((data)=>data.id !=id);
  localStorage.setItem(key, JSON.stringify(deletStudentData))
}

