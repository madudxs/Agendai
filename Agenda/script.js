document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const addEventBtn = document.querySelector(".add-event-btn");
  const eventForm = document.getElementById("event-form");
  const eventNameInput = document.getElementById("event-name");
  const eventDayInput = document.getElementById("event-day");
  const startTimeInput = document.getElementById("event-start-time");
  const endTimeInput = document.getElementById("event-end-time");
  const userInput = document.getElementById("user");

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

  // Fechar o modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Submissão do formulário
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = eventNameInput.value;
    const eventDay = eventDayInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const user = userInput.value;

    if (eventName.trim() !== "" && startTime && endTime) {
      const start = parseInt(startTime.split(":")[0], 10);
      const end = parseInt(endTime.split(":")[0], 10);

      const eventsSection = document.querySelector(
        `.day[data-day="${eventDay}"] .events`
      );

      const eventElement = document.createElement("div");
      eventElement.classList.add("event", user);
      eventElement.style.top = `${(start - 9) * 60}px`;
      eventElement.style.height = `${(end - start) * 60}px`;
      eventElement.innerHTML = `
              <p class="title">${eventName}</p>
              <p class="time">${startTime} - ${endTime}</p>
          `;

      eventsSection.appendChild(eventElement);

      modal.style.display = "none";
      eventForm.reset();
    }
  });
});
