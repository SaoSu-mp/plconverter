/*
PangLong converter is created by TawngPha Information Technology. This is only for Shan or Tai characters from Zawgyi-Tai to Unicode and Unicode to Zawgyi-Tai.
Author: Sai Tawng Pha
emai: tawngphait@pm.me
*/
var PLScript = {
  "zg2uni" : zg2uni,
  "uni2zg": uni2zg
}

function uni2zg(output) {
  var rule = [
   
    {"from": "([\u1010])(\u103c)\u1083",
      "to": "$2$1\uaa23"
    },/*TaLa*/
    {"from": "\u107d(\u103c)\u1083",
      "to": "$1\uaa15\uaa23"
    },/*faLa*/   
    {"from": "\u103a",
      "to": "\u1039"
    },/*saat*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107c\u107d\u107e\u1081\u1022])\u1031",
        "to": "\u1031$1"
    },/*ၵ-ဢ ဢေသႂ်ႇ*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107b\u107d\u107e\u1081\u1022])\u103b\u1031",
        "to": "\u1031$1\u103a"
    },/*ၵ-ဢ- ၵျေ*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107b\u107d\u107e\u1081\u1022])\u103b\u1083",
        "to": "$1\u103a\uaa23"
    },/*ၵ-ဢ- ၵျေႃ*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107b\u107d\u107e\u1081\u1022])(\u103b)?(\u103d)?",
        "to": "$1$3$2"
    },/*ၵ-ဢ ၵျွ*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107b\u107d\u107e\u1081\u1022])(\u103b)(\u102d)\u102f",
        "to": "$1$2$3\u1033"
    },/*ၵ-ဢ ၵျို*/
    {
        "from": "([\u1000-\u1021\u108f\u1029\u106e\u106f\u1090\u1091\u1092\u1097\u1075\u1076\u1078\u107a\u107b\u107d\u107e\u1081\u1022])(\u103b)(\u102d)\u1030",
        "to": "$1$2$3\u1034"
    },/*ၵ-ဢ ၵျိူ*/
    {
      "from": "([\u1075\u1076\u1004\u1078\u101e\u107a\u1010\u1011\u107c\u1015\u107d\u107e\u1019\u101a\u101b\u101c\u101d\u1081\u1022])\u1084",
      "to": "\uaa2c$1"
    },/*ၵ-ဢ ဢႄသႂ်ႇ*/
    {
      "from": "\u1075",
      "to": "\uaa00"
    },/*ၵ*/
    {
      "from": "\u1076",
      "to": "\uaa01"
    },/*ၶ*/
    {
      "from": "\u1004",
      "to": "\u1004"
    },/*င*/
    {
      "from": "\u1078",
      "to": "\uaa05"
    },/*ၸ*/
    {
      "from": "\u101e",
      "to": "\u101e"
    },/*သ*/
    {
      "from": "\u107a",
      "to": "\uaa09"
    },/*ၺ*/
    {
      "from": "\u1010",
      "to": "\u1010"
    },/*တ*/ 
    {
      "from": "\u1011",
      "to": "\u1011"
    },/*ထ*/
    {
      "from": "\u107c",
      "to": "\uaa13"
    },/*ၼ*/
    {
      "from": "\u1015",
      "to": "\u1015"
    },/*ပ*/
    {
      "from": "\u107d",
      "to": "\uaa15"
    },/*ၽ*/
    {
      "from": "\u107e",
      "to": "\uaa18"
    },/*ၾ*/
    {
      "from": "\u1019",
      "to": "\u1019"
    },/*မ*/
    {
      "from": "\u101a",
      "to": "\u101a"
    },/*ယ*/
    {
      "from": "\u101b",
      "to": "\u101b"
    },/*ရ*/
    {
      "from": "\u101c",
      "to": "\u101c"
    },/*လ*/
    {
      "from": "\u101d",
      "to": "\u101d"
    },/*ဝ*/
    {
      "from": "\u1081",
      "to": "\uaa1f"
    },/*ႁ*/
    {
      "from": "\u1022",
      "to": "\uaa21"
    },/*ဢ*/
    {
      "from": "\u1087",
      "to": "\uaa32"
    },/*-ယၵ်း*/
    {
      "from": "\u1088",
      "to": "\uaa33"
    },/*-ယၵ်းၸမ်ႈ*/
    {
      "from": "\u1038",
      "to": "\uaa34"
    },/*-ၸမ်ႈၼႃႈ*/
    {
      "from": "\u1089",
      "to": "\uaa35"
    },/*ၸမ်ႈတႂ်ႈ*/
    {
      "from": "\u108a",
      "to": "\uaa36"
    },/*ယၵ်းၶိုၼ်ႈ*/
    {
      "from": "\u1062",
      "to": "\uaa24"
    },/*ဢႃပွတ်း*/
    {
      "from": "\u1083",
      "to": "\uaa23"
    },/*ဢႃယၢဝ်း*/
    {
      "from": "\u1035",
      "to": "\uaa31"
    },/*ဢေတၢင်ႇ*/
    {
      "from": "\u1085",
      "to": "\uaa30"
    },/*ဢႄတၢင်ႇ*/
    {
      "from": "\u1082",
      "to": "\uaa2e"
    },/*ၵႂႆႉတႂ်ႈ*/
    {
      "from": "\u1086",
      "to": "\uaa2f"
    },/*kaikhue*/
    {
        "from": "\u103b",
        "to": "\u103a"
    },/*yawa*/
    {
        "from": "\u103c",
        "to": "\u103b"
    },/*rawamad*/
    {
       "from": "\u103d",
        "to": "\u103c"
    },/*wahoi*/
    {
        "from": "\u1084",
        "to": "\uaa2c"
    },/*ႄ*/
    {
        "from": "\u103e",
        "to": "\u103d"
    },/*hahtoo*/
    {
      "from": "\u1090",
      "to": "\uaa3b"
    },/*0*/
    {
      "from": "\u1091",
      "to": "\uaa3c"
    },/*1*/
    {
      "from": "\u1092",
      "to": "\uaa3d"
    },/*2*/
    {
      "from": "\u1093",
      "to": "\uaa3e"
    },/*3*/
    {
      "from": "\u1094",
      "to": "\uaa3f"
    },/*4*/
    {
      "from": "\u1095",
      "to": "\uaa40"
    },/*5*/
    {
      "from": "\u1096",
      "to": "\uaa41"
    },/*6*/
    {
      "from": "\u1097",
      "to": "\uaa42"
    },/*7*/
    {
      "from": "\u1098",
      "to": "\uaa43"
    },/*8*/
    {
      "from": "\u1099",
      "to": "\uaa44"
    }/*9*/
]
;
  return replace_with_rule(rule,output);
}

function zg2uni(output) {
  var rule = [
    /*{
        "from" : "([\u102D\u102E\u103D\u102F\u1037\u1095])\\1+",
        "to" : "$1"
    },*/
    {
        "from": "\u200B",
        "to": ""
    }, 
    {
        "from": "(\u103d|\u1087)",
        "to": "\u103e"
    },/*hathoo*/
    {
        "from": "\u103c",
        "to": "\u103d"
    },/*wahoi*/
    {
        "from": "(\u103b|\u107e|\u107f|\u1080|\u1081|\u1082|\u1083|\u1084)",
        "to": "\u103c"
    },/*yawamad-to-yawamad*/
    {
        "from": "(\u103a|\u107d)",
        "to": "\u103b"
    },/*yawa*/
    {
        "from": "\u1039",
        "to": "\u103a"
    },/*saat*/
    {"from": "[\u103a]+",
      "to": "\u103a"
    },/*saat+*/
    {
        "from": "\u103c([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])?",
        "to": "$1\u103c$2"
    },/*ၵ-ဢ တႁွပ်ႇလဵပ်ႈဢႃ*/
    {
        "from": "([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])?\u103d\u103b",
        "to": "$1\u103b\u103d"
    },/*ၵ-ဢ ၵျွင်း*/
    {
        "from": "([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])?\u1033",
        "to": "$1\u1083"
    },/*ၵ-ဢ တိုတ်ႉၼိုင်ႈယႂ်ႇပဵၼ်ဢႃ*/
    {
        "from": "([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])?\uaa2f\uaa24",
        "to": "$1\u1062\u1086"
    },/*ၵ-ဢ ဢႃပွတ်းၵၢႆႇၶိုတ်း*/
    {
        "from": "\u1031([\u1000-\u1021\u103f\uaa00\uaa01\uaa05\uaa09\uaa13\uaa15\uaa18\uaa1f\uaa21])(\u103e)?(\u103b)?",
        "to": "$1$2$3\u1031"
    },/*ဢေသႂ်ႇဢႃ*/
    {
      "from": "\uaa2c([\u1000-\u1021\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])",
      "to": "$1\u1084"
    },/*ဢႄသႂ်ႇ*/
    {
      "from": "\uaa00",
      "to": "\u1075"
    },/*ၵ*/
    {
      "from": "\uaa01",
      "to": "\u1076"
    },/*ၶ*/
    {
      "from": "\uaa05",
      "to": "\u1078"
    },/*ၸ*/
    {
      "from": "\uaa09",
      "to": "\u107a"
    },/*ၺ*/
    {
      "from": "\uaa13",
      "to": "\u107c"
    },/*ၼ*/
    {
      "from": "\uaa15",
      "to": "\u107d"
    },/*ၽ*/
    {
      "from": "\uaa18",
      "to": "\u107e"
    },/*ၾ*/
    {
      "from": "\uaa1f",
      "to": "\u1081"
    },/*ႁ*/
    {
      "from": "\uaa21",
      "to": "\u1022"
    },/*ဢ*/
    {
      "from": "\uaa32",
      "to": "\u1087"
    },/*ယၵ်း*/
    {
      "from": "\uaa33",
      "to": "\u1088"
    },/*ယၵ်းၸမ်ႈ*/
    {
      "from": "\uaa34",
      "to": "\u1038"
    },/*ၸမ်ႈၼႃႈ*/
    {
      "from": "\uaa35",
      "to": "\u1089"
    },/*ၸမ်ႈတႂ်ႈ*/
    {
      "from": "\uaa36",
      "to": "\u108a"
    },/*ယၵ်းၶိုၼ်ႈ*/
    {
      "from": "\uaa24",
      "to": "\u1062"
    },/*ဢႃပွတ်း*/
    {
      "from": "\uaa23",
      "to": "\u1083"
    },/*ဢႃယၢဝ်း*/
    {
      "from": "\uaa31",
      "to": "\u1035"
    },/*ဢေတၢင်ႇ*/
    {
      "from": "\uaa30",
      "to": "\u1085"
    },/*ဢႄတၢင်ႇ*/
    {
      "from": "\uaa2e",
      "to": "\u1082"
    },/*ၵႂႆႉတႂ်ႈ*/
    {
      "from": "\uaa2f",
      "to": "\u1086"
    },/*kaikhue*/
    {
        "from": "\uaa2c",
        "to": "\u1084"
    },/*ႄ*/
    {
        "from": "[\u103d]+",
        "to": "\u103d"
    },
    {
        "from": "\u1033",
        "to": "\u102f"
    },/*sign-u*/
    {
        "from": "\u1034",
        "to": "\u1030"
    },/*sign-uu*/
    {
        "from": "(\u102f|\u1030)(\u102d|\u102e)",
        "to": "$2$1"
    },/*sign-i-to-sign-u-sign-uu*/
    {
        "from": "(\u1039|\u103a)\uaa2f",
        "to": "\uaa2f$1"
    },
    {
        "from": "([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])\u002b(\u1039|\u103a)\uaa2f",
        "to": "$1\u1082$2"
    },/*ၵ-ဢ ၵၢင်းၵိင်း*/
    {
        "from": "([\uaa00\uaa01\u1004\uaa05\u101e\uaa09\u1010\u1011\uaa13\u1015\uaa15\uaa18\uaa19\u101a\u101b\u101c\u101d\uaa1f\uaa21])\uaa2f(\u1039|\u103a)([\uaa32|\uaa33|\uaa34|\uaa35|\uaa36])",
        "to": "$1\u1082$2$3"
    },
    {
      "from": "\uaa3b",
      "to": "\u1090"
    },/*0*/
    {
      "from": "\uaa3c",
      "to": "\u1091"
    },/*1*/
    {
      "from": "\uaa3d",
      "to": "\u1092"
    },/*2*/
    {
      "from": "\uaa3e",
      "to": "\u1093"
    },/*3*/
    {
      "from": "\uaa3f",
      "to": "\u1094"
    },/*4*/
    {
      "from": "\uaa40",
      "to": "\u1095"
    },/*5*/
    {
      "from": "\uaa41",
      "to": "\u1096"
    },/*6*/
    {
      "from": "\uaa42",
      "to": "\u1097"
    },/*7*/
    {
      "from": "\uaa43",
      "to": "\u1098"
    },/*8*/
    {
      "from": "\uaa44",
      "to": "\u1099"
    }/*9*/
 
];
  return replace_with_rule(rule,output);
}

function replace_with_rule(rule,output) {

  var max_loop = rule.length;
  for(i=0; i < max_loop; i++) {
    
    var data = rule[i];
    var from = data["from"];
    var to = data["to"];

    var from_regex = new RegExp(from,"g");
    output = output.replace(from_regex,to);
  }

  return output;

}
