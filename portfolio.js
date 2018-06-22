$(document).ready(function() {

    /* PROJECT EVENTS SECTION, LATER TRANSFORM JAVASCRIPT INTO A FUNCTION THAT CAN HANDLE THE INPUT
    FROM ALL LOGS AND SEND IT TO THE APPROPRIATE PART IN THE DOM */

    var eventLog = [{
            "date": "22-06-2018",
            "event": "Build <a style=\"color:white\" href=\"docpage.html\">Technical Documentation Page</a> about the financial report."
        }, {
            "date": "22-06-2018",
            "event": "Build <a style=\"color:white\" href=\"productlanding.html\">Product Landing Page</a> template to be used as service section on my business website"
        }, {
            "date": "11-06-2018",
            "event": "Build <a style=\"color:white\" href=\"surveyForm.html\">Survey Form</a> template to be used as part of my BSc thesis in finance and accounting"
        }, {
            "date": "23-05-2018",
            "event": "Start website " + "<a style=\"color:white\" href=\"hq-fs.html\">Hacquebord Financial Services</a>"
        },

        {
            "date": "16-05-2018",
            "event": "Set-up this website"
        },

        {
            "date": "12-05-2018",
            "event": "Build <a style=\"color:white\" href=\"https://codepen.io/hq_coder/full/gzKOQL/\">Martin Luther King</a> tribute page"
        }

    ];



    console.log(eventLog);



    var logNum = [];
    var evenOdd;
    for (var i = 0; i < eventLog.length; i++) {
        if (i === 0) {
            evenOdd = "even";
            logNum.push(evenOdd);
        } else if (i % 2 === 0) {
            evenOdd = "even";
            logNum.push(evenOdd);
        } else {
            evenOdd = "odd";
            logNum.push(evenOdd);
        }
    };
    console.log(logNum);

    var logId;
    for (var i = logNum.length - 1; i >= 0; i--) {
        if (logNum[i] === "even") {
            logId = "log" + i;
            $('#' + logId).addClass("bg-secondary");
            $('#' + logId).html(eventLog[(logNum.length - 1) - i].date + " --> " +
                eventLog[(logNum.length - 1) - i].event);
        } else {
            logId = "log" + i;
            $('#' + logId).addClass('bg1');
            $('#' + logId).html(eventLog[(logNum.length - 1) - i].date + " --> " +
                eventLog[(logNum.length - 1) - i].event);
        }


    };
    console.log(logId);
    console.log(logNum.length - 1);


    /* TECHNICAL EVENTS SECTION, LATER TRANSFORM JAVASCRIPT INTO A FUNCTION THAT CAN HANDLE THE INPUT
    FROM ALL LOGS AND SEND IT TO THE APPROPRIATE PART IN THE DOM */
    var techLog = [{
            "date": "02-06-2018",
            "event": "Layout --> Color on hover on navigation menu changed from white to blue. Seperated event log" +
                " from tech log to show difference between events and technical changes. Technical changes aren't really" +
                " events. However technical changes can be important to keep track of and also show the development of" +
                " this website."
        }, {
            "date": "30-05-2018",
            "event": "Logpage now adds events with JavaScript code. Future goal for this section will be the ability to " +
                "submit events directly through the website instead of by editing the JavaScript objects itself. " +
                "The background color for each event depends on the index number of the array, 'even' numbers get the " +
                "Bootstrap 4 'bg-secondary' background class and odd numbers get blue as color. " +
                "Added buttons for future form that will allow for data entry, editing and deleting."
        }, {

            "date": "29-05-2018",
            "event": "Add event/build log section to this website under 'development'"
        }

    ];



    console.log(techLog);



    var logNum2 = [];
    var evenOdd2;
    for (var i = 0; i < techLog.length; i++) {
        if (i === 0) {
            evenOdd2 = "even";
            logNum2.push(evenOdd2);
        } else if (i % 2 === 0) {
            evenOdd2 = "even";
            logNum2.push(evenOdd2);
        } else {
            evenOdd2 = "odd";
            logNum2.push(evenOdd2);
        }
    };
    console.log(logNum2);

    var logId2;
    for (var i = logNum2.length - 1; i >= 0; i--) {
        if (logNum2[i] === "even") {
            logId2 = "tech" + i;
            $('#' + logId2).addClass("bg-secondary");
            $('#' + logId2).html(techLog[(logNum2.length - 1) - i].date + " --> " +
                techLog[(logNum2.length - 1) - i].event);
        } else {
            logId2 = "tech" + i;
            $('#' + logId2).addClass('bg1');
            $('#' + logId2).html(techLog[(logNum2.length - 1) - i].date + " --> " +
                techLog[(logNum2.length - 1) - i].event);
        }


    };
    console.log(logId2);
    console.log(logNum2.length - 1);


});