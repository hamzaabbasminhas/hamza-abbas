package com.petstore.reporting;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class ReportManager {
    private static ExtentReports extent;
    private static Map<Long, ExtentTest> testMap = new HashMap<>();

    public static synchronized ExtentReports getInstance() {
        if (extent == null) {
            extent = new ExtentReports();
            ExtentSparkReporter spark = new ExtentSparkReporter("test-output/ExtentReport.html");
            spark.config().setTheme(Theme.DARK);
            spark.config().setDocumentTitle("Pet Store API Test Report");
            spark.config().setReportName("API Test Results");
            extent.attachReporter(spark);
        }
        return extent;
    }

    public static synchronized ExtentTest getTest() {
        return testMap.get(Thread.currentThread().getId());
    }

    public static synchronized void startTest(String testName) {
        ExtentTest test = getInstance().createTest(testName);
        testMap.put(Thread.currentThread().getId(), test);
    }

    public static synchronized void endTest() {
        getInstance().flush();
    }

    public static synchronized void addSystemInfo(String key, String value) {
        getInstance().setSystemInfo(key, value);
    }
} 