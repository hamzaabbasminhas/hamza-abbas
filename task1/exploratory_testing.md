# Monefy App Exploratory Testing – QA Test Plan

This README documents a complete exploratory testing breakdown for the Monefy iOS application. It includes test charters, user steps, and test cases (executed and unexecuted) structured for QA coverage tracking.

---

## Prioritization of Charters

| Charter | Title                          | Priority | Reason                                                                 |
|---------|--------------------------------|----------|------------------------------------------------------------------------|
| C-01    | Add Income Flow                | 🔴 Critical | Core financial function affecting balance integrity.                   |
| C-02    | Add Expense Flow               | 🔴 Critical | Core financial function; entry point to primary user action.          |
| C-03    | Transaction History Feed       | 🔴 High     | Key for verifying data persistence and transparency.                  |
| C-04    | Date Selection & Filters       | 🔴 High     | Essential for reports and temporal transaction analysis.              |
| C-05    | Currency and Account Management| 🔴 High     | Impacts multi-account integrity and localization.                     |
| C-06    | Budgeting and Carry Over       | 🟠 Medium   | Secondary functionality; useful but not critical.                     |

---

## 🟥 Charter 1: Add Income Flow
**Priority:** 🔴 Critical

### User Steps
- Tap '+' icon
- Toggle to Income
- Enter amount
- Select category

### Test Cases
- Add valid income and confirm balance increases ✅
- Try saving without selecting category → not allowed 
- Try saving with no amount → blocked 
- Add income with decimal (e.g., 1234.56) ✅
- Add duplicate income (allowed) ✅
- Add large income amount ✅
- Use emoji/special symbols in note ✅
- Cancel income mid-way ✅
- Delete income entry and verify balance adjusts ✅

---

## 🟧 Charter 2: Add Expense Flow
**Priority:** 🔴 Critical

### User Steps
**Method A (using '+' button):**
- Tap '+' icon
- Enter amount
- Select category

**Method B (category icons on home screen):**
- Tap category icon directly from home page
- Enter amount
- Tap add button

### Test Cases
- Add valid expense and confirm balance updates (via both methods) ✅
- Add decimal amount (e.g., 25.75) ✅
- Try saving with no amount → blocked 
- Add expense with 0 or negative value → blocked 
- Add multiple expenses in quick succession ✅
- Cancel mid-way before saving ✅
- Add large value to test input limits ✅
- Add special characters or emoji in note field ✅
- Add same amount under different categories ✅
- Add exact same expense multiple times (allowed) ✅
- Delete expense entry and check balance updates ✅

---

## 🟦 Charter 3: Transaction History Feed
**Priority:** 🔴 High

### User Steps
- Click on Balance button on home page
- Tap entry for details

### Test Cases
- Verify new transactions appear at the top ✅ 
- Confirm income/expense color or icon difference ✅
- Tap to view transaction details ✅
- Edit amount, category, or note ✅
- Delete transaction and validate balance ✅
- Try deleting all entries ✅
- Confirm notes are stored ✅
- Search or filter by category ✅

---

## 🟨 Charter 4: Date Selection & Filters
**Priority:** 🔴 High

### User Steps
- Use top bar or calendar to switch views

### Test Cases
- Switch between Day/Week/Month/Year/Interval ✅
- Filter transactions for specific date ✅
- Add future-dated transaction ✅ 
- Add past-dated transaction ✅
- Confirm date persists during entry ✅
- Test edge case like leap year (Feb 29) ✅
- Try crossing year boundaries in range ✅

---

## 🟪 Charter 5: Currency and Account Management
**Priority:** 🔴 High

### User Steps
- Open Settings > Currency or Accounts

### Test Cases
- Change currency (e.g., USD → EUR) ✅
- Confirm UI reflects symbol change ✅
- Verify amounts convert based on currency ❌
- Add new account (Cash, Card, etc.) ✅
- Switch accounts and verify data separation ✅
- Add transaction under different accounts ✅

---

## 🟩 Charter 6: Budgeting and Carry Over
**Priority:** 🟠 Medium

### User Steps
- Settings > Enable Budget/Carry Over

### Test Cases
- Set budget limit and spend under it ✅
- Spend over budget and check UI warning ❌
- Carry over unused budget ✅

---

## Usability Improvements & Suggestions

### UI-IMP-01: Confusing Display in "Budget Mode"  
**Severity:** Medium  
**Charter:** C-06  
**Description:** When Budget Mode is enabled, the central chart replaces "Total Income" with "Budget", removing key income-expense insight.  
**Suggestion:** Redesign chart to accommodate all three: Income, Expenses, and Budget, or allow toggling views.  
**LinkToIssue:**  
https://drive.google.com/file/d/11YCYWHBK14DSAY4IvMt7nuugGZ0oZvBD/view?usp=drive_link

### UI-IMP-02: Missing Search Functionality in Currency List  
**Severity:** Low  
**Charter:** C-05  
**Description:** No search in long list of currencies. User must scroll manually.  
**Suggestion:** Add search input at top of list.  
**LinkToIssue:**  
https://drive.google.com/file/d/1uhbeHWTQO34aaRy3PO11ower-upf3qdd/view?usp=drive_link

### UI-IMP-03: Inconsistent Rounding in Percentages  
**Severity:** Low  
**Charter:** C-03  
**Description:** Dashboard pie chart percentages sometimes don't sum to 100% (e.g., 99% or 101%).  
**Suggestion:** Use robust rounding algorithm like Largest Remainder Method.  
**LinkToIssue:**  
https://drive.google.com/file/d/1qJNXF7OMkek5INVsj2rgeqUND2oR749t/view?usp=drive_link

### UI-IMP-04: No Confirmation Before Deleting Transaction  
**Severity:** Medium  
**Charter:** C-03  
**Description:** Deleting sensitive entries happens instantly without prompt.  
**Suggestion:** Add confirmation modal before deletion.  
**LinkToIssue:**  
https://drive.google.com/file/d/178LY03JNRkQ1kDa95kAAH_IpSj-eHq27/view?usp=drive_link

### UI-IMP-05: Missing Labels for Expense Category Icons  
**Severity:** Medium  
**Charter:** C-02 / C-05  
**Description:** Icons on home screen have no labels, forcing users to guess or memorize categories.  
**Suggestion:** Add text labels or tooltips for clarity.  
**LinkToIssue:**  
https://drive.google.com/file/d/1IdAQUFZJAATvK_UV3GPM1zOA_TfVCBbo/view?usp=drive_link

---

## Risks

### 🔐 Data Integrity Risk – HIGH
Incorrect handling of currency exchange can show misleading balances and affect trust.

### 💳 Usability & Abandonment Risk – MEDIUM
If budget mode or category icons are unclear, users may churn due to poor UX.

### 🧾 Vendor Lock-In Risk – MEDIUM
If export/backup is premium-locked or error-prone, users cannot safely migrate data.

### 🔐 Security & Privacy Risk – HIGH
App stores and processes sensitive financial data. Requires encryption, authentication, and GDPR compliance.

