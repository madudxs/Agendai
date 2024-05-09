document.addEventListener("DOMContentLoaded", () => {
  const timeSlots = document.querySelectorAll(".events");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const eventForm = document.getElementById("event-form");
  const eventNameInput = document.getElementById("event-name");
  const eventDayInput = document.getElementById("event-day");
  const startTimeInput = document.getElementById("event-start-time");
  const endTimeInput = document.getElementById("event-end-time");

  // Abrir o modal ao clicar na seção de eventos
  timeSlots.forEach((slot) => {
    slot.addEventListener("click", function () {
      modal.style.display = "block";
      eventDayInput.value = this.closest(".day").getAttribute("data-day");
    });
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

    if (eventName.trim() !== "" && startTime && endTime) {
      const start = parseInt(startTime.split(":")[0], 10);
      const end = parseInt(endTime.split(":")[0], 10);

      const eventsSection = document.querySelector(
        `.day[data-day="${eventDay}"] .events`
      );

      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.style.top = `${(start - 9) * 60}px`;
      eventElement.style.height = `${(end - start) * 60}px`;
      eventElement.innerHTML = `
                <p class="title">${eventName}</p>
                <p class="time">${startTime} - ${endTime}</p>
            `;

      eventsSection.appendChild(eventElement);

      modal.style.display = "none";
    }
  });
});
