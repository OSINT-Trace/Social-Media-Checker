curl --request POST \
	--url https://social-media-scanner1.p.rapidapi.com/check_bulk \
	--header 'Content-Type: application/json' \
	--header 'x-rapidapi-host: social-media-scanner1.p.rapidapi.com' \
	--header 'x-rapidapi-key: f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55' \
	--data '{"programs":["facebook","google","instagram","snapchat","x"],"input":["test@gmail.com","john@doe.com"]}'