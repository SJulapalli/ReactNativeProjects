package main

// Import our dependencies. We'll use the standard HTTP library as well as the gorilla router for this app
import (
	"context"
	"fmt"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

func main() {
	submit("Suhas Julapalli", "Suhas", "Julapalli", "suhasj@terpmail.umd.edu", "message")
}

func submit(docName, firstName, lastName, email, message string) {
	opt := option.WithCredentialsFile("/Users/Suhas/GoProjects/dreamx-website-firebase-adminsdk-oc0et-5674edd2a0.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	client, err := app.Firestore(context.Background())

	if err != nil {
		log.Fatalln(fmt.Errorf("error initializing app: %v", err))
	}
	defer client.Close()

	result, err := client.Collection("Applicants").Doc(docName).Set(context.Background(), map[string]string{
		"first_name": firstName, "last_name": lastName, "email": email, "message": message,
	}, firestore.MergeAll)

	if err != nil {
		log.Fatalln(err)
	}
	log.Print(result)
}
