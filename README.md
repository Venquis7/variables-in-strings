# Variables in Strings

A simple package that allows you to use variables in your strings.

### Installation:

```
npm i variables-inside-strings
```

### Syntax

The function takes two arguments: a string (required) and an object containing the data to be used. The second argument is optional, allowing you to include the function in larger, single-source string solutions.
If nothing is passed in the second argument, or there is no match, the original string will be returned.

```
MagicString(string, object);
```

## How to use:
To replace a portion of your string with the value of a variable, surround it with percent signs. Then pass in the second argument the object with the name of the variable you want to replace.

```
import MagicString from 'variables-inside-strings';

console.log(MagicString(`Hello %name%`, { name: 'John' }));

// Output: Hello John
```

Use the dot notation to include nested values:

```
import MagicString from 'variables-inside-strings';

console.log(
	MagicString('Hello %user.first_name%', {
		user: {
			first_name: 'John',
		},
	})
);

// Output: Hello John
```

If you want to display a percent value, simply put a second percent sign right after the reference:

```
import MagicString from 'variables-inside-strings';

console.log(
	MagicString(`%percentage%% of the work is done.`, {
		percentage: 100,
	})
);

// Output: 100% of the work is done.
```
