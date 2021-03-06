/*
 * Copyright (c) 2013 Tristan Le Guern <tleguern AT bouledef DOT eu>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

String.prototype.toLatinPig = function () {
	var a = this.split(/ /g);
	var v = ['a', 'e', 'i', 'o', 'u', 'y'];
	var vs = ["way", "yay", "hay"];

	for (var i = 0; i < a.length; ++i) {
		var s = a[i].toLowerCase();
		var t = "";

		if (v.indexOf(s[0]) >= 0) {
			t = s + vs[Math.floor(Math.random() * vs.length)];
		} else {
			t = s.substring(1) + s.charAt(0) + "ay";
		}
		a[i] = t;
	}
	var r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toUbbiDubbi = function () {
	var a = this.split(/ /g);
	var v = ['a', 'e', 'i', 'o', 'u', 'y'];

	for (var i = 0; i < a.length; ++i) {
		var s = a[i].toLowerCase();
		var t = "";

		for (var j = 0; j < s.length; ++j) {
			if (v.indexOf(s[j]) >= 0) {
				t += "ub" + s[j];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}

	var r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toGibberish = function () {
	var a = this.split(/ /g);
	var v = ['a', 'e', 'i', 'o', 'u', 'y'];
	var vi = ["idig", "uddag", "uvug", "uthug"];
	var rvi = vi[Math.floor(Math.random() * vi.length)];

	for (var i = 0; i < a.length; ++i) {
		var s = a[i].toLowerCase();
		var t = "";

		for (var j = 0; j < s.length; ++j) {
			if (v.indexOf(s[j]) >= 0) {
				t += rvi + s[j];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}
	
	var r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toTutnese = function () {
	var a = this.split(/ /g);
	var v = ['a', 'e', 'i', 'o', 'u', 'y'];
	var c = {
		'b': 'bub' , 'k': 'kuck' , 's': 'sus' ,
		'c': 'coch', 'l': 'lul'  , 't': 'tut' ,
		'd': 'dud' , 'm': 'mum'  , 'v': 'vuv' ,
		'f': 'fuf' , 'n': 'now'  , 'w': 'wack',
		'g': 'gug' , 'p': 'pup'  , 'x': 'xux' ,
		'h': 'hash', 'q': 'quack', 'y': 'yub' ,
		'j': 'jay' , 'r': 'rur'  , 'z': 'zub' ,
		'.': 'per' , '?': 'que'  , ',': 'com' ,
		'!': 'ex'  , ';': 'sem'  , ':': 'col' ,
	};

	for (var i = 0; i < a.length; ++i) {
		var s = a[i].toLowerCase();
		var t = "";

		for (var j = 0; j < s.length; ++j) {
			if (s[j] === s[j+1]) {
				t += 'squa';
				if (v.indexOf(s[j+1]) >= 0) {
					t += 't'
				}
			} else if (s[j] in c) {
				t += c[s[j]];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}

	var r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

