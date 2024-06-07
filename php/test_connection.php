<?php
include 'db_connection.php';

$conn = OpenCon();

if ($conn) {
    echo "Conexão bem-sucedida!";
} else {
    echo "Falha na conexão: " . mysqli_connect_error();
}

CloseCon($conn);
?>
