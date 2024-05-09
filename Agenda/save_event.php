<?php
// Lê o conteúdo do arquivo JSON onde os eventos estão armazenados
$jsonFile = 'events.json';
$events = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

// Obtém os dados do POST para adicionar um novo evento
$eventName = $_POST['event-name'];
$eventDay = $_POST['event-day'];
$eventTime = $_POST['event-time'];

// Adiciona o novo evento ao array de eventos
$events[] = [
    'name' => $eventName,
    'day' => $eventDay,
    'time' => $eventTime
];

// Salva o array atualizado de eventos de volta no arquivo JSON
file_put_contents($jsonFile, json_encode($events));

// Retorna uma resposta de sucesso
header('Content-Type: application/json');
echo json_encode(['status' => 'success']);
?>
