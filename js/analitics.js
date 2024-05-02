google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  // Defina opções padrão para todos os gráficos
  var defaultOptions = {
    backgroundColor: { fill: "none" },
    title: "",
    colors: ["#B79EC6", "#A3C5E5", "#99CD71", "#F29B6A", "#F4C771"],
  };

  // Gráfico de Idade
  var ageData = google.visualization.arrayToDataTable([
    ["Faixa Etária", "Quantidade"],
    ["18-25", 50],
    ["26-35", 30],
    ["36-45", 25],
    ["46-60", 15],
    ["60+", 10],
  ]);

  var ageChart = new google.visualization.PieChart(
    document.getElementById("age-chart")
  );
  ageChart.draw(ageData, defaultOptions);

  // Gráfico de Gênero
  var genderData = google.visualization.arrayToDataTable([
    ["Gênero", "Quantidade"],
    ["Masculino", 35],
    ["Feminino", 65],
  ]);

  var genderChart = new google.visualization.PieChart(
    document.getElementById("gender-chart")
  );
  genderChart.draw(genderData, defaultOptions);

  // Gráfico de Dias Mais Procurados
  var daysData = google.visualization.arrayToDataTable([
    ["Dia", "Atendimentos"],
    ["Segunda", 10],
    ["Terça", 20],
    ["Quarta", 25],
    ["Quinta", 30],
    ["Sexta", 15],
    ["Sábado", 5],
  ]);

  var daysChart = new google.visualization.ColumnChart(
    document.getElementById("days-chart")
  );
  daysChart.draw(daysData, defaultOptions);

  // Gráfico de Horários Mais Procurados
  var timesData = google.visualization.arrayToDataTable([
    ["Horário", "Agendamentos"],
    ["08:00", 10],
    ["09:00", 15],
    ["10:00", 25],
    ["11:00", 20],
    ["14:00", 15],
    ["15:00", 10],
    ["16:00", 5],
  ]);

  var timesChart = new google.visualization.ColumnChart(
    document.getElementById("times-chart")
  );
  timesChart.draw(timesData, defaultOptions);

  // Gráfico de Uso da Sala
  var doctorsData = google.visualization.arrayToDataTable([
    ["Médica", "Uso da Sala"],
    ["Dra. Silva", 50],
    ["Dra. Costa", 30],
    ["Dra. Pereira", 20],
  ]);

  var doctorsChart = new google.visualization.ColumnChart(
    document.getElementById("doctors-chart")
  );
  doctorsChart.draw(doctorsData, defaultOptions);
}

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
