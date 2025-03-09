AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("POST", "https://social-media-scanner1.p.rapidapi.com/check_bulk")
	.setHeader("x-rapidapi-key", "f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55")
	.setHeader("x-rapidapi-host", "social-media-scanner1.p.rapidapi.com")
	.setHeader("Content-Type", "application/json")
	.setBody("{\"programs\":[\"facebook\",\"google\",\"instagram\",\"snapchat\",\"x\"],\"input\":[\"test@gmail.com\",\"john@doe.com\"]}")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();