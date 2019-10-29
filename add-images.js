/*
   The following script places a button at the top of lists of historic sites on many registers around the world.
   When the button is clicked, the script looks on Commons to find images and categories linked to each site's unique ID
   and allows the user to choose to add them to the entries on the list.
*/

// global vars
var thiswikitext = ""
var Rows = [];
var HTMLRows = [];
var Matches = [];
var FileMatches = [];
var FileSuggestions = [];
var refnum = [];
var currentRow = 0;
var MatchesFound = false;
var InvalidCatImage = false;
var CheckImagesOnly = false;
var globvars = mw.config.get([
    'wgPageName',
    'wgNamespaceNumber',
    'wgContentLanguage',
    'wgUserLanguage'
]);


mw.loader.load('//en.wikipedia.org/w/index.php?title=User:Dudemanfellabra/AddCommonsCatLinks/SupportedRegisters.js&action=raw&ctype=text/javascript', 'text/javascript');

function FindCommonsCatButton() {
    if (location.href.indexOf('action') != -1 || location.href.indexOf('.js') != -1 || globvars.wgNamespaceNumber == 10 || globvars.wgNamespaceNumber == 11) {
        return;
    }
    if (!RegisterTable[globvars.wgContentLanguage]) {
        return;
    }
    if (document.getElementById('commonsbutton') != null) {
        return; // prevent from running multiple instances if installed globally
    }

    thiswikitext = getThisWikitext(globvars.wgPageName);
    if (thiswikitext == "error" || thiswikitext == "") {
        return;
    }

    // don't match rows inside nowiki or pre tags
    var testtext = thiswikitext.replace(/<[ ]*?(nowiki|pre)[ ]*?>(.|\n)*?<[ ]*?\/[ ]*?(nowiki|pre)[ ]*?>/gi, "");
    var match = 0;
    for (var r in RegisterTable[globvars.wgContentLanguage]) {
        var regex = new RegExp("{{[\\s]*" + RegisterTable[globvars.wgContentLanguage][r].RowTemplate + "(\\s)*\\|", "g");
        if (testtext.search(regex) != -1) {
            match++;
        }
    }
    if (match == 0) {
        return;
    }

    if (!GUIMessages[globvars.wgUserLanguage]) { // default to contentLanguage GUI if userLanguage is not yet supported
        if (!GUIMessages[globvars.wgContentLanguage]) { // English if both not yet supported
            ThisGUIMessages = GUIMessages["en"];
        } else {
            ThisGUIMessages = GUIMessages[globvars.wgContentLanguage];
        }
    } else {
        ThisGUIMessages = GUIMessages[globvars.wgUserLanguage];
    }

    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", ThisGUIMessages.ButtonText);
    button.setAttribute("id", "commonsbutton");
    button.setAttribute("onclick", "CommonsClick()");

    var button2 = document.createElement("input")
    button2.setAttribute("type", "button");
    button2.setAttribute("value", ThisGUIMessages.ImageOnlyText);
    button2.setAttribute("id", "commonsbutton2");
    button2.setAttribute("onclick", "CommonsClick2()");

    var content = document.getElementById('mw-content-text');
    content.parentNode.insertBefore(button, content);
    content.parentNode.insertBefore(button2, content);
}

function CommonsClick2() {
    CheckImagesOnly = true;
    CommonsClick();
}

function CommonsClick() {
    var button = document.getElementById('commonsbutton');
    button.disabled = true;
    var button2 = document.getElementById('commonsbutton2');
    button2.disabled = true;

    var ProgressDiv = document.createElement("div");
    ProgressDiv.setAttribute("id", "ProgressDiv");
    ProgressDiv.setAttribute("style", "width:500px; border:5px solid black; padding:5px; position:fixed; background:#ffffff; z-index:100");
    ProgressDiv.style.left = "200px";
    ProgressDiv.style.top = "5px";
    commonsbutton.parentNode.insertBefore(ProgressDiv, commonsbutton);

    if (!GUIMessages[globvars.wgUserLanguage] && !GUIMessages[globvars.wgContentLanguage]) {
        ProgressDiv.innerHTML = "Preferred language (" + LanguageTable[globvars.wgUserLanguage].name + "/" + LanguageTable[globvars.wgUserLanguage].nativeName + ") unavailable. Defaulting to English. <small>(If you can help translate, <a href='//en.wikipedia.org/w/index.php?title=User_talk:Dudemanfellabra&action=edit&section=new&preloadtitle=I+can+help+translate+the+CommonsCat+script+into+" + LanguageTable[globvars.wgUserLanguage].name + "!'>let me know!</a>)</small><br>" + ThisGUIMessages.CheckingMatches + " ";
    } else {
        ProgressDiv.innerHTML = ThisGUIMessages.CheckingMatches + " ";
    }
    window.onbeforeunload = OnBeforeUnLoad;
    FindRows();
}

