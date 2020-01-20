# Appnexus Creative Insertion Tool (AST tags)
## Preface
Original credit to Ben Kahan. https://chrome.google.com/webstore/detail/appnexus-creative-inserti/ailiopjkbojmmdflhbcedndlomhmhkbk he had the idea

Sadly his extension is outdated since appnexus discontinued the api he was using. 
So I updated it using the AST API. Also made it always secure and migrated the code to ES6.

## Description
This Chrome extension enables dynamic insertion of creative Ads in any HTML element in any page.
This can be used for proofs or for debugging your creative in a live environment. 

How to use:

1. Load the site on which you wish to preview the creative
2. Click the AppNexus Creative Insertion Tool icon to the right of the URL bar
3. Move the mouse cursor over the layer you want to use as placeholder for the creative. It should show a message with the text "SELECT".
4. Click on it, a input prompt should appear.
5. Paste the AppNexus Creative ID and press Enter
6. Enjoy the view.

# Modification
I used webpack for the modularization. 

## Installation

I used webpack for the modularization and yarn for the package managers. Simply run:

```bash
yarn install 
```

## Usage
There are three commands for compiling and testing.
All output files are in the /build folder.
### development watched test
```bash
yarn run test
```
Ouputs all the files needed for testing uncompressed extensions in chrome with the raw code
### Producion watched test
```bash
yarn run btest
```
Ouputs all the files needed for testing uncompressed extensions in chrome with the uglified code
### Producion and compiling
```bash
yarn run build
```
Ouputs all the files needed for testing uncompressed extensions in chrome with the raw code. Also creates the zip ready to upload to Chrome extensions
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)