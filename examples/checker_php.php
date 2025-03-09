<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://social-media-scanner1.p.rapidapi.com/check_bulk",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => json_encode([
		'programs' => [
				'facebook',
				'google',
				'instagram',
				'snapchat',
				'x'
		],
		'input' => [
				'test@gmail.com',
				'john@doe.com'
		]
	]),
	CURLOPT_HTTPHEADER => [
		"Content-Type: application/json",
		"x-rapidapi-host: social-media-scanner1.p.rapidapi.com",
		"x-rapidapi-key: f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}