class ExpensePage {
    // Locators   

    get amountInput() {
        return $('id=com.monefy.app.lite:id/amount_text'); // Amount input field locator
    }

    get categoryButton() {
        return $('id=com.monefy.app.lite:id/keyboard_action_button'); // Category selection button locator
    }

    get noteInput() {
        return $('id=com.monefy.app.lite:id/noteAutocompleteTextInputLayout'); // Note input field locator
    }

    get paymentIcon() {
        return $('id=com.monefy.app.lite:id/icon'); // Note input field locator
    }

    get cardInput() {
        return $('//android.widget.TextView[@resource-id="com.monefy.app.lite:id/title" and @text="Payment card"]'); // Card input field locator
    }

    get dateCalendar() {
        return $('//android.widget.TextView[@resource-id="com.monefy.app.lite:id/textViewDate"]'); // Date input field locator
    }

    get editDate() {
        return $('id=com.monefy.app.lite:id/mtrl_picker_header_toggle'); // Edit date locator
    }
    get dateInput() {
        return $('//android.widget.TextView[@resource-id="com.monefy.app.lite:id/textinput_placeholder"]'); // Date input field locator
    }
    get dateOk() {
        return $('//android.widget.Button[@resource-id="com.monefy.app.lite:id/confirm_button"]'); // Date ok locator
    }

    get billsCategory() {
        return $('//android.widget.GridView[@resource-id="com.monefy.app.lite:id/gridViewCategories"]/android.widget.FrameLayout[1]/android.widget.LinearLayout'); // Bills category locator
    }

    get carsCategory() {
        return $('//android.widget.GridView[@resource-id="com.monefy.app.lite:id/gridViewCategories"]/android.widget.FrameLayout[2]'); // Cars category locator
    }

    get saveButton() {
        return $('id=com.monefy.app.lite:id/save'); // Save button locator
    }

    // Actions

    async setDate(date) {
        await this.dateCalendar.click();
        await this.editDate.click();
        await this.dateInput.setValue(date);
        await this.dateOk.click();
    }

}

module.exports = new ExpensePage(); 