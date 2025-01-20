require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


const gitData = {
  "login": "SyedZohaibAliKazmi",
  "id": 154606766,
  "node_id": "U_kgDOCTccrg",
  "avatar_url": "https://avatars.githubusercontent.com/u/154606766?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SyedZohaibAliKazmi",
  "html_url": "https://github.com/SyedZohaibAliKazmi",
  "followers_url": "https://api.github.com/users/SyedZohaibAliKazmi/followers",
  "following_url": "https://api.github.com/users/SyedZohaibAliKazmi/following{/other_user}",
  "gists_url": "https://api.github.com/users/SyedZohaibAliKazmi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SyedZohaibAliKazmi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SyedZohaibAliKazmi/subscriptions",
  "organizations_url": "https://api.github.com/users/SyedZohaibAliKazmi/orgs",
  "repos_url": "https://api.github.com/users/SyedZohaibAliKazmi/repos",
  "events_url": "https://api.github.com/users/SyedZohaibAliKazmi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SyedZohaibAliKazmi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Syed Zohaib Ali Kazmi",
  "company": null,
  "blog": "",
  "location": "Karachi , Pakistan",
  "email": null,
  "hireable": null,
  "bio": "🌐 Developer & Designer | Crafting visually appealing and interactive web applications. Passionate about merging design and technology to create en",
  "twitter_username": "zohaibAli3377",
  "public_repos": 38,
  "public_gists": 0,
  "followers": 4,
  "following": 9,
  "created_at": "2023-12-22T13:25:55Z",
  "updated_at": "2024-11-13T20:18:07Z"
}

app.get('/github',(req,res)=>{
  res.json(gitData)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req, res)=>{
  res.send("Welcome to the Twitter ZOHAIB ALI")
})

app.get('/login',(req,res)=>{
  res.send("<h1>Login Successfully</h1>")
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`);
  console.log(process.env.PORT);
  
})