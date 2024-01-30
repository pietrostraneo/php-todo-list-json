<?php 

    $todolist = file_get_contents ('todo.json');

    $list = json_decode($todolist, true);
    
    if(isset($_POST['addTask'])){

        $addTask = $_POST['addTask'];

        array_push($list, $addTask);

        file_put_contents('todo.json', json_encode($list));
    }

    header('Content-type: application/json');
    
    echo json_encode($list);
?>