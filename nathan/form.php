<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting</title>
</head>
<body>

    <?php

    $conn = new mysqli("sql304.infinityfree.com", "if0_35772940", "1S8QfluPVIC", "if0_35772940_form");

    $tname = "results";

    $sql = "CREATE TABLE IF NOT EXISTS $tname(
        Name VARCHAR(65535),
        Level VARCHAR(65535),
        Score INT
    )";

    $conn->query($sql);

    $name = $_POST["name"];
    $lvl = $_POST["lvl"];
    $score = $_POST["grade"];

    $sql = "INSERT INTO results (Name, Level, Score) VALUES ($name, $lvl, $score)";

    $conn->query($sql);

    echo "<script>location.href='localhost/nathan/index/index.html';</script>";

    ?>
    
</body>
</html>