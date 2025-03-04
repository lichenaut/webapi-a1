Default shareable: https://webapi-class.postman.co/workspace/webapi-workspace~25d20f53-9c9a-468f-a6f1-151ff32ba87c/collection/34573647-9a90dc57-7ee0-46a7-9ce5-a94879b45ea4?action=share&creator=34573647&active-environment=34573647-a5f25c9a-de91-4b1e-9d47-590bbcbc759a

Run in Postman HTML option: <a href="https://webapi-class.postman.co/collection/34573647-343a0e49-75f4-41b1-862b-7bb706aeeb45?source=rip_html&active-environment=34573647-214bac57-7bd2-4e69-9409-1ae446916619">
<img alt="Run in Postman" src="https://run.pstmn.io/button.svg">
</a>

Run in Postman MD option: [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://webapi-class.postman.co/collection/34573647-343a0e49-75f4-41b1-862b-7bb706aeeb45?source=rip_markdown&active-environment=34573647-214bac57-7bd2-4e69-9409-1ae446916619)

# Assignment One

## Purpose

The purpose of this assignment is to setup your GitHub and Heroku (or Rendor) instances for future assignments

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include at least 1 assert for each request in the validation.

## Requirements

- Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub.
- Create an ECHO server (from lecture)
- Setup Heroku (or Rendor) to autodeploy your application from your REPO CSC3916_HW1
- Create a PostMan request that posts a body value to your API
  - Create an environment variable $echo_body for the body of the request
  - Asserts (test) must include
    - Validating string sent is what is returned (use $echo_body to validate against the response sent back from the server)
    - Response status code (e.g. 200)
    - Response time < 200ms

## Submissions

- All source code should be stored on github (remember .gitignore for node_modules)
- API needs to be deployed to heroku
- Create a readme.md at the root of your github repository with the embedded (markdown) to your test collection
  - Within the collection click the (…), share collection -> Embed
  - Static Button
  - Click update link
  - Include your environment settings
  - Copy to clipboard
- Submit the Url to canvas with the REPO CSC_3916
- Note: All tests should be testing against your Heroku or Rendor endpoint

## Rubic

- -5 - Not deployed to Heroku or Rendor
- -5 - Missing Postman Test
- -1 - For each missing assert (test)

## Resources

- http://nodejs.org
- http://www.passportjs.org/docs/basic-digest/
- https://devcenter.heroku.com/articles/heroku-cli
- https://devcenter.heroku.com/articles/config-vars
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/35315-7488372a-8ac5-4c17-88e8-18b8ec0fcf2a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D35315-7488372a-8ac5-4c17-88e8-18b8ec0fcf2a%26entityType%3Dcollection%26workspaceId%3D9537543c-3737-4557-a3ce-8c5ed9249378#?env%5Bmccarthy-assignment1%5D=W3sia2V5IjoiZWNob19ib2R5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55Iiwic2Vzc2lvblZhbHVlIjoiaGVsbG8gQ1NDMzkxNiBTcHJpbmcgMjAyNSIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiaGVsbG8gQ1NDMzkxNiBTcHJpbmcgMjAyNSIsInNlc3Npb25JbmRleCI6MH1d)
