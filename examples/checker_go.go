package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://social-media-scanner1.p.rapidapi.com/check_bulk"

	payload := strings.NewReader("{\"programs\":[\"facebook\",\"google\",\"instagram\",\"snapchat\",\"x\"],\"input\":[\"test@gmail.com\",\"john@doe.com\"]}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("x-rapidapi-key", "f8d61a6a57msh9c4087768abfa82p1ca9bajsncbb35955ff55")
	req.Header.Add("x-rapidapi-host", "social-media-scanner1.p.rapidapi.com")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}