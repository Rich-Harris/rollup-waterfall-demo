import('./a.js').then(({ default: a }) => {
	a();
});

// these are just to ensure that b, c, and d are not inlined in a
import('./b.js');
import('./c.js');
import('./d.js');