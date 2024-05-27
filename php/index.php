<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
    <?php

        $name = $_GET['name'];
        $grade = $_GET['grade'];
        $level = $_GET['lvl'];

        try {
            $conn = new PDO("sqlsrv:server = tcp:nkozak2006.database.windows.net,1433; Database = nathan-quiz", "nkozak1", "CherryVodka1!");
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (PDOException $e) {
            print("Error connecting to SQL Server.");
            die(print_r($e));
        }
        
        // SQL Server Extension Sample Code:
        $connectionInfo = array("UID" => "nkozak1", "pwd" => "CherryVodka1!", "Database" => "nathan-quiz", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
        $serverName = "tcp:nkozak2006.database.windows.net,1433";
        $conn = sqlsrv_connect($serverName, $connectionInfo);

        $sql = "CREATE DATABASE IF NOT EXISTS quiz";

        $conn->query($sql);

        $sql = "CREATE TABLE IF NOT EXISTS results (
            firstName VARCHAR(65535),
            grade INT,
            lvl VARCHAR(65535)
        )";
        
        $conn->query($sql);

        $sql = "INSERT INTO results (firstName, grade, lvl) VALUES (" . $name . ", " . $grade . ", " . $level . ")";

        $conn->query($sql);

    ?>



</body>
</html>