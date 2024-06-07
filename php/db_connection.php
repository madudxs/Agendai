<?php
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "agendaidb";

    // Criar conexão
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

    // Verificar conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    } else {
        echo "Conexão bem-sucedida!";
    }

    return $conn;
}

function CloseCon($conn)
{
    $conn->close();
}
?>
