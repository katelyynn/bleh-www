// show pop-up windows


let chosen_browser = 'chrome';

function install_theme() {
    open(`https://github.com/katelyynn/bleh/raw/uwu/fm/bleh.user.js`);
    kill_windows();

    finish_theme();
}

function finish_theme() {
    if (chosen_browser == 'firefox') {
        finish_theme_fully();
    } else {
        kill_windows();
        create_window('Allowing user scripts',`
            Unfortunately due to new Chrome restrictions, you must allow user scripts for bleh to operate. 
            <div class="steps-images">
                <img src="/img/manage-ext.jpg">
                <img src="/img/allow-scripts.jpg">
            </div>
            <p style="margin-top: 10px">If you do not see an option to allow user scripts, enable developer mode like below</p>
            <img src="/img/developer.jpg" style="width: 200px; margin-top: 10px">
            `,[
            {
                'text': 'Done!',
                'onclick': `prompt_restart()`
            }
        ],'chrome_prompt');
    }
}

function prompt_restart() {
    kill_windows();
        create_window('Allowing user scripts',`
            For user scripts to function properly (especially if you enabled developer mode), you must restart your browser.
            `,[],'prompt_restart');
}

function finish_theme_fully() {
    kill_windows();
    create_window('Installing bleh',`
    You may now close this tab and <a href="https://last.fm/bleh/setup">enter bleh to begin setup</a>.
    <div class="alert">
        <strong>Things not looking right?</strong>
        <p>Head over to the <a href="https://github.com/katelyynn/bleh/wiki/FAQ">FAQ</a> or <a href="https://github.com/katelyynn/bleh/issues/new/choose">report a bug</a></p>
    </div>
    `,[],'installation_finished');
}


function create_install_window2() {
    /*create_window('hey!','<strong>This theme uses the Tampermonkey browser extension.</strong><br><br>Do you have it installed?',[
        {
            'text': 'Yes, I have Tampermonkey',
            'onclick': `install_theme_final()`
        },
        {
            'text': 'No, please install it',
            'onclick': `install_tm()`,
            'type': 'primary'
        }
    ],'install_theme');*/
    install_tm();
}


function install_tm() {
    kill_windows();
    create_window('Install extension',`
    <p>Please pick your browser, if unsure, choose Chrome.</p>
    <div class="browser-choices">
        <button class="btn browser" onclick="chosen_chrome()">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/></svg>
            <div class="info">
                <p>Chrome</p>
                <p class="also">also for Edge, Brave, Opera, Arc</p>
            </div>
        </button>
        <button class="btn browser" onclick="chosen_firefox()">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firefox Browser</title><path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"/></svg>
            <div class="info">
                <p>Firefox</p>
                <p class="also">also for Zen</p>
            </div>
        </button>
    </div>
    <div class="alert">
        <strong>Use a regular browser if possible</strong>
        Older versions (such as ESR builds) of browsers are known to cause issues
    </div>
    `,[],'install_tm');
}

