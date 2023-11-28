require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000;
const githubData= {
    "login": "vbamagician",
    "id": 36579230,
    "node_id": "MDQ6VXNlcjM2NTc5MjMw",
    "avatar_url": "https://avatars.githubusercontent.com/u/36579230?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vbamagician",
    "html_url": "https://github.com/vbamagician",
    "followers_url": "https://api.github.com/users/vbamagician/followers",
    "following_url": "https://api.github.com/users/vbamagician/following{/other_user}",
    "gists_url": "https://api.github.com/users/vbamagician/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vbamagician/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vbamagician/subscriptions",
    "organizations_url": "https://api.github.com/users/vbamagician/orgs",
    "repos_url": "https://api.github.com/users/vbamagician/repos",
    "events_url": "https://api.github.com/users/vbamagician/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vbamagician/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Kamal C. Bharakhda",
    "company": "SoftwareONE",
    "blog": "https://www.linkedin.com/in/kamalbharakhda/",
    "location": "Mumbai, India.",
    "email": null,
    "hireable": null,
    "bio": "VBA Developer + C# .Net + Testing Automation via Playwright/Selenium and Specflow + Google Apps Script + Vannila JavaScript + HTML5 ",
    "twitter_username": null,
    "public_repos": 35,
    "public_gists": 4,
    "followers": 10,
    "following": 14,
    "created_at": "2018-02-18T00:49:44Z",
    "updated_at": "2023-11-28T17:46:26Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/kamalam', (req, res) => {
    res.send('Hi Kamal!')
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})