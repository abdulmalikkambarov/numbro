/*!
 * numeral.js language configuration
 * language : czech (cs)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'Kč',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('cs-CZ', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : danish denmark (dk)
 * author : Michael Storgaard : https://github.com/mstorgaard
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'DKK',
			position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('da-DK', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('de-DE', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : German in Switzerland (de-ch)
 * author : Michael Piefel : https://github.com/piefel (based on work from Marco Krage : https://github.com/sinky)
 */ 
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'CHF',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('de-CH', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : english united kingdom (uk)
 * author : Dan Ristic : https://github.com/dristic
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '£',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: '$ ,0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('en-GB', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : spanish
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                (b === 7 || b === 0) ? 'mo' : 
		(b === 8) ? 'vo' :
		(b === 9) ? 'no' : 'to';
        },
        currency: {
            symbol: '$',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('es-AR', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : spanish Spain
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                    (b === 7 || b === 0) ? 'mo' :
                        (b === 8) ? 'vo' :
                            (b === 9) ? 'no' : 'to';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('es', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : Estonian
 * author : Illimar Tambek : https://github.com/ragulka
 *
 * Note: in Estonian, abbreviations are always separated
 * from numbers with a space
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tuh',
            million: ' mln',
            billion: ' mld',
            trillion: ' trl'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('et-EE', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : Finnish
 * author : Sami Saada : https://github.com/samitheberber
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('fi-FI', language);
    }
}());

/*!
 * numbro.js language configuration
 * language : french (Canada) (fr-CA)
 * author : Léo Renaud-Allaire : https://github.com/renaudleo
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: '$',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: '$ ,0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('fr-CA', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : french (fr-ch)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    var language = {
        delimiters: {
            thousands: '\'',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: 'CHF',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('fr-CH', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : french (fr)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('fr-FR', language);
    }
}());
/*!
 * numbro.js language configuration
 * language : Hungarian (hu)
 * author : Peter Bakondy : https://github.com/pbakondy
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'E',  // ezer
            million: 'M',   // millió
            billion: 'Mrd', // milliárd
            trillion: 'T'   // trillió
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: ' Ft',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('hu-HU', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : italian Italy (it)
 * author : Giacomo Trombi : http://cinquepunti.it
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('it-IT', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : japanese
 * author : teppeis : https://github.com/teppeis
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '千',
            million: '百万',
            billion: '十億',
            trillion: '兆'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: '$ ,0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('ja-JP', language);
    }
}());

/*!
 * numbro.js language configuration
 * language : Latvian (lv)
 * author : Lauris Bukšis-Haberkorns : https://github.com/Lafriks
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tūkst.',
            million: ' milj.',
            billion: ' mljrd.',
            trillion: ' trilj.'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('lv-LV', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : norwegian
 * author : Benjamin Van Ryseghem
 */
(function() {
	var language = {
		delimiters: {
			thousands: ' ',
			decimal: ','
		},
		abbreviations: {
			thousand: 't',
			million: 'M',
			billion: 'md',
			trillion: 't'
		},
		currency: {
			symbol: 'kr',
			position: 'postfix'
		},
		defaults: {
			currencyFormat: ',0000 a'
		},
		formats: {
			fourDigits: '0000 a',
			fullWithTwoDecimals: ',0.00 $',
			fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
		}
	};

	// Node
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = language;
	}
	// Browser
	if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
		this.numbro.language('nb-NO', language);
	}
}());
/*! 
 * numbro.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mld',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('nl-BE', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : netherlands-dutch (nl-nl)
 * author : Dave Clayton : https://github.com/davedx
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mrd',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('nl-NL', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : polish (pl)
 * author : Dominik Bulaj : https://github.com/dominikbulaj
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tys.',
            million: 'mln',
            billion: 'mld',
            trillion: 'bln'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'PLN',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('pl-PL', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : portuguese brazil (pt-br)
 * author : Ramiro Varandas Jr : https://github.com/ramirovjr
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        currency: {
            symbol: 'R$',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('pt-BR', language);
    }
}());
/*! 
 * numbro.js language configuration
 * language : portuguese (pt-pt)
 * author : Diogo Resende : https://github.com/dresende
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return 'º';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('pt-PT', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : russian (ru)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.'; 
        },
        currency: {
            symbol: 'руб.',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('ru-RU', language);
    }
}());

// numbro.js language configuration
// language : Russian for the Ukraine (ru-UA)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.'; 
        },
        currency: {
            symbol: '\u20B4',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('ru-UA', language);
    }
}());

/*!
 * numbro.js language configuration
 * language : slovak (sk)
 * author : Ahmed Al Hafoudh : http://www.freevision.sk
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('sk-SK', language);
    }
}());

/*!
 * numbro.js language configuration
 * language : swedish - Sweden
 * author : Benjamin Van Ryseghem (benjamin.vanryseghem.com)
 */
