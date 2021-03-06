var SearchPanel = function() {

    //  Search fields
    this.isearchButton = element.all(by.css('[on-tap="toggleRightMenu($event)"]')).get(0);
    this.osearchButton = element.all(by.css('[on-tap="toggleRightMenu($event)"]')).get(1);
    this.backButton = element(by.css('.button.button-icon.icon.ion-ios-arrow-left'));
    this.domainSearch = element(by.css('[placeholder="Domain"]'));
    this.senderSearch = element(by.css('[placeholder="Sender"]'));
    this.recipientSearch = element(by.css('[placeholder="Recipient"]'));

    //  General Search panel
    this.dateTitle = element(by.css('[aria-label="Sent"]'));
    this.hourSearch = element(by.css('[on-tap="past24Hours()"]'));
    this.weekSearch = element(by.css('[on-tap="pastWeek()"]'));
    this.monthSearch = element(by.css('[on-tap="pastMonth()"]'));
    this.clearSearch = element(by.css('[on-tap="clearSearch()"]'));
    this.startSearch = element(by.css('[on-tap="doSearch()"]'));
    this.searchTitle = element(by.css('.scroll>h4'));
    this.backToResults = element.all(by.cssContainingText('.title', 'Back to results')).get(0);
    this.requirements = element.all(by.css('[ng-if="isSuperAdmin()"]')).get(0);

    //  Set Date panel
    this.customTitle = element(by.css('[aria-label="Custom timeframe"]'));
    this.fromdate = element(by.css('[aria-label="From date"]'));
    this.todate = element(by.css('[aria-label="To date"]'));
    this.from = element.all(by.css('.time.ng-binding')).get(0);
    this.to = element.all(by.css('.time.ng-binding')).get(1);

    //  Calendar panel
    this.calendarHead = element(by.css('.popup-title.ng-binding'));
    this.calendarOkButton = element(by.css('.button.ng-binding.button-positive'));
    this.calendarXButton = element(by.css('.button.ng-binding.button-stable'));
    this.calendar = element(by.css('.popup-body'));
    this.calendaryearField = element(by.css('[ng-model="bind.year"]'));
    this.calendarmonthButton = element(by.css('[ng-model="bind.month"]'));
    this.calendarhourField = element(by.css('[ng-model="bind.hour"]'));
    this.calendarminuteField = element(by.css('[ng-model="bind.minute"]'));

};

module.exports = SearchPanel;