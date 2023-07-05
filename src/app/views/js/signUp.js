const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

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

async function insertUser() {
    const User = getUserData();
    if(User) {
        const insertData = JSON.stringify(User);

        const response = await fetch('http://localhost:3000/signup', {
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