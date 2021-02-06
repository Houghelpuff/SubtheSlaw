# SubtheSlaw (v2.0)

I decided to refactor the code and move it to a different tech stack. I decided to completely re-work everything into a MERN (MongoDB, Express, React, Node.js) stack. It's currently a work in progress with the issues listen below (if you can help please let me know haha). The goal was to **A)** Make it look betetr and **B)** Use a stack that is more modern and useful. While Django is a versitile framework, I wanted to use Mongo as my database.

---

## Issues

- When running the server locally, the orderd aaren't being displayed on the mobile version... only on desktop.
- Possibly think about changing hte DB schema. The orders should contain bools for
  - Extra sauce
  - Extra Toast
  - Extra Fries
  - No slaw
  - Drink option
  - Optional "Extras" field for special requests
- Once the front end is functional I'll need to figure out how to deploy it on AWS
  - I was planning on using an EC2 instance
