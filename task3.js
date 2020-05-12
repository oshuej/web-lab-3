const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent

function isEquivalent(obj1, obj2) {
	for (let i in obj1) {
		if (obj1[i] !== obj2[i]) {
			return false;
		}
	}
	return true;
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false
