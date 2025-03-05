const signin_form = document.querySelector('.parentSignin');
const login_form = document.querySelector('.parentLogin');

const register = document.querySelector('.register');
const btn_back = document.querySelector('.btn_back');


btn_back.addEventListener('click',()=>{

    login_form.style.display='block';
    signin_form.style.display='none';
});

register.addEventListener('click',()=>{

    login_form.style.display='none';
    signin_form.style.display='block';
})



document.getElementById('btn_login').addEventListener('click', () => {

    const username = document.getElementById('login_username');
    const password = document.getElementById('login_password');

    
    fetch('http://localhost:5500/fetchData')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                if (user.username == username.value && user.password == password.value) {
                    const userid = user._id;
                    location.replace('home.html')
                }
            });
        })
        .catch(err => {
            console.error('Data not fetched:', err);
        });

})

document.getElementById('btn_signin').addEventListener('click', () => {

    const userData = ({

        email: document.getElementById("signin_email").value,
        username: document.getElementById("signin_username").value,
        password: document.getElementById("signin_password").value
    })

    fetch('http://localhost:5500/pushData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data sent successfully:", data);

        })

        .catch(err => {
            console.error('Data not sent:', err);
        });
    location.reload();
    alert('Sign in successfully');

})


