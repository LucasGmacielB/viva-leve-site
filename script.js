function enviarMensagem (event) {
    const nome = document.getElementById("nome").value;
    const numero  = document.getElementById("numero").value;

    if (nome == "" || numero == "") {
        alert("Alguns dos campos não foram preenchidos.")
        return;
    }else if (numero.length !== 11) {
        alert("Por favor, insira um número de telefone válido com DDD (11 dígitos).");
        return;
    }

    const texto = `Olá! ${nome}, estou te enviando esse convite porque acredito que o site Viva Leve pode te ajudar a cuidar melhor da sua saúde e bem-estar.\n Por lá, você vai encontrar conteúdos sobre alimentação saudável, atividades físicas, saúde mental, qualidade do sono e muito mais — tudo feito com carinho para quem quer viver de forma mais leve e equilibrada.\n  Dá uma olhada: https://viva-leve-site.vercel.app/`;
    const link = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    
    
    window.open(link);
}