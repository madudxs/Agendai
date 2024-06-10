document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const addEventBtn = document.querySelector(".add-event-btn");
  const addEventIcon = document.querySelector(".add-event-icon"); // Seleciona o ícone de adicionar evento
  const eventForm = document.getElementById("event-form");
  const eventNameInput = document.getElementById("event-name");
  const eventDayInput = document.getElementById("event-day");
  const startTimeInput = document.getElementById("event-start-time");
  const endTimeInput = document.getElementById("event-end-time");
  const userInput = document.getElementById("user");

  // Object to store busy times
  const busyTimes = {
    segunda: [],
    terça: [],
    quarta: [],
    quinta: [],
    sexta: [],
  };

  // Atualizar datas da semana
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const startDate = new Date(today.setDate(date - (day - 1))); // Segunda-feira

  for (let i = 0; i < 5; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    document.getElementById(
      `${["monday", "tuesday", "wednesday", "thursday", "friday"][i]}-date`
    ).textContent = currentDate.getDate();
  }

  // Abrir o modal ao clicar no botão
  addEventBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Abrir o modal ao clicar no ícone de adicionar evento
  addEventIcon.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Fechar o modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Função para verificar se o horário está ocupado
  function isTimeSlotAvailable(day, start, end) {
    return !busyTimes[day].some(
      (event) =>
        (start >= event.start && start < event.end) ||
        (end > event.start && end <= event.end) ||
        (start <= event.start && end >= event.end)
    );
  }

  // Função para adicionar um evento
  function addEvent(eventName, eventDay, startTime, endTime, user) {
    const start = parseInt(startTime.split(":")[0], 10);
    const end = parseInt(endTime.split(":")[0], 10);

    if (!isTimeSlotAvailable(eventDay, start, end)) {
      alert("Este horário já está ocupado.");
      return;
    }

    busyTimes[eventDay].push({ start, end });

    const eventsSection = document.querySelector(
      `.day[data-day="${eventDay}"] .events`
    );

    const eventElement = document.createElement("div");
    eventElement.classList.add("event", user);
    eventElement.style.top = `${(start - 0) * 60}px`;
    eventElement.style.height = `${(end - start) * 60}px`;
    eventElement.innerHTML = `
      <div class="event-details">
        <p class="title">${eventName}</p>
        <p class="time">${startTime} - ${endTime}</p>
        <p class="user">Evento adicionado por: ${user}</p>
      </div>
    `;

    eventsSection.appendChild(eventElement);
  }

  // Submissão do formulário
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = eventNameInput.value;
    const eventDay = eventDayInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const user = userInput.value;

    if (eventName.trim() !== "" && startTime && endTime) {
      addEvent(eventName, eventDay, startTime, endTime, user);
      modal.style.display = "none";
      eventForm.reset();
    }
  });
});
