ch({"id":"table"}, function () { return h("table.ui.striped.table", {"dataset":{"componentImpl":"Table"}}, [ "\n          ", h("thead", [ "\n            ", h("tr", [ "\n              ", h("th", [ "Col 1" ]), "\n              ", h("th", [ "Col 2" ]), "\n            " ]), "\n          " ]), "\n          ", ch({"section":"row"}, function () { return h("tbody", {"dataset":{}}, [ "\n            ", ch({"section":"row","view":"default"}, function () { return h("tr", {"dataset":{}}, [ "\n              ", ch({"property":"title"}, function () { return h("td", {"dataset":{}}, [ "Title 1" ]); }), "\n              ", ch({"property":"url"}, function () { return h("td", {"dataset":{}}, [ "http://..." ]); }), "\n            " ]); }), "\n          " ]); }), "\n        " ]); })