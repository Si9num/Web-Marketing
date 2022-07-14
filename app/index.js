require("./index.scss");

import header from "./header.marko";
import template from "./nav.marko";
import breadcrumbs from "./breadcrumbs.marko";
import stock from "./stock.marko";
import about from "./about.marko";
import footer from "./footer.marko";
import sortField from "./sortField.marko";
//import searchPar from "./searchPar.marko";

header.renderSync().appendTo(document.body);

template.renderSync().appendTo(document.body);
breadcrumbs.renderSync().appendTo(document.body);
about.renderSync().appendTo(document.body);
sortField.renderSync().appendTo(document.body);
//searchPar.renderSync().appendTo(document.body);
stock.renderSync().appendTo(document.body);
footer.renderSync().appendTo(document.body);
