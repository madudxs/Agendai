<?php
session_start();
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = OpenCon();

    if (!$conn) {
        die("Falha na conexão: " . mysqli_connect_error());
    }

    // Prevenir SQL Injection
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if ($password == $row['password']) {
            $_SESSION['userid'] = $row['id'];
            $_SESSION['username'] = $row['nome'];
            header("Location: ../Agenda/Agenda.html"); // Redirecionar para a página do painel do usuário
            exit();
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Nenhum usuário encontrado com este email.";
    }

    $conn->close();
}
?>