(function() {
	var language = {
		delimiters: {
			thousands: ' ',
			decimal: ','
		},
		abbreviations: {
			thousand: 't',
			million: 'M',
			billion: 'md',
			trillion: 't'
		},
		currency: {
			symbol: 'kr',
			position: 'postfix'
		},
		defaults: {
			currencyFormat: ',0000 a'
		},
		formats: {
			fourDigits: '0000 a',
			fullWithTwoDecimals: ',0.00 $',
			fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
		}
	};

	// Node
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = language;
	}
	// Browser
	if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
		this.numbro.language('sv-SE', language);
	}
}());
/*! 
 * numbro.js language configuration
 * language : thai (th)
 * author : Sathit Jittanupat : https://github.com/jojosati
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'พัน',
            million: 'ล้าน',
            billion: 'พันล้าน',
            trillion: 'ล้านล้าน'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '฿',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('th-TH', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : turkish (tr)
 * author : Ecmel Ercan : https://github.com/ecmel, Erhan Gundogan : https://github.com/erhangundogan, Burak Yiğit Kaya: https://github.com/BYK
 */
(function() {
	var suffixes = {
			1: '\'inci',
			5: '\'inci',
			8: '\'inci',
			70: '\'inci',
			80: '\'inci',

			2: '\'nci',
			7: '\'nci',
			20: '\'nci',
			50: '\'nci',

			3: '\'üncü',
			4: '\'üncü',
			100: '\'üncü',

			6: '\'ncı',

			9: '\'uncu',
			10: '\'uncu',
			30: '\'uncu',

			60: '\'ıncı',
			90: '\'ıncı'
		},
		language = {
			delimiters: {
				thousands: '.',
				decimal: ','
			},
			abbreviations: {
				thousand: 'bin',
				million: 'milyon',
				billion: 'milyar',
				trillion: 'trilyon'
			},
			ordinal: function(number) {
				if (number === 0) {  // special case for zero
					return '\'ıncı';
				}

				var a = number % 10,
					b = number % 100 - a,
					c = number >= 100 ? 100 : null;

				return suffixes[a] || suffixes[b] || suffixes[c];
			},
			currency: {
				symbol: '\u20BA',
				position: 'postfix'
			},
			defaults: {
				currencyFormat: ',0000 a'
			},
			formats: {
				fourDigits: '0000 a',
				fullWithTwoDecimals: ',0.00 $',
				fullWithTwoDecimalsNoCurrency: ',0.00',
				fullWithNoDecimals: ',0 $'
			}
		};

	// Node
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = language;
	}
	// Browser
	if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
		this.numbro.language('tr-TR', language);
	}
}());

// numbro.js language configuration
// language : Ukrainian for the Ukraine (uk-UA)
// author : Michael Piefel : https://github.com/piefel (with help from Tetyana Kuzmenko)
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тис.',
            million: 'млн',
            billion: 'млрд',
            trillion: 'блн'
        },
        ordinal: function () {
            // not ideal, but since in Ukrainian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return ''; 
        },
        currency: {
            symbol: '\u20B4',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('uk-UA', language);
    }
}());

/*! 
 * numbro.js language configuration
 * language : simplified chinese
 * author : badplum : https://github.com/badplum
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '千',
            million: '百万',
            billion: '十亿',
            trillion: '兆'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: '$ ,0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('zh-CN', language);
    }
}());
