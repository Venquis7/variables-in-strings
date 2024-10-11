function getObjectProp<K extends keyof object>(obj: object, key: string) {
	return obj[key as K];
}

export default function MagicString(str: string, data?: object): string {
	let matches = str?.match(/%(\S+?)%/gim) || [];

	if (data && matches.length > 0) {
		matches.forEach((currentMatch) => {
			let extract = currentMatch.replace(/%/g, '');
			let props = extract.split('.');
			let current: object = data || {};

			for (let prop of props) {
				const currentObject = current[prop as keyof object];

				if (current) {
					if (currentObject && typeof currentObject === 'object') {
						current = getObjectProp(current, prop);
						continue;
					} else {
						let value: string = currentObject;

						if (
							value !== undefined &&
							props.indexOf(prop) === props.length - 1
						) {
							str = str.replace(currentMatch, value);
						}

						break;
					}
				}
			}
		});
	}

	return str;
}