function chosen_chrome() {
    chosen_browser = 'chrome';

    kill_windows();
    create_window('Install for Chrome', `
    <p>Install a userscript extension to continue (pick one).</p>
    <div class="browser-choices">
        <button class="btn browser popular" onclick="chosen_chrome_tampermonkey()">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tampermonkey</title><path d="M5.955.002C3-.071.275 2.386.043 5.335c-.069 3.32-.011 6.646-.03 9.969.06 1.87-.276 3.873.715 5.573 1.083 2.076 3.456 3.288 5.77 3.105 4.003-.011 8.008.022 12.011-.017 2.953-.156 5.478-2.815 5.482-5.772-.007-4.235.023-8.473-.015-12.708C23.82 2.533 21.16.007 18.205.003c-4.083-.005-8.167 0-12.25-.002zm.447 12.683c2.333-.046 4.506 1.805 4.83 4.116.412 2.287-1.056 4.716-3.274 5.411-2.187.783-4.825-.268-5.874-2.341-1.137-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.948-.99zm11.245 0c2.333-.046 4.505 1.805 4.829 4.116.413 2.287-1.056 4.716-3.273 5.411-2.188.783-4.825-.268-5.875-2.341-1.136-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.949-.99z"/></svg>
            <div class="info">
                <p>Tampermonkey</p>
                <p class="also">most popular, most supported, closed source</p>
            </div>
        </button>
        <button class="btn browser" onclick="chosen_chrome_script_cat()">
            <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOKSURBVGhD7Zq9jxVlFMZ/BxYMXwbX4LJ8xpAQoxWGgtDYkVBrbPwjDEFCAaU2BhOKjQV2JHa2uBWtoXLXAtiE+AHqmiyJfHkXlgUeCw5hOHc+3mEve99L5lc+77lnnmfemXnnzgx0dHS89khaG7XcGJhHSSck3ZK0IOmMpK2xZlhI2uqeFtzjiVjTCkkH1c+ypLOSNsT61ULSBvewHM1JOhjrk5F0MnYLnJW0Mf7uVSFpo2+zjpPxd0XWRCFwJwqBz4GepClJ43FwUEgalzQF9HybdTR5rkbSkbj7GvhW0vbY52WRtN17tuFI7JOMpP2xWyLnJE3GfqlImvQeL8P+2C8ZSetit5Z8J2ln7FuFpJ3+m5WwLvYtYlGISFLUWvIE+B6YAarWysfAAeCzhOtKLWZWm6l2kKeB/wZ2RD1T5s2s9ohK2Zs3opAxjV5TAl+PQsY0ek0J3LjXMqLRa0rgP6KQMY1eu8Al/B6FjGn0mrIsbQbuRT1TtpjZf1EskjLDD4ClKGbIknutpTGwmT0C5qOeIfPutZbGwM4/UciQJI+pgUdihqNQRmrgxgU9A5I8pgZuXN8yIMljF7iCxgU9A5I8Nt544E8L/QFazmwys8UoRkpnWNKEpKv+yKQHTGd+87EETEvqueerkiZiEVUzLOkGsDvqI8afZrYnin0zLOkdoHTvjBgTnuUF+gKb2QJwLeojyDXP8gJ9gZ1PgEvA/TgwAtx37x/HAarO4WdIehPYCxwCvgK2xZpMuAmc8qDXzexuLHhGbeAikn72Z8c5MmNmH0axjKpDuoy+8yEjkr21Cdz4CHSIJHtrE/jHKGREsrc25/C4/wXbFMeGTA/YY2b/xoEy2sywgNkoZsCse0uicoYlHfb1+APgPeAtYD3wRqwdMkvAQ+AWMAdcBn4ws59iYSWSPn3+unVk+TrmomqGJf0GvBv1EeMe8LaZLRfFqnN4SxRGkPVlOaoCH4uCnys3gYvAl8D5WLCKnHcPF91T2X/1qbIrd+khzdPD+iPgsC9Fc8CvZnY71JwBjhe1VeAbM/uiKPjXgfv84rob+MXMpos1A0PS6Xi1eIWcjtsfCpKOSpqL7gbInKSjcbtDRdJa/1RxMbpdAYves+rrn+Ejacxn/EJ034IL3mMs9l8plRetQeAz875/9rQLmATGCreCBjzyF2F/+fuhK2b2OLTq6Ojo6Oh4HfkfMPwv5ycBuMwAAAAASUVORK5CYII=" />
            <div class="info">
                <p>ScriptCat</p>
                <p class="also">newest (untested), open source</p>
            </div>
        </button>
        <button class="btn browser" onclick="chosen_chrome_violentmonkey()">
            <img alt="" src="data:image/png;base64,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" />
            <div class="info">
                <p>Violentmonkey</p>
                <p class="also">no support for MV3, open source</p>
            </div>
        </button>
    </div>
    `, [], 'install_chrome');
}

function chosen_chrome_tampermonkey() {
    open('https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo');
    install_theme_final();
}

function chosen_chrome_violentmonkey() {
    open('https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag');
    install_theme_final();
}

function chosen_chrome_script_cat() {
    open('https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf');
    install_theme_final();
}

