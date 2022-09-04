'use strict';

/**
 * WikiEditor. Get WikiFicator.
 * ------------------------------------------------------------------------------------------------------------------ */

function extJS_getWikiFicator() {
  if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
    mw.loader.load('https://ru.wikipedia.org/w/index.php?title=MediaWiki:Gadget-wikificator.js&action=raw&ctype=text/javascript');
  }
}

/**
 * WikiEditor. Set WikiFicator.
 * ------------------------------------------------------------------------------------------------------------------ */

function extJS_runWikiFicator() {
  let customizeToolbar = function () {

    $('#wpTextbox1').wikiEditor('addToToolbar', {
      'section': 'advanced',
      'group': 'format',
      'tools': {
        'ext.wikify': {
          label: 'Викификатор',
          type: 'button',
          icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5IDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VGRUJERTsiIHBvaW50cz0iNDUuNSwxNCAzMS41LDAgMC41LDAgMC41LDU4IDQ1LjUsNTggICAiLz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Q1RDBCQjsiIGQ9Ik0xMC41LDIzaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFzLTAuNDQ4LTEtMS0xaC0yNWMtMC41NTIsMC0xLDAuNDQ3LTEsMVM5Ljk0OCwyMywxMC41LDIzeiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDVEMEJCOyIgZD0iTTEwLjUsMTVoMTBjMC41NTIsMCwxLTAuNDQ3LDEtMXMtMC40NDgtMS0xLTFoLTEwYy0wLjU1MiwwLTEsMC40NDctMSwxUzkuOTQ4LDE1LDEwLjUsMTV6Ii8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNENUQwQkI7IiBkPSJNMzUuNSwyOWgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVMzNi4wNTIsMjksMzUuNSwyOXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Q1RDBCQjsiIGQ9Ik0zNS41LDM3aC0yNWMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMWgyNWMwLjU1MiwwLDEtMC40NDcsMS0xUzM2LjA1MiwzNywzNS41LDM3eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDVEMEJCOyIgZD0iTTM1LjUsNDVoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTMzYuMDUyLDQ1LDM1LjUsNDV6Ii8+CgkJPC9nPgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNENUQwQkI7IiBwb2ludHM9IjMxLjUsMCAzMS41LDE0IDQ1LjUsMTQgICAiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ4QTBEQzsiIGN4PSI0NiIgY3k9IjQ2LjUiIHI9IjEyLjUiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDBFOEY5OyIgZD0iTTQ2LDM2Yy00LjcxOCwwLTguODgsMy4xODItMTAuMTIxLDcuNzM3Yy0wLjE0NiwwLjUzMywwLjE2OSwxLjA4MywwLjcwMiwxLjIyOCAgICBjMC41MjgsMC4xNDMsMS4wODItMC4xNjgsMS4yMjgtMC43MDJDMzguODEzLDQwLjU3NSw0Mi4xODIsMzgsNDYsMzhjNC42ODcsMCw4LjUsMy44MTMsOC41LDguNVM1MC42ODcsNTUsNDYsNTUgICAgYy0zLjM2NSwwLTYuMzc4LTIuMDAxLTcuNzM0LTVINDMuNXYtMmgtNmgtMWgtMXY4aDJ2LTMuMzQxbDAsMHYtMC4wMjNDMzkuNDMzLDU1LjMxLDQyLjU2Niw1Nyw0Niw1N2M1Ljc5LDAsMTAuNS00LjcxLDEwLjUtMTAuNSAgICBTNTEuNzksMzYsNDYsMzZ6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
          action: {
            type: 'callback',
            execute: function (context) {
              Wikify();
            }
          }
        }
      }
    });
  };

  if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
    mw.loader.using('user.options', function () {
      if (mw.user.options.get('usebetatoolbar')) {
        mw.loader.using('ext.wikiEditor', function () {
          $(document).ready(customizeToolbar);
        });
      }
    });
  }
}

/**
 * Loading functions.
 * ------------------------------------------------------------------------------------------------------------------ */

$(function () {
  extJS_getWikiFicator();
  extJS_runWikiFicator();
});