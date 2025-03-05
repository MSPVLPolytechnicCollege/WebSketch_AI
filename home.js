const Home = document.querySelector('.Home');
const Recents = document.querySelector('.Recents');
const AI = document.querySelector('.AI');

const homePage = document.querySelector('.parentHome');
const recentsPage = document.querySelector('.parentRecents');
const aiPage = document.querySelector('.parentAI');

recentsPage.style.display = "none";
aiPage.style.display = "none";

Home.addEventListener('click', () => {

    homePage.style.display = "block";
    recentsPage.style.display = "none";
    aiPage.style.display = "none";

});

Recents.addEventListener('click', () => {

    homePage.style.display = "none";
    recentsPage.style.display = "block";
    aiPage.style.display = "none";

});

AI.addEventListener('click', () => {

    homePage.style.display = "none";
    recentsPage.style.display = "none";
    aiPage.style.display = "block";

})

var userInput = document.getElementById('userInput');

document.getElementById('btn_send').addEventListener('click', () => {

    chat();
    recents();

});

userInput.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        chat();
        recents();
    }

});

var inpt =""; 

function chat() {

    inpt= userInput.value;
    var div = document.createElement('div');
    div.classList.add("userChat");
    div.textContent = inpt;
    document.querySelector('.chatArea').appendChild(div);
    userInput.value="";
}

function recents(){

        const userData = ({
            recents:inpt
        });
        fetch('http://localhost:5500/recents', {
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

}

var adminTable = document.getElementById('adminTable');

var admin = document.querySelector('.Admin');

admin.addEventListener('click' , ()=>{

    fetch('http://localhost:5500/admin')
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {

                    var tr = document.createElement('tr');

                    var td1 = document.createElement('td');
                    var td2 = document.createElement('td');
                    var td3 = document.createElement('td');

                    td1.textContent=user.email;
                    td2.textContent=user.username;
                    td3.textContent=user.password;

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    adminTable.appendChild(tr)

                });
            })
            .catch(err => {
                console.error('Data not fetched:', err);
            });


});