function chosen_firefox() {
    chosen_browser = 'firefox';

    kill_windows();
    create_window('Install for Firefox', `
    <p>Install a userscript extension to continue (pick one).</p>
    <div class="browser-choices">
        <button class="btn browser popular" onclick="chosen_firefox_tampermonkey()">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tampermonkey</title><path d="M5.955.002C3-.071.275 2.386.043 5.335c-.069 3.32-.011 6.646-.03 9.969.06 1.87-.276 3.873.715 5.573 1.083 2.076 3.456 3.288 5.77 3.105 4.003-.011 8.008.022 12.011-.017 2.953-.156 5.478-2.815 5.482-5.772-.007-4.235.023-8.473-.015-12.708C23.82 2.533 21.16.007 18.205.003c-4.083-.005-8.167 0-12.25-.002zm.447 12.683c2.333-.046 4.506 1.805 4.83 4.116.412 2.287-1.056 4.716-3.274 5.411-2.187.783-4.825-.268-5.874-2.341-1.137-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.948-.99zm11.245 0c2.333-.046 4.505 1.805 4.829 4.116.413 2.287-1.056 4.716-3.273 5.411-2.188.783-4.825-.268-5.875-2.341-1.136-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.949-.99z"/></svg>
            <div class="info">
                <p>Tampermonkey</p>
                <p class="also">most popular, most supported, closed source</p>
            </div>
        </button>
        <button class="btn browser" onclick="chosen_firefox_violentmonkey()">
            <img alt="" src="data:image/png;base64,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" />
            <div class="info">
                <p>Violentmonkey</p>
                <p class="also">supported but less tested, open source</p>
            </div>
        </button>
    </div>
    `, [], 'install_firefox');
}

function chosen_firefox_tampermonkey() {
    open('https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/');
    install_theme_final();
}

function chosen_firefox_violentmonkey() {
    open('https://addons.mozilla.org/firefox/addon/violentmonkey/');
    install_theme_final();
}


function install_theme_final() {
    kill_windows();
    create_window('Install theme',`
    Almost done! Once you have the extension installed, hit the button below to install the script.
    <br><br>
    <img src="/img/install-script.jpg" style="width: 600px">
    `,[
        {
            'text': 'Install theme',
            'onclick': `install_theme()`,
            'type': 'brand'
        }
    ],'finish_theme');
}


let confirm_info = {
    'delete': {
        'icon': 'trash-2',
        'title': 'Confirm deletion of'
    },
    'update-theme': {
        'icon': 'rotate-ccw',
        'title': 'Confirm updating of'
    }
}
let confirm_actions = {
    'cancel': {
        'text': 'Cancel. Go back.',
        'action': 'exit_windows()'
    }
}

/**
 * confirm window
 * @param {string} type specify the confirm type
 * @param {string} details confirmation's description
 * @param {array} actions all button actions
 */
function confirm(type,details,actions) {
    let em_confirm = document.createElement('div');
    em_confirm.classList.add('confirm');
    em_confirm.setAttribute('confirm-type',type);
    em_confirm.innerHTML = (`
    <div class="icon">
        <div class="icon-cont"><i class="icon w-64" data-lucide="${confirm_info[type].icon}"></i></div>
    </div>
    <div class="info">
        <h2>${confirm_info[type].title}</h2>
        <h3>${details}</h3>
    </div>
    `);

    let em_confirm_actions = document.createElement('div');
    em_confirm_actions.classList.add('actions');
    for (let i in actions) {
        // text
        let text = actions[i].text;
        if (text == undefined)
            text = confirm_actions[actions[i].type].text;
        // action
        let em_action = actions[i].action;
        if (em_action == undefined)
            em_action = confirm_actions[actions[i].type].action;

        let em_confirm_action = document.createElement('div');
        em_confirm_action.classList.add('action-cont');
        em_confirm_action.innerHTML = (`
        <button class="action ${actions[i].type}" onclick="${em_action}"><span class="content">${text}</span></button>
        `);

        em_confirm_actions.appendChild(em_confirm_action);
    }
    em_confirm.appendChild(em_confirm_actions);

    em_window_parent.appendChild(em_confirm);
    lucide.createIcons();
}
