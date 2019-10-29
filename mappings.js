/*
   This is a subpage of [[User:Dudemanfellabra/AddCommonsCatLinks.js]] which includes the relevant information about each supported
   register as well as the translations of the GUI into the various languages. This is not intended to be a standalone script but
   is rather called by the main script as a setup file.
*/

var RegisterTable = {
    "ar":{ // Arabic
        "Algeria":{
            "TopCatName":"Category:Cultural_monuments_in_Algeria_with_known_IDs",
            "RowTemplate":"صف معلم الجزائر",
            "PropertyNameParam":"اسم",
            "IdentifierName":"رقم",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"صورة",
            "Unverified":true
        },
        "Jordan":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Jordan_with_known_IDs",
            "RowTemplate":"معلم الأردن",
            "PropertyNameParam":"اسم",
            "IdentifierName":"رقم",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"صورة",
            "Unverified":true
        }
    },
    "az":{ // Azerbaijani
        "Azerbaijan":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Azerbaijan_with_known_IDs",
            "RowTemplate":"AZE Monument row",
            "PropertyNameParam":"name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        }
    },
    "be-x-old":{ // Belarusian
        "Belarus":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Belarus_with_known_IDs",
            "RowTemplate":"Вікі любіць славутасьці/Элемэнт сьпісу",
            "PropertyNameParam":"назва",
            "IdentifierName":"шыфр",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"выява",
            "Unverified":true
        }
    },
    "ca":{ // Catalan
        "Andorra":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Andorra_with_known_IDs",
            "RowTemplate":"Filera BIC And",
            "PropertyNameParam":"nom",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        },
        "France":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_France_with_known_IDs",
            "RowTemplate":"Filera MH",
            "PropertyNameParam":"nom",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        },
        "Spain":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Spain_with_known_IDs",
            "RowTemplate":"Filera BIC",
            "PropertyNameParam":"nom",
            "IdentifierName":"bic",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        },
        "Spain - Catalonia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Spain_with_known_IDs",
            "RowTemplate":"Filera IPA",
            "PropertyNameParam":"nom",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        },
        "Spain - Catalonia - WLPA":{
            "TopCatName":"Category:Public_art_in_Spain_with_known_IDs",
            "RowTemplate":"Filera art públic",
            "PropertyNameParam":"nom",
            "IdentifierName":"codi",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        },
        "Spain - Valencia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Spain_with_known_IDs",
            "RowTemplate":"Filera BIC Val",
            "PropertyNameParam":"nom",
            "IdentifierName":"bic",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"imatge",
            "Unverified":true
        }
    },
    "cs":{ // Czech
        "Czech Republic":{
            "TopCatName":"Category:Cultural_monuments_in_the_Czech_Republic_with_known_IDs",
            "RowTemplate":"Památky v Česku",
            "PropertyNameParam":"Název",
            "IdentifierName":"Id_objektu",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commons",
            "ImageParam":"Obrázek",
            "Unverified":false
        }
    },
    "da":{ // Danish
        "Denmark Archaeological monuments":{
            "TopCatName":"Category:Archaeological_monuments_in_Denmark_with_known_IDs",
            "RowTemplate":"Tabelrække FF",
            "PropertyNameParam":"stednavn",
            "IdentifierName":"systemnummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"billede",
            "Unverified":true
        },
        "Denmark Listed buildings":{
            "TopCatName":"Category:Listed_buildings_in_Denmark_with_known_IDs",
            "RowTemplate":"Tabelrække FBB",
            "PropertyNameParam":"betegnelse",
            "IdentifierName":["kommunenr","ejendomsnr","bygningsnr"], // "bygningsnr" has default value 1
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"billede",
            "Unverified":true
        }
    },
    "de":{ // German
        "Austria":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Austria_with_known_IDs",
            "RowTemplate":"Denkmalliste Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ObjektID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Austria 2":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Austria_with_known_IDs",
            "RowTemplate":"Denkmalliste Österreich Tabellenzeile \\(ehemaliges Denkmal\\)", // must escape parentheses for regex
            "PropertyNameParam":"Name",
            "IdentifierName":"ObjektID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Austria 3":{
            "TopCatName":"Category:Natural_monuments_in_Austria_with_known_ID",
            "RowTemplate":"Naturdenkmal Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Austria - WLPA":{
            "TopCatName":"Category:Public_art_in_Austria_with_known_IDs",
            "RowTemplate":"WLPA-AT-Zeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":true
        },
        "Austria - WLE - ND":{
            "TopCatName":"Category:Natural_monuments_in_Austria_with_known_ID",
            "RowTemplate":"Naturdenkmal Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":["Region-ISO", "ID"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":true
        },
        "Austria - WLE - NSG":{
            "TopCatName":"Category:Nature_reserves_in_Austria_with_known_ID",
            "RowTemplate":"Naturschutzgebiet Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":["Region-ISO", "ID"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":true
        },
        "Austria - WLE - GLT":{
            "TopCatName":"Category:Protected landscape elements in Austria with known ID",
            "RowTemplate":"Geschützter Landschaftsteil Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":["Region-ISO", "ID"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":true
        },
        "Austria - WLE - HOE":{
            "TopCatName":"Category:Protected_caves_in_Austria_with_known_ID",
            "RowTemplate":"Geschützte Höhle Österreich Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":true
        },
        "Nepomuk":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Austria_with_known_IDs",
            "RowTemplate":"Nepomuk-Liste-Tabellenzeile",
            "PropertyNameParam":"Typ",
            "IdentifierName":"ObjektID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Gemeindebau Wien":{
            "TopCatName":"Category:Gemeindebau_in_Vienna_with_known_ID",
            "RowTemplate":"Gemeindebau Wien Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Germany - Bavaria":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Bavaria_with_known_IDs",
            "RowTemplate":"Denkmalliste Bayern Tabellenzeile",
            "PropertyNameParam":"Adresse",
            "IdentifierName":"Nummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Germany - Brandenburg":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Brandenburg_with_known_ID",
            "RowTemplate":"Denkmalliste Brandenburg Tabellenzeile",
            "PropertyNameParam":"Adresse",
            "IdentifierName":"Id",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Germany - Hesse":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Hesse_with_known_IDs",
            "RowTemplate":"Denkmalliste Hessen Tabellenzeile",
            "PropertyNameParam":"Bezeichnung",
            "IdentifierName":"Nummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild", // also "Bild2", "Bild3", but I think those wouldn't be used unless 1 was.. leaving them out for now
            "Unverified":false
        },
        "Germany - North Rhine-Westphalia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_NRW_with_known_ID",
            "RowTemplate":"Denkmalliste1 Tabellenzeile",
            "PropertyNameParam":"Bezeichnung",
            "IdentifierName":"Nummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Germany - North Rhine-Westphalia - Bergheim":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Bergheim_with_known_ID",
            "RowTemplate":"Denkmalliste Bergheim Tabellenzeile",
            "PropertyNameParam":"Bezeichnung",
            "IdentifierName":"Nummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Germany - North Rhine-Westphalia - Cologne":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Cologne_with_known_ID",
            "RowTemplate":"Denkmalliste Köln Tabellenzeile",
            "PropertyNameParam":"Bezeichnung",
            "IdentifierName":"Nummer_Denkmalliste",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Germany - Saxony":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Saxony_with_known_ID",
            "RowTemplate":"Denkmalliste Sachsen Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Bild",
            "Unverified":false
        },
        "Italy - South Tyrol":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_South_Tyrol_with_known_IDs",
            "RowTemplate":"Denkmalliste Südtirol Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ObjektID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Malta":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Malta_with_known_IDs",
            "RowTemplate":"Denkmalliste Malta Tabellenzeile",
            "PropertyNameParam":"Name-de",
            "IdentifierName":"Inventarnummer",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat", // not in use
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Slovakia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Slovakia_with_known_IDs",
            "RowTemplate":"Denkmalliste Slowakei Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"ObjektID",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Switzerland":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Denkmalliste Schweiz Tabellenzeile",
            "PropertyNameParam":["Anzeige-Objekt","Objekt"],
            "IdentifierName":"KGS-Nr",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Switzerland2":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Denkmalliste2 Schweiz Tabellenzeile",
            "PropertyNameParam":["Anzeige-Objekt","Objekt"],
            "IdentifierName":["Region-ISO","ID"],
            "CombineIdentifiers":true,
            "CombineWith":"/",
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Switzerland3":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Denkmalliste2 Schweiz-ZH Tabellenzeile",
            "PropertyNameParam":["Anzeige-Objekt","Objekt"],
            "IdentifierName":["Region-ISO","ID"],
            "CombineIdentifiers":true,
            "CombineWith":"/",
            "CommonscatParam":"Commonscat",
            "ImageParam":"Foto",
            "Unverified":false
        },
        "Switzerland4":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Kulturgüter Schweiz Tabellenzeile",
            "PropertyNameParam":"Name",
            "IdentifierName":"KGS-Nr",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat", // not in use
            "ImageParam":"Foto",
            "Unverified":false
        }
    },
    "en":{ // English
        "Antarctica":{
            "TopCatName":"Category:Antarctic_Protected_Areas_with_known_IDs",
            "RowTemplate":"Antarctic Protected Area row",
            "PropertyNameParam":"name",
            "IdentifierName":["type","number"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Aruba":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Aruba_with_known_IDs",
            "RowTemplate":"Table row Aruba monuments",
            "PropertyNameParam":"descr_en",
            "IdentifierName":"objcode",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Belgium - Flemish Region":{
            "TopCatName":"Category:Onroerend_erfgoed_with_known_IDs",
            "RowTemplate":"Table row BE",
            "PropertyNameParam":"descr_en",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Belgium - Wallonia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Wallonia_with_known_IDs",
            "RowTemplate":"Table row Wallonia",
            "PropertyNameParam":"descr_en",
            "IdentifierName":["niscode","objcode"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Canada":{
            "TopCatName":"Category:Heritage_properties_in_Canada_with_known_IDs",
            "RowTemplate":"HPC row",
            "PropertyNameParam":"name",
            "IdentifierName":["idf","idp","idm"],
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "China":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_China_with_known_IDs",
            "RowTemplate":"NHS China row",
            "PropertyNameParam":"site",
            "IdentifierName":"designation",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Ghana":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Ghana_with_known_IDs",
            "RowTemplate":"Ghana Monument row",
            "PropertyNameParam":"name",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Hong Kong - Declared Monuments":{
            "TopCatName":"Category:Declared_monuments_of_Hong_Kong_with_known_IDs",
            "RowTemplate":"HK Declared Monument row",
            "PropertyNameParam":"name",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Hong Kong - Historic Buildings":{
            "TopCatName":"Category:Historic_buildings_of_Hong_Kong_with_known_IDs",
            "RowTemplate":"HK Historic Building row",
            "PropertyNameParam":"name",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "India":{
            "TopCatName":"Category:ASI_monuments_with_known_ID's",
            "RowTemplate":"ASI Monument row",
            "PropertyNameParam":"description",
            "IdentifierName":"number",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Israel - WLPA":{
            "TopCatName":"Category:Public_art_in_Israel_with_known_IDs",
            "RowTemplate":"Public art in Israel - row",
            "PropertyNameParam":"title",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Japan":{
            "TopCatName":"Category:National_historic_sites_of_Japan_with_known_IDs",
            "RowTemplate":"NHS Japan row",
            "PropertyNameParam":"name",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Kenya":{
            "TopCatName":"Category:Kenya_Monuments_with_known_IDs",
            "RowTemplate":"Kenya Monument row",
            "PropertyNameParam":"name",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Nepal":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Nepal_with_known_IDs",
            "RowTemplate":"Nepal Monument row",
            "PropertyNameParam":"description",
            "IdentifierName":"number",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Pakistan":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Pakistan_with_known_IDs",
            "RowTemplate":"PKmonument row",
            "PropertyNameParam":"description",
            "IdentifierName":"number",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Philippines":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_the_Philippines_with_known_IDs",
            "RowTemplate":"Philippine cultural property row",
            "PropertyNameParam":"site_name",
            "IdentifierName":"cp-wmph-id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "South Africa":{
            "TopCatName":"Category:South_Africa_Heritage_Resources_with_known_IDs",
            "RowTemplate":"SAHRA heritage site row",
            "PropertyNameParam":"Site_name",
            "IdentifierName":"SiteReference",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Switzerland":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"SIoCPoNaRS row",
            "PropertyNameParam":"name",
            "IdentifierName":"KGS_nr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "Uganda":{
            "TopCatName":"Category:National_Cultural_Sites_in_Uganda_with_known_IDs",
            "RowTemplate":"National Cultural Site of Uganda row",
            "PropertyNameParam":"site",
            "IdentifierName":"number",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "UK - England":{
            "TopCatName":"Category:Listed_buildings_in_England_with_known_IDs",
            "RowTemplate":"EH listed building row",
            "PropertyNameParam":"name",
            "IdentifierName":"uid",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "UK - Wales":{
            "TopCatName":"Category:Listed_buildings_in_Wales_with_known_IDs",
            "RowTemplate":"Cadw listed building row",
            "PropertyNameParam":"name",
            "IdentifierName":"hb",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "UK - Wales - Cardiff":{
            "TopCatName":"Category:Listed_buildings_in_Wales_with_known_IDs",
            "RowTemplate":"Cardiff listed building row",
            "PropertyNameParam":"name",
            "IdentifierName":"hb",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "UK - Scotland":{
            "TopCatName":"Category:Listed_buildings_in_Scotland_with_known_IDs",
            "RowTemplate":"HS listed building row",
            "PropertyNameParam":"name",
            "IdentifierName":"hb",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "UK - Northern Ireland":{
            "TopCatName":"Category:Listed_buildings_in_Northern_Ireland_with_known_IDs",
            "RowTemplate":"NIEA listed building row",
            "PropertyNameParam":"address",
            "IdentifierName":"hb",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "US NRHP":{
            "TopCatName":"Category:National_Register_of_Historic_Places_with_known_IDs",
            "RowTemplate":"NRHP row",
            "PropertyNameParam":"name",
            "IdentifierName":"refnum",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        },
        "US - CA":{
            "TopCatName":"Category:California_Historical_Landmarks_with_known_IDs",
            "RowTemplate":"CHL row",
            "PropertyNameParam":"name",
            "IdentifierName":"refnum",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":false
        }
    },
    "es":{ // Spanish
        "Argentina":{
            "TopCatName":"Category:Monuments_in_Argentina_with_known_IDs",
            "RowTemplate":"MonumentoArgentina",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Bolivia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Bolivia_with_known_IDs",
            "RowTemplate":"MonumentoBolivia",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Chile":{
            "TopCatName":"Category:National_monuments_in_Chile_with_known_IDs",
            "RowTemplate":"MonumentoChile",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Colombia":{
            "TopCatName":"Category:National_monuments_in_Colombia_with_known_IDs",
            "RowTemplate":"MonumentoColombia",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        },
        "El Salvador":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_El_Salvador_with_known_IDs",
            "RowTemplate":"MonumentoElSalvador",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Mexico":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Mexico_with_known_IDs",
            "RowTemplate":"MonumentoMéxico",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Panama":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Panama_with_known_IDs",
            "RowTemplate":"Fila PCN",
            "PropertyNameParam":"nombre",
            "IdentifierName":"registro",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría", // not in use
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Spain":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Spain_with_known_IDs",
            "RowTemplate":"Fila BIC",
            "PropertyNameParam":"nombre",
            "IdentifierName":"bic",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría", // not in use
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Uruguay":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Uruguay_with_known_IDs",
            "RowTemplate":"MonumentoUruguay",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría", // not in use
            "ImageParam":"imagen",
            "Unverified":true
        },
        "Venezuela":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Venezuela_with_known_IDs",
            "RowTemplate":"MonumentoVenezuela",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"monumento_categoría",
            "ImageParam":"imagen",
            "Unverified":true
        }
    },
    "et":{ // Estonian
        "Estonia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Estonia_(with_known_IDs)",
            "RowTemplate":"KRR rida",
            "PropertyNameParam":"nimi",
            "IdentifierName":"number",
            "CombineIdentifiers":false,
            "CommonscatParam":"commons", // exists but doesn't include ":commons:Category:"
            "ImageParam":"pilt",
            "Unverified":true
        }
    },
    "fi":{ // Finnish
        "Finland - WLPA":{
            "TopCatName":"Category:Public_art_in_Finland_with_known_IDs",
            "RowTemplate":"Wlpa-teokset-rivi",
            "PropertyNameParam":"nimi",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"kuva",
            "Unverified":true
        }
    },
    "fr":{ // French
        "Belgium - Flemish Region":{
            "TopCatName":"Category:Onroerend_erfgoed_with_known_IDs",
            "RowTemplate":"Ligne de tableau MH-Fla",
            "PropertyNameParam":["nom_objet","nom object","monument"],
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"catégorie commons",
            "ImageParam":"image",
            "Unverified":true
        },
        "Belgium - Wallonia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Wallonia_with_known_IDs",
            "RowTemplate":"Ligne de tableau MH-Wal",
            "PropertyNameParam":["nom objet","monument","nom_objet"],
            "IdentifierName":["id commune","id_commune","CLT/PEX","id objet","id_objet"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"catégorie commons",
            "ImageParam":"image",
            "Unverified":true
        },
        "Canada":{
            "TopCatName":"Category:Heritage_properties_in_Canada_with_known_IDs",
            "RowTemplate":"Ligne de tableau LPC",
            "PropertyNameParam":"lieu",
            "IdentifierName":"numéro",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"image",
            "Unverified":true
        },
        "Cameroon":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Cameroon_with_known_IDs",
            "RowTemplate":"Monument Cameroun ligne",
            "PropertyNameParam":"nom",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        },
        "France":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_France_with_known_IDs",
            "RowTemplate":"Ligne de tableau MH",
            "PropertyNameParam":"monument",
            "IdentifierName":"notice",
            "CombineIdentifiers":false,
            "CommonscatParam":"catégorie commons",
            "ImageParam":"image",
            "Unverified":true
        },
        "Switzerland":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Ligne de tableau Monuments (Suisse)",
            "PropertyNameParam":"objet",
            "IdentifierName":"no PBC",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"photo",
            "Unverified":true
        },
        "Tunisia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Tunisia_with_known_IDs",
            "RowTemplate":"Ligne de tableau monument Tunisie",
            "PropertyNameParam":"monument",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        }
    },
    "gl":{ // Galician
        "Spain":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Spain_with_known_IDs",
            "RowTemplate":"BIC",
            "PropertyNameParam":"nomeoficial",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"imaxe",
            "Unverified":true
        }
    },
    "he":{ // Hebrew
        "Israel":{
            "TopCatName":"Category:Heritage_sites_in_Israel_with_known_IDs",
            "RowTemplate":"אתר מורשת בישראל בשורה",
            "PropertyNameParam":"שם אתר",
            "IdentifierName":"מספר אתר",
            "CombineIdentifiers":false,
            "CommonscatParam":"קטגוריה בוויקישיתוף",
            "ImageParam":"תמונה",
            "Unverified":true
        }
    },
    "hu":{ // Hungarian
        "Hungary":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Hungary_with_known_IDs",
            "RowTemplate":"Műemlék",
            "PropertyNameParam":"megnevezés",
            "IdentifierName":"azonosító",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonskat",
            "ImageParam":"kép",
            "Unverified":true
        }
    },
    "hy":{ // Armenian
        "Armenia":{
            "TopCatName":"Cultural_heritage_monuments_in_Armenia_with_known_IDs",
            "RowTemplate":"Հուշարձան ցանկ",
            "PropertyNameParam":"հուշարձան",
            "IdentifierName":"համարանիշ",
            "CombineIdentifiers":false,
            "CommonscatParam":"վիքիպահեստ", // not in use
            "ImageParam":"պատկեր",
            "Unverified":true
        }
    },
    "it":{ // Italian
        "Italy":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Italy_with_known_IDs",
            "RowTemplate":"WLM2013-riga",
            "PropertyNameParam":"monumento",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"immagine",
            "Unverified":true
        },
        "Switzerland":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"Riga della tabella dei beni culturali (Svizzera)",
            "PropertyNameParam":["oggetto-visualizzato","oggetto"],
            "IdentifierName":"no PBC",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"foto",
            "Unverified":true
        },
        "Switzerland2":{
            "TopCatName":"Category:Cultural_properties_of_national_significance_in_Switzerland_with_known_IDs",
            "RowTemplate":"SIoCPoNaRS row",
            "PropertyNameParam":"name",
            "IdentifierName":"KGS_nr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"image",
            "Unverified":true
        }
    },
    "nl":{ // Dutch
        "Aruba":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Aruba_with_known_IDs",
            "RowTemplate":"Tabelrij monument Aruba",
            "PropertyNameParam":"omschrijving",
            "IdentifierName":"objectnr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        },
        "Belgium - Brussels":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Brussels_with_known_IDs",
            "RowTemplate":"Tabelrij erfgoed Brussels Hoofdstedelijk Gewest",
            "PropertyNameParam":"omschrijving",
            "IdentifierName":"code",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"image",
            "Unverified":true
        },
        "Belgium - Flemish Region":{
            "TopCatName":"Category:Onroerend_erfgoed_with_known_IDs",
            "RowTemplate":"Tabelrij erfgoed Vlaanderen",
            "PropertyNameParam":"objectnaam",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"image",
            "Unverified":true
        },
        "Belgium - Wallonia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Wallonia_with_known_IDs",
            "RowTemplate":"Tabelrij erfgoed Wallonië",
            "PropertyNameParam":"descr_nl",
            "IdentifierName":["niscode","objcode"],
            "CombineIdentifiers":true,
            "CombineWith":"-",
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"image",
            "Unverified":true
        },
        "Netherlands - Gemeentelijke monumenten":{
            "TopCatName":"Category:Gemeentelijke_monumenten_with_known_IDs",
            "RowTemplate":"Tabelrij gemeentelijk monument",
            "PropertyNameParam":"object",
            "IdentifierName":["gemcode","objnr"],
            "CombineIdentifiers":true,
            "CombineWith":"/",
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        },
        "Netherlands - Provinciale monumenten":{
            "TopCatName":"Category:Provinciale_monumenten_with_known_IDs",
            "RowTemplate":"Tabelrij provinciaal monument",
            "PropertyNameParam":"object",
            "IdentifierName":"objnr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        },
        "Netherlands - Rijksmonumenten":{
            "TopCatName":"Category:Rijksmonumenten_with_known_IDs",
            "RowTemplate":"Tabelrij rijksmonument",
            "PropertyNameParam":"objectnaam",
            "IdentifierName":"objrijksnr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"image",
            "Unverified":true
        }
    },
    "no":{ // Norwegian
        "Norway":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Norway_with_known_IDs",
            "RowTemplate":"Kulturminner row",
            "PropertyNameParam":"navn",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"bilde",
            "Unverified":true
        }
    },
    "pl":{ // Polish
        "Poland":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Poland_with_known_IDs",
            "RowTemplate":"Zabytki/wpis",
            "PropertyNameParam":"nazwa",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commons",
            "ImageParam":"zdjęcie",
            "Unverified":true
        }
    },
    "pt":{ // Portuguese
        "Portugal":{
            "TopCatName":"Category:IGESPAR_with_known_IDs",
            "RowTemplate":"IGESPAR/linha",
            "PropertyNameParam":"designacoes",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"imagem",
            "Unverified":true
        }
    },
    "ro":{ // Romanian
        "Romania":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Romania_with_known_IDs",
            "RowTemplate":"ElementLMI",
            "PropertyNameParam":"Denumire",
            "IdentifierName":"Cod",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commons",
            "ImageParam":"Imagine",
            "Unverified":true
        }
    },
    "ru":{ // Russian
        "Russia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Russia_with_known_IDs",
            "RowTemplate":"WLM/строка",
            "PropertyNameParam":"название",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"фото",
            "Unverified":true
        },
        "Russia - St. Petersburg":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Russia_with_known_IDs",
            "RowTemplate":"ПамАрх row",
            "PropertyNameParam":"имя",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"изображение",
            "Unverified":true
        }
    },
    "sk":{ // Slovak
        "Slovakia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Slovakia_with_known_IDs",
            "RowTemplate":"Monuments tableline-SK",
            "PropertyNameParam":"Názov",
            "IdentifierName":"IDobjektu",
            "CombineIdentifiers":false,
            "CommonscatParam":"Commonscat",
            "ImageParam":"Fotka",
            "Unverified":true
        }
    },
    "sr":{ // Serbian
        "Serbia":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Serbia_with_known_IDs",
            "RowTemplate":"Споменици ред",
            "PropertyNameParam":"Назив",
            "IdentifierName":"ИД",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"Слика",
            "Unverified":true
        }
    },
    "sv":{ // Swedish
        "Sweden - Archaeological monuments":{
            "TopCatName":"Category:Archaeological_monuments_in_Sweden_with_known_IDs",
            "RowTemplate":"FMIS",
            "PropertyNameParam":"namn",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"bild",
            "Unverified":true
        },
        "Sweden - Listed historical ships":{
            "TopCatName":"Category:Listed_historical_ships_in_Sweden_with_known_IDs",
            "RowTemplate":"K-fartyg",
            "PropertyNameParam":"namn",
            "IdentifierName":"signal",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"bild",
            "Unverified":true
        },
        "Sweden - Protected buildings":{
            "TopCatName":"Category:Protected_buildings_in_Sweden_with_known_IDs",
            "RowTemplate":"BBR",
            "PropertyNameParam":"namn",
            "IdentifierName":"bbr",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"bild",
            "Unverified":true
        },
        "Sweden - Working Life Museums":{
            "TopCatName":"Category:Working_Life_Museums_in_Sweden_with_known_IDs",
            "RowTemplate":"Arbetslivsmuseum",
            "PropertyNameParam":"namn",
            "IdentifierName":"id",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat",
            "ImageParam":"bild",
            "Unverified":true
        }
    },
    "th":{ // Thai
        "Thailand":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Thailand_with_known_IDs",
            "RowTemplate":"แถวโบราณสถาน",
            "PropertyNameParam":"ชื่อ",
            "IdentifierName":"ทะเบียน",
            "CombineIdentifiers":false,
            "CommonscatParam":"commonscat", // not in use
            "ImageParam":"ภาพ",
            "Unverified":true
        }
    },
    "uk":{ // Ukrainian
        "Ukraine":{
            "TopCatName":"Category:Cultural_heritage_monuments_in_Ukraine_with_known_IDs",
            "RowTemplate":"ВЛП-рядок",
            "PropertyNameParam":"назва",
            "IdentifierName":"ID",
            "CombineIdentifiers":false,
            "CommonscatParam":"галерея",
            "ImageParam":"фото",
            "Unverified":true
        }
    }
}
var ThisRegisterTable = {}

