# TW5-firebase

This is a Google Firebase-hosted version of <a href="https://tiddlywiki.com/" class="tc-tiddlylink-external">TiddlyWiki 5</a>. It uses the FireStore database to save tiddlers, Firebase Auth for signon, Firebase hosting for serving static files and Firebase functions for the tiddler IO API.

## Installation

To create your own free instance of \~TW5-firebase, simply fork <a href="#this%20repo" class="tc-tiddlylink tc-tiddlylink-missing">this repo</a>
!!

    {
        "firebaseToken": ...,
        "apikey": ...,
        "refreshToken": ...,
    }

firebaseToken can be generated by running:

./node\_modules/.bin/firebase login:ci and save the resulting token as .firebase-token

apikey can be downloaded as "Browser Key" on the <a href="https://console.cloud.google.com/apis/credentials?project=peterneumark-com" class="tc-tiddlylink-external">Gcloud credentials page</a>

refreshToken can be gotten by logging into the wiki, and the running `firebase.auth().currentUser.refreshToken` in the JS console.

<a href="docs/CONTRIBUTING.md" class="tc-tiddlylink-external">Open file</a>
![](doc/staticimg/gcp_credentials.png "GCP API keys dashboard")

deploy:

npm run deploy

local development:

1.  cd functions; ./run.sh
2.  python -m <a href="#SimpleHTTPServer" class="tc-tiddlylink tc-tiddlylink-missing">SimpleHTTPServer</a>
3.  open <http://localhost:8000/public/?host=http%3A%2F%2Flocalhost%3A5001%2Fpeterneumark-com%2Feurope-west3%2Fwiki-app%2F>
