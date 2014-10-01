/*jshint node:true*/
/*global describe, before, it, after*/

"use strict";

var fs = require("fs");
var path = require("path");
var colors = require("colors");
var cwd = process.cwd();

var nexpect = require("nexpect");
var grunt = require("grunt");

describe("grunt-modernizr", function () {
	it("should find all available tests in project", function (done) {
		nexpect.spawn("grunt", ["modernizr"], {
			stripColors: true,
			verbose: true
		})
		.expect('Running "modernizr:dist" (modernizr) task')

		.expect("Enabled Extras")
		.expect(">> shiv")
		.expect(">> load")
		.expect(">> cssclasses")

		.expect("Looking for Modernizr references")

		.expect("in lib/modulizr.js")
		.expect(">> testallprops")
		.expect(">> prefixed")
		.expect(">> mq")
		.expect(">> testbundle")
		.expect(">> canvas")
		.expect(">> webgl")

		.expect("in test/css/vanilla.css")
		.expect(">> canvastext")
		.expect(">> csstransforms3d")
		.expect(">> flexbox")
		.expect(">> cssgradients")
		.expect(">> opacity")
		.expect(">> indexedDB")
		.expect(">> backgroundsize")
		.expect(">> borderimage")
		.expect(">> borderradius")
		.expect(">> boxshadow")
		.expect(">> cssanimations")
		.expect(">> csscolumns")
		.expect(">> cssreflections")
		.expect(">> csstransitions")
		.expect(">> testallprops")
		.expect(">> flexboxlegacy")
		.expect(">> prefixed")
		.expect(">> csstransforms")
		.expect(">> mq")
		.expect(">> hashchange")
		.expect(">> draganddrop")
		.expect(">> generatedcontent")
		.expect(">> svg")
		.expect(">> inlinesvg")
		.expect(">> smil")
		.expect(">> svgclippaths")
		.expect(">> input")
		.expect(">> inputtypes")
		.expect(">> touch")
		.expect(">> fontface")
		.expect(">> testbundle")
		.expect(">> respond")
		.expect(">> websockets")
		.expect(">> contextmenu")
		.expect(">> emoji")
		.expect(">> json")
		.expect(">> applicationcache")
		.expect(">> audio")
		.expect(">> canvas")
		.expect(">> geolocation")
		.expect(">> history")
		.expect(">> hsla")
		.expect(">> indexeddb")
		.expect(">> localstorage")
		.expect(">> multiplebgs")
		.expect(">> postmessage")
		.expect(">> scriptdefer")
		.expect(">> sessionstorage")
		.expect(">> textshadow")
		.expect(">> rgba")
		.expect(">> video")
		.expect(">> webgl")
		.expect(">> websqldatabase")
		.expect(">> webworkers")

		.expect("in test/js/amd.js")
		.expect(">> canvastext")
		.expect(">> csstransforms3d")
		.expect(">> flexbox")
		.expect(">> cssgradients")
		.expect(">> opacity")
		.expect(">> indexedDB")
		.expect(">> backgroundsize")
		.expect(">> borderimage")
		.expect(">> borderradius")
		.expect(">> boxshadow")
		.expect(">> cssanimations")
		.expect(">> csscolumns")
		.expect(">> cssreflections")
		.expect(">> csstransitions")
		.expect(">> testallprops")
		.expect(">> flexboxlegacy")
		.expect(">> prefixed")
		.expect(">> csstransforms")
		.expect(">> mq")
		.expect(">> hashchange")
		.expect(">> draganddrop")
		.expect(">> generatedcontent")
		.expect(">> svg")
		.expect(">> inlinesvg")
		.expect(">> smil")
		.expect(">> svgclippaths")
		.expect(">> input")
		.expect(">> inputtypes")
		.expect(">> touch")
		.expect(">> fontface")
		.expect(">> testbundle")
		.expect(">> respond")
		.expect(">> websockets")
		.expect(">> contextmenu")
		.expect(">> emoji")
		.expect(">> json")
		.expect(">> applicationcache")
		.expect(">> audio")
		.expect(">> canvas")
		.expect(">> geolocation")
		.expect(">> history")
		.expect(">> hsla")
		.expect(">> indexeddb")
		.expect(">> localstorage")
		.expect(">> multiplebgs")
		.expect(">> postmessage")
		.expect(">> scriptdefer")
		.expect(">> sessionstorage")
		.expect(">> textshadow")
		.expect(">> rgba")
		.expect(">> video")
		.expect(">> webgl")
		.expect(">> websqldatabase")
		.expect(">> webworkers")

		.expect("in test/js/vanilla.js")
		.expect(">> canvastext")
		.expect(">> csstransforms3d")
		.expect(">> flexbox")
		.expect(">> cssgradients")
		.expect(">> opacity")
		.expect(">> indexedDB")
		.expect(">> backgroundsize")
		.expect(">> borderimage")
		.expect(">> borderradius")
		.expect(">> boxshadow")
		.expect(">> cssanimations")
		.expect(">> csscolumns")
		.expect(">> cssreflections")
		.expect(">> csstransitions")
		.expect(">> testallprops")
		.expect(">> flexboxlegacy")
		.expect(">> prefixed")
		.expect(">> csstransforms")
		.expect(">> mq")
		.expect(">> hashchange")
		.expect(">> draganddrop")
		.expect(">> generatedcontent")
		.expect(">> svg")
		.expect(">> inlinesvg")
		.expect(">> smil")
		.expect(">> svgclippaths")
		.expect(">> input")
		.expect(">> inputtypes")
		.expect(">> touch")
		.expect(">> fontface")
		.expect(">> testbundle")
		.expect(">> respond")
		.expect(">> websockets")
		.expect(">> contextmenu")
		.expect(">> emoji")
		.expect(">> json")
		.expect(">> applicationcache")
		.expect(">> audio")
		.expect(">> canvas")
		.expect(">> geolocation")
		.expect(">> history")
		.expect(">> hsla")
		.expect(">> indexeddb")
		.expect(">> localstorage")
		.expect(">> multiplebgs")
		.expect(">> postmessage")
		.expect(">> scriptdefer")
		.expect(">> sessionstorage")
		.expect(">> textshadow")
		.expect(">> rgba")
		.expect(">> video")
		.expect(">> webgl")
		.expect(">> websqldatabase")
		.expect(">> webworkers")

		.expect("Downloading source files")

		.wait(">> Generating a custom Modernizr build")
		.expect(">> Uglifying")

		.expect(">> Wrote file to build/modernizr-custom.js")
		.run(done);
	});
});

