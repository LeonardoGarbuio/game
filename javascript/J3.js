const tasks = [
    "Escolha um local para o jardim vertical.",
    "Meça o espaço disponível e planeje os vasos.",
    "Reúna materiais recicláveis ou suportes.",
    "Pesquise e escolha as plantas.",
    "Defina um sistema de irrigação.",
    "Lave e prepare os recipientes.",
    "Escolha e compre substrato e adubos.",
    "Corte e prepare garrafas ou caixotes.",
    "Monte a estrutura do jardim vertical.",
    "Organize os vasos e fixe na parede.",
    "Preencha os vasos com substrato.",
    "Plante as sementes ou mudas.",
    "Crie um sistema de identificação para as plantas.",
    "Teste a irrigação e ajuste se necessário.",
    "Regue as plantas e observe a absorção.",
    "Aprenda a identificar sinais de excesso ou falta de água.",
    "Faça uma adubação leve com matéria orgânica.",
    "Verifique a exposição solar das plantas.",
    "Crie um cronograma de rega e manutenção.",
    "Reforce a estrutura do jardim se necessário.",
    "Fotografe o crescimento das plantas.",
    "Teste novas formas de adubação.",
    "Substitua plantas que não cresceram bem.",
    "Adicione novas plantas para preencher espaços.",
    "Decore o jardim com elementos personalizados.",
    "Mostre o progresso para amigos ou familiares.",
    "Fotografe o resultado final.",
    "Parabéns! Seu jardim vertical está pronto!"
];

let currentDay = 0;
const startBtn = document.getElementById("start-btn");
const taskContainer = document.getElementById("task-container");
const dayInfo = document.getElementById("day-info");
const progressBar = document.getElementById("progress-bar");

startBtn.addEventListener("click", () => {
    if (currentDay < tasks.length) {
        dayInfo.innerText = `Dia ${currentDay + 1}`;
        taskContainer.innerText = tasks[currentDay];
        taskContainer.classList.remove("fade-in");
        setTimeout(() => {
            taskContainer.classList.add("fade-in");
        }, 100);

        // Atualiza a barra de progresso
        const progress = (currentDay + 1) / tasks.length * 100;
        progressBar.style.width = `${progress}%`;

        // Muda o fundo conforme o progresso
        if (currentDay === 7) {
            document.body.classList.add('bg-1');
        } else if (currentDay === 14) {
            document.body.classList.add('bg-2');
        } else if (currentDay === 21) {
            document.body.classList.add('bg-3');
        }

        currentDay++;
    } else {
        dayInfo.innerText = "Jogo Concluído!";
        taskContainer.innerText = "Parabéns! Seu jardim vertical foi finalizado.";
        startBtn.style.display = "none";
    }
});
