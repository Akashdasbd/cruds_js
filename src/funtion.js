const careatMgs = (mgs , type = "danger") =>{
    return `<p class=" alert alert-${type} d-flex justify-content-between">${mgs}<button class=" btn-close" data-bs-dismiss="alert"></button></p>`
}


const isEmail = (email)=>{
    const patten = /^[a-z0-9\._]{1,}@[a-z0-9]{2,5}\.[a-z]{2,4}$/;
    
    return patten.test(email);
    
}



const isMobile = (mobile)=>{
    const patten =/^(\+880|8801|01)[0-9]{9}$/;

    return patten.test(mobile);
}


function generateUniqueId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp
    const randomValue = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 5-byte random value
    const counter = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 3-byte counter

    return (
        timestamp.padStart(8, '0') +
        randomValue.padStart(10, '0') +
        counter.padStart(6, '0')
    );
}


// time ago funtions

function timeAgo(timestamp) {
    const now = new Date();
    const seconds = Math.floor((now - timestamp) / 1000);

    if (seconds < 5) {
        return 'just now';
    }
    
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}

// Example usage:



