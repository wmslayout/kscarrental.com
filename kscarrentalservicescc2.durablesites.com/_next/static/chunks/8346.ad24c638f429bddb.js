"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8346], {
        60546: function(a, n, e) {
            e.d(n, {
                OC: function() {
                    return r
                }
            });
            var i = e(85893),
                d = e(67294),
                t = e(62246),
                o = e(4433),
                m = [{
                    id: "slantLeft",
                    getPath: function(a, n) {
                        return "M".concat(a, " 0L-0 ").concat(n)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(a, n) {
                        return "M0 0L".concat(a, " ").concat(n)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(a, n) {
                        return "M0 0".concat(n, "L").concat(a / 2, " 0L").concat(a, " ").concat(n, "L").concat(1.5 * a, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(a, n) {
                        return "M0 0L".concat(a / 2, " ").concat(n, "L").concat(a, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(a, n) {
                        return "M0 0 C".concat(a / 2, " ").concat(n, " ").concat(a - a / 2, " ").concat(n, " ").concat(a, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(a, n) {
                        return "M0 ".concat(n, " C").concat(a / 2, " 0 ").concat(a - a / 2, " 0 ").concat(a, " ").concat(n)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(a, n) {
                        return "M0 0C0 0 ".concat(.2023 * a, " ").concat(n, " ").concat(.3333 * a, " ").concat(n, "C").concat(.4681 * a, " ").concat(n, " ").concat(.5318 * a, " 0 ").concat(.6667 * a, " 0C").concat(.8015 * a, " 0 ").concat(a, " ").concat(n, " ").concat(a, " ").concat(n)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(a, n) {
                        return "M".concat(a, " 0C").concat(a, " 0 ").concat(.8 * a, " ").concat(n, " ").concat(.666 * a, " ").concat(n, "C").concat(.547 * a, " ").concat(n, " ").concat(.483 * a, " 0 ").concat(.333 * a, " 0C").concat(.184 * a, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(a, n) {
                        return "M0 0L".concat(a / 3, " ").concat(n, "L").concat(a / 1.5, " 0L").concat(a, " ").concat(n)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(a, n) {
                        return "M".concat(a, " 0L").concat(a / 1.5, " ").concat(n, "L").concat(a / 3, " 0L0 ").concat(n)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(a, n) {
                        return "M0 ".concat(n, "C").concat(a, " 0 ").concat(2 * a, " 0 ").concat(2 * a, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(a, n) {
                        return "M".concat(a, " ").concat(n, "C").concat(a / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(a, n) {
                        return "M0 ".concat(n, "H").concat(a)
                    }
                }],
                c = function(a) {
                    var n = a.width,
                        e = a.shape,
                        d = a.strokeWidth,
                        t = a.strokeColor,
                        c = a.strokeType,
                        r = m.find((function(a) {
                            return a.id === (null !== e && void 0 !== e ? e : "none")
                        })),
                        u = Math.floor(n),
                        s = "none" === r.id ? Math.floor(d) : Math.floor(u / o.c8),
                        l = r.getPath(u, s);
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: s,
                        viewBox: "0 0 ".concat(u, " ").concat(s),
                        children: (0, i.jsx)("path", {
                            d: l,
                            stroke: t,
                            strokeWidth: d,
                            strokeDasharray: "dashed" === c ? "40 20" : void 0
                        })
                    })
                },
                r = function(a) {
                    var n = a.contentRef,
                        e = a.border,
                        o = a.sectionDivider,
                        m = e || {},
                        r = m.type,
                        u = m.width,
                        s = m.color,
                        l = (0, d.useState)(0),
                        h = l[0],
                        M = l[1],
                        S = (0, d.useCallback)((function() {
                            var a;
                            M(null !== (a = n.current.offsetWidth) && void 0 !== a ? a : 0)
                        }), [n]);
                    return (0, t.Z)(S, e ? n : null), e ? (0, i.jsx)(c, {
                        width: h,
                        shape: o,
                        strokeType: r,
                        strokeWidth: u,
                        strokeColor: s
                    }) : null
                }
        },
        14375: function(a, n, e) {
            e.d(n, {
                h: function() {
                    return i
                }
            });
            var i = [{
                name: "Afghanistan",
                id: "AF"
            }, {
                name: "Albania",
                id: "AL"
            }, {
                name: "Algeria",
                id: "DZ"
            }, {
                name: "American Samoa",
                id: "AS"
            }, {
                name: "AndorrA",
                id: "AD"
            }, {
                name: "Angola",
                id: "AO"
            }, {
                name: "Anguilla",
                id: "AI"
            }, {
                name: "Antarctica",
                id: "AQ"
            }, {
                name: "Antigua and Barbuda",
                id: "AG"
            }, {
                name: "Argentina",
                id: "AR"
            }, {
                name: "Armenia",
                id: "AM"
            }, {
                name: "Aruba",
                id: "AW"
            }, {
                name: "Australia",
                id: "AU"
            }, {
                name: "Austria",
                id: "AT"
            }, {
                name: "Azerbaijan",
                id: "AZ"
            }, {
                name: "Bahamas",
                id: "BS"
            }, {
                name: "Bahrain",
                id: "BH"
            }, {
                name: "Bangladesh",
                id: "BD"
            }, {
                name: "Barbados",
                id: "BB"
            }, {
                name: "Belarus",
                id: "BY"
            }, {
                name: "Belgium",
                id: "BE"
            }, {
                name: "Belize",
                id: "BZ"
            }, {
                name: "Benin",
                id: "BJ"
            }, {
                name: "Bermuda",
                id: "BM"
            }, {
                name: "Bhutan",
                id: "BT"
            }, {
                name: "Bolivia",
                id: "BO"
            }, {
                name: "Bosnia and Herzegovina",
                id: "BA"
            }, {
                name: "Botswana",
                id: "BW"
            }, {
                name: "Bouvet Island",
                id: "BV"
            }, {
                name: "Brazil",
                id: "BR"
            }, {
                name: "British Indian Ocean Territory",
                id: "IO"
            }, {
                name: "Brunei Darussalam",
                id: "BN"
            }, {
                name: "Bulgaria",
                id: "BG"
            }, {
                name: "Burkina Faso",
                id: "BF"
            }, {
                name: "Burundi",
                id: "BI"
            }, {
                name: "Cambodia",
                id: "KH"
            }, {
                name: "Cameroon",
                id: "CM"
            }, {
                name: "Canada",
                id: "CA"
            }, {
                name: "Cape Verde",
                id: "CV"
            }, {
                name: "Cayman Islands",
                id: "KY"
            }, {
                name: "Central African Republic",
                id: "CF"
            }, {
                name: "Chad",
                id: "TD"
            }, {
                name: "Chile",
                id: "CL"
            }, {
                name: "China",
                id: "CN"
            }, {
                name: "Christmas Island",
                id: "CX"
            }, {
                name: "Cocos (Keeling) Islands",
                id: "CC"
            }, {
                name: "Colombia",
                id: "CO"
            }, {
                name: "Comoros",
                id: "KM"
            }, {
                name: "Congo",
                id: "CG"
            }, {
                name: "Congo, The Democratic Republic of the",
                id: "CD"
            }, {
                name: "Cook Islands",
                id: "CK"
            }, {
                name: "Costa Rica",
                id: "CR"
            }, {
                name: "Cote D'Ivoire",
                id: "CI"
            }, {
                name: "Croatia",
                id: "HR"
            }, {
                name: "Cuba",
                id: "CU"
            }, {
                name: "Cyprus",
                id: "CY"
            }, {
                name: "Czech Republic",
                id: "CZ"
            }, {
                name: "Denmark",
                id: "DK"
            }, {
                name: "Djibouti",
                id: "DJ"
            }, {
                name: "Dominica",
                id: "DM"
            }, {
                name: "Dominican Republic",
                id: "DO"
            }, {
                name: "Ecuador",
                id: "EC"
            }, {
                name: "Egypt",
                id: "EG"
            }, {
                name: "El Salvador",
                id: "SV"
            }, {
                name: "Equatorial Guinea",
                id: "GQ"
            }, {
                name: "Eritrea",
                id: "ER"
            }, {
                name: "Estonia",
                id: "EE"
            }, {
                name: "Ethiopia",
                id: "ET"
            }, {
                name: "Falkland Islands (Malvinas)",
                id: "FK"
            }, {
                name: "Faroe Islands",
                id: "FO"
            }, {
                name: "Fiji",
                id: "FJ"
            }, {
                name: "Finland",
                id: "FI"
            }, {
                name: "France",
                id: "FR"
            }, {
                name: "French Guiana",
                id: "GF"
            }, {
                name: "French Polynesia",
                id: "PF"
            }, {
                name: "French Southern Territories",
                id: "TF"
            }, {
                name: "Gabon",
                id: "GA"
            }, {
                name: "Gambia",
                id: "GM"
            }, {
                name: "Georgia",
                id: "GE"
            }, {
                name: "Germany",
                id: "DE"
            }, {
                name: "Ghana",
                id: "GH"
            }, {
                name: "Gibraltar",
                id: "GI"
            }, {
                name: "Greece",
                id: "GR"
            }, {
                name: "Greenland",
                id: "GL"
            }, {
                name: "Grenada",
                id: "GD"
            }, {
                name: "Guadeloupe",
                id: "GP"
            }, {
                name: "Guam",
                id: "GU"
            }, {
                name: "Guatemala",
                id: "GT"
            }, {
                name: "Guernsey",
                id: "GG"
            }, {
                name: "Guinea",
                id: "GN"
            }, {
                name: "Guinea-Bissau",
                id: "GW"
            }, {
                name: "Guyana",
                id: "GY"
            }, {
                name: "Haiti",
                id: "HT"
            }, {
                name: "Heard Island and Mcdonald Islands",
                id: "HM"
            }, {
                name: "Holy See (Vatican City State)",
                id: "VA"
            }, {
                name: "Honduras",
                id: "HN"
            }, {
                name: "Hong Kong",
                id: "HK"
            }, {
                name: "Hungary",
                id: "HU"
            }, {
                name: "Iceland",
                id: "IS"
            }, {
                name: "India",
                id: "IN"
            }, {
                name: "Indonesia",
                id: "ID"
            }, {
                name: "Iran",
                id: "IR"
            }, {
                name: "Iraq",
                id: "IQ"
            }, {
                name: "Ireland",
                id: "IE"
            }, {
                name: "Isle of Man",
                id: "IM"
            }, {
                name: "Israel",
                id: "IL"
            }, {
                name: "Italy",
                id: "IT"
            }, {
                name: "Jamaica",
                id: "JM"
            }, {
                name: "Japan",
                id: "JP"
            }, {
                name: "Jersey",
                id: "JE"
            }, {
                name: "Jordan",
                id: "JO"
            }, {
                name: "Kazakhstan",
                id: "KZ"
            }, {
                name: "Kenya",
                id: "KE"
            }, {
                name: "Kiribati",
                id: "KI"
            }, {
                name: "Korea, Democratic People'S Republic of",
                id: "KP"
            }, {
                name: "Korea, Republic of",
                id: "KR"
            }, {
                name: "Kuwait",
                id: "KW"
            }, {
                name: "Kyrgyzstan",
                id: "KG"
            }, {
                name: "Lao People'S Democratic Republic",
                id: "LA"
            }, {
                name: "Latvia",
                id: "LV"
            }, {
                name: "Lebanon",
                id: "LB"
            }, {
                name: "Lesotho",
                id: "LS"
            }, {
                name: "Liberia",
                id: "LR"
            }, {
                name: "Libya",
                id: "LY"
            }, {
                name: "Liechtenstein",
                id: "LI"
            }, {
                name: "Lithuania",
                id: "LT"
            }, {
                name: "Luxembourg",
                id: "LU"
            }, {
                name: "Madagascar",
                id: "MG"
            }, {
                name: "Malawi",
                id: "MW"
            }, {
                name: "Malaysia",
                id: "MY"
            }, {
                name: "Maldives",
                id: "MV"
            }, {
                name: "Mali",
                id: "ML"
            }, {
                name: "Malta",
                id: "MT"
            }, {
                name: "Marshall Islands",
                id: "MH"
            }, {
                name: "Martinique",
                id: "MQ"
            }, {
                name: "Mauritania",
                id: "MR"
            }, {
                name: "Mauritius",
                id: "MU"
            }, {
                name: "Mayotte",
                id: "YT"
            }, {
                name: "Mexico",
                id: "MX"
            }, {
                name: "Micronesia, Federated States of",
                id: "FM"
            }, {
                name: "Moldova, Republic of",
                id: "MD"
            }, {
                name: "Monaco",
                id: "MC"
            }, {
                name: "Mongolia",
                id: "MN"
            }, {
                name: "Montserrat",
                id: "MS"
            }, {
                name: "Morocco",
                id: "MA"
            }, {
                name: "Mozambique",
                id: "MZ"
            }, {
                name: "Myanmar",
                id: "MM"
            }, {
                name: "Namibia",
                id: "NA"
            }, {
                name: "Nauru",
                id: "NR"
            }, {
                name: "Nepal",
                id: "NP"
            }, {
                name: "Netherlands",
                id: "NL"
            }, {
                name: "Netherlands Antilles",
                id: "AN"
            }, {
                name: "New Caledonia",
                id: "NC"
            }, {
                name: "New Zealand",
                id: "NZ"
            }, {
                name: "Nicaragua",
                id: "NI"
            }, {
                name: "Niger",
                id: "NE"
            }, {
                name: "Nigeria",
                id: "NG"
            }, {
                name: "Niue",
                id: "NU"
            }, {
                name: "Norfolk Island",
                id: "NF"
            }, {
                name: "North Macedonia",
                id: "MK"
            }, {
                name: "Northern Mariana Islands",
                id: "MP"
            }, {
                name: "Norway",
                id: "NO"
            }, {
                name: "Oman",
                id: "OM"
            }, {
                name: "Pakistan",
                id: "PK"
            }, {
                name: "Palau",
                id: "PW"
            }, {
                name: "Palestinian Territory, Occupied",
                id: "PS"
            }, {
                name: "Panama",
                id: "PA"
            }, {
                name: "Papua New Guinea",
                id: "PG"
            }, {
                name: "Paraguay",
                id: "PY"
            }, {
                name: "Peru",
                id: "PE"
            }, {
                name: "Philippines",
                id: "PH"
            }, {
                name: "Pitcairn Islands",
                id: "PN"
            }, {
                name: "Poland",
                id: "PL"
            }, {
                name: "Portugal",
                id: "PT"
            }, {
                name: "Puerto Rico",
                id: "PR"
            }, {
                name: "Qatar",
                id: "QA"
            }, {
                name: "RWANDA",
                id: "RW"
            }, {
                name: "Reunion",
                id: "RE"
            }, {
                name: "Romania",
                id: "RO"
            }, {
                name: "Russia",
                id: "RU"
            }, {
                name: "Saint Helena",
                id: "SH"
            }, {
                name: "Saint Kitts and Nevis",
                id: "KN"
            }, {
                name: "Saint Lucia",
                id: "LC"
            }, {
                name: "Saint Pierre and Miquelon",
                id: "PM"
            }, {
                name: "Saint Vincent and the Grenadines",
                id: "VC"
            }, {
                name: "Samoa",
                id: "WS"
            }, {
                name: "San Marino",
                id: "SM"
            }, {
                name: "Sao Tome and Principe",
                id: "ST"
            }, {
                name: "Saudi Arabia",
                id: "SA"
            }, {
                name: "Senegal",
                id: "SN"
            }, {
                name: "Serbia and Montenegro",
                id: "CS"
            }, {
                name: "Seychelles",
                id: "SC"
            }, {
                name: "Sierra Leone",
                id: "SL"
            }, {
                name: "Singapore",
                id: "SG"
            }, {
                name: "Slovakia",
                id: "SK"
            }, {
                name: "Slovenia",
                id: "SI"
            }, {
                name: "Solomon Islands",
                id: "SB"
            }, {
                name: "Somalia",
                id: "SO"
            }, {
                name: "South Africa",
                id: "ZA"
            }, {
                name: "South Georgia and the South Sandwich Islands",
                id: "GS"
            }, {
                name: "Spain",
                id: "ES"
            }, {
                name: "Sri Lanka",
                id: "LK"
            }, {
                name: "Sudan",
                id: "SD"
            }, {
                name: "Suriname",
                id: "SR"
            }, {
                name: "Svalbard and Jan Mayen",
                id: "SJ"
            }, {
                name: "Swaziland",
                id: "SZ"
            }, {
                name: "Sweden",
                id: "SE"
            }, {
                name: "Switzerland",
                id: "CH"
            }, {
                name: "Syrian Arab Republic",
                id: "SY"
            }, {
                name: "Taiwan, Province of China",
                id: "TW"
            }, {
                name: "Tajikistan",
                id: "TJ"
            }, {
                name: "Tanzania, United Republic of",
                id: "TZ"
            }, {
                name: "Thailand",
                id: "TH"
            }, {
                name: "Timor-Leste",
                id: "TL"
            }, {
                name: "Togo",
                id: "TG"
            }, {
                name: "Tokelau",
                id: "TK"
            }, {
                name: "Tonga",
                id: "TO"
            }, {
                name: "Trinidad and Tobago",
                id: "TT"
            }, {
                name: "Tunisia",
                id: "TN"
            }, {
                name: "Turkey",
                id: "TR"
            }, {
                name: "Turkmenistan",
                id: "TM"
            }, {
                name: "Turks and Caicos Islands",
                id: "TC"
            }, {
                name: "Tuvalu",
                id: "TV"
            }, {
                name: "Uganda",
                id: "UG"
            }, {
                name: "Ukraine",
                id: "UA"
            }, {
                name: "United Arab Emirates",
                id: "AE"
            }, {
                name: "United Kingdom",
                id: "GB"
            }, {
                name: "United States",
                id: "US"
            }, {
                name: "United States Minor Outlying Islands",
                id: "UM"
            }, {
                name: "Uruguay",
                id: "UY"
            }, {
                name: "Uzbekistan",
                id: "UZ"
            }, {
                name: "Vanuatu",
                id: "VU"
            }, {
                name: "Venezuela",
                id: "VE"
            }, {
                name: "Vietnam",
                id: "VN"
            }, {
                name: "Virgin Islands, British",
                id: "VG"
            }, {
                name: "Virgin Islands, U.S.",
                id: "VI"
            }, {
                name: "Wallis and Futuna",
                id: "WF"
            }, {
                name: "Western Sahara",
                id: "EH"
            }, {
                name: "Yemen",
                id: "YE"
            }, {
                name: "Zambia",
                id: "ZM"
            }, {
                name: "Zimbabwe",
                id: "ZW"
            }, {
                name: "\xc5land Islands",
                id: "AX"
            }]
        },
        399: function(a, n, e) {
            e.d(n, {
                Z: function() {
                    return o
                }
            });
            var i = e(67294),
                d = "website-header";

            function t(a) {
                var n;
                return a && 1 === a.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(d)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function o(a) {
                var n, e, d = (0, i.useState)(0),
                    o = d[0],
                    m = d[1],
                    c = (0, i.useState)([0, 0]),
                    r = c[0],
                    u = c[1];
                return (0, i.useEffect)((function() {
                    var n, e = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var i = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            a && m(t(a))
                        })), i && n.observe(i)
                    } catch (d) {}
                    return window.addEventListener("resize", e), e(),
                        function() {
                            window.removeEventListener("resize", e), n && n.disconnect()
                        }
                }), []), (0, i.useEffect)((function() {
                    a && m(t(a))
                }), [a, r]), {
                    minHeight: (null === a || void 0 === a || null === (n = a.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === a || void 0 === a || null === (e = a.spacing) || void 0 === e ? void 0 : e.minHeight) ? "100vh" : "134px", " - ").concat((null === a || void 0 === a ? void 0 : a.combineWithHeader) ? 0 : o, "px)") : "134px",
                    headerHeight: o
                }
            }
        }
    }
]);