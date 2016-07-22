exports.getip=function(data) {
  var ip_r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  var ip = data.match(ip_r)[0];
  return ip;
}
  // get date
exports.getdate=function(data) {
  var date_r= /\b\d{1,4}\/\d{1,2}\/\d{1,2}\b/;
  var date = data.match(date_r)[0];
  return date;
}

// get time
exports.gettime=function (data) {
  var time_r=/\b\d{1,2}:\d{1,2}:\d{1,2}\b/;
  var time = data.match(time_r)[0];
  return time;
}

// get id
exports.getid=function (data) {
  var id_r=/\bid \"(\d{1,4})\b/;
  var id = data.match(id_r)[1];
  return id;
}

// get msg
exports.getmsg=function (data) {
  var msg_r=/\bmsg \"[a-zA-Z1-9:,_/.?"'}\\%\!\@\#\$\&\*\(\)\]\s]+\b/;
  var msg=data.match(msg_r)[0].split("\"")[1];
  return msg;
}

// get hostname
exports.gethostname=function (data) {
  var hostname_r=/\bhostname "[a-zA-Z1-9-_]+\b/;
  if (data.match(hostname_r)) {
    hostname=data.match(hostname_r)[0].split("\"")[1];
  } else{
    hostname="null";
  };
  return hostname;
}

// get unique_id_r
exports.getunique_id=function (data) {
  var unique_id_r=/\bunique_id \"[a-zA-Z1-9]+\b/;
  if (data.match(unique_id_r)) {
    unique_id=data.match(unique_id_r)[0].split("\"")[1];
  } else{
    unique_id="null"
  };
  return unique_id;
}
  
// get uri
exports.geturi=function (data) {
  var uri_r=/\buri \"\/[a-zA-Z1-9_\-.]+\b/;
  if (data.match(uri_r)) {
    uri=data.match(uri_r)[0].split("\"")[1];
  } else{
    uri="null";
  };
  return uri;
}