var GUIMessages= {
    "cs":{ // Czech
        "ButtonText":"Hledej v Commons chybějící obrázky a kategorie",
        "ImageOnlyText":"Hledej v Commons chybějící pouze obrázky",
        "RowMismatch":"Chybné vyznačení řádků! Pravděpodobně je nesprávně formátovaná řádková šablona. Všechny řádkové šablony musejí obsahovat class='vcard', aby je skript mohl identifikovat. Pokud řádkové šablony použité na této stránce obsahují class='vcard', dejte mi zprávu na en:User_talk:Dudemanfellabra a já se pokusím problém vyřešit. Skript se nyní sám ukončí. Omlouvám se!",
        "MalformedRow":"Chybné vyznačení řádků! Pravděpodobně je nesprávně formátovaná některá řádková šablona ve zdrojovém wikikódu, například chybí ukončovací }} nebo je chybně vyznačen HTML komentář. Pokud se vám na této stránce nedaří nalézt chybu nebo se domníváte, že příčina je jiná, dejte mi zprávu na :en:User_talk:Dudemanfellabra a já se pokusím problém vyřešit. Skript se nyní sám ukončí. Omlouvám se!",
        "CheckingMatches":"Hledám odkazy k přidání…",
        "EditSummary":"[[:en:User:Dudemanfellabra/AddCommonsCatLinks|Poloautomatické]] přidání obrázku(-ů) a/nebo odkazu(-ů) commonscat do seznamu",
        "NoneFound":"Nebyl nalezen žádný odkaz k přídání. Skript byl ukončen.",
        "Found":"Nalezeny odkazy k přidání!",
        "Invalid":"Odkazovaný obrázek a/nebo kategorie v projektu Commons neexistují. Můžete vybrat jiný odkaz k jejich nahrazení. Pokud chcete ponechat stávající odkazy, zvolte 'Nepřidávat žádný obrázek/kategorii.'",
        "FollowingImages":"K objektu „NAME“ byly nalezeny tyto obrázky:",
        "SelectOne":"Vyber k přidání:",
        "DontAddImage":"Nepřidávat žádný obrázek",
        "OtherSuggested":"Další doporučené obrázky k objektu „NAME“ z odpovídajících kategorií:",
        "Suggested":"Doporučené obrázky k objektu „NAME“ z odpovídajících kategorií:",
        "From":"z CATNAME",
        "FollowingCats":"K objektu „NAME“ byly nalezeny tyto kategorie:",
        "DontAddCat":"Nepřídávat žádnou kategorii",
        "SelectButton":"Vybrat",
        "SaveButton":"Uložit pokrok a ukončit",
        "Done":"Hotovo!<br>Edituji stránku…",
        "SuccessfulEdit":"Hotovo! Pro zobrazení výsledku obnovte stránku!",
        "FailedEdit":"Uložení selhalo, editační filtr hlásí chybu.",
        "LeavePage":"Opravdu chcete opustit tuto stránku? Kategorie/soubory, které jste přidal/a, nebudou uloženy!"
    },
    "de":{ // German
        "ButtonText":"Commons nach Bildern und Kategorien durchsuchen",
        "ImageOnlyText":"Commons nach nur Bildern durchsuchen",
        "RowMismatch":"Zeilenfehler! Dies kommt möglicherweise von einer falsch formatierten Zeilenvorlage. Alle Zeilenvorlagen müssen class='vcard' enthalten, damit das Skript sie identifizieren kann. Sollte {{ROWTEMPLATE}} class='vcard' beinhalten, bitte ich um eine Nachricht auf :en:User_talk:Dudemanfellabra, und ich werde versuchen, das Problem zu beheben. Das Skript wird jetzt beendet.",
        "MalformedRow":"Row mismatch! This is probably due to an incorrectly formatted row template in the wikicode, e.g. a missing }} or a misplaced HTML comment. If you cannot find the error on this page or believe it is due to something else, please let me know at :en:User_talk:Dudemanfellabra, and I will try to resolve the problem. The script will now exit itself. Sorry!",
        "CheckingMatches":"Nach Übereinstimmungen suchen ...",
        "EditSummary":"[[:en:User:Dudemanfellabra/AddCommonsCatLinks|Halbautomatisches]] Hinzufügen von Bildern und/oder Commonskategorien zur Denkmalliste",
        "NoneFound":"Keine Übereinstimmungen gefunden oder selektiert. Das Skript wurde beendet.",
        "Found":"Übereinstimmungen gefunden!",
        "Invalid":"The existing image and/or category cannot be found on Commons. Selecting a match here will replace the existing one(s). If you do not want to replace anything, choose Keine Kategorie/Bild hinzufügen.",
        "FollowingImages":"NAME stimmt mit folgenden Bildern überein:",
        "SelectOne":"Zum Hinzufügen auswählen:",
        "DontAddImage":"Kein Bild hinzufügen",
        "OtherSuggested":"Andere mögliche Bilder für NAME aus der gefundenen oder bereits existierenden Kategorie:",
        "Suggested":"Mögliche Bilder für NAME aus der gefundenen oder bereits existierenden Kategorie:",
        "From":"aus CATNAME",
        "FollowingCats":"NAME passt auf folgende Kategorien:",
        "DontAddCat":"Keine Kategorie hinzufügen",
        "SelectButton":"Fortfahren",
        "SaveButton":"Save progress and exit",
        "Done":"Fast fertig!<br>Artikel wird bearbeitet ...",
        "SuccessfulEdit":"Fertig! Seite neu laden, um das Ergebnis anzusehen!",
        "FailedEdit":"Die Bearbeitung ist fehlgeschlagen.",
        "LeavePage":"Bist du sicher, dass du die Seite verlassen möchtest? Die ausgewählten Kategorien und Bilder werden nicht gespeichert!"
    },
    "en":{ // English
        "ButtonText":"Check Commons for images and categories",
        "ImageOnlyText":"Check Commons for images only",
        "RowMismatch":"Row mismatch! This is probably due to an incorrectly formatted row template. All row templates must include class='vcard' in order for this script to identify them. If the row template(s) on this page include class='vcard', please let me know at :en:User_talk:Dudemanfellabra, and I will try to resolve the problem. The script will now exit itself. Sorry!",
        "MalformedRow":"Row mismatch! This is probably due to an incorrectly formatted row template in the wikicode, e.g. a missing }} or a misplaced HTML comment. If you cannot find the error on this page or believe it is due to something else, please let me know at :en:User_talk:Dudemanfellabra, and I will try to resolve the problem. The script will now exit itself. Sorry!",
        "CheckingMatches":"Checking for matches...",
        "EditSummary":"[[:en:User:Dudemanfellabra/AddCommonsCatLinks|Semi-automated]] addition of image(s) and/or commonscat link(s) to monument list",
        "NoneFound":"No matches found or selected. Script exited.",
        "Found":"Matches found!",
        "Invalid":"The existing image and/or category cannot be found on Commons. Selecting a match here will replace the existing one(s). If you do not want to replace anything, choose Do not add any category/image.",
        "FollowingImages":"NAME matches the following images:",
        "SelectOne":"Select one to add:",
        "DontAddImage":"Do not add any image",
        "OtherSuggested":"Other suggested images for NAME from matched or existing categories:",
        "Suggested":"Suggested images for NAME from matched or existing categories:",
        "From":"from CATNAME",
        "FollowingCats":"NAME matches the following categories:",
        "DontAddCat":"Do not add any category",
        "SelectButton":"Continue",
        "SaveButton":"Save progress and exit",
        "Done":"Done!<br>Editing page...",
        "SuccessfulEdit":"Done! Refresh the page to see the result!",
        "FailedEdit":"The edit query returned an error.",
        "LeavePage":"Are you sure you want to leave the page? All categories/files that you have added will not be saved!"
    },
    "es":{ // Spanish
        "ButtonText":"Buscar en Commons para imagenes y categorías",
        "ImageOnlyText":"Buscar en Commons solo para imagenes",
        "RowMismatch":"¡Hay un desajuste de las filas! Probablemente se debe a la plantilla de fila con formato incorrecto. Para que este script reconoce las filas, debían incluir class='vcard' en el código. Si la(s) plantilla(s) en esta página sí incluye class='vcard', por favor me envia un mensaje a :en:User_talk:Dudemanfellabra. Trataré de corregir el fallo. El script ahora se terminaré. ¡Lo siento!",
        "MalformedRow":"Row mismatch! This is probably due to an incorrectly formatted row template in the wikicode, e.g. a missing }} or a misplaced HTML comment. If you cannot find the error on this page or believe it is due to something else, please let me know at :en:User_talk:Dudemanfellabra, and I will try to resolve the problem. The script will now exit itself. Sorry!",
        "CheckingMatches":"Buscando parejas...",
        "EditSummary":"Adición [[:en:User:Dudemanfellabra/AddCommonsCatLinks|semiautomático]] de imagen(es) y/o enlace(s) a categorías de Commons a la lista de monumentos",
        "NoneFound":"Parejas no encontró o no seleccionó. Script terminó.",
        "Found":"¡Encontró parejas!",
        "Invalid":"La imágen/categoría preexistente no está en Commons. Seleccionar pareja la sustituirá por la preexistente. Si no la querías sustituir, selecciona No añade ninguna imagen/categoría.",
        "FollowingImages":"NAME es una pareja de los siguientes imágenes:",
        "SelectOne":"Elige uno para añadir:",
        "DontAddImage":"No añade ninguno imagen",
        "OtherSuggested":"Otras imágenes sugeridos de NAME de categorías encontradas o preexistentes:",
        "Suggested":"Imágenes sugeridos de NAME de categorías encontradas o preexistentes:",
        "From":"de CATNAME",
        "FollowingCats":"NAME es una pareja de los siguientes categorías:",
        "DontAddCat":"No añade ninguna categoría",
        "SelectButton":"Continuar",
        "SaveButton":"Guardar el progreso y salir",
        "Done":"¡Listo!<br>Editando la página...",
        "SuccessfulEdit":"¡Listo! ¡Actualiza la pagína para ver el resultado!",
        "FailedEdit":"Había un error mientras editando.",
        "LeavePage":"¿Está seguro de que quiera irse de la página? ¡Categorías/imágenes que han seleccionado no se guardarán!"
    }
}
var ThisGUIMessages = {}

