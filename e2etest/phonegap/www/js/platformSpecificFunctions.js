﻿// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

function createPlatformSpecificFunctions() {

    var alertFunction;

    alertFunction = function (text, done) {
        window.alert(text);
        if (done) {
            done();
        }
    };

    var saveAppInfo = function (lastAppUrl) {
        /// <param name="lastAppUrl" type="String">The last value used in the application URL text box</param>
        var state = {
            lastAppUrl: lastAppUrl
        };
    };

    return {
        alert: alertFunction,
        saveAppInfo: saveAppInfo,
        IsHTMLApplication: true,
    };
}

var testPlatform = createPlatformSpecificFunctions();
