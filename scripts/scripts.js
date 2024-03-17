

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

    let campoVazio = false;

    for (let info in infos) {
        if (infos[info].trim() == "") {
            campoVazio = true;
            alert("Campo " + info + " não está preenchido! ❌");
            break;
        }
    }

    if (campoVazio) {
        alert('Preencha os campos...');
    } else {
        alert("Olá " + infos['nome'] + " suas informações foram enviadas! ✅");
    };

    // CRIAR CÓDIGO PARA PEGAR OS VALORES DOS INPUTS COM TYPE RADIO
    // NÃO CONSEGUI FAZER  
}