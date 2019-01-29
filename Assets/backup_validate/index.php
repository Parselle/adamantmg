<?php
session_start();
   $landings_id = 1765;
   $sessiondata = array();
   if (!empty($_SESSION['l'.$landings_id])) {
       $sessiondata = json_decode($_SESSION['l'.$landings_id],true);
   }
   
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	   $validatorFlag = true;
	   
	   // Валидатор
	   if (!empty($_POST['Lead']['message']) && preg_match('/http/i', $_POST['Lead']['message'])) {
		   $validatorFlag = false;
	   }
	   
	   
	   // Валидатор
	   
	   if ($validatorFlag) {
		   require_once("/var/www/lendingdom.ru/data/www/lendingdom.ru/lib/Lead.php");
				if (!empty($_POST['Lead']['message'])) {
       @mail('office@adamantmg.ru', "Adamant - Заявка с нижней формы сайта", "<html>
           <head>
               <title> Adamant - Заявка с нижней формы сайта </title>
           </head>
           <body>
            <div>Имя: " . $_POST['Lead']['name'] . "\n</div>
            <div>Телефон: " . $_POST['Lead']['phone'] . "\n</div>
            <div>Сообщение: " . $_POST['Lead']['message'] . "\n</div>
           </body>
       </html>", "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf8\r\n");
				}
			elseif (!empty($_POST['Lead']['data'])) {
       @mail('office@adamantmg.ru', "Adamant - ".(empty($_POST['Lead']['info'])?'':$_POST['Lead']['info']), "<html>
           <head>
               <title> Adamant - ".(empty($_POST['Lead']['info'])?'':$_POST['Lead']['info'])." </title>
           </head>
           <body>
            <div>Имя: " . $_POST['Lead']['name'] . "\n</div>
            <div>Телефон: " . $_POST['Lead']['phone'] . "\n</div>
            <div>Опросник: " . $_POST['Lead']['data'] . "\n</div>
           </body>
       </html>", "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf8\r\n");
        }
	   }
       

       $sessiondata["leadflag"] = true;
       $_SESSION['l'.$landings_id] = json_encode($sessiondata);
       header('Location: ' . $_SERVER['REQUEST_URI']);
   }

	//var_dump($_SERVER);

	$request_uri = $_SERVER["REQUEST_URI"];
	if ($request_uri=="/") {
			$request_uri = $request_uri."index_content";
	}
	//echo $request_uri."\n";
	//echo $_SERVER["DOCUMENT_ROOT"].$request_uri.".php"."\n";
	if (is_file($_SERVER["DOCUMENT_ROOT"].$request_uri.".php")) {
			include_once $_SERVER["DOCUMENT_ROOT"].$request_uri.".php";
	}
	else {
	//    var_dump($_SERVER);
	//    echo $request_uri."\n";
	//    echo $_SERVER["DOCUMENT_ROOT"].$request_uri.".php"."\n";
			header("HTTP/1.0 404 Not Found");
			echo "Page not exist";
	}

	exit();
?>