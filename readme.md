# Appnexus Creative Insertion Tool (AST tags)
## Preface
Original credit to Ben Kahan. https://chrome.google.com/webstore/detail/appnexus-creative-inserti/ailiopjkbojmmdflhbcedndlomhmhkbk he had the idea

Sadly his extension is outdated since appnexus descontinued the api he were using. 
So I updated it using the AST API. Also made it always secure and migrated the code to ES6.

## Description
This Chrome extension enables dynamic insertion of creative Ads in any HTML element in any page.
How to use:

1. Load the site on which you wish to preview the creative
2. Click the AppNexus Creative Insertion Tool icon to the right of the URL bar
3. Move the mouse cursor over the layer you want to use as placeholder for the creative. It shouls show a message with the text "SELECT".
4. Click on it, a input prompt should appear.
5. Paste the AppNexus Creative ID and press Enter
6. Enjoy the view.

## Installation
I used webpack for the modularization.
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)