function FindRows() {
    var AllHTMLRows = document.getElementsByTagName("tr");
    for (var i = 0; i < AllHTMLRows.length; i++) {
        if (AllHTMLRows[i].className.indexOf("vcard") != -1 || AllHTMLRows[i].className.search(/with(out)?_image/g) != -1) {
            HTMLRows.push(AllHTMLRows[i]);
        }
    }

    var str = "{{";
    var start = 0;
    var commentstart = 0;
    while (true) {
        commentstart = thiswikitext.indexOf("<!--", start);
        start = thiswikitext.indexOf(str, start);
        if (start == -1) {
            break;
        }
        while (commentstart < start && commentstart != -1) {
            start = thiswikitext.indexOf("-->", commentstart);
            commentstart = thiswikitext.indexOf("<!--", start);
            start = thiswikitext.indexOf(str, start);
        }
        if (start == -1) {
            break
        }
        var open = 1;
        var index = start + str.length;
        while (open != 0 && index < thiswikitext.length) {
            if (thiswikitext.substr(index, 2) == "}}") {
                open--;
                index++;
            } else if (thiswikitext.substr(index, 2) == "{{") {
                open++;
                index++;
            }
            index++;
        }
        var template = thiswikitext.substr(start, index - start);
        for (var r in RegisterTable[globvars.wgContentLanguage]) {
            var regex = new RegExp("{{[\\s]*" + RegisterTable[globvars.wgContentLanguage][r].RowTemplate + "(\\s)*\\|", "g");
            if (template.match(regex) != null) {
                Rows[Rows.length] = [template, r];
                break;
            }
        }
        start++;
    }
    for (var i = 0; i < Rows.length; i++) { // get rid of false positives inside nowiki or pre tags
        var regex = new RegExp("<[ ]*?(nowiki|pre)[ ]*?>((?!<[ ]*?/[ ]*?(nowiki|pre)[ ]*?>)(.|\\n))*?" + Rows[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + "(.|\\n)*?<[ ]*?/[ ]*?(nowiki|pre)[ ]*?>", "g");
        if (thiswikitext.match(regex) != null) {
            Rows.splice(i, 1);
            i--;
        }
    }
    if (Rows.length != HTMLRows.length) {
        var unverified = false;
        for (var i = 0; i < Rows.length; i++) {
            if (RegisterTable[globvars.wgContentLanguage][Rows[i][1]].Unverified) {
                unverified = true
            }
        }
        if (unverified) {
            alert(ThisGUIMessages.RowMismatch); // if at least one template unverified, could be a vcard error
        } else {
            alert(ThisGUIMessages.MalformedRow); // if not, probably malformed row
        }
        window.onbeforeunload = function() {};
        setTimeout(function() {
            ProgressDiv.parentNode.removeChild(ProgressDiv);
        }, 10000);
        return;
    }
    currentRow = 0;
    CheckRow();
}

function CheckRow() {
    var ProgressDiv = document.getElementById("ProgressDiv");
    InvalidCatImage = false;
    if (!GUIMessages[globvars.wgUserLanguage] && !GUIMessages[globvars.wgContentLanguage]) {
        ProgressDiv.innerHTML = "Preferred language (" + LanguageTable[globvars.wgUserLanguage].name + "/" + LanguageTable[globvars.wgUserLanguage].nativeName + ") unavailable. Defaulting to English. <small>(If you can help translate, <a href='//en.wikipedia.org/w/index.php?title=User_talk:Dudemanfellabra&action=edit&section=new&preloadtitle=I+can+help+translate+the+CommonsCat+script+into+" + LanguageTable[globvars.wgUserLanguage].name + "!'>let me know!</a>)</small><br>" + ThisGUIMessages.CheckingMatches + " ";
    } else {
        ProgressDiv.innerHTML = ThisGUIMessages.CheckingMatches + " ";
    }
    if (currentRow == Rows.length) {
        if (MatchesFound) {
            if (!GUIMessages[globvars.wgContentLanguage]) { // edit summary defaults to content language if available
                if (!GUIMessages[globvars.wgUserLanguage]) { // if not, it falls back to user preferred language
                    var summary = GUIMessages["en"].EditSummary; // if neither, English
                } else {
                    var summary = GUIMessages[globvars.wgUserLanguage].EditSummary;
                }
            } else {
                var summary = GUIMessages[globvars.wgContentLanguage].EditSummary;
            }
            editPageWithCommonsCat({
                title: globvars.wgPageName,
                text: thiswikitext,
                summary: summary
            });
        } else {
            ProgressDiv.innerHTML += ThisGUIMessages.NoneFound;
            window.onbeforeunload = function() {};
            setTimeout(function() {
                ProgressDiv.parentNode.removeChild(ProgressDiv)
            }, 10000);
        }
        return;
    }
    HTMLRows[currentRow].scrollIntoView(); // highlight current row
    window.scrollBy(0, -10 - ProgressDiv.offsetHeight);
    ThisRegisterTable = RegisterTable[globvars.wgContentLanguage][Rows[currentRow][1]];

    Matches = [];
    FileMatches = [];
    FileSuggestions = [];
    refnum = [];
    var tempRow = Rows[currentRow][0];
    tempRow = tempRow.replace(/\<\!\-\-(.|[\r\n])*?\-\-\>/g, ""); // remove commented out parameters
    var HasImage = false;
    var HasCommonsCat = false;
    if (typeof ThisRegisterTable.IdentifierName == 'string') {
        ThisRegisterTable.IdentifierName = [ThisRegisterTable.IdentifierName];
    }
    for (var j = 0; j < ThisRegisterTable.IdentifierName.length; j++) {
        var regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.IdentifierName[j] + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
        var temprefnum = tempRow.match(regex);
        if (temprefnum == null) {
            if (ThisRegisterTable.IdentifierName[j] == "bygningsnr") { // special case for Denmark listed buildings in Danish where the
                temprefnum = ["|bygningsnr=1"]; // parameter "bygningsnr" has default value "1" if not specified
            } else {
                continue
            }
        }
        temprefnum = temprefnum[0];
        regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.IdentifierName[j] + "[ ]*?=", "g");
        temprefnum = temprefnum.replace(regex, "").trim().split(/\s*,\s*/);
        for (var k = 0; k < temprefnum.length; k++) {
            if (temprefnum[k] != "") {
                refnum.push(temprefnum[k]);
            }
        }
    }
    if (ThisRegisterTable.CombineIdentifiers == true) { // Some countries have multiple fields joined together
        refnum = [refnum.join(ThisRegisterTable.CombineWith)];
    }
    for (var j = 0; j < refnum.length; j++) {
        if (refnum[j].length < 8) {
            refnum[j] = "00000000" + refnum[j]; // identifiers with less than 8 digits are padded left with zeroes
            refnum[j] = refnum[j].substr(refnum[j].length - 8, 8);
        }
    }

    if (typeof ThisRegisterTable.PropertyNameParam == 'string') {
        ThisRegisterTable.PropertyNameParam = [ThisRegisterTable.PropertyNameParam];
    }

    var j = 0;
    while (j < ThisRegisterTable.PropertyNameParam.length) {
        var regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.PropertyNameParam[j] + "[ ]*?=.*?((\\[\\[.*?]]|\\{\\{(.|\\n)*?}}|<[ ]*?ref(.|\\n)*?(<[ ]*?)?/[ ]*?(ref)?[ ]*?>).*?)*(?=(\\n|\\||}}))", "g");
        var name = tempRow.match(regex);
        if (name != null) {
            name = name[0];
            break;
        } else {
            j++;
        }
    }
    if (name == null) {
        name = ""
    }

    regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.PropertyNameParam + "[ ]*?=", "g");
    name = name.replace(regex, "").replace(/(<[ ]*?)?ref(.|\n)*?<[ ]*?\/[ ]*?(ref)?[ ]*?>/g, "").replace(/\[\[.*?\|(.*?)]]/g, "$1").trim();

    regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
    var commonscat = tempRow.match(regex);
    if (commonscat != null) {
        regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=", "g");
        commonscat = commonscat[0].replace(regex, "").trim();
        if (commonscat != "") {
            HasCommonsCat = true; // only true if commonscat param there and non-blank
        }
    }
    regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.ImageParam + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
    var image = tempRow.match(regex);
    if (image != null) {
        regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.ImageParam + "[ ]*?=", "g");
        image = image[0].replace(regex, "").trim();
        if (image != "") {
            HasImage = true; // only true if image param there and non-blank
        }
    }
    ValidateExistingCatImage(name, commonscat, image, HasCommonsCat, HasImage);
}

