// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class BootStrapTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() throws MalformedURLException {
    driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), DesiredCapabilities.chrome());
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void bootStrap() {
    // Test name: BootStrap
    // Step # | name | target | value
    // 1 | open | / | 
    driver.get("https://www.google.com.br/");
    // 2 | setWindowSize | 1050x708 | 
    driver.manage().window().setSize(new Dimension(1050, 708));
    // 3 | type | name=q | boot
    driver.findElement(By.name("q")).sendKeys("boot");
    // 4 | click | css=.WggQGd > span | 
    driver.findElement(By.cssSelector(".WggQGd > span")).click();
    // 5 | mouseOver | css=div:nth-child(2) > .tF2Cxc .LC20lb | 
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(2) > .tF2Cxc .LC20lb"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 6 | click | css=div:nth-child(2) > .tF2Cxc .LC20lb | 
    driver.findElement(By.cssSelector("div:nth-child(2) > .tF2Cxc .LC20lb")).click();
    // 7 | click | linkText=Docs | 
    driver.findElement(By.linkText("Docs")).click();
    // 8 | click | linkText=Download | 
    driver.findElement(By.linkText("Download")).click();
    // 9 | mouseDownAt | css=.bd-sidebar | 153,102
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-sidebar"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    // 10 | mouseMoveAt | css=.bd-sidebar | 153,102
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-sidebar"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 11 | mouseUpAt | css=.bd-sidebar | 153,102
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-sidebar"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    // 12 | click | linkText=JavaScript | 
    driver.findElement(By.linkText("JavaScript")).click();
    // 13 | mouseDownAt | css=.bd-toc | 145.703125,285
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-toc"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    // 14 | mouseMoveAt | css=.bd-toc | 145.703125,285
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-toc"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 15 | mouseUpAt | css=.bd-toc | 145.703125,285
    {
      WebElement element = driver.findElement(By.cssSelector(".bd-toc"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
  }
}