var LanguageTable = {
    "ab":{"name":"Abkhaz","nativeName":"аҧсуа"},
    "aa":{"name":"Afar","nativeName":"Afaraf"},
    "af":{"name":"Afrikaans","nativeName":"Afrikaans"},
    "ak":{"name":"Akan","nativeName":"Akan"},
    "sq":{"name":"Albanian","nativeName":"Shqip"},
    "am":{"name":"Amharic","nativeName":"አማርኛ"},
    "ar":{"name":"Arabic","nativeName":"العربية"},
    "an":{"name":"Aragonese","nativeName":"Aragonés"},
    "hy":{"name":"Armenian","nativeName":"Հայերեն"},
    "as":{"name":"Assamese","nativeName":"অসমীয়া"},
    "av":{"name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
    "ae":{"name":"Avestan","nativeName":"avesta"},
    "ay":{"name":"Aymara","nativeName":"aymar aru"},
    "az":{"name":"Azerbaijani","nativeName":"azərbaycan dili"},
    "bm":{"name":"Bambara","nativeName":"bamanankan"},
    "ba":{"name":"Bashkir","nativeName":"башҡорт теле"},
    "eu":{"name":"Basque","nativeName":"euskara, euskera"},
    "be":{"name":"Belarusian","nativeName":"Беларуская"},
    "be-x-old":{"name":"Belarusian","nativeName":"Беларуская"},
    "bn":{"name":"Bengali","nativeName":"বাংলা"},
    "bh":{"name":"Bihari","nativeName":"भोजपुरी"},
    "bi":{"name":"Bislama","nativeName":"Bislama"},
    "bs":{"name":"Bosnian","nativeName":"bosanski jezik"},
    "br":{"name":"Breton","nativeName":"brezhoneg"},
    "bg":{"name":"Bulgarian","nativeName":"български език"},
    "my":{"name":"Burmese","nativeName":"ဗမာစာ"},
    "ca":{"name":"Catalan; Valencian","nativeName":"Català"},
    "ch":{"name":"Chamorro","nativeName":"Chamoru"},
    "ce":{"name":"Chechen","nativeName":"нохчийн мотт"},
    "ny":{"name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
    "zh":{"name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
    "cv":{"name":"Chuvash","nativeName":"чӑваш чӗлхи"},
    "kw":{"name":"Cornish","nativeName":"Kernewek"},
    "co":{"name":"Corsican","nativeName":"corsu, lingua corsa"},
    "cr":{"name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
    "hr":{"name":"Croatian","nativeName":"hrvatski"},
    "cs":{"name":"Czech","nativeName":"česky, čeština"},
    "da":{"name":"Danish","nativeName":"dansk"},
    "dv":{"name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
    "nl":{"name":"Dutch","nativeName":"Nederlands, Vlaams"},
    "en":{"name":"English","nativeName":"English"},
    "eo":{"name":"Esperanto","nativeName":"Esperanto"},
    "et":{"name":"Estonian","nativeName":"eesti, eesti keel"},
    "ee":{"name":"Ewe","nativeName":"Eʋegbe"},
    "fo":{"name":"Faroese","nativeName":"føroyskt"},
    "fj":{"name":"Fijian","nativeName":"vosa Vakaviti"},
    "fi":{"name":"Finnish","nativeName":"suomi, suomen kieli"},
    "fr":{"name":"French","nativeName":"français, langue française"},
    "ff":{"name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
    "gl":{"name":"Galician","nativeName":"Galego"},
    "ka":{"name":"Georgian","nativeName":"ქართული"},
    "de":{"name":"German","nativeName":"Deutsch"},
    "el":{"name":"Greek, Modern","nativeName":"Ελληνικά"},
    "gn":{"name":"Guaraní","nativeName":"Avañeẽ"},
    "gu":{"name":"Gujarati","nativeName":"ગુજરાતી"},
    "ht":{"name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
    "ha":{"name":"Hausa","nativeName":"Hausa, هَوُسَ"},
    "he":{"name":"Hebrew (modern)","nativeName":"עברית"},
    "hz":{"name":"Herero","nativeName":"Otjiherero"},
    "hi":{"name":"Hindi","nativeName":"हिन्दी, हिंदी"},
    "ho":{"name":"Hiri Motu","nativeName":"Hiri Motu"},
    "hu":{"name":"Hungarian","nativeName":"Magyar"},
    "ia":{"name":"Interlingua","nativeName":"Interlingua"},
    "id":{"name":"Indonesian","nativeName":"Bahasa Indonesia"},
    "ie":{"name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
    "ga":{"name":"Irish","nativeName":"Gaeilge"},
    "ig":{"name":"Igbo","nativeName":"Asụsụ Igbo"},
    "ik":{"name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
    "io":{"name":"Ido","nativeName":"Ido"},
    "is":{"name":"Icelandic","nativeName":"Íslenska"},
    "it":{"name":"Italian","nativeName":"Italiano"},
    "iu":{"name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
    "ja":{"name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
    "jv":{"name":"Javanese","nativeName":"basa Jawa"},
    "kl":{"name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
    "kn":{"name":"Kannada","nativeName":"ಕನ್ನಡ"},
    "kr":{"name":"Kanuri","nativeName":"Kanuri"},
    "ks":{"name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
    "kk":{"name":"Kazakh","nativeName":"Қазақ тілі"},
    "km":{"name":"Khmer","nativeName":"ភាសាខ្មែរ"},
    "ki":{"name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
    "rw":{"name":"Kinyarwanda","nativeName":"Ikinyarwanda"},
    "ky":{"name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
    "kv":{"name":"Komi","nativeName":"коми кыв"},
    "kg":{"name":"Kongo","nativeName":"KiKongo"},
    "ko":{"name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
    "ku":{"name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
    "kj":{"name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
    "la":{"name":"Latin","nativeName":"latine, lingua latina"},
    "lb":{"name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
    "lg":{"name":"Luganda","nativeName":"Luganda"},
    "li":{"name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
    "ln":{"name":"Lingala","nativeName":"Lingála"},
    "lo":{"name":"Lao","nativeName":"ພາສາລາວ"},
    "lt":{"name":"Lithuanian","nativeName":"lietuvių kalba"},
    "lu":{"name":"Luba-Katanga","nativeName":""},
    "lv":{"name":"Latvian","nativeName":"latviešu valoda"},
    "gv":{"name":"Manx","nativeName":"Gaelg, Gailck"},
    "mk":{"name":"Macedonian","nativeName":"македонски јазик"},
    "mg":{"name":"Malagasy","nativeName":"Malagasy fiteny"},
    "ms":{"name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
    "ml":{"name":"Malayalam","nativeName":"മലയാളം"},
    "mt":{"name":"Maltese","nativeName":"Malti"},
    "mi":{"name":"Māori","nativeName":"te reo Māori"},
    "mr":{"name":"Marathi (Marāṭhī)","nativeName":"मराठी"},
    "mh":{"name":"Marshallese","nativeName":"Kajin M̧ajeļ"},
    "mn":{"name":"Mongolian","nativeName":"монгол"},
    "na":{"name":"Nauru","nativeName":"Ekakairũ Naoero"},
    "nv":{"name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
    "nb":{"name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
    "nd":{"name":"North Ndebele","nativeName":"isiNdebele"},
    "ne":{"name":"Nepali","nativeName":"नेपाली"},
    "ng":{"name":"Ndonga","nativeName":"Owambo"},
    "nn":{"name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
    "no":{"name":"Norwegian","nativeName":"Norsk"},
    "ii":{"name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
    "nr":{"name":"South Ndebele","nativeName":"isiNdebele"},
    "oc":{"name":"Occitan","nativeName":"Occitan"},
    "oj":{"name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
    "cu":{"name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},
    "om":{"name":"Oromo","nativeName":"Afaan Oromoo"},
    "or":{"name":"Oriya","nativeName":"ଓଡ଼ିଆ"},
    "os":{"name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
    "pa":{"name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
    "pi":{"name":"Pāli","nativeName":"पाऴि"},
    "fa":{"name":"Persian","nativeName":"فارسی"},
    "pl":{"name":"Polish","nativeName":"polski"},
    "ps":{"name":"Pashto, Pushto","nativeName":"پښتو"},
    "pt":{"name":"Portuguese","nativeName":"Português"},
    "qu":{"name":"Quechua","nativeName":"Runa Simi, Kichwa"},
    "rm":{"name":"Romansh","nativeName":"rumantsch grischun"},
    "rn":{"name":"Kirundi","nativeName":"kiRundi"},
    "ro":{"name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
    "ru":{"name":"Russian","nativeName":"русский язык"},
    "sa":{"name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
    "sc":{"name":"Sardinian","nativeName":"sardu"},
    "sd":{"name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
    "se":{"name":"Northern Sami","nativeName":"Davvisámegiella"},
    "sm":{"name":"Samoan","nativeName":"gagana faa Samoa"},
    "sg":{"name":"Sango","nativeName":"yângâ tî sängö"},
    "sr":{"name":"Serbian","nativeName":"српски језик"},
    "gd":{"name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
    "sn":{"name":"Shona","nativeName":"chiShona"},
    "si":{"name":"Sinhala, Sinhalese","nativeName":"සිංහල"},
    "sk":{"name":"Slovak","nativeName":"slovenčina"},
    "sl":{"name":"Slovene","nativeName":"slovenščina"},
    "so":{"name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
    "st":{"name":"Southern Sotho","nativeName":"Sesotho"},
    "es":{"name":"Spanish; Castilian","nativeName":"español, castellano"},
    "su":{"name":"Sundanese","nativeName":"Basa Sunda"},
    "sw":{"name":"Swahili","nativeName":"Kiswahili"},
    "ss":{"name":"Swati","nativeName":"SiSwati"},
    "sv":{"name":"Swedish","nativeName":"svenska"},
    "ta":{"name":"Tamil","nativeName":"தமிழ்"},
    "te":{"name":"Telugu","nativeName":"తెలుగు"},
    "tg":{"name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
    "th":{"name":"Thai","nativeName":"ไทย"},
    "ti":{"name":"Tigrinya","nativeName":"ትግርኛ"},
    "bo":{"name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
    "tk":{"name":"Turkmen","nativeName":"Türkmen, Түркмен"},
    "tl":{"name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
    "tn":{"name":"Tswana","nativeName":"Setswana"},
    "to":{"name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
    "tr":{"name":"Turkish","nativeName":"Türkçe"},
    "ts":{"name":"Tsonga","nativeName":"Xitsonga"},
    "tt":{"name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
    "tw":{"name":"Twi","nativeName":"Twi"},
    "ty":{"name":"Tahitian","nativeName":"Reo Tahiti"},
    "ug":{"name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
    "uk":{"name":"Ukrainian","nativeName":"українська"},
    "ur":{"name":"Urdu","nativeName":"اردو"},
    "uz":{"name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
    "ve":{"name":"Venda","nativeName":"Tshivenḓa"},
    "vi":{"name":"Vietnamese","nativeName":"Tiếng Việt"},
    "vo":{"name":"Volapük","nativeName":"Volapük"},
    "wa":{"name":"Walloon","nativeName":"Walon"},
    "cy":{"name":"Welsh","nativeName":"Cymraeg"},
    "wo":{"name":"Wolof","nativeName":"Wollof"},
    "fy":{"name":"Western Frisian","nativeName":"Frysk"},
    "xh":{"name":"Xhosa","nativeName":"isiXhosa"},
    "yi":{"name":"Yiddish","nativeName":"ייִדיש"},
    "yo":{"name":"Yoruba","nativeName":"Yorùbá"},
    "za":{"name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
}