package cabhp;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/test.feature"},format={"pretty", "html:target/CucumberHTMLReport","json:target/Cucumber.json"})
public class Testcab {

}



