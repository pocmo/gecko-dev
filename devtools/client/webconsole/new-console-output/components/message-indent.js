/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

// React & Redux
const {
  DOM: dom,
} = require("devtools/client/shared/vendor/react");

const INDENT_WIDTH = 12;

function MessageIndent(props) {
  const { indent } = props;
  return dom.span({
    className: "indent",
    style: {"width": indent * INDENT_WIDTH}
  });
}

module.exports.MessageIndent = MessageIndent;

// Exported so we can test it with unit tests.
module.exports.INDENT_WIDTH = INDENT_WIDTH;
