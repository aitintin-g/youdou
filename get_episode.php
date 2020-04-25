<?php
require 'define.php';
$id=$_GET["id"];
$index=$_GET["user"];
//$index=1;
$query=mysql_query("select seasrc from episode where id={$id}") or die('SQL错误!');
// $json='';
// while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
// 	$json.=json_encode($row).',';
	
// }
// //sleep(3);
// echo '['.substr($json, 0,strlen($json)-1).']';
// echo mysql_fetch_row($query);
$row=mysql_fetch_array($query,MYSQL_ASSOC);
//print_r($row);

$a=$row["seasrc"];
$a=stripslashes($a);
$arr=explode("-",$a);
echo $arr[$index];
// print_r($arr);
mysql_close();
?>