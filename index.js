var shell = shell || {};
var nameSpace = shell || {};

(function() {
    "use strict";

    ///////////////
    // VARIABLES //
    ///////////////

    // control variables
    var timeline;
    var _wrapper;
    var _clickThrough;
    var _clickTagUrl;
    var _uid;

    // image variables
    var _frame1Bg;
    var _frame2Bg;
    var _frame3Bg;
    var _logo;

    // copy + style variables
    var _frame1Copy, _frame1CopyStyle;
    var _frame2Copy, _frame2CopyStyle;
    var _frame3Copy, _frame3CopyStyle;
    var _ctaCopy, _ctaCopyStyle;

    ///////////////
    // FUNCTIONS //
    ///////////////

    // INIT
    nameSpace.init = function() {
        _wrapper = document.getElementById('wrapper');
        _clickThrough = document.getElementById('click_through');

        nameSpace.IDsToVars();
        nameSpace.buildDynamicContent();
        nameSpace.initClickTag();
        nameSpace.initAnimation();
        nameSpace.startAnimation();
    };

    // CONTENT
    nameSpace.buildDynamicContent = function() {

        // dynamic content code from studio
         Enabler.setProfileId(10956064);
        var devDynamicContent = {};

        devDynamicContent.syakirahTraining_feed_Sheet = [{}];
        devDynamicContent.syakirahTraining_feed_Sheet[0]._id = 0;
        devDynamicContent.syakirahTraining_feed_Sheet[0].uniqueID = 1001;
        devDynamicContent.syakirahTraining_feed_Sheet[0].reportingLabel = "LR_NA_NA_300x250";
        devDynamicContent.syakirahTraining_feed_Sheet[0].isDefault = false;
        devDynamicContent.syakirahTraining_feed_Sheet[0].isActive = true;
        devDynamicContent.syakirahTraining_feed_Sheet[0].startDate = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].startDate.RawValue = "1/1/2026";
        devDynamicContent.syakirahTraining_feed_Sheet[0].startDate.UtcValue = 1767254400000;
        devDynamicContent.syakirahTraining_feed_Sheet[0].endDate = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].endDate.RawValue = "2/2/2026";
        devDynamicContent.syakirahTraining_feed_Sheet[0].endDate.UtcValue = 1770019200000;
        devDynamicContent.syakirahTraining_feed_Sheet[0].weight = 100;
        devDynamicContent.syakirahTraining_feed_Sheet[0].audience = "LR";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Bg = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Bg.Type = "file";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/99685619/dirty/frame1Bg.jpg";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Copy = "Express you love";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Bg = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Bg.Type = "file";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/99685724/dirty/syakirahTraining/frame2Bg.jpg";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Copy = "Enjoy";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Bg = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Bg.Type = "file";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/99685730/dirty/syakirahTraining/frame3Bg.jpg";
        devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Copy = "Run to Korea";
        devDynamicContent.syakirahTraining_feed_Sheet[0].logo = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].logo.Type = "file";
        devDynamicContent.syakirahTraining_feed_Sheet[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/79782078/dirty/frameLogo.png";
        devDynamicContent.syakirahTraining_feed_Sheet[0].ctaCopy = "See more";
        devDynamicContent.syakirahTraining_feed_Sheet[0].uid = "1001";
        devDynamicContent.syakirahTraining_feed_Sheet[0].ctaURL = {};
        devDynamicContent.syakirahTraining_feed_Sheet[0].ctaURL.Url = "https://www.google.com";
        Enabler.setDevDynamicContent(devDynamicContent);


        // Assign to base variables
        _uid = devDynamicContent.syakirahTraining_feed_Sheet[0].uid;
        _clickTagUrl = devDynamicContent.syakirahTraining_feed_Sheet[0].ctaURL.Url;

        // Assign to local image
        _frame1Bg = devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Bg.Url;
        _frame2Bg = devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Bg.Url;
        _frame3Bg = devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Bg.Url;
        _logo = devDynamicContent.syakirahTraining_feed_Sheet[0].logo.Url;

        //Assign to local copy
        _frame1Copy = devDynamicContent.syakirahTraining_feed_Sheet[0].frame1Copy;
        _frame1CopyStyle = devDynamicContent.syakirahTraining_feed_Sheet[0].frame1CopyStyle;
        _frame2Copy = devDynamicContent.syakirahTraining_feed_Sheet[0].frame2Copy;
        _frame2CopyStyle = devDynamicContent.syakirahTraining_feed_Sheet[0].frame2CopyStyle;
        _frame3Copy = devDynamicContent.syakirahTraining_feed_Sheet[0].frame3Copy;
        _frame3CopyStyle = devDynamicContent.syakirahTraining_feed_Sheet[0].frame3CopyStyle;
        _ctaCopy = devDynamicContent.syakirahTraining_feed_Sheet[0].ctaCopy;
        _ctaCopyStyle = devDynamicContent.syakirahTraining_feed_Sheet[0].ctaCopyStyle;

        //Insert image to dom
        nameSpace.insertImage(frame1Bg, _frame1Bg, true);
        nameSpace.insertImage(frame2Bg, _frame2Bg, true);
        nameSpace.insertImage(frame3Bg, _frame3Bg, true);
        nameSpace.insertImage(logo, _logo, true);

        //insert copy to dom
        nameSpace.insertCopy(frame1Copy, _frame1Copy, _frame1CopyStyle);
        nameSpace.insertCopy(frame2Copy, _frame2Copy, _frame2CopyStyle);
        nameSpace.insertCopy(frame3Copy, _frame3Copy, _frame3CopyStyle);
        nameSpace.insertCopy(ctaCopy, _ctaCopy, _ctaCopyStyle);
    }

    // CLICK TAG & CUSTOM VARIABLE REPORTING
    nameSpace.initClickTag = function() {
        // custom impression reporting
        nameSpace.sendCustomReportingVariable();

        _clickThrough.onclick = function() {
            // custom click reporting
            nameSpace.sendCustomClickVariable();

            Enabler.exitOverride("Background Exit", _clickTagUrl);
        };
    };

    // ANIMATTION SETUP
    nameSpace.initAnimation = function() {

        // create animation timeline
        timeline = new TimelineMax({
            delay: 0.2,
            paused: true,
            onComplete: nameSpace.onAnimationComplete
        });

        // set initial keyframes
        // timeline.set([frame1Bg, frame2Bg, frame3Bg, frame1Copy, frame2Copy, frame3Copy, ctaCopy, logo], { alpha: 0 });

        // add animation keyframes
        timeline.add([
            TweenMax.to(frame1Bg, 0.5, { alpha: 1.0 }),
            TweenMax.to(frame1Copy, 0.5, { alpha: 1.0 }),
            TweenMax.to(frame2Bg, 0.5, { alpha: 1.0, delay: 3.0 }),
            TweenMax.to(frame2Copy, 0.5, { alpha: 1.0, delay: 3.0 }),
            TweenMax.to(frame3Bg, 0.5, { alpha: 1.0, delay: 6.0 }),
            TweenMax.to(frame3Copy, 0.5, { alpha: 1.0, delay: 6.0 }),
            TweenMax.to(logo, 1.0, { alpha: 1.0, delay: 8.0 }),
            TweenMax.to(ctaCopy, 1.0, { alpha: 1.0, delay: 8.5 }),
        ]);
    };

    // ANIMATION START
    nameSpace.startAnimation = function() {
        // Display DOM
        wrapper.className = 'show';
        // Play timeline
        timeline.play();
    };

    // ANIMATION COMPLETE
    nameSpace.onAnimationComplete = function() {
        // log duration of timeline
        console.log('Animation Duration: ' + timeline.time() + 's');
    };

    ///////////////
    // REPORTING //
    ///////////////

    // BUILD & FIRE CUSTOM IMPRESSION VARIABLE
    nameSpace.sendCustomReportingVariable = function() {
        var _report = _uid + "_IMP";
        Enabler.reportCustomVariableCount1(_report);
        console.log("CUSTOM VARIABLE (IMPRESSION) : " + _report);
    }

    // BUILD & FIRE CUSTOM CLICK VARIABLE
    nameSpace.sendCustomClickVariable = function() {
        var _report = _uid + "_CLK";
        Enabler.reportCustomVariableCount2(_report);
        console.log("CUSTOM VARIABLE (CLICK) : " + _report);
    }

    /////////////
    // HELPERS //
    /////////////

    // INSERT COPY TO DOM & SET STYLE
    nameSpace.insertCopy = function(_target, _copy, _style) {
        var style_obj = eval("({" + _style + "})");
        var _c = _copy;

        _target.innerHTML = _c;

        for (var key in style_obj) {
            // if(key === 'posX'){
            //   TweenMax.set(_target, {x:style_obj.posX});
            // }

            // if(key === 'posY'){
            //   TweenMax.set(_target, {y:style_obj.posY});
            // }

            // if(key === 'fontSize'){
            //    _target.style.fontSize = style_obj.fontSize + "px";
            // }

            // if(key === 'lineHeight'){

            //   _target.style.lineHeight = style_obj.lineHeight + "px";
            // }

            // if(key === 'padTop'){
            //   _target.style.paddingTop = style_obj.padTop + 'px';
            // }

            // if(key === 'letterSpacing'){
            //   _target.style.letterSpacing = style_obj.letterSpacing + 'px';
            // }
        }
    }

    // INSERT IMAGES TO DOM
    nameSpace.insertImage = function(_target, _img, _isBackground) {
        if (_isBackground === true) {
            _target.style.backgroundSize = 'cover';
            _target.style.backgroundImage = "url('" + _img + "')";
        } else {
            _target.innerHTML = '<img src="' + _img + '" />';
        }
    };

    // CALL DOM ELEMENTS
    nameSpace.IDsToVars = function() {
        var allElements = document.getElementsByTagName("*");

        for (var q = 0; q < allElements.length; q++) {
            var el = allElements[q];

            if (el.id) {
                window[el.id] = document.getElementById(el.id);
                el.style.position = "absolute";
            }
        }
    };

})();