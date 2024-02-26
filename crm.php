<?php

	$name 	= isset($_POST['name'])?$_POST['name']:'';
	$phone 	= isset($_POST['phone'])?$_POST['phone']:'';
	$email 	= isset($_POST['email'])?$_POST['email']:'';
	
	if ($name){
		/*$utm_term = isset($_COOKIE['utm_term'])?$_COOKIE['utm_term']: '';
		$utm_campaign = isset($_COOKIE['utm_campaign'])?$_COOKIE['utm_campaign']:'';
		$utm_source = isset($_COOKIE['utm_source'])?$_COOKIE['utm_source']: '';
		$utm_medium = isset($_COOKIE['utm_medium'])?$_COOKIE['utm_medium']: '';
		
		$UTM = array();
		if (trim($utm_term)) 
			$UTM[] = array('utm_term'=>$utm_term);
		if (trim($utm_campaign)) 
			$UTM[] = array('utm_campaign' => $utm_campaign);
		if (trim($utm_source)) 
			$UTM[] = array('utm_source' => $utm_source);
		if (trim($utm_medium)) 
			$UTM[] = array('utm_medium' => $utm_medium);*/
		
		
		$result = mcrm_request('request/', 
			array(
				'action' 	=> 'question', 
				'name'		=> $name, 
				'phone'		=> $phone,
				'email'		=> $email,
				'message'	=> " Поляна. 
				Телефон: ".$phone."
				Имя: ".$name."
				email: ".$email."
				",
				//'utm'		=> $UTM
			), 'POST'
		);
	}

	echo 'ok';

function mcrm_request($url, $data = array(), $method = 'GET'){
//	$baseurl = "https://api.macrocrm.ru/estate/";
	$baseurl = "https://api.asfqwfqwfmacrocrm.ru/estate/";

	$secret = 'WYNzb5639hK8vP55hLBNedx2lmRtxK2mr3sP';

	
	$data['domain']	= 'polyana.marmax.ru';
	$data['time']	= time();
	$data['token']	= md5($data['domain'].$data['time'].$secret);

    $ch = curl_init();
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	if ($method == 'POST'){
		curl_setopt($ch, CURLOPT_URL, $baseurl.$url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	}else{
		$query = http_build_query($data);
		curl_setopt($ch, CURLOPT_URL, $baseurl.$url.'?'.$query);
	}
	$content = curl_exec($ch);
	$info = curl_getinfo($ch);
	curl_close($ch);
	
	return json_decode($content, true);
}