describe("custom builds", function () {
	var Gruntfile = path.join(cwd, "Gruntfile.js");

	var pristine = fs.readFileSync(Gruntfile);
	var gruntfiles = path.join(cwd, "test", "gruntfiles");

	describe("community tests", function () {

		before(function (done) {
			nexpect.spawn("grunt", ["clean"])
			.run(function () {
				var override = fs.readFileSync(path.join(gruntfiles, "Gruntfile.test.js"));
				fs.writeFileSync(Gruntfile, override);

				done();
			});
		});

		it("should fetch community tests", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn("grunt", ["modernizr"], {
				stripColors: true,
				verbose: true
			})
			.expect('Running "modernizr:dist" (modernizr) task')

			.expect("Enabled Extras")
			.expect(">> shiv")
			.expect(">> load")
			.expect(">> cssclasses")

			.expect("Looking for Modernizr references")

			.expect("in lib/modulizr.js")
			.expect(">> testallprops")
			.expect(">> prefixed")
			.expect(">> mq")
			.expect(">> testbundle")
			.expect(">> canvas")
			.expect(">> webgl")

			.expect("in test/css/vanilla.css")
			.expect(">> canvastext")
			.expect(">> csstransforms3d")
			.expect(">> flexbox")
			.expect(">> cssgradients")
			.expect(">> opacity")
			.expect(">> indexedDB")
			.expect(">> backgroundsize")
			.expect(">> borderimage")
			.expect(">> borderradius")
			.expect(">> boxshadow")
			.expect(">> cssanimations")
			.expect(">> csscolumns")
			.expect(">> cssreflections")
			.expect(">> csstransitions")
			.expect(">> testallprops")
			.expect(">> flexboxlegacy")
			.expect(">> prefixed")
			.expect(">> csstransforms")
			.expect(">> mq")
			.expect(">> hashchange")
			.expect(">> draganddrop")
			.expect(">> generatedcontent")
			.expect(">> svg")
			.expect(">> inlinesvg")
			.expect(">> smil")
			.expect(">> svgclippaths")
			.expect(">> input")
			.expect(">> inputtypes")
			.expect(">> touch")
			.expect(">> fontface")
			.expect(">> testbundle")
			.expect(">> respond")
			.expect(">> websockets")
			.expect(">> contextmenu")
			.expect(">> emoji")
			.expect(">> json")
			.expect(">> scriptdefer")
			.expect(">> applicationcache")
			.expect(">> audio")
			.expect(">> canvas")
			.expect(">> geolocation")
			.expect(">> history")
			.expect(">> hsla")
			.expect(">> indexeddb")
			.expect(">> localstorage")
			.expect(">> multiplebgs")
			.expect(">> postmessage")
			.expect(">> sessionstorage")
			.expect(">> textshadow")
			.expect(">> rgba")
			.expect(">> video")
			.expect(">> webgl")
			.expect(">> websqldatabase")
			.expect(">> webworkers")

			.expect("in test/js/amd.js")
			.expect(">> canvastext")
			.expect(">> csstransforms3d")
			.expect(">> flexbox")
			.expect(">> cssgradients")
			.expect(">> opacity")
			.expect(">> indexedDB")
			.expect(">> backgroundsize")
			.expect(">> borderimage")
			.expect(">> borderradius")
			.expect(">> boxshadow")
			.expect(">> cssanimations")
			.expect(">> csscolumns")
			.expect(">> cssreflections")
			.expect(">> csstransitions")
			.expect(">> testallprops")
			.expect(">> flexboxlegacy")
			.expect(">> prefixed")
			.expect(">> csstransforms")
			.expect(">> mq")
			.expect(">> hashchange")
			.expect(">> draganddrop")
			.expect(">> generatedcontent")
			.expect(">> svg")
			.expect(">> inlinesvg")
			.expect(">> smil")
			.expect(">> svgclippaths")
			.expect(">> input")
			.expect(">> inputtypes")
			.expect(">> touch")
			.expect(">> fontface")
			.expect(">> testbundle")
			.expect(">> respond")
			.expect(">> websockets")
			.expect(">> contextmenu")
			.expect(">> emoji")
			.expect(">> json")
			.expect(">> scriptdefer")
			.expect(">> csspositionsticky")
			.expect(">> applicationcache")
			.expect(">> audio")
			.expect(">> canvas")
			.expect(">> geolocation")
			.expect(">> history")
			.expect(">> hsla")
			.expect(">> indexeddb")
			.expect(">> localstorage")
			.expect(">> multiplebgs")
			.expect(">> postmessage")
			.expect(">> sessionstorage")
			.expect(">> textshadow")
			.expect(">> rgba")
			.expect(">> video")
			.expect(">> webgl")
			.expect(">> websqldatabase")
			.expect(">> webworkers")

			.expect("in test/js/vanilla.js")
			.expect(">> canvastext")
			.expect(">> csstransforms3d")
			.expect(">> flexbox")
			.expect(">> cssgradients")
			.expect(">> opacity")
			.expect(">> indexedDB")
			.expect(">> backgroundsize")
			.expect(">> borderimage")
			.expect(">> borderradius")
			.expect(">> boxshadow")
			.expect(">> cssanimations")
			.expect(">> csscolumns")
			.expect(">> cssreflections")
			.expect(">> csstransitions")
			.expect(">> testallprops")
			.expect(">> flexboxlegacy")
			.expect(">> prefixed")
			.expect(">> csstransforms")
			.expect(">> mq")
			.expect(">> hashchange")
			.expect(">> draganddrop")
			.expect(">> generatedcontent")
			.expect(">> svg")
			.expect(">> inlinesvg")
			.expect(">> smil")
			.expect(">> svgclippaths")
			.expect(">> input")
			.expect(">> inputtypes")
			.expect(">> touch")
			.expect(">> fontface")
			.expect(">> testbundle")
			.expect(">> respond")
			.expect(">> websockets")
			.expect(">> contextmenu")
			.expect(">> emoji")
			.expect(">> json")
			.expect(">> scriptdefer")
			.expect(">> csspositionsticky")
			.expect(">> applicationcache")
			.expect(">> audio")
			.expect(">> canvas")
			.expect(">> geolocation")
			.expect(">> history")
			.expect(">> hsla")
			.expect(">> indexeddb")
			.expect(">> localstorage")
			.expect(">> multiplebgs")
			.expect(">> postmessage")
			.expect(">> sessionstorage")
			.expect(">> textshadow")
			.expect(">> rgba")
			.expect(">> video")
			.expect(">> webgl")
			.expect(">> websqldatabase")
			.expect(">> webworkers")

			.expect("Downloading source files")

			.wait(">> Generating a custom Modernizr build")
			.expect(">> Uglifying")

			.expect(">> Wrote file to build/modernizr-custom.js")
			.run(done);
		});

		after(function () {
			fs.writeFileSync(Gruntfile, pristine);
		});

	});
});
