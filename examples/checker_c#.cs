using System.Net.Http.Headers;
var client = new HttpClient();
var request = new HttpRequestMessage
{
	Method = HttpMethod.Post,
	RequestUri = new Uri("https://social-media-scanner1.p.rapidapi.com/check_bulk"),
	Headers =
	{
		{ "x-rapidapi-key", "f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55" },
		{ "x-rapidapi-host", "social-media-scanner1.p.rapidapi.com" },
	},
	Content = new StringContent("{\"programs\":[\"facebook\",\"google\",\"instagram\",\"snapchat\",\"x\"],\"input\":[\"test@gmail.com\",\"john@doe.com\"]}")
	{
		Headers =
		{
			ContentType = new MediaTypeHeaderValue("application/json")
		}
	}
};
using (var response = await client.SendAsync(request))
{
	response.EnsureSuccessStatusCode();
	var body = await response.Content.ReadAsStringAsync();
	Console.WriteLine(body);
}