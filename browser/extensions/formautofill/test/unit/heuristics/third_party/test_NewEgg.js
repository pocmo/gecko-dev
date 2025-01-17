/* global runHeuristicsTest */

"use strict";

runHeuristicsTest([
  {
    fixturePath: "ShippingInfo.html",
    expectedResult: [
      [
        {"section": "", "addressType": "", "contactType": "", "fieldName": "given-name"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "family-name"},
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "country"}, // TODO: select, country
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-line1"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-line2"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-level2"},
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "address-level1"}, // TODO: select, state
        {"section": "", "addressType": "", "contactType": "", "fieldName": "postal-code"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "tel"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "email"},
      ],
      [],
    ],
  }, {
    fixturePath: "BillingInfo.html",
    expectedResult: [
      [
/* TODO: Should match the following fields.
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-name"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-number"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-csc"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-name"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-number"}, // ac-off
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-exp-month"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-exp-year"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-csc"},
*/
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "country"}, // TODO: select, country
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-line1"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-line2"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "address-level2"},
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "address-level1"}, // TODO: select, country
        {"section": "", "addressType": "", "contactType": "", "fieldName": "postal-code"},
        {"section": "", "addressType": "", "contactType": "", "fieldName": "tel"},
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-name"}, // TODO
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-number"}, // TODO
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-exp-month"}, // TODO
//      {"section": "", "addressType": "", "contactType": "", "fieldName": "cc-exp-year"}, // TODO
      ],
      [],
      [],
      [],
    ],
  }, {
    fixturePath: "Login.html",
    expectedResult: [
      [
        {"section": "", "addressType": "", "contactType": "", "fieldName": "email"},
      ],
      [],
      [
        {"section": "", "addressType": "", "contactType": "", "fieldName": "email"},
      ],
    ],
  },
], "../../../fixtures/third_party/NewEgg/");

