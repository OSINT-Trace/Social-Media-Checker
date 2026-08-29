AsyncHttpClient client = new DefaultAsyncHttpClient();

// Primary (Recommended): OSINT Trace Direct API
client.prepare("POST", "https://api.osinttrace.com/v1/check")
	.setHeader("x-osint-key", "YOUR_OSINT_KEY")
	.setHeader("Content-Type", "application/json")
	// Alternative (API.Market):
	// .setUrl("https://prod.api.market/api/v1/osint-trace-1/social-media-scanner/check")
	// .setHeader("X-Api-Key", "YOUR_API_KEY")
	// Alternative (RapidAPI):
	// .setUrl("https://social-media-scanner1.p.rapidapi.com/check")
	// .setHeader("x-rapidapi-key", "YOUR_RAPIDAPI_KEY")
	// .setHeader("x-rapidapi-host", "social-media-scanner1.p.rapidapi.com")
	.setBody("{\"input\":\"test@gmail.com\",\"programs\":[\"facebook\",\"google\",\"instagram\",\"snapchat\",\"x\",\"microsoft\"]}")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();