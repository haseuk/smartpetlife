/**
 * 달력을 그리는 라이브러리
 * @param {Function} render 달력을 그리기위한 callback (yyyy, mm, tbody 용 tr-td 가 제공됨)
 * @param {Function} onClick 날짜가 클릭되면 호출되는 callback (ymd가 제공됨)
 * @param {Function?} dateDecoration 날짜를 그릴때 날짜 다음에 추가되는 내용이 있을경우 구현하는 callback (ymd가 제공됨)
 * @constructor
 */
var DCalendar = function(render, onClick, dateDecoration) {
  var d = new Date();
  this.yearmonth = [d.getFullYear(), d.getMonth()];
  this.render = render;
  this.callback = '__calender_click_' + DCalendar.seq++;
  window[this.callback] = onClick;
  this.dateDecoration = dateDecoration;
  this.draw();
};

DCalendar.seq = 0;

DCalendar.pad = function(num) {
  return num < 10 ? '0' + num : ''+num;
};

DCalendar.prototype.draw = function() {
  this.render(this.yearmonth[0], DCalendar.pad(this.yearmonth[1] + 1), this.makeCalendar());
};

DCalendar.prototype.moveMonth = function(delta) {
  var d = new Date(this.yearmonth[0], this.yearmonth[1] + delta);
  this.yearmonth = [d.getFullYear(), d.getMonth()];
}

DCalendar.prototype.next = function() {
  this.moveMonth( 1);
  this.draw();
};

DCalendar.prototype.prev = function() {
  this.moveMonth(-1);
  this.draw();
};

DCalendar.prototype.setMonth = function(year, month) {
  this.yearmonth = [year, month -1];
  this.draw();
}

DCalendar.prototype.getYm = function() {
  return this.yearmonth[0] + DCalendar.pad(this.yearmonth[1] + 1);
}

DCalendar.prototype.makeCalendar = function() {
  var year = this.yearmonth[0];
  var month = this.yearmonth[1];
  var d = new Date(year, month);
  var lastDate = new Date(year, month, 0).getDate();
  var startDay = d.getDay();
  var lastBlock = lastDate + startDay - 1;
  var rowCount = Math.ceil(lastBlock / 7);
  var result = '';
  var ym = this.getYm();
  var callback = this.callback;

  var dateDecoration = this.dateDecoration;
  var getTd = function(blockIndex) {
    if (blockIndex < startDay || blockIndex > lastBlock) return '<td></td>';
    var date = blockIndex - startDay + 1;
    var ymd = ym + DCalendar.pad(date);

    // var result = '<td><div onclick="'+ callback + '(\'' + ymd + '\')">';
    var result = '<td class="day d-'+ ymd +'" data-day="' +ymd+ '"><div onclick="'+ callback +'(\'' + ymd + '\')">';
    result += '<span>'+date+'</span>';

    if (dateDecoration) result += dateDecoration(ymd);

    result += '</div></td>';
    return result;
  };

  var i = 0;
  for (var row = 0; row < rowCount; row++) {
    result += '<tr>';
    for (var day = 0; day < 7; day++) {
      result += getTd(i++);
    }
    result += '</tr>';
  }

  return result;
};