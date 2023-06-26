<?php
// Obtener JWT usando cert

$getTokenRequest = array(
  "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
	"local_cert"=>"./srv_heyc_prod.pem",
	"passphrase"=>"Lunes31#?"
  ),
  'http'=>array(
    'method'=>"GET"
  )
);

$context = stream_context_create($getTokenRequest);

try {
  $getTokenResponse = file_get_contents('https://precarga.heycreditos.com.ar:10455/API/Comercio/user/getToken', false, $context);
  $getTokenResponse = json_decode($getTokenResponse, true);
} catch (Exception $e) {
  http_response_code(503);
  exit();
}

$jwt = $getTokenResponse['params']['JWT'];

if (!isset($jwt)) {
  http_response_code(503);
  exit();
}

// Intercambiar JWT por URL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://precarga.heycreditos.com.ar:10455/API/Comercio/Servicios/getURL");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, array());
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = [
    'Authorization: Bearer ' . $jwt,
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$getURLResponse = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(503);
    exit();
}
curl_close($ch);

try {
  $getURLResponse = json_decode($getURLResponse, true);
} catch (Exception $e) {
  http_response_code(503);
  exit();
}

$baseURL = "https://precarga.heycreditos.com.ar:10453";
$endpoint = $getURLResponse['params']['URLAccso'];

header("Location: " . $baseURL . $endpoint);
?>
