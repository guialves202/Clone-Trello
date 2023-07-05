function getUserData() {
    const email = document.querySelector('.email-input');
    const password = document.querySelector('.passw-input');

    if(email && password) {
        const User = {
            email: email.value,
            password: password.value
        }
    
        return User;
    }
    return;
}

function verifyUserData() {
    return;
}

async function loginUser() {
    const User = getUserData();
    if(User) {
        const insertData = JSON.stringify(User);
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: insertData,
            headers: {
                "Content-Type": "application/json"
            }
            
        })
    }else {
        console.log('Dados incorretos ou incompletos');
    }
    
}