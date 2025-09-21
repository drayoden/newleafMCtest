## Deploy next.js app with nginx on ubuntu

    - test 'build' and 'start' on local system:
        `npm run build`
        `npm run start`
    - push repo up
    - (R) - create directory, clone repo
    - (R) - install deps `npm install`
    - (R) - test dev build of app: `npm run dev`
    - (R) - test 'build' and 'start' -- `npm run build` and `npm run start`
    - (R) - setup pm2 for persitent restarts (set port)
        `pm2 start npm --name "test" -- start`
    - (R) -setup nginx config for reverse proxy of next.js app
    


R - on remote server
