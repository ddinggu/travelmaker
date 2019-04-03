'use strict';

const $ = require('jquery');
const path = require('path');
const mockDir = path.dirname(__dirname + '/../googleMapMarkerLabels.html');
const html = require('fs').readFileSync(mockDir);

describe('Google Map', () => {
	document.documentElement.innerHTML = html;
	test('render successfully', () => {
		const containerBox = $('#map');
		expect(containerBox.has('div')).toBeTruthy();
	});
});

