class userRequest {
    constructor(email, days, serviceType, guardNumber, preference, Id) {
        this.email = email;
        this.days = days;
        this.serviceType = serviceType;
        this.guardNumber = guardNumber;
        this.preference = preference;
        this.Id = Id;
    }
}
//variables //

const requestBtn = document.getElementById("newRequest");
const form = document.getElementById("user");


// event listeners & functions //


//FINISH ASYNCH FUNCTIONS //

requestBtn.addEventListener("click", async () => {
    form.style.display = "block";
    requestBtn.style.display = "none";


    form.addEventListener("submit", async (event) => {
        event.preventDefault();


        const user_Email = document.getElementById('email').value;
        const user_Explantion = document.getElementById('explanation').value
        const user_Days = document.querySelectorAll(".days");
        const user_ServiceType = document.querySelectorAll(".services");
        const user_GuardNumber = document.getElementById("serviceguards").value;
        const user_RequestID = generateID();
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let isValid = true;








        if (isValid) {
            await submitEmail(user_Email);
            await submitDays(user_Days);
            await submitServices(user_ServiceType);
            await submitExplanation(user_Explantion);
            await submitGuardNumbers(user_GuardNumber);

            let tempRequest = new userRequest(user_Email, user_Days, user_ServiceType, user_GuardNumber, user_Explantion, user_RequestID);
            users.push(tempRequest);
            localStorage.setItem('users', JSON.stringify(users));
            console.log(users);

            window.alert("Your Request has been submitted! Thank you");
        



        }
        else {
            window.alert('Something went wrong :<');
            isValid = false;
        }

    })

});




function generateID() {
    let randomNumber = '';
    for (let i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
}

async function submitEmail(email) {
    // We would send information to backend from here//
    console.log(`Hey your email is ${email}`);
    

}
async function submitExplanation(explanation) {
    console.log(` ${explanation}`);
}

async function submitDays(days) {
    days.forEach(day => {
        if (day.checked) {
            console.log(`You want service on ${day.value}`);
        }
    });
}

async function submitServices(services) {
    services.forEach(service => {
        if (service.checked) {
            console.log(`The type of service you want is ${service.value}`);
        }
    })
}

async function submitGuardNumbers(Guards) {
    console.log(`You want ${Guards} Number of Guards`);
}

