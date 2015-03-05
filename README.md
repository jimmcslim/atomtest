# atomtest
Test of require() bug in Atom Shell for Windows/Mac.

1. `git clone` this repository.
2. `npm install` to get the dependencies.
3. run `grunt` (default task, and will require `grunt-cli` installed globally) to download version of atom-shell (0.21.3)
4. run `npm run run-win` or `npm run run-mac` to start the application (an error about menu not being available for Mac will appear, I haven't made it properly cross-platform).
5. Observe that the process version is correct. The command-line log will also show evidence of `require()` working properly.
6. Click the link, this will load a different page (being served by the Browser process).
7. Backspace from this page when loaded.
8. Observe that the process version is no longer displayed, there are error messages in the command-line log indicating that the require() has failed also.

