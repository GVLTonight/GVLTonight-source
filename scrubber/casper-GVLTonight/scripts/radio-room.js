var casper = require('casper').create({
  pageSettings: {
    customHeaders: {
      'Accept-Encoding': 'identity'
    }
  }
});
var url = 'http://www.radioroomgreenville.com/calendar';

casper.start(url);

casper.waitForSelector('.tour-item', function(){
    var js = this.evaluate(function() {
        return document;
    });
    var buffer = JSON.stringify(js.all[0].outerHTML);
    var result = buffer.slice(1, -1);
    var strip_newlines = result.replace(new RegExp('\\\\n', 'g'), '');
    var stripped = strip_newlines.replace(new RegExp('\\\\', 'g'), '');

    this.echo(stripped);
});

casper.run();
