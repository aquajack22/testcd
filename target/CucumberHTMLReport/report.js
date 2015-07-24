$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/test.feature");
formatter.feature({
  "id": "depositing-money-in-to-a-user-account",
  "description": "",
  "name": "Depositing money in to a User account",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "depositing-money-in-to-a-user-account;depositing-money-in-to-user\u0027s-account-should-add-money-to-the-user\u0027s-current-balance",
  "description": "",
  "name": "Depositing money in to User\u0027s account should add money to the User\u0027s current balance",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "a User has no money in their account",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "100 is deposited in to the account",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "the balance should be 100",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "TestcabStepDef.a_User_has_no_money_in_their_current_account()"
});
formatter.result({
  "duration": 144438912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 0
    }
  ],
  "location": "TestcabStepDef.£_is_deposited_in_to_the_account(int)"
});
formatter.result({
  "duration": 41373418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    }
  ],
  "location": "TestcabStepDef.the_balance_should_be_£(int)"
});
formatter.result({
  "duration": 132196,
  "status": "passed"
});
});