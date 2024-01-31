import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// const API_URL = "https://www.meetup.com/api/guide/#p03-publishing-section"
// const graphQl = `mutation($input: CreateEventInput!) {
//     createEvent(input: $input) {
//       event {
//         id
//       }
//       errors {
//         message
//         code
//         field
//       }
//     }
//   }`

//   const variables = {
//     input: {
//       groupUrlname: "GROUP_URLNAME",
//       title: "EVENT_TITLE",
//       description: "EVENT_DESCRIPTION",
//       startDateTime: "EVENT_STARTTIME",
//       venueId: "EVENT_VENUE_ID",
//       duration: "EVENT_DURATION",
//       publishStatus: "DRAFT",
//     },
//   };

let hackathons = [{}];

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/about", async (req, res) => {
  res.render("about.ejs");
});

app.get("/sport", async (req, res) => {
  db.query("SELECT * FROM sport");
});
const cred = [];
app.post("/submit", (req, res) => {
  const { name, email, contact, location, message } = req.body;
  if (!name || !email || !contact || !location || !message) {
    return res.render("contact.ejs", {
      title: "Bad Cradential Plz fill the form correctly",
    });
    // res.json("there is error at server side");
  }

  let newUser = {
    name,
    email,
    contact,
    location,
    message,
  };

  cred.push(newUser);
  console.log(cred);
  res.render("contact.ejs", {
    title: "Success fully Submited Your response",
  });
});

app.get("/contact", async (req, res) => {
  res.render("contact.ejs", {
    title: "Contact information",
  });
});

app.get("/hackathon", async (req, res) => {
  const result = await axios.get("https://devpost.com/api/hackathons?page=2");
  hackathons = result.data.hackathons;
  console.log(hackathons);
  res.render("hackathon.ejs", {
    posts: hackathons,
  });
});

app.get("/:category", async (req, res) => {
  const category = req.params.category;

const url = "https://api.predicthq.com/v1/events/";

const headers = {
  Authorization: "Bearer 9VmSvvkkX5nNDXw42SjSb0OeF2brrFnF6S2hM8U7",
  Accept: "application/json",
};

let params = {
  category:"sports",
  country: "IN",

  "location_around.origin": "20.267646,85.833995",
};
//    let params = {};

try {
  const response = await axios.get(url, { headers, params });
  res.json(response.data);
} catch (error) {
  console.error(error);
  res.status(500).send("An error occurred while searching for events.");
}
});
app.listen(port, () => {
  console.log(`app is live at http://localhost${port}`);
});
