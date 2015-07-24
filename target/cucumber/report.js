$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cabhp/test.feature");
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
  "name": "�100 is deposited in to the account",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "the balance should be �100",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "TestcabStepDef.a_User_has_no_money_in_their_current_account()"
});
formatter.result({
  "duration": 262722458,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat cabhp.TestcabStepDef.a_User_has_no_money_in_their_current_account(TestcabStepDef.java:15)\r\n\tat ✽.Given a User has no money in their account(cabhp/test.feature:4)\r\n"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});