# Remix - Turborepo Issue

OS: Mac Monterey 12.6 Node: 18.12.0

1. Run "npm i" from the root of this project.
1. Run "npm run dev" from the root of this project.
1. Open browser to localhost:3000
1. You should see the text Hello World
1. Edit helloWorld function in ./packages/hello-world/src/hello-world.ts
1. Check console. It should show that the hello world library rebuilt and the
   remix app rebuilt.
1. Refresh the page at localhost:3000

The message does not update.

Notes

- If you check the ./packages/hello-world/dist directory, it does reflect the
  change.
- If you check the ./node_modules/hello-world directoty, it does reflect the
  change.