function ValidateExistingCatImage(name, commonscat, image, HasCommonsCat, HasImage) {
    var titles = "";
    if (HasImage) {
        titles += "|File:" + image;
    }
    if (HasCommonsCat) {
        titles += "|Category:" + commonscat;
    }
    if (titles == "") { // if neither cat nor image, check for matches
        var temprefnum = [];
        for (var i = 0; i < refnum.length; i++) {
            temprefnum[i] = refnum[i];
        }
        CheckForMatches(name, temprefnum, HasCommonsCat, HasImage);
        return;
    }

    // if we're here, must be either cat or image or both
    titles = titles.substr(1, titles.length - 1); // remove leading pipe

    $.ajax({ // see if existing cat/image actually exists
        url: '//commons.wikimedia.org/w/api.php?action=query&prop=info&format=json&titles=' + encodeURIComponent(titles),
        data: {
            format: 'json'
        },
        dataType: 'jsonp',
        success: function(CommonsCatjsonObject) {
            ValidationComplete(CommonsCatjsonObject, name, HasCommonsCat, HasImage)
        }
    });
}

function ValidationComplete(CommonsCatjsonObject, name, HasCommonsCat, HasImage) {
    for (var p in CommonsCatjsonObject.query.pages) {
        if (typeof CommonsCatjsonObject.query.pages[p].missing != "undefined") {
            if (CommonsCatjsonObject.query.pages[p].ns == 14) {
                HasCommonsCat = false;
                InvalidCatImage = true;
            }
            if (CommonsCatjsonObject.query.pages[p].ns == 6) {
                HasImage = false;
                InvalidCatImage = true;
            }
        }
    }

    if (!HasCommonsCat || !HasImage) {
        var temprefnum = [];
        for (var i = 0; i < refnum.length; i++) {
            temprefnum[i] = refnum[i];
        }
        CheckForMatches(name, temprefnum, HasCommonsCat, HasImage);
    } else {
        currentRow++;
        CheckRow(currentRow); // if already has both commonscat and image, skip
    }
}

