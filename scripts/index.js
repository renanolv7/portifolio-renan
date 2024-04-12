
const projectSection = document.querySelector('.projects-section');
const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

elements.forEach((element) => myObserver.observe(element));

function submitInfos() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // let typeMessage = document.getElementById("options").value;
    let message = document.getElementById("message").value;

    // Adicionado infos a um dicionário
    let infos = {
        "nome": name,
        "email": email,
        // "typeMessage": typeMessage,
        "mensagem": message
    };

    let emptyField = false;

    for (let info in infos) {
        if (infos[info].trim() == "") {
            emptyField = true;
            alert("Campo " + info + " não está preenchido! ❌");
            break;
        }
    }

    if (!emptyField) {
        alert("Suas informações" + " foram enviadas " + infos['nome'] + "! ✅");
    }

    // CRIAR CÓDIGO PARA PEGAR OS VALORES DOS INPUTS COM TYPE RADIO
}