function CheckForMatches(name, temprefnum, HasCommonsCat, HasImage) {
    if (refnum.length == 0) {
        if (Matches.length == 0 && FileMatches.length == 0 && FileSuggestions.length == 0) {
            currentRow++;
            CheckRow(currentRow); // skip if no matches found
        } else {
            ChooseCat(name, temprefnum);
        }
        return;
    }
    var sortkey = " " + refnum[0].replace(/\?/g, ""); // strip question marks used as placeholders.. code breaks without this
    if (!HasCommonsCat && !CheckImagesOnly) { // won't query cats if only checking images
        $.ajax({
            url: '//commons.wikimedia.org/w/api.php?action=query&list=categorymembers&format=json&cmtitle=' + ThisRegisterTable.TopCatName + '&cmprop=title|sortkeyprefix&cmtype=subcat&cmlimit=max&cmsort=sortkey&cmstartsortkeyprefix=' + sortkey + '&cmendsortkeyprefix=' + sortkey + '0',
            data: {
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(CommonsCatjsonObject) {
                GotCats(CommonsCatjsonObject, name, temprefnum, sortkey, HasCommonsCat, HasImage)
            }
        });
    } else {
        GotCats({
            "query": {
                "categorymembers": []
            }
        }, name, temprefnum, sortkey, HasCommonsCat, HasImage);
    }
}

function GotCats(CommonsCatjsonObject, name, temprefnum, sortkey, HasCommonsCat, HasImage) {
    for (var c in CommonsCatjsonObject.query.categorymembers) {
        var title = CommonsCatjsonObject.query.categorymembers[c].title.replace("Category:", "");
        Matches[Matches.length] = [title, refnum[0]];
    }

    if (!HasImage) {
        $.ajax({
            url: '//commons.wikimedia.org/w/api.php?action=query&list=categorymembers&format=json&cmtitle=' + ThisRegisterTable.TopCatName + '&cmprop=title|sortkeyprefix&cmtype=file&cmlimit=max&cmsort=sortkey&cmstartsortkeyprefix=' + sortkey + '&cmendsortkeyprefix=' + sortkey + '0',
            data: {
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(CommonsCatjsonObject) {
                GotFiles(CommonsCatjsonObject, name, temprefnum, HasCommonsCat, HasImage);
            }
        });
    } else {
        GotFiles({
            "query": {
                "categorymembers": []
            }
        }, name, temprefnum, HasCommonsCat, HasImage);
    }
}

function GotFiles(CommonsCatjsonObject, name, temprefnum, HasCommonsCat, HasImage) {
    for (var c in CommonsCatjsonObject.query.categorymembers) {
        var title = CommonsCatjsonObject.query.categorymembers[c].title.replace("File:", "");
        FileMatches[FileMatches.length] = [title, refnum[0]];
    }
    if (!HasImage && HasCommonsCat && refnum.length == 1) {
        var regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
        var commonscat = Rows[currentRow][0].match(regex);
        regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=", "g");
        commonscat = commonscat[0].replace(regex, "").replace(/\<\!\-\-(.|[\r\n])*?\-\-\>/g, "").trim();
        commonscat = [commonscat]; // make array to allow compatibility with multiple matched categories below
        $.ajax({
            url: '//commons.wikimedia.org/w/api.php?action=query&list=categorymembers&format=json&cmtitle=Category:' + commonscat[0].replace(/ /g, "_") + '&cmprop=title&cmtype=file&cmlimit=max',
            data: {
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(CommonsCatjsonObject) {
                GotSuggestedFiles(CommonsCatjsonObject, name, commonscat, temprefnum, HasCommonsCat, HasImage)
            }
        });
    } else if (!HasImage && Matches.length != 0 && refnum.length == 1) {
        var commonscat = [];
        for (var i = 0; i < Matches.length; i++) {
            commonscat.push(Matches[i][0]);
        }
        $.ajax({
            url: '//commons.wikimedia.org/w/api.php?action=query&list=categorymembers&format=json&cmtitle=Category:' + commonscat[0].replace(/ /g, "_") + '&cmprop=title&cmtype=file&cmlimit=max',
            data: {
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(CommonsCatjsonObject) {
                GotSuggestedFiles(CommonsCatjsonObject, name, commonscat, temprefnum, HasCommonsCat, HasImage);
            }
        });
    } else {
        refnum.splice(0, 1);
        CheckForMatches(name, temprefnum, HasCommonsCat, HasImage); // check next refnum
    }
}

function GotSuggestedFiles(CommonsCatjsonObject, name, commonscat, temprefnum, HasCommonsCat, HasImage) {
    for (var c in CommonsCatjsonObject.query.categorymembers) {
        var title = CommonsCatjsonObject.query.categorymembers[c].title.replace("File:", "");
        FileSuggestions[FileSuggestions.length] = [title, commonscat[0]];
    }
    if (commonscat.length != 1) {
        commonscat.splice(0, 1);
        $.ajax({
            url: '//commons.wikimedia.org/w/api.php?action=query&list=categorymembers&format=json&cmtitle=Category:' + commonscat[0].replace(/ /g, "_") + '&cmprop=title&cmtype=file&cmlimit=max',
            data: {
                format: 'json'
            },
            dataType: 'jsonp',
            success: function(CommonsCatjsonObject) {
                GotSuggestedFiles(CommonsCatjsonObject, name, commonscat, temprefnum, HasCommonsCat, HasImage);
            }
        });
    } else {
        refnum.splice(0, 1)
        CheckForMatches(name, temprefnum, HasCommonsCat, HasImage); // check next refnum
    }
}

var arrows = "";
var scrolled = false; // global vars for scrolling mechanism

function isOnScreen(elem) {
    if (elem != null) {
        var height = $(window).height();
        var elemTop = elem.getBoundingClientRect().top;
        var elemBot = elemTop + elem.offsetHeight;

        if (elemBot < 0) {
            return "up";
        } else if (elemTop > height) {
            return "down";
        } else {
            return "onscreen";
        }
    } else {
        return false;
    }
}

function ChooseCat(name, temprefnum) {
    var ProgressDiv = document.getElementById("ProgressDiv");
    if (InvalidCatImage) {
        ProgressDiv.innerHTML += ThisGUIMessages.Invalid;
        InvalidCatImage = false;
    } else {
        ProgressDiv.innerHTML += ThisGUIMessages.Found;
    }
    var span = document.createElement("span");
    ProgressDiv.appendChild(span);
    window.onscroll = function() {
        scrolled = true;
    }
    arrows = setInterval(function() {
        if (scrolled) {
            scrolled = false;
            var direction = isOnScreen(document.getElementById("overlay"))
            if (direction == "up") {
                span.innerHTML = " <a href='#overlay' onclick='setTimeout(function(){window.scrollBy(0,-10-document.getElementById(\"ProgressDiv\").offsetHeight)},50)'>&#8593;</a>"; // up arrow
            } else if (direction == "down") {
                span.innerHTML = " <a href='#overlay' onclick='setTimeout(function(){window.scrollBy(0,-10-document.getElementById(\"ProgressDiv\").offsetHeight)},50)'>&#8595;</a>"; // down arrow
            } else {
                span.innerHTML = "";
            }
        }
    }, 250);

    for (var j = 0; j < FileMatches.length; j++) {
        for (var k = 0; k < FileSuggestions.length; k++) {
            if (FileMatches[j][0] == FileSuggestions[k][0]) {
                FileSuggestions.splice(k, 1);
                k--;
            } // don't suggest file if already matched
        }
    }

    if (FileMatches.length > 0) {
        var done = "no"
        var loops = 0;
        var toQuery = FileMatches.length;
        while (done == "no") {
            if (toQuery > 20) {
                var TempFileMatches = FileMatches.slice(20 * loops, 20 * (loops + 1));
            } else {
                var TempFileMatches = FileMatches.slice(20 * loops);
            }
            var FileTitleStr = "File:" + TempFileMatches[0][0];
            for (var j = 1; j < TempFileMatches.length; j++) {
                FileTitleStr += "|File:" + TempFileMatches[j][0];
            }
            var URLs = JSON.parse( // get URLs of images to display
                $.ajax({
                    dataType: "json",
                    url: mw.util.wikiScript('api'),
                    data: {
                        format: 'json',
                        action: 'query',
                        prop: 'imageinfo',
                        iiprop: 'url',
                        iiurlwidth: '100',
                        titles: FileTitleStr
                    },
                    async: false
                })
                .responseText
            );
            for (var p in URLs.query.pages) {
                for (var j = 0; j < FileMatches.length; j++) {
                    if (URLs.query.pages[p].title.replace(/^.*?:/, "") == FileMatches[j][0]) {
                        for (var k in URLs.query.pages[p].imageinfo) {
                            if (!URLs.query.pages[p].imageinfo[k].thumberror) {
                                FileMatches[j].push(URLs.query.pages[p].imageinfo[k].thumburl);
                            }
                        }
                    }
                }
            }
            if (toQuery > 20) {
                toQuery = toQuery - 20;
                loops++;
            } else {
                done = "yes";
            }
        }
        for (var j = 0; j < FileMatches.length; j++) {
            if (FileMatches[j].length < 3) {
                FileMatches.splice(j, 1);
                j--;
            } // get rid of files where fetching thumbnails failed
        }
    }
    if (FileSuggestions.length > 0) {
        var done = "no";
        var loops = 0;
        var toQuery = FileSuggestions.length;
        while (done == "no") {
            if (toQuery > 20) {
                var TempFileSuggestions = FileSuggestions.slice(20 * loops, 20 * (loops + 1));
            } else {
                var TempFileSuggestions = FileSuggestions.slice(20 * loops);
            }
            var FileTitleStr = "File:" + TempFileSuggestions[0][0];
            for (var j = 1; j < TempFileSuggestions.length; j++) {
                FileTitleStr += "|File:" + TempFileSuggestions[j][0];
            }
            var URLs = JSON.parse( // get URLs of images to display
                $.ajax({
                    dataType: "json",
                    url: mw.util.wikiScript('api'),
                    data: {
                        format: 'json',
                        action: 'query',
                        prop: 'imageinfo',
                        iiprop: 'url',
                        iiurlwidth: '100',
                        titles: FileTitleStr
                    },
                    async: false
                })
                .responseText
            );
            for (var p in URLs.query.pages) {
                for (var j = 0; j < FileSuggestions.length; j++) {
                    if (URLs.query.pages[p].title.replace(/^.*?:/, "") == FileSuggestions[j][0]) {
                        for (var k in URLs.query.pages[p].imageinfo) {
                            if (!URLs.query.pages[p].imageinfo[k].thumberror) {
                                FileSuggestions[j].push(URLs.query.pages[p].imageinfo[k].thumburl);
                            }
                        }
                    }
                }
            }
            if (toQuery > 20) {
                toQuery = toQuery - 20;
                loops++;
            } else {
                done = "yes";
            }
        }
        for (var j = 0; j < FileSuggestions.length; j++) {
            if (FileSuggestions[j].length < 3) {
                FileSuggestions.splice(j, 1);
                j--;
            } // get rid of files where fetching thumbnails failed
        }
    }

    if (Matches.length == 0 && FileMatches.length == 0 && FileSuggestions.length == 0) { // if all matches can't have thumbnails, just skip
        window.clearInterval(arrows);
        currentRow++;
        CheckRow(currentRow);
        return;
    }

    if (FileMatches.length > 0) {
        var fieldsetfiles = document.createElement("fieldset");
        fieldsetfiles.setAttribute("style", "margin:0px");
        var legend = document.createElement("legend");
        legend.innerHTML = ThisGUIMessages.FollowingImages.replace("NAME", name + " (#" + temprefnum + ")");
        fieldsetfiles.appendChild(legend);
        fieldsetfiles.innerHTML += ThisGUIMessages.SelectOne + "<br>";

        for (var j = 0; j < FileMatches.length; j++) {
            var image = document.createElement("input");
            image.setAttribute("type", "radio");
            image.setAttribute("name", "imageselect");
            image.setAttribute("id", "image" + j);
            if (j == 0) image.setAttribute("checked", "checked");
            fieldsetfiles.appendChild(image);
            var imagelabel = document.createElement("label");
            imagelabel.setAttribute("for", "image" + j);
            imagelabel.innerHTML = '<a href="//commons.wikimedia.org/wiki/File:' + encodeURIComponent(FileMatches[j][0]) + '" target="_blank"><div style="display:inline-block; vertical-align:middle; width:100px; overflow-x:hidden; text-overflow:ellipsis"><center><img src="' + FileMatches[j][2].replace(/ /g, "_") + '" style="max-height:100%; max-width:100%;"><br>' + FileMatches[j][1] + '<br>' + FileMatches[j][0] + '</center></div></a>';
            fieldsetfiles.appendChild(imagelabel);
            if ((j + 1) % 5 == 0) {
                fieldsetfiles.innerHTML += "<br>";
            }
        }
        if (FileSuggestions.length == 0) {
            if (FileMatches.length % 5 != 0) {
                fieldsetfiles.innerHTML += "<br>";
            }
            var skip = document.createElement("input");
            skip.setAttribute("type", "radio");
            skip.setAttribute("name", "imageselect");
            skip.setAttribute("id", "skipimage");
            fieldsetfiles.appendChild(skip);
            var skiplabel = document.createElement("label");
            skiplabel.setAttribute("for", "skipimage");
            skiplabel.innerHTML = ThisGUIMessages.DontAddImage;
            fieldsetfiles.appendChild(skiplabel);
            fieldsetfiles.innerHTML += "<br>";
        }
        if (Matches.length == 0 && FileSuggestions.length == 0) {
            var selectbutton = document.createElement("input");
            selectbutton.setAttribute("type", "button");
            selectbutton.setAttribute("value", ThisGUIMessages.SelectButton);
            selectbutton.setAttribute("style", "margin-top:7px");
            selectbutton.setAttribute("onclick", "CatChosen(false)");
            fieldsetfiles.appendChild(selectbutton);

            var savebutton = document.createElement("input");
            savebutton.setAttribute("type", "button");
            savebutton.setAttribute("value", ThisGUIMessages.SaveButton);
            savebutton.setAttribute("style", "margin-top:7px");
            savebutton.setAttribute("onclick", "CatChosen(true)");
            fieldsetfiles.appendChild(savebutton);
        }
    }
    if (FileSuggestions.length > 0) {
        var fieldsetfilesuggestions = document.createElement("fieldset");;
        fieldsetfilesuggestions.setAttribute("style", "margin:0px");
        var legend = document.createElement("legend");
        if (FileMatches.length != 0) {
            legend.innerHTML = ThisGUIMessages.OtherSuggested.replace("NAME", name + " (#" + temprefnum + ")");
        } else {
            legend.innerHTML = ThisGUIMessages.Suggested.replace("NAME", name + " (#" + temprefnum + ")");
        }
        fieldsetfilesuggestions.appendChild(legend);
        fieldsetfilesuggestions.innerHTML += ThisGUIMessages.SelectOne + "<br>";

        for (var j = 0; j < FileSuggestions.length; j++) {
            var image = document.createElement("input");
            image.setAttribute("type", "radio");
            image.setAttribute("name", "imageselect");
            image.setAttribute("id", "imagesuggestion" + j);
            if (j == 0 && FileMatches.length == 0) {
                image.setAttribute("checked", "checked");
            }
            fieldsetfilesuggestions.appendChild(image);
            var imagelabel = document.createElement("label");
            imagelabel.setAttribute("for", "imagesuggestion" + j);
            imagelabel.innerHTML = '<a href="//commons.wikimedia.org/wiki/File:' + encodeURIComponent(FileSuggestions[j][0]) + '" target="_blank"><div style="display:inline-block; vertical-align:middle; width:100px; overflow-x:hidden; text-overflow:ellipsis"><center><img src="' + FileSuggestions[j][2].replace(/ /g, "_") + '" style="max-height:100%; max-width:100%;"><br>(' + ThisGUIMessages.From.replace('CATNAME', 'Category:' + FileSuggestions[j][1]) + ')<br>' + FileSuggestions[j][0] + '</center></div></a>';
            fieldsetfilesuggestions.appendChild(imagelabel);
            if ((j + 1) % 5 == 0) {
                fieldsetfilesuggestions.innerHTML += "<br>";
            }
        }
        if (FileSuggestions.length % 5 != 0) {
            fieldsetfilesuggestions.innerHTML += "<br>";
        }
        var skip = document.createElement("input");
        skip.setAttribute("type", "radio");
        skip.setAttribute("name", "imageselect");
        skip.setAttribute("id", "skipimagesuggestions");
        fieldsetfilesuggestions.appendChild(skip);
        var skiplabel = document.createElement("label");
        skiplabel.setAttribute("for", "skipimagesuggestions");
        skiplabel.innerHTML = ThisGUIMessages.DontAddImage;
        fieldsetfilesuggestions.appendChild(skiplabel);
        fieldsetfilesuggestions.innerHTML += "<br>";

        if (Matches.length == 0) {
            var selectbutton = document.createElement("input");
            selectbutton.setAttribute("type", "button");
            selectbutton.setAttribute("value", ThisGUIMessages.SelectButton);
            selectbutton.setAttribute("style", "margin-top:7px");
            selectbutton.setAttribute("onclick", "CatChosen(false)");
            fieldsetfilesuggestions.appendChild(selectbutton);

            var savebutton = document.createElement("input");
            savebutton.setAttribute("type", "button");
            savebutton.setAttribute("value", ThisGUIMessages.SaveButton);
            savebutton.setAttribute("style", "margin-top:7px");
            savebutton.setAttribute("onclick", "CatChosen(true)");
            fieldsetfilesuggestions.appendChild(savebutton);
        }
    }
    if (Matches.length > 0) {
        var fieldsetcats = document.createElement("fieldset");
        fieldsetcats.setAttribute("style", "margin:0px");
        var legend = document.createElement("legend");
        legend.innerHTML = ThisGUIMessages.FollowingCats.replace("NAME", name + " (#" + temprefnum + ")");
        fieldsetcats.appendChild(legend);
        fieldsetcats.innerHTML += ThisGUIMessages.SelectOne + "<br>";

        for (var j = 0; j < Matches.length; j++) {
            var cat = document.createElement("input");
            cat.setAttribute("type", "radio");
            cat.setAttribute("name", "catselect");
            cat.setAttribute("id", "cat" + j);
            if (j == 0) {
                cat.setAttribute("checked", "checked");
            }
            fieldsetcats.appendChild(cat);
            var catlabel = document.createElement("label");
            catlabel.setAttribute("for", "cat" + j);
            catlabel.innerHTML = Matches[j][1] + ' – <a href="//commons.wikimedia.org/wiki/Category:' + encodeURIComponent(Matches[j][0]) + '" target="_blank">' + Matches[j][0] + '</a>';
            fieldsetcats.appendChild(catlabel);
            fieldsetcats.innerHTML += "<br>";
        }
        var skip = document.createElement("input");
        skip.setAttribute("type", "radio");
        skip.setAttribute("name", "catselect");
        skip.setAttribute("id", "skip");
        fieldsetcats.appendChild(skip);
        var skiplabel = document.createElement("label");
        skiplabel.setAttribute("for", "skip");
        skiplabel.innerHTML = ThisGUIMessages.DontAddCat;
        fieldsetcats.appendChild(skiplabel);
        fieldsetcats.innerHTML += "<br>";

        var selectbutton = document.createElement("input");
        selectbutton.setAttribute("type", "button");
        selectbutton.setAttribute("value", ThisGUIMessages.SelectButton);
        selectbutton.setAttribute("style", "margin-top:7px");
        selectbutton.setAttribute("onclick", "CatChosen(false)");
        fieldsetcats.appendChild(selectbutton);

        var savebutton = document.createElement("input");
        savebutton.setAttribute("type", "button");
        savebutton.setAttribute("value", ThisGUIMessages.SaveButton);
        savebutton.setAttribute("style", "margin-top:7px");
        savebutton.setAttribute("onclick", "CatChosen(true)");
        fieldsetcats.appendChild(savebutton);
    }
    var overlay = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("colspan", HTMLRows[currentRow].getElementsByTagName("td").length + 1);
    overlay.appendChild(td);
    if (FileMatches.length > 0) {
        td.appendChild(fieldsetfiles);
    }
    if (FileSuggestions.length > 0) {
        td.appendChild(fieldsetfilesuggestions);
    }
    if (Matches.length > 0) {
        td.appendChild(fieldsetcats);
    }
    overlay.setAttribute("style", "outline:2px solid red; border-top:0px; background:#ffffff");
    overlay.setAttribute("id", "overlay");
    HTMLRows[currentRow].setAttribute("style", "border-bottom:0px;");
    HTMLRows[currentRow].parentNode.insertBefore(overlay, HTMLRows[currentRow].nextSibling);
}

function CatChosen(earlyExit) {
    var overlay = document.getElementById("overlay");
    var options = overlay.getElementsByTagName("input");
    var titles = overlay.getElementsByTagName("label");
    for (var i = 0; i < options.length - 1; i++) {
        if (options[i].checked) {
            if (options[i].name.search("cat") != -1) {
                var link = titles[i].getElementsByTagName("a");
                if (link.length == 0) {
                    continue; // if chose not to add cat
                }
                MatchesFound = true // if chose to add something
                var catname = link[0].innerHTML;
                var tempRow = Rows[currentRow][0];
                var regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
                var regex2 = new RegExp("<!--((?!-->)(.|\\n))*?\\|[ ]*?" + ThisRegisterTable.CommonscatParam + "[ ]*?=(.|\\n)*?-->", "g");
                if (tempRow.match(regex) != null && tempRow.match(regex2) == null) { // if parameter is already there but blank and not commented out, put selection there
                    tempRow = tempRow.replace(regex, "|" + ThisRegisterTable.CommonscatParam + "=" + catname);
                } else {
                    tempRow = tempRow.replace(regex2, ""); // remove commented out parameter if present
                    var EndOfTemplate = tempRow.lastIndexOf("}}");
                    if (tempRow.indexOf("\n") != -1 && tempRow.indexOf("\n") != 0 && tempRow.indexOf("\n") != tempRow.length - 1) {
                        tempRow = tempRow.substr(0, EndOfTemplate) + "|" + ThisRegisterTable.CommonscatParam + "=" + catname + "\n}}" + tempRow.substr(EndOfTemplate + 2, tempRow.length - EndOfTemplate - 2);
                    } else {
                        tempRow = tempRow.substr(0, EndOfTemplate) + "|" + ThisRegisterTable.CommonscatParam + "=" + catname + "}}" + tempRow.substr(EndOfTemplate + 2, tempRow.length - EndOfTemplate - 2);
                    }
                }
                thiswikitext = thiswikitext.replace(Rows[currentRow][0], tempRow);
                Rows[currentRow][0] = tempRow;
            } else {
                var link = titles[i].getElementsByTagName("a");
                if (link.length == 0) {
                    // if chose not to add image
                    continue;
                }
                MatchesFound = true; // if chose to add something
                var imagename = link[0].innerHTML;
                var StartIndex = imagename.lastIndexOf("<br>") + 4;
                imagename = imagename.substr(StartIndex, imagename.indexOf("</center>", StartIndex) - StartIndex);
                var tempRow = Rows[currentRow][0];
                var regex = new RegExp("\\|[ ]*?" + ThisRegisterTable.ImageParam + "[ ]*?=.*?(?=(\\n|\\||}}))", "g");
                var regex2 = new RegExp("<!--((?!-->)(.|\\n))*?\\|[ ]*?" + ThisRegisterTable.ImageParam + "[ ]*?=(.|\\n)*?-->", "g");
                if (tempRow.match(regex) != null && tempRow.match(regex2) == null) { // if parameter is already there but blank and not commented out, put selection there
                    tempRow = tempRow.replace(regex, "|" + ThisRegisterTable.ImageParam + "=" + imagename);
                } else {
                    tempRow = tempRow.replace(regex2, ""); // remove commented out parameter if present
                    var EndOfTemplate = tempRow.lastIndexOf("}}");
                    if (tempRow.indexOf("\n") != -1 && tempRow.indexOf("\n") != 0 && tempRow.indexOf("\n") != tempRow.length - 1) {
                        tempRow = tempRow.substr(0, EndOfTemplate) + "|" + ThisRegisterTable.ImageParam + "=" + imagename + "\n}}" + tempRow.substr(EndOfTemplate + 2, tempRow.length - EndOfTemplate - 2);
                    } else {
                        tempRow = tempRow.substr(0, EndOfTemplate) + "|" + ThisRegisterTable.ImageParam + "=" + imagename + "}}" + tempRow.substr(EndOfTemplate + 2, tempRow.length - EndOfTemplate - 2);
                    }
                }
                thiswikitext = thiswikitext.replace(Rows[currentRow][0], tempRow);
                Rows[currentRow][0] = tempRow;
            }
        }
    }
    overlay.parentNode.removeChild(overlay);
    window.clearInterval(arrows);
    if (earlyExit) { // if chose to save and exit early, move immediately to end of table
        currentRow = Rows.length;
    } else {
        currentRow++;
    }
    CheckRow(currentRow);
}

function getThisWikitext(title) {
    try {
        var output = JSON.parse(
            $.ajax({
                dataType: "json",
                url: mw.util.wikiScript('api'),
                data: {
                    format: 'json',
                    action: 'query',
                    prop: 'revisions',
                    rvprop: 'content',
                    titles: title,
                    indexpageids: true,
                    redirects: 'true'
                },
                async: false
            })
            .responseText
        );
        for (var page in output.query.pages) {
            wikitext = output.query.pages[page].revisions[0]['*'];
        }
        return wikitext;
    } catch (err) {
        return "error";
    }
}

function editPageWithCommonsCat(info, ProgressDiv) {
    var ProgressDiv = document.getElementById("ProgressDiv")
    ProgressDiv.innerHTML += ThisGUIMessages.Done + " "

    $.ajax({
            url: mw.util.wikiScript('api'),
            type: 'POST',
            dataType: 'json',
            data: {
                format: 'json',
                action: 'edit',
                title: info.title,
                text: info.text,
                summary: info.summary,
                token: mw.user.tokens.get('csrfToken')
            }
        })
        .done(function(data) {
            window.onbeforeunload = function() {}
            if (data && data.edit && data.edit.result && data.edit.result == 'Success') {
                ProgressDiv.innerHTML += ThisGUIMessages.SuccessfulEdit;
            } else {
                ProgressDiv.innerHTML += ThisGUIMessages.FailedEdit;
            }
            setTimeout(function() {
                ProgressDiv.parentNode.removeChild(ProgressDiv);
            }, 10000);
        })
        .fail(function() {
            alert('Ajax failure.');
        });
}

function OnBeforeUnLoad() {
    return ThisGUIMessages.LeavePage;
}

$(window).load(FindCommonsCatButton);