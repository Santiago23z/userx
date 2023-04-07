"use strict"
//IMPORTATCIONES
// import { authenticateUser } from './auth/config-mongo';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import 'core-js/stable';



figma.showUI(__html__);

figma.ui.resize(1200, 1100);
// figma.ui.postMessage ({ type : "registration-sucessful" })


let savedFonts;
let savedGridsSmall;
let savedGridsMedium;
let savedGridsLarge;

const selected = figma.currentPage.selection[0];
if (selected) {
    const parents = figma.currentPage.findAll(node => {
        if (node.type === "GROUP" || node.type === "FRAME") {
            return node.children.includes(selected);
        }
        return false;
    });

    if (parents.length > 0) {
        // El elemento seleccionado es un hijo
        console.log("El elemento seleccionado es un hijo");
        figma.ui.postMessage({ type: 'hello' });
        figma.ui.onmessage = (message) => {
            if (message.type === 'bye') {
                const fillH = message.fillHorizontal
                const fillV = message.fillVer
                if (fillH === "select" || fillH === "Fill" || fillH === "Hug" || fillH === "Fixed") {
                    figma.ui.onmessage = pluginMessage => {


                        if (pluginMessage.type === 'SmallSelected') {
                            async function small() {
                                const selectedColumns = 4;
                                const margin = 16
                                const gutter = 16
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });
                                savedGridsSmall = await figma.clientStorage.getAsync('selectedValues');

                            }

                            small()
                        } else if (pluginMessage.type === 'mediumSelected') {
                            async function medium() {
                                const selectedColumns = 8;
                                const margin = 36;
                                const gutter = 36;
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });
                                savedGridsMedium = await figma.clientStorage.getAsync('selectedValues');

                            }

                            medium()
                        }
                        else if (pluginMessage.type === "largeSelected") {
                            async function large() {
                                const selectedColumns = 12;
                                const margin = 64;
                                const gutter = 36;
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });
                                savedGridsLarge = await figma.clientStorage.getAsync('selectedValues');

                            }

                            large()
                        }
                        else if (pluginMessage.type === "smallNoMargin") {
                            async function small() {
                                const selectedColumns = 4;
                                const margin = 16
                                const gutter = 16
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });

                                savedGridsSmall = await figma.clientStorage.getAsync('selectedValues');

                            }

                            small()
                        }
                        else if (pluginMessage.type === "mediumNoMargin") {
                            async function medium() {
                                const selectedColumns = 8;
                                const margin = 36;
                                const gutter = 36;
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });

                                savedGridsMedium = await figma.clientStorage.getAsync('selectedValues');

                            }

                            medium()
                        }
                        else if (pluginMessage.type === "largeNoMargin") {
                            async function large() {
                                const selectedColumns = 12;
                                const margin = 64;
                                const gutter = 36;
                                const grid = {
                                    pattern: "COLUMNS",
                                    gutterSize: gutter,
                                    alignment: "STRETCH",
                                    count: selectedColumns,
                                    offset: margin,
                                };
                                figma.clientStorage.setAsync('selectedValues', grid, {
                                    columns: selectedColumns,
                                    gutter: margin,
                                    margin: gutter,
                                });

                                savedGridsLarge = await figma.clientStorage.getAsync('selectedValues');

                            }

                            large()
                        }




                        if (pluginMessage.type === "fonts") {
                            const data = pluginMessage.data
                            async function init() {
                                if (true) {
                                    // console.log(value);
                                    // console.log(data);
                                    async function fonts() {
                                        if (figma.currentPage.selection[0]) {
                                            if ("h1" in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                // await figma.loadFontAsync({ family: "Halyard Display", style: "Book" })
                                                // await figma.loadFontAsync({ family: "Halyard Display", style: "SemiBold" })

                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 60 && node.fontSize <= 128) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }

                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h1"]);
                                                }

                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        }

                                    }
                                    fonts()
                                    async function fons() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h2' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h2"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h2" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }

                                    }
                                    fons()
                                    async function fuentes() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h3' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h3"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();

                                            }
                                        } else {
                                            if ("h3" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    fuentes()
                                    async function fuente() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h4' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 25 && node.fontSize <= 30) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h4"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h4" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    fuente()
                                    async function fuent() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h5' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 20 && node.fontSize <= 25) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h5"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h5" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    fuent()
                                    async function fio() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h6' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h6"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h6" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    fio()
                                    async function h3Label() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h3-labels' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h3-labels"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h3-labels" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    h3Label()
                                    async function h4Label() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h4-labels' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 25 && node.fontSize <= 30) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h4-labels"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();

                                            }
                                        } else {
                                            if ("h4-labels" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    h4Label()
                                    async function h5Label() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h5-labels' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 20 && node.fontSize <= 25) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h5-labels"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h5-labels" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    h5Label()
                                    async function h6Label() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('h6-labels' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["h6-labels"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("h6-labels" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    h6Label()
                                    async function small() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('small' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["small"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("small" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    small()
                                    async function medium() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('medium' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["medium"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("medium" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    medium()
                                    async function large() {
                                        if (figma.currentPage.selection[0]) {
                                            if ('large' in data) {
                                                await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                                await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                                await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                                function changeFontSize(node, size) {
                                                    if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                                        node.fontSize = size;
                                                    } else if ("children" in node) {
                                                        for (const child of node.children) {
                                                            changeFontSize(child, size);
                                                        }
                                                    }
                                                }
                                                for (const selection of figma.currentPage.selection) {
                                                    changeFontSize(selection, data["large"]);
                                                }
                                                await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                                (async () => {
                                                    savedFonts = await figma.clientStorage.getAsync(
                                                        "selectedFonts",
                                                        JSON.stringify(data)
                                                    );
                                                })();
                                            }
                                        } else {
                                            if ("large" in data) {
                                                if (!figma.currentPage.selection[0]) {
                                                    await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                                    (async () => {
                                                        const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                                        console.log(savedFonts);
                                                    })();
                                                }
                                            }
                                        }
                                    }
                                    large()
                                }
                            }


                            init()




                        }

                        if (pluginMessage.type === 'buttonWasClicked') {
                            const device = pluginMessage.data



                            if (device.includes("air")) {


                                const seleccion = figma.currentPage.selection[0];


                                if (seleccion) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1280, 832)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };


                                        function setFillContainerToChildren(node) {


                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsLarge]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1280, 832)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        nuevoMarco.layoutGrids = [savedGridsLarge]
                                        figma.currentPage.appendChild(nuevoMarco);

                                        let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                                        frameAir.name = "Mac Air"
                                    }
                                }
                            }


                            if (device.includes("bPro1")) {
                                const seleccion = figma.currentPage.selection[0]
                                if (seleccion) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1512, 962)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        function setFillContainerToChildren(node) {

                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsLarge]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1512, 982)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsLarge]

                                        let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                                        frameAir.name = "Mac pro 14"
                                    }
                                }
                                let framePro14 = figma.currentPage.children[figma.currentPage.children.length - 1];
                                framePro14.name = "MacBook Pro 14"
                            }
                            if (device.includes("c16")) {

                                const seleccion = figma.currentPage.selection[0];


                                if (seleccion) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1728, 1117)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        function setFillContainerToChildren(node) {

                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsLarge]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(1728, 1117)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        nuevoMarco.layoutGrids = [savedGridsLarge]
                                        figma.currentPage.appendChild(nuevoMarco);

                                        let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                                        frameAir.name = "Mac por 16"
                                    }
                                }



                            }

                            if (device.includes("d13i")) {
                                const seleccion = figma.currentPage.selection[0];


                                if (seleccion) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(390, 844)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        function setFillContainerToChildren(node) {
                                            if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                                // Verificar si la imagen está dentro de un auto layout
                                                if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                                    // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                                    child.resize(child.width, child.parent.height);
                                                }
                                            }
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(390, 844)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]
                                    }
                                } else {
                                    const frame = figma.createFrame()

                                    frame.x = 2322;
                                    frame.y = 0;
                                    frame.layoutGrids = [savedGridsSmall]

                                    frame.resize(390, 844)

                                }
                                let frameIphone13 = figma.currentPage.children[figma.currentPage.children.length - 1];
                                frameIphone13.name = "iPhone 13"

                                // Verificar si hay un marco seleccionado

                            }
                            if (device.includes("eiPad")) {

                                if (figma.currentPage.selection[0]) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(390, 844)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        function setFillContainerToChildren(node) {
                                            if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                                // Verificar si la imagen está dentro de un auto layout
                                                if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                                    // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                                    child.resize(child.width, child.parent.height);
                                                }
                                            }
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(390, 844)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        // setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]

                                        let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                                        frameAir.name = "iPad Pro"
                                    }
                                }

                                // Clonar el marco seleccionado
                                const seleccion = figma.currentPage.selection;
                                if (seleccion.length === 1 && seleccion[0].type === "FRAME") {
                                    const marcoOriginal = seleccion[0];
                                    const nuevoMarco = marcoOriginal.clone();
                                    nuevoMarco.x += nuevoMarco.width + 100;
                                    nuevoMarco.resize(360, 640)
                                    figma.currentPage.appendChild(nuevoMarco);
                                }
                            }

                            if (device.includes("fandroid")) {
                                const seleccion = figma.currentPage.selection[0]
                                if (seleccion) {
                                    const frame = figma.currentPage.selection[0];
                                    // Verificar si el marco tiene Auto Layout
                                    if (frame.layoutMode === "NONE") {
                                        // Agregar Auto Layout
                                        frame.layoutMode = "VERTICAL";
                                        frame.primaryAxisSizingMode = "FIXED";
                                        frame.counterAxisSizingMode = "FIXED";

                                        // Ajustar los hijos al contenedor
                                        frame.children.forEach(child => {
                                            child.layoutAlign = "STRETCH";
                                            child.constraints = {
                                                horizontal: "STRETCH",
                                                vertical: "STRETCH"
                                            };
                                        });
                                        const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                                        if (image) {
                                            const frame = figma.currentPage.selection[0];
                                            const imageWidth = image.width;
                                            const imageHeight = image.height;
                                            const imageRatio = imageWidth / imageHeight;
                                            const frameWidth = frame.width;
                                            const frameHeight = frame.height;
                                            const frameRatio = frameWidth / frameHeight;
                                            const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                            const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                            image.constraints = {
                                                horizontal: horizontalConstraint,
                                                vertical: verticalConstraint
                                            };
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(3600, 640)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        function setFillContainerToChildren(node) {
                                            if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                                // Verificar si la imagen está dentro de un auto layout
                                                if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                                    // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                                    child.resize(child.width, child.parent.height);
                                                }
                                            }
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else if (node.type === "IMAGE") {
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "FIXED";
                                                        child.counterAxisSizingMode = "FIXED";
                                                    }
                                                    else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }
                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        // setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]

                                        // Seleccionar el marco actualizado
                                        figma.currentPage.selection = [frame];

                                        // Cerrar el plugin con un mensaje de éxito
                                        figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                                    } else {
                                        console.log('ya tiene ome bobo');
                                        function setFillContainerToChildren(node) {
                                            if (node.type === 'FRAME' || node.type === 'GROUP') {
                                                // Recorrer todos los hijos del objeto
                                                node.children.forEach(child => {
                                                    // Verificar si el objeto es un frame o un group
                                                    if (child.type === 'FRAME') {
                                                        // Si es un frame o group, establecer fill container
                                                        child.layoutMode = "VERTICAL";
                                                        child.primaryAxisSizingMode = "AUTO";
                                                        child.counterAxisSizingMode = "AUTO";
                                                        child.primaryAxisAlignItems = "CENTER";
                                                        child.itemSpacing = 0;
                                                        // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                                    } else {
                                                        // Si es cualquier otro tipo de objeto, establecer fill container
                                                        child.layoutAlign = "STRETCH";
                                                    }
                                                });
                                            }
                                        }

                                        const marcoOriginal = seleccion
                                        const nuevoMarco = marcoOriginal.clone();
                                        nuevoMarco.resize(390, 844)
                                        nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                                        if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                            nuevoMarco.children.forEach(child => {
                                                // Verifica si el hijo tiene fill container
                                                if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                                    // Establece el fill container en el hijo
                                                    child.layoutAlign = "STRETCH";
                                                    child.layoutGrow = 1;
                                                }
                                            });
                                        }

                                        // setFillContainerToChildren(nuevoMarco)
                                        figma.currentPage.appendChild(nuevoMarco);
                                        nuevoMarco.layoutGrids = [savedGridsSmall]

                                        let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                                        frameAir.name = "iPad Pro"
                                    }
                                } else {


                                    const frame = figma.createFrame()
                                    frame.layoutGrids = [savedGridsSmall]
                                    frame.resize(360, 640)
                                }
                                let android = figma.currentPage.children[figma.currentPage.children.length - 1];
                                android.name = "Android"
                            }
                        }






                        if (pluginMessage.type === 'macair-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1280, 832);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'macPro14-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1512, 982);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'macPro16-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1728, 1117);

                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'iPhone13-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(390, 844);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            }
                            else {
                                figma.notify("There is no selected frame, please select one");
                            }

                        }

                        if (pluginMessage.type === 'iPad-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1024, 1366);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'Android-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(360, 800);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }
                        if (pluginMessage.type === 'macair-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1280, 832);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'macPro14-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1512, 982);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'macPro16-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1728, 1117);

                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'iPhone13-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(390, 844);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            }
                            else {
                                figma.notify("There is no selected frame, please select one");
                            }

                        }

                        if (pluginMessage.type === 'iPad-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(1024, 1366);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        if (pluginMessage.type === 'Android-selected') {

                            const selectedFrame = figma.currentPage.selection[0];
                            if (selectedFrame) {
                                selectedFrame.resize(360, 800);
                                const children = selectedFrame.children;

                                // Determine the size of the frame and the elements
                                const frameWidth = selectedFrame.width;
                                const frameHeight = selectedFrame.height;
                                const elementWidth = children[0].width;
                                const elementHeight = children[0].height;

                                // Calculate the new positions for the elements
                                const newX = (frameWidth - elementWidth) / 2;
                                const newY = (frameHeight - elementHeight) / 2;

                                // Move the elements to the new positions
                                for (const child of children) {
                                    child.x = newX;
                                    child.y = newY;
                                }
                            } else {
                                figma.notify("There is no selected frame, please select one");
                            }
                        }

                        const frame = figma.currentPage.selection[0]
                        // savved elements
                        if (pluginMessage.type === "saveds") {
                            const dataw = pluginMessage.dataW
                            const dataH = pluginMessage.dataH
                            const dataB = pluginMessage.dataB
                            const name_group = pluginMessage.dataName
                            const seletedsW = pluginMessage.layoutW
                            const seletedH = pluginMessage.layoutH
                            const modeLayout = pluginMessage.dirs
                            const between = pluginMessage.space_between
                            const paddings = pluginMessage.paddings
                            const top_padd = pluginMessage.top_pad
                            const aligns = pluginMessage.aligns
                            const padLeft = pluginMessage.padLeft
                            const padTop = pluginMessage.toppad
                            const bottom = pluginMessage.bottomPad
                            const right = pluginMessage.rightPadding
                            const gridsSelect = pluginMessage.dimentions
                            const sizeGrids = pluginMessage.sizeGrids
                            const columnsInputs = pluginMessage.columnsInput
                            const inputW = pluginMessage.inputW
                            const selectAlign = pluginMessage.selectAlign
                            const inputGut = pluginMessage.gutter
                            const offset = pluginMessage.offset
                            const marginsInput = pluginMessage.marginStretch
                            const colorHex = pluginMessage.colorPalette
                            const opacityFill = pluginMessage.opacity
                            const colorStroke = pluginMessage.colorStroke
                            const opacityStroke = pluginMessage.opacityStroke
                            const grosorBorde = pluginMessage.grosorStroke
                            const positionSrroke = pluginMessage.positionStroke
                            const sonFill = pluginMessage.fillSon
                            const counter = pluginMessage.counter
                            const dimentions2 = pluginMessage.ff

                            const sizeGrid = pluginMessage.sizegrid
                            const columns = pluginMessage.countColumns
                            const valueWidht = pluginMessage.valueWidht
                            const typeCol = pluginMessage.typeColumns
                            const gutInput = pluginMessage.inputGutter
                            const ofInput = pluginMessage.inputOffset
                            const dimentionss = pluginMessage.gridsAds

                            const obj = {
                                name: name_group,
                                width: dataw,
                                height: dataH,
                                borders: dataB,
                                layoutHorizontal: seletedsW,
                                layoutVertical: seletedH,
                                layoutMode: modeLayout,
                                space_between: between,
                                padding_horizontal: paddings,
                                padding_vertical: top_padd,
                                aligns: aligns,
                                padLeft: padLeft,
                                padtop: padTop,
                                bottomPad: bottom,
                                rightpad: right,
                                grids: gridsSelect,
                                sizeForGrids: sizeGrids,
                                columnsInputs: columnsInputs,
                                inputWidht: inputW,
                                selectAlign: selectAlign,
                                gutter: inputGut,
                                offset: offset,
                                marginStretch: marginsInput,
                                colorsFill: colorHex,
                                opacityFill: opacityFill,
                                strokeColor: colorStroke,
                                opacityStroke: opacityStroke,
                                grosorStroke: grosorBorde,
                                positionStroke: positionSrroke,
                                sonFill: sonFill,
                                grids2: dimentions2,
                                inputGrid2: sizeGrid,
                                columns2: columns,
                                inputwidht2: valueWidht,
                                typecol2: typeCol,
                                gutter2: gutInput,
                                off2: ofInput,
                                gridsTwo: dimentionss
                            }



                            // console.log(seleteds);

                            frame.cornerRadius = dataB
                            frame.resize(dataw, dataH)

                            console.log(dimentions2);
                            

                            if (obj.layoutVertical === "Fixed") {
                                if (obj.layoutMode === "Horizontal") {
                                    frame.counterAxisSizingMode = "FIXED";
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "HORIZONTAL"

                                } else if (obj.layoutMode === "vertical") {
                                    frame.primaryAxisSizingMode = "FIXED";
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "VERTICAL"
                                }
                            }

                            if (obj.layoutVertical === "Fill") {
                                if (obj.layoutMode === "Horizontal") {
                                    frame.layoutAlign = "STRETCH";
                                    frame.layoutGrow = 1;
                                    frame.layoutMode = "HORIZONTAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }

                                } else if (obj.layoutMode === "vertical") {
                                    frame.layoutAlign = "STRETCH";
                                    frame.layoutGrow = 1;
                                    frame.layoutMode = "VERTICAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                }
                            }



                            if (obj.layoutVertical === "Hug") {



                                if (obj.layoutMode === "Horizontal") {
                                    frame.counterAxisSizingMode = "AUTO"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "HORIZONTAL"


                                } else if (obj.layoutMode === "vertical") {
                                    frame.primaryAxisSizingMode = "AUTO"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "VERTICAL"
                                }
                            }



                            if (obj.layoutHorizontal === "Fixed") {

                                if (obj.layoutMode === "Horizontal") {
                                    frame.primaryAxisSizingMode = "FIXED"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "HORIZONTAL"
                                }

                                else if (obj.layoutMode === "vertical") {
                                    frame.counterAxisSizingMode = "FIXED"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.layoutMode = "VERTICAL"
                                }



                            }

                            if (obj.layoutHorizontal === "Fill") {
                                if (obj.layoutMode === "Horizontal") {
                                    frame.layoutAlign = "STRETCH";
                                    frame.layoutGrow = 1;
                                    frame.layoutMode = "HORIZONTAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }

                                } else if (obj.layoutMode === "vertical") {
                                    frame.layoutAlign = "STRETCH";
                                    frame.layoutGrow = 1;
                                    frame.layoutMode = "VERTICAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                }
                            }

                            if (obj.layoutHorizontal === "Hug") {

                                if (obj.layoutMode === "Horizontal") {
                                    frame.primaryAxisSizingMode = "AUTO"
                                    frame.layoutMode = "HORIZONTAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                } else if (obj.layoutMode === "vertical") {
                                    frame.layoutMode = "VERTICAL"
                                    if (aligns === "Align top left") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align top center") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align top right") {
                                        frame.primaryAxisAlignItems = "MIN"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align right") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom right") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MAX"
                                    }
                                    if (aligns === "Align bottom center") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    if (aligns === "Align bottom left") {
                                        frame.primaryAxisAlignItems = "MAX"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align left") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "MIN"
                                    }
                                    if (aligns === "Align center") {
                                        frame.primaryAxisAlignItems = "CENTER"
                                        frame.counterAxisAlignItems = "CENTER"
                                    }
                                    frame.counterAxisSizingMode = "AUTO"
                                    // frame.counterAxisAlignItems = "MIN";
                                }



                                console.log(obj.gridsTwo, "desde el plugin");
                                if (dimentionss === "Grid") {
                                    console.log("nepe");
                                }




                            }

                            if (gridsSelect === "Grid") {
                                const grid = {
                                    pattern: "GRID",
                                    sectionSize: Number(sizeGrids),
                                    visible: true,
                                };
                                frame.layoutGrids = [grid];
                            }

                            if (gridsSelect === "Columns") {
                                if (selectAlign === "left") {
                                    const grid = {
                                        pattern: "COLUMNS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "MIN",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]

                                } else if (selectAlign === "right") {
                                    const grid = {
                                        pattern: "COLUMNS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "MAX",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]
                                } else if (selectAlign === "center") {
                                    const grid = {
                                        pattern: "COLUMNS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "CENTER",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]
                                } else if (selectAlign === "stretch") {
                                    const grid = {
                                        pattern: "COLUMNS",
                                        gutterSize: Number(inputGut),

                                        alignment: "STRETCH",
                                        count: Number(columnsInputs),
                                        offset: Number(marginsInput),
                                    };
                                    frame.layoutGrids = [grid]
                                }
                            }
                            if (gridsSelect === "Rows") {
                                if (selectAlign === "left") {
                                    const grid = {
                                        pattern: "COLUMNS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "MIN",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]

                                } else if (selectAlign === "right") {
                                    const grid = {
                                        pattern: "ROWS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "MAX",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]
                                } else if (selectAlign === "center") {
                                    const grid = {
                                        pattern: "ROWS",
                                        gutterSize: Number(inputGut),
                                        sectionSize: Number(inputW),
                                        alignment: "CENTER",
                                        count: Number(columnsInputs),
                                        offset: Number(offset),
                                    };
                                    frame.layoutGrids = [grid]
                                } else if (selectAlign === "stretch") {
                                    const grid = {
                                        pattern: "ROWS",
                                        gutterSize: Number(inputGut),

                                        alignment: "STRETCH",
                                        count: Number(columnsInputs),
                                        offset: Number(marginsInput),
                                    };
                                    frame.layoutGrids = [grid]
                                }
                            }


                            frame.itemSpacing = Number(between)
                            frame.horizontalPadding = Number(paddings);
                            frame.verticalPadding = Number(top_padd);
                            frame.paddingLeft = Number(padLeft);
                            frame.paddingTop = Number(padTop)
                            frame.paddingBottom = Number(bottom)
                            frame.paddingRight = Number(right)
                            const color = {
                                r: colorHex[0],
                                g: colorHex[1],
                                b: colorHex[2]
                            };

                            const StrCOLOR = {
                                r: colorStroke[0],
                                g: colorStroke[1],
                                b: colorStroke[2]
                            };
                            const opacoStroke = parseFloat(opacityStroke)
                            const bordeOpaco = opacoStroke / 100

                            // frame.strokes = {
                            //     type : "SOLID",
                            //     color : {
                            //         r: StrCOLOR.r / 255,
                            //         g: StrCOLOR.g / 255,
                            //         b: StrCOLOR.b / 255
                            //     },
                            //     opacity : bordeOpaco,
                            //     blendMode: 'NORMAL',
                            //     strokeAlign : "OUTSIDE"
                            // }

                            // console.log(positionSrroke);
                            if (positionSrroke === "Outside") {
                                frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                                frame.strokeWeight = Number(grosorBorde);
                                frame.strokeAlign = "OUTSIDE" // establece el peso del trazo    
                            }
                            if (positionSrroke === "center") {
                                frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                                frame.strokeWeight = Number(grosorBorde);
                                frame.strokeAlign = "CENTER" // establece el peso del trazo    
                            }
                            if (positionSrroke === "inside") {
                                frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                                frame.strokeWeight = Number(grosorBorde);
                                frame.strokeAlign = "INSIDE" // establece el peso del trazo    
                            }





                            const opaco = parseFloat(opacityFill)
                            console.log(opaco);
                            const opacidad = opaco / 100
                            const fills = [{
                                type: 'SOLID',
                                color: {
                                    r: color.r / 255,
                                    g: color.g / 255,
                                    b: color.b / 255
                                },
                                opacity: opacidad

                            }];

                            frame.fills = fills



                            const estiloString = JSON.stringify(obj);
                            console.log(estiloString);




                            figma.clientStorage.setAsync("llaveParaGuardar", estiloString)
                        }


                        // if (pluginMessage.type === "autolayoutAdded") {
                        //     frame.layoutMode = "VERTICAL"
                        //     console.log("se añadio auto");
                        // }

                        if (pluginMessage.type === "noAdded") {
                            frame.layoutMode = "NONE"
                        }

                        if (pluginMessage.type === "gridsAdd") {


                            const grid = {
                                pattern: "GRID",
                                sectionSize: 10,
                                visible: true,
                            }
                            frame.layoutGrids = [grid]
                        }

                        if (pluginMessage.type === "gridsClose") {
                            frame.layoutGrids = []
                        }

                        if (pluginMessage.type === "selects") {
                            const data = pluginMessage.data
                            if (data === "vertical") {
                                frame.layoutMode = "VERTICAL"
                            }

                            if (data === "Horizontal") {
                                frame.layoutMode = "HORIZONTAL"
                            }
                        }

                        if (pluginMessage.type === "space") {
                            const data = pluginMessage.data
                            console.log(data);
                            const constraints = {
                                type: "SPACE_BETWEEN",
                                value: data
                            };
                            frame.itemSpacing = Number(constraints.value);
                        }

                    }
                }

            }


        }

    } else {
        figma.ui.onmessage = pluginMessage => {



            if (pluginMessage.type === 'submit-register') {
                const email = pluginMessage.dataEmail;
                const password = pluginMessage.dataPassw;
                console.log(email, password);
                // Importar el módulo de MongoDB

                async function responser() {
                    const response = await fetch('https://myapi-rest-santiago-zapata.up.railway.app/api/user/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    })
                        // .then(response => response.json())
                        .then((result) => {
                            if (result.ok === false) {
                                alert("Email ya registrado")

                            } else {
                
                                figma.ui.postMessage({ type: 'registration_successful' });
                            }
                        })

                }
                responser()
            }

            if (pluginMessage.type === "login-ENTRY") {
                const emailLoginUser = pluginMessage.emailLogin;
                const passwordUserLogin = pluginMessage.contraLogin;

                async function login() {
                    let headers = { 'Content-Type': 'application/json' };

                    const responseLogin = await fetch("https://myapi-rest-santiago-zapata.up.railway.app/api/user/login", {
                        method: 'POST',
                        body: JSON.stringify({ email: emailLoginUser, password: passwordUserLogin }),
                        headers
                    });

                    if (responseLogin.ok) {
                        const token = await responseLogin.json();
                        console.log(token);
                        await figma.clientStorage.setAsync('myToken', token.data.token);
                        await figma.clientStorage.getAsync("myToken")

                        figma.ui.postMessage({ type: 'login_successful' });
                    } else {
                        figma.notify("Usuario no encontrado")
                    }


                    // Código actualizado para incluir la JWT en las solicitudes posteriores

                    const token = await figma.clientStorage.getAsync('myToken');
                    if (token) {
                        headers.Authorization = `Bearer ${token}`;
                    }
                }

                login();
            }
            if (pluginMessage.type === "logOut") {
                async function logout() {
                    try {
                        await figma.clientStorage.setAsync("myToken", null);
                        figma.ui.postMessage({ type: "logOutt" })
                        console.log("se ha borrado el token");
                    } catch (error) {
                        console.log(error);
                    }



                }
                logout()
            }


            // Ten en cuenta que este es solo un ejemplo y es posible que debas ajustar el código según tus necesidades específicas. Además, debes asegurarte de que la API que estás utilizando tenga medidas de seguridad adecuadas para proteger los datos de los usuarios.








            if (pluginMessage.type === 'SmallSelected') {
                async function small() {
                    const selectedColumns = 4;
                    const margin = 16
                    const gutter = 16
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });
                    savedGridsSmall = await figma.clientStorage.getAsync('selectedValues');

                }

                small()
            } else if (pluginMessage.type === 'mediumSelected') {
                async function medium() {
                    const selectedColumns = 8;
                    const margin = 36;
                    const gutter = 36;
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });
                    savedGridsMedium = await figma.clientStorage.getAsync('selectedValues');

                }

                medium()
            }
            else if (pluginMessage.type === "largeSelected") {
                async function large() {
                    const selectedColumns = 12;
                    const margin = 64;
                    const gutter = 36;
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });
                    savedGridsLarge = await figma.clientStorage.getAsync('selectedValues');

                }

                large()
            }
            else if (pluginMessage.type === "smallNoMargin") {
                async function small() {
                    const selectedColumns = 4;
                    const margin = 16
                    const gutter = 16
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });

                    savedGridsSmall = await figma.clientStorage.getAsync('selectedValues');

                }

                small()
            }
            else if (pluginMessage.type === "mediumNoMargin") {
                async function medium() {
                    const selectedColumns = 8;
                    const margin = 36;
                    const gutter = 36;
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });

                    savedGridsMedium = await figma.clientStorage.getAsync('selectedValues');

                }

                medium()
            }
            else if (pluginMessage.type === "largeNoMargin") {
                async function large() {
                    const selectedColumns = 12;
                    const margin = 64;
                    const gutter = 36;
                    const grid = {
                        pattern: "COLUMNS",
                        gutterSize: gutter,
                        alignment: "STRETCH",
                        count: selectedColumns,
                        offset: margin,
                    };
                    figma.clientStorage.setAsync('selectedValues', grid, {
                        columns: selectedColumns,
                        gutter: margin,
                        margin: gutter,
                    });

                    savedGridsLarge = await figma.clientStorage.getAsync('selectedValues');

                }

                large()
            }




            if (pluginMessage.type === "fonts") {
                const data = pluginMessage.data
                async function init() {
                    if (true) {
                        // console.log(value);
                        // console.log(data);
                        async function fonts() {
                            if (figma.currentPage.selection[0]) {
                                if ("h1" in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    // await figma.loadFontAsync({ family: "Halyard Display", style: "Book" })
                                    // await figma.loadFontAsync({ family: "Halyard Display", style: "SemiBold" })

                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 60 && node.fontSize <= 128) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }

                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h1"]);
                                    }

                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            }

                        }
                        fonts()
                        async function fons() {
                            if (figma.currentPage.selection[0]) {
                                if ('h2' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h2"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h2" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }

                        }
                        fons()
                        async function fuentes() {
                            if (figma.currentPage.selection[0]) {
                                if ('h3' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h3"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();

                                }
                            } else {
                                if ("h3" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        fuentes()
                        async function fuente() {
                            if (figma.currentPage.selection[0]) {
                                if ('h4' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 25 && node.fontSize <= 30) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h4"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h4" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        fuente()
                        async function fuent() {
                            if (figma.currentPage.selection[0]) {
                                if ('h5' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 20 && node.fontSize <= 25) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h5"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h5" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        fuent()
                        async function fio() {
                            if (figma.currentPage.selection[0]) {
                                if ('h6' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h6"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h6" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        fio()
                        async function h3Label() {
                            if (figma.currentPage.selection[0]) {
                                if ('h3-labels' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 40 && node.fontSize <= 60) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h3-labels"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h3-labels" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        h3Label()
                        async function h4Label() {
                            if (figma.currentPage.selection[0]) {
                                if ('h4-labels' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 25 && node.fontSize <= 30) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h4-labels"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();

                                }
                            } else {
                                if ("h4-labels" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        h4Label()
                        async function h5Label() {
                            if (figma.currentPage.selection[0]) {
                                if ('h5-labels' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 20 && node.fontSize <= 25) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h5-labels"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h5-labels" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        h5Label()
                        async function h6Label() {
                            if (figma.currentPage.selection[0]) {
                                if ('h6-labels' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["h6-labels"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("h6-labels" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        h6Label()
                        async function small() {
                            if (figma.currentPage.selection[0]) {
                                if ('small' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["small"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("small" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        small()
                        async function medium() {
                            if (figma.currentPage.selection[0]) {
                                if ('medium' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["medium"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("medium" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        medium()
                        async function large() {
                            if (figma.currentPage.selection[0]) {
                                if ('large' in data) {
                                    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
                                    await figma.loadFontAsync({ family: "Allura", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Abhaya Libre", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Abel", style: "Regular" })
                                    await figma.loadFontAsync({ family: "Alegreya", style: "ExtraBold" })
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                                    function changeFontSize(node, size) {
                                        if (node.type === "TEXT" && node.fontSize >= 12 && node.fontSize <= 20) {
                                            node.fontSize = size;
                                        } else if ("children" in node) {
                                            for (const child of node.children) {
                                                changeFontSize(child, size);
                                            }
                                        }
                                    }
                                    for (const selection of figma.currentPage.selection) {
                                        changeFontSize(selection, data["large"]);
                                    }
                                    await figma.clientStorage.setAsync("selectedFonts", JSON.stringify(data));
                                    (async () => {
                                        savedFonts = await figma.clientStorage.getAsync(
                                            "selectedFonts",
                                            JSON.stringify(data)
                                        );
                                    })();
                                }
                            } else {
                                if ("large" in data) {
                                    if (!figma.currentPage.selection[0]) {
                                        await figma.clientStorage.setAsync('selectedFonts', JSON.stringify(data));
                                        (async () => {
                                            const savedFonts = await figma.clientStorage.getAsync('selectedFonts', JSON.stringify(data));
                                            console.log(savedFonts);
                                        })();
                                    }
                                }
                            }
                        }
                        large()
                    }
                }


                init()




            }

            if (pluginMessage.type === 'buttonWasClicked') {
                const device = pluginMessage.data



                if (device.includes("air")) {


                    const seleccion = figma.currentPage.selection[0];


                    if (seleccion) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1280, 832)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };


                            function setFillContainerToChildren(node) {


                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsLarge]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1280, 832)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            nuevoMarco.layoutGrids = [savedGridsLarge]
                            figma.currentPage.appendChild(nuevoMarco);

                            let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                            frameAir.name = "Mac Air"
                        }
                    }
                }


                if (device.includes("bPro1")) {
                    const seleccion = figma.currentPage.selection[0]
                    if (seleccion) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1512, 962)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            function setFillContainerToChildren(node) {

                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsLarge]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1512, 982)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsLarge]

                            let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                            frameAir.name = "Mac pro 14"
                        }
                    }
                    let framePro14 = figma.currentPage.children[figma.currentPage.children.length - 1];
                    framePro14.name = "MacBook Pro 14"
                }
                if (device.includes("c16")) {

                    const seleccion = figma.currentPage.selection[0];


                    if (seleccion) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1728, 1117)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            function setFillContainerToChildren(node) {

                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsLarge]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(1728, 1117)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            nuevoMarco.layoutGrids = [savedGridsLarge]
                            figma.currentPage.appendChild(nuevoMarco);

                            let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                            frameAir.name = "Mac por 16"
                        }
                    }



                }

                if (device.includes("d13i")) {
                    const seleccion = figma.currentPage.selection[0];


                    if (seleccion) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(390, 844)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            function setFillContainerToChildren(node) {
                                if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                    // Verificar si la imagen está dentro de un auto layout
                                    if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                        // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                        child.resize(child.width, child.parent.height);
                                    }
                                }
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(390, 844)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]
                        }
                    } else {
                        const frame = figma.createFrame()

                        frame.x = 2322;
                        frame.y = 0;
                        frame.layoutGrids = [savedGridsSmall]

                        frame.resize(390, 844)

                    }
                    let frameIphone13 = figma.currentPage.children[figma.currentPage.children.length - 1];
                    frameIphone13.name = "iPhone 13"

                    // Verificar si hay un marco seleccionado

                }
                if (device.includes("eiPad")) {

                    if (figma.currentPage.selection[0]) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(390, 844)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            function setFillContainerToChildren(node) {
                                if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                    // Verificar si la imagen está dentro de un auto layout
                                    if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                        // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                        child.resize(child.width, child.parent.height);
                                    }
                                }
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(390, 844)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            // setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]

                            let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                            frameAir.name = "iPad Pro"
                        }
                    }

                    // Clonar el marco seleccionado
                    const seleccion = figma.currentPage.selection;
                    if (seleccion.length === 1 && seleccion[0].type === "FRAME") {
                        const marcoOriginal = seleccion[0];
                        const nuevoMarco = marcoOriginal.clone();
                        nuevoMarco.x += nuevoMarco.width + 100;
                        nuevoMarco.resize(360, 640)
                        figma.currentPage.appendChild(nuevoMarco);
                    }
                }

                if (device.includes("fandroid")) {
                    const seleccion = figma.currentPage.selection[0]
                    if (seleccion) {
                        const frame = figma.currentPage.selection[0];
                        // Verificar si el marco tiene Auto Layout
                        if (frame.layoutMode === "NONE") {
                            // Agregar Auto Layout
                            frame.layoutMode = "VERTICAL";
                            frame.primaryAxisSizingMode = "FIXED";
                            frame.counterAxisSizingMode = "FIXED";

                            // Ajustar los hijos al contenedor
                            frame.children.forEach(child => {
                                child.layoutAlign = "STRETCH";
                                child.constraints = {
                                    horizontal: "STRETCH",
                                    vertical: "STRETCH"
                                };
                            });
                            const image = figma.currentPage.selection[0].findOne(node => node.type === 'IMAGE');
                            if (image) {
                                const frame = figma.currentPage.selection[0];
                                const imageWidth = image.width;
                                const imageHeight = image.height;
                                const imageRatio = imageWidth / imageHeight;
                                const frameWidth = frame.width;
                                const frameHeight = frame.height;
                                const frameRatio = frameWidth / frameHeight;
                                const horizontalConstraint = imageRatio > frameRatio ? "SCALE" : "NONE";
                                const verticalConstraint = imageRatio < frameRatio ? "SCALE" : "NONE";
                                image.constraints = {
                                    horizontal: horizontalConstraint,
                                    vertical: verticalConstraint
                                };
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(3600, 640)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            function setFillContainerToChildren(node) {
                                if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
                                    // Verificar si la imagen está dentro de un auto layout
                                    if (child.parent.layoutMode === 'VERTICAL' || child.parent.layoutMode === 'HORIZONTAL') {
                                        // Establecer el ajuste de tamaño horizontal para que la imagen se ajuste al ancho del contenedor
                                        child.resize(child.width, child.parent.height);
                                    }
                                }
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else if (node.type === "IMAGE") {
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "FIXED";
                                            child.counterAxisSizingMode = "FIXED";
                                        }
                                        else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }
                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            // setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]

                            // Seleccionar el marco actualizado
                            figma.currentPage.selection = [frame];

                            // Cerrar el plugin con un mensaje de éxito
                            figma.closePlugin("Se agregó Auto Layout y se ajustaron los hijos al contenedor");
                        } else {
                            console.log('ya tiene ome bobo');
                            function setFillContainerToChildren(node) {
                                if (node.type === 'FRAME' || node.type === 'GROUP') {
                                    // Recorrer todos los hijos del objeto
                                    node.children.forEach(child => {
                                        // Verificar si el objeto es un frame o un group
                                        if (child.type === 'FRAME') {
                                            // Si es un frame o group, establecer fill container
                                            child.layoutMode = "VERTICAL";
                                            child.primaryAxisSizingMode = "AUTO";
                                            child.counterAxisSizingMode = "AUTO";
                                            child.primaryAxisAlignItems = "CENTER";
                                            child.itemSpacing = 0;
                                            // setFillContainerToChildren(child); // Llamada recursiva a la misma función
                                        } else {
                                            // Si es cualquier otro tipo de objeto, establecer fill container
                                            child.layoutAlign = "STRETCH";
                                        }
                                    });
                                }
                            }

                            const marcoOriginal = seleccion
                            const nuevoMarco = marcoOriginal.clone();
                            nuevoMarco.resize(390, 844)
                            nuevoMarco.constraints = { horizontal: "SCALE", vertical: "SCALE" };

                            if (nuevoMarco.layoutMode === "HORIZONTAL" || nuevoMarco.layoutMode === "VERTICAL") {
                                nuevoMarco.children.forEach(child => {
                                    // Verifica si el hijo tiene fill container
                                    if (child.layoutAlign !== "STRETCH" && child.layoutGrow === 0) {
                                        // Establece el fill container en el hijo
                                        child.layoutAlign = "STRETCH";
                                        child.layoutGrow = 1;
                                    }
                                });
                            }

                            // setFillContainerToChildren(nuevoMarco)
                            figma.currentPage.appendChild(nuevoMarco);
                            nuevoMarco.layoutGrids = [savedGridsSmall]

                            let frameAir = figma.currentPage.children[figma.currentPage.children.length - 1];

                            frameAir.name = "iPad Pro"
                        }
                    } else {


                        const frame = figma.createFrame()
                        frame.layoutGrids = [savedGridsSmall]
                        frame.resize(360, 640)
                    }
                    let android = figma.currentPage.children[figma.currentPage.children.length - 1];
                    android.name = "Android"
                }
            }






            if (pluginMessage.type === 'macair-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1280, 832);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'macPro14-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1512, 982);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'macPro16-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1728, 1117);

                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'iPhone13-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(390, 844);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                }
                else {
                    figma.notify("There is no selected frame, please select one");
                }

            }

            if (pluginMessage.type === 'iPad-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1024, 1366);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'Android-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(360, 800);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }
            if (pluginMessage.type === 'macair-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1280, 832);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'macPro14-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1512, 982);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'macPro16-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1728, 1117);

                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'iPhone13-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(390, 844);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                }
                else {
                    figma.notify("There is no selected frame, please select one");
                }

            }

            if (pluginMessage.type === 'iPad-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(1024, 1366);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }

            if (pluginMessage.type === 'Android-selected') {

                const selectedFrame = figma.currentPage.selection[0];
                if (selectedFrame) {
                    selectedFrame.resize(360, 800);
                    const children = selectedFrame.children;

                    // Determine the size of the frame and the elements
                    const frameWidth = selectedFrame.width;
                    const frameHeight = selectedFrame.height;
                    const elementWidth = children[0].width;
                    const elementHeight = children[0].height;

                    // Calculate the new positions for the elements
                    const newX = (frameWidth - elementWidth) / 2;
                    const newY = (frameHeight - elementHeight) / 2;

                    // Move the elements to the new positions
                    for (const child of children) {
                        child.x = newX;
                        child.y = newY;
                    }
                } else {
                    figma.notify("There is no selected frame, please select one");
                }
            }
            let count;
            let dimentions2;
            const frame = figma.currentPage.selection[0]
            // savved elements
            if (pluginMessage.type === "saveds") {


                const dataw = pluginMessage.dataW
                const dataH = pluginMessage.dataH
                const dataB = pluginMessage.dataB
                const name_group = pluginMessage.dataName
                const seletedsW = pluginMessage.layoutW
                const seletedH = pluginMessage.layoutH
                const modeLayout = pluginMessage.dirs
                const between = pluginMessage.space_between
                const paddings = pluginMessage.paddings
                const top_padd = pluginMessage.top_pad
                const aligns = pluginMessage.aligns
                const padLeft = pluginMessage.padLeft
                const padTop = pluginMessage.toppad
                const bottom = pluginMessage.bottomPad
                const right = pluginMessage.rightPadding
                const gridsSelect = pluginMessage.dimentions
                const sizeGrids = pluginMessage.sizeGrids
                const columnsInputs = pluginMessage.columnsInput
                const inputW = pluginMessage.inputW
                const selectAlign = pluginMessage.selectAlign
                const inputGut = pluginMessage.gutter
                const offset = pluginMessage.offset
                const marginsInput = pluginMessage.marginStretch
                const colorHex = pluginMessage.colorPalette
                const opacityFill = pluginMessage.opacity
                const colorStroke = pluginMessage.colorStroke
                const opacityStroke = pluginMessage.opacityStroke
                const grosorBorde = pluginMessage.grosorStroke
                const positionSrroke = pluginMessage.positionStroke
                const sonFill = pluginMessage.fillSon
                const count = pluginMessage.counter
                const gridsADD = pluginMessage.gridsAds
                const objet = pluginMessage.objet

                const obj = {
                    name: name_group,
                    width: dataw,
                    height: dataH,
                    borders: dataB,
                    layoutHorizontal: seletedsW,
                    layoutVertical: seletedH,
                    layoutMode: modeLayout,
                    space_between: between,
                    padding_horizontal: paddings,
                    padding_vertical: top_padd,
                    aligns: aligns,
                    padLeft: padLeft,
                    padtop: padTop,
                    bottomPad: bottom,
                    rightpad: right,
                    grids: gridsSelect,
                    sizeForGrids: sizeGrids,
                    columnsInputs: columnsInputs,
                    inputWidht: inputW,
                    selectAlign: selectAlign,
                    gutter: inputGut,
                    offset: offset,
                    marginStretch: marginsInput,
                    colorsFill: colorHex,
                    opacityFill: opacityFill,
                    strokeColor: colorStroke,
                    opacityStroke: opacityStroke,
                    grosorStroke: grosorBorde,
                    positionStroke: positionSrroke,
                    sonFill: sonFill,
                    dimentions2: dimentions2

                }



                console.log(count, "eeee");

                frame.cornerRadius = dataB
                frame.resize(dataw, dataH)



                if (obj.layoutVertical === "Fixed") {
                    if (obj.layoutMode === "Horizontal") {
                        frame.counterAxisSizingMode = "FIXED";
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "HORIZONTAL"

                    } else if (obj.layoutMode === "vertical") {
                        frame.primaryAxisSizingMode = "FIXED";
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "VERTICAL"
                    }
                }

                if (obj.layoutVertical === "Fill") {
                    if (obj.layoutMode === "Horizontal") {
                        frame.layoutAlign = "STRETCH";
                        frame.layoutGrow = 1;

                    } else if (obj.layoutMode === "vertical") {
                        frame.layoutAlign = "STRETCH";
                        frame.layoutGrow = 1;

                    }
                }


                if (obj.layoutVertical === "Hug") {



                    if (obj.layoutMode === "Horizontal") {
                        frame.counterAxisSizingMode = "AUTO"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "HORIZONTAL"


                    } else if (obj.layoutMode === "vertical") {
                        frame.primaryAxisSizingMode = "AUTO"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "VERTICAL"
                    }
                }



                if (obj.layoutHorizontal === "Fixed") {

                    if (obj.layoutMode === "Horizontal") {
                        frame.primaryAxisSizingMode = "FIXED"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "HORIZONTAL"
                    }

                    else if (obj.layoutMode === "vertical") {
                        frame.counterAxisSizingMode = "FIXED"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.layoutMode = "VERTICAL"
                    }



                }


                if (obj.layoutHorizontal === "Hug") {

                    if (obj.layoutMode === "Horizontal") {
                        frame.primaryAxisSizingMode = "AUTO"
                        frame.layoutMode = "HORIZONTAL"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                    } else if (obj.layoutMode === "vertical") {
                        frame.layoutMode = "VERTICAL"
                        if (aligns === "Align top left") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align top center") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align top right") {
                            frame.primaryAxisAlignItems = "MIN"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align right") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom right") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MAX"
                        }
                        if (aligns === "Align bottom center") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        if (aligns === "Align bottom left") {
                            frame.primaryAxisAlignItems = "MAX"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align left") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "MIN"
                        }
                        if (aligns === "Align center") {
                            frame.primaryAxisAlignItems = "CENTER"
                            frame.counterAxisAlignItems = "CENTER"
                        }
                        frame.counterAxisSizingMode = "AUTO"
                        // frame.counterAxisAlignItems = "MIN";
                    }









                }



                console.log(dimentions2);

                console.log(objet, "arboletes");


                if (gridsSelect === "Grid") {
                    const grid = {
                        pattern: "GRID",
                        sectionSize: Number(sizeGrids),
                        visible: true,
                    };
                    frame.layoutGrids = [grid];
                }

                if (dimentions2 === "Rows") {
                    console.log("shi");
                }





                if (gridsSelect === "Columns") {
                    if (selectAlign === "left") {
                        const grid = {
                            pattern: "COLUMNS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "MIN",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]

                    } else if (selectAlign === "right") {
                        const grid = {
                            pattern: "COLUMNS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "MAX",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]
                    } else if (selectAlign === "center") {
                        const grid = {
                            pattern: "COLUMNS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "CENTER",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]
                    } else if (selectAlign === "stretch") {
                        const grid = {
                            pattern: "COLUMNS",
                            gutterSize: Number(inputGut),

                            alignment: "STRETCH",
                            count: Number(columnsInputs),
                            offset: Number(marginsInput),
                        };
                        frame.layoutGrids = [grid]
                    }
                }
                if (gridsSelect === "Rows") {
                    if (selectAlign === "left") {
                        const grid = {
                            pattern: "COLUMNS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "MIN",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]

                    } else if (selectAlign === "right") {
                        const grid = {
                            pattern: "ROWS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "MAX",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]
                    } else if (selectAlign === "center") {
                        const grid = {
                            pattern: "ROWS",
                            gutterSize: Number(inputGut),
                            sectionSize: Number(inputW),
                            alignment: "CENTER",
                            count: Number(columnsInputs),
                            offset: Number(offset),
                        };
                        frame.layoutGrids = [grid]
                    } else if (selectAlign === "stretch") {
                        const grid = {
                            pattern: "ROWS",
                            gutterSize: Number(inputGut),

                            alignment: "STRETCH",
                            count: Number(columnsInputs),
                            offset: Number(marginsInput),
                        };
                        frame.layoutGrids = [grid]
                    }
                }


                frame.itemSpacing = Number(between)
                frame.horizontalPadding = Number(paddings);
                frame.verticalPadding = Number(top_padd);
                frame.paddingLeft = Number(padLeft);
                frame.paddingTop = Number(padTop)
                frame.paddingBottom = Number(bottom)
                frame.paddingRight = Number(right)
                const color = {
                    r: colorHex[0],
                    g: colorHex[1],
                    b: colorHex[2]
                };

                const StrCOLOR = {
                    r: colorStroke[0],
                    g: colorStroke[1],
                    b: colorStroke[2]
                };
                const opacoStroke = parseFloat(opacityStroke)
                const bordeOpaco = opacoStroke / 100

                // frame.strokes = {
                //     type : "SOLID",
                //     color : {
                //         r: StrCOLOR.r / 255,
                //         g: StrCOLOR.g / 255,
                //         b: StrCOLOR.b / 255
                //     },
                //     opacity : bordeOpaco,
                //     blendMode: 'NORMAL',
                //     strokeAlign : "OUTSIDE"
                // }

                console.log(positionSrroke);
                if (positionSrroke === "Outside") {
                    frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                    frame.strokeWeight = Number(grosorBorde);
                    frame.strokeAlign = "OUTSIDE" // establece el peso del trazo    
                }
                if (positionSrroke === "center") {
                    frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                    frame.strokeWeight = Number(grosorBorde);
                    frame.strokeAlign = "CENTER" // establece el peso del trazo    
                }
                if (positionSrroke === "inside") {
                    frame.strokes = [{ type: 'SOLID', color: { r: StrCOLOR.r / 255, g: StrCOLOR.g / 255, b: StrCOLOR.b / 255 }, opacity: bordeOpaco, blendMode: 'NORMAL' }]; // establece el color y las propiedades del trazo
                    frame.strokeWeight = Number(grosorBorde);
                    frame.strokeAlign = "INSIDE" // establece el peso del trazo    
                }





                const opaco = parseFloat(opacityFill)
                console.log(opaco);
                const opacidad = opaco / 100
                const fills = [{
                    type: 'SOLID',
                    color: {
                        r: color.r / 255,
                        g: color.g / 255,
                        b: color.b / 255
                    },
                    opacity: opacidad

                }];

                frame.fills = fills




                    
                    let layoutGrids = frame.layoutGrids;

                    if (!layoutGrids) {
                        layoutGrids = [];
                    }

                    if (objet.id === "div-clonado-1" && objet.type === "Columns") {
                        const newLayoutGrid = {
                            pattern: "COLUMNS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50,
                        };

                        if (objet.typos === "Top") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "Bottom") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }


                        const copy = [...layoutGrids];
                        if (copy[0]) {
                            copy[0] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-1" && objet.type === "Grid") {
                        const newLayoutGrid = {
                            pattern: 'GRID',
                            sectionSize: 10,
                            visible: true,
                            color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                        };

                        if (objet.gridValue) {
                            newLayoutGrid.sectionSize = Number(objet.gridValue)
                        }

                        const copy = [...layoutGrids];
                        if (copy[0]) {
                            copy[0] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-1" && objet.type === "Rows") {
                        const newLayoutGrid = {
                            pattern: "ROWS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50,
                        };

                        if (objet.typos === "Top") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "Bottom") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }


                        const copy = [...layoutGrids];
                        if (copy[0]) {
                            copy[0] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    


                    if (objet.id === "div-clonado-2" && objet.type === "Rows") {
                        const newLayoutGrid = {
                            pattern: "ROWS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50,
                        };

                        if (objet.typos === "Top") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "Bottom") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }


                        const copy = [...layoutGrids];
                        if (copy[1]) {
                            copy[1] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                        console.log(frame.layoutGrids, "gh");
                    }
                    if (objet.id === "div-clonado-2" && objet.type === "Grid") {
                        const newLayoutGrid = {
                            pattern: 'GRID',
                            sectionSize: 10,
                            visible: true,
                            color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                        };

                        if (objet.gridValue) {
                            newLayoutGrid.sectionSize = Number(objet.gridValue)
                        }

                        const copy = [...layoutGrids];
                        if (copy[1]) {
                            copy[1] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-2" && objet.type === "Columns") {
                        const newLayoutGrid = {
                            pattern: "COLUMNS",
                            sectionSize: 10,
                            gutterSize: 10,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50
                        };

                        if (objet.typos === "left") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "right") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }

                        const copy = [...layoutGrids];
                        if (copy[1]) {
                            copy[1] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }

                    if (objet.id === "div-clonado-3" && objet.type === "Rows") {
                        const newLayoutGrid = {
                            pattern: "ROWS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50,
                        };

                        if (objet.typos === "Top") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "Bottom") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }


                        const copy = [...layoutGrids];
                        if (copy[2]) {
                            copy[2] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-3" && objet.type === "Grid") {
                        const newLayoutGrid = {
                            pattern: 'GRID',
                            sectionSize: 10,
                            visible: true,
                            color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                        };

                        if (objet.gridValue) {
                            newLayoutGrid.sectionSize = Number(objet.gridValue)
                        }

                        const copy = [...layoutGrids];
                        if (copy[2]) {
                            copy[2] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-3" && objet.type === "Columns") {
                        const newLayoutGrid = {
                            pattern: "COLUMNS",
                            sectionSize: 10,
                            gutterSize: 10,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50
                        };

                        if (objet.typos === "left") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "right") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }

                        const copy = [...layoutGrids];
                        if (copy[2]) {
                            copy[2] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }

                    if (objet.id === "div-clonado-4" && objet.type === "Rows") {
                        const newLayoutGrid = {
                            pattern: "ROWS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50,
                        };

                        if (objet.typos === "Top") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "Bottom") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }


                        const copy = [...layoutGrids];
                        if (copy[3]) {
                            copy[3] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-4" && objet.type === "Grid") {
                        const newLayoutGrid = {
                            pattern: 'GRID',
                            sectionSize: 32,
                            visible: true,
                            color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                        };
                        const copy = [...layoutGrids];
                        if (copy[3]) {
                            copy[3] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-4" && objet.type === "Columns") {
                        const newLayoutGrid = {
                            pattern: "COLUMNS",
                            sectionSize: 10,
                            gutterSize: 10,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50
                        };

                        if (objet.typos === "left") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "right") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }

                        const copy = [...layoutGrids];
                        if (copy[3]) {
                            copy[3] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }

                    if (objet.id === "div-clonado-5" && objet.type === "Rows") {
                        const newLayoutGrid = {
                            pattern: "ROWS",
                            sectionSize: 100,
                            gutterSize: 20,
                            alignment: "MIN",
                            count: 3,
                            offset: 50,
                        };
                        const copy = [...frame.layoutGrids];
                        if (copy[4]) {
                            copy[4] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);

                        }
                        frame.layoutGrids = copy;
                        console.log(frame.layoutGrids, "gh");
                    }
                    if (objet.id === "div-clonado-5" && objet.type === "Grid") {
                        const newLayoutGrid = {
                            pattern: 'GRID',
                            sectionSize: 32,
                            visible: true,
                            color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                        };
                        const copy = [...layoutGrids];
                        if (copy[3]) {
                            copy[3] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;
                    }
                    if (objet.id === "div-clonado-5" && objet.type === "Columns") {
                        const newLayoutGrid = {
                            pattern: "COLUMNS",
                            sectionSize: 10,
                            gutterSize: 10,
                            alignment: "MIN",
                            count: Number(objet.valorColumns),
                            offset: 50
                        };

                        if (objet.typos === "left") {
                            newLayoutGrid.alignment = "MIN";
                        } else if (objet.typos === "right") {
                            newLayoutGrid.alignment = "MAX";
                        } else if (objet.typos === "center") {
                            newLayoutGrid.alignment = "CENTER";
                            delete newLayoutGrid.offset
                        } else if (objet.typos === "stretch") {
                            newLayoutGrid.alignment = "STRETCH";
                            delete newLayoutGrid.sectionSize
                            if (objet.margin) {
                                newLayoutGrid.offset = Number(objet.margin)
                            }
                            //   newLayoutGrid.margin = Number(objet.margin)
                        }


                        if (objet.OffSet) {
                            newLayoutGrid.offset = Number(objet.OffSet)
                        }
                        if (objet.widths) {
                            newLayoutGrid.sectionSize = Number(objet.widths)
                        }
                        if (objet.valueGut) {
                            newLayoutGrid.gutterSize = Number(objet.valueGut)
                        }

                        const copy = [...layoutGrids];
                        if (copy[4]) {
                            copy[4] = newLayoutGrid;
                        } else {
                            copy.push(newLayoutGrid);
                        }
                        frame.layoutGrids = copy;


                    }
                


















                const estiloString = JSON.stringify(obj);
                console.log(estiloString);



                // if (pluginMessage.type === "gridsAdd") {

                figma.clientStorage.setAsync("llaveParaGuardar", estiloString)

            }


            if (pluginMessage.type === "pressButton") {
                const obj = pluginMessage.objeto;
                const frame = figma.currentPage.selection[0];
                let layoutGrids = frame.layoutGrids;

                if (!layoutGrids) {
                    layoutGrids = [];
                }

                if (obj.id === "div-clonado-1" && obj.type === "Columns") {
                    const newLayoutGrid = {
                        pattern: "COLUMNS",
                        sectionSize: 10,
                        gutterSize: 10,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50
                    };

                    if (obj.typos === "left") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "right") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }

                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-1" && obj.type === "Rows") {
                    const newLayoutGrid = {
                        pattern: "ROWS",
                        sectionSize: 100,
                        gutterSize: 20,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50,
                    };

                    if (obj.typos === "Top") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "Bottom") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }


                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-1" && obj.type === "Grid") {
                    const newLayoutGrid = {
                        pattern: 'GRID',
                        sectionSize: 10,
                        visible: true,
                        color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                    };

                    if (obj.gridValue) {
                        newLayoutGrid.sectionSize = Number(obj.gridValue)
                    }

                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.unshift(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }


                if (obj.id === "div-clonado-2" && obj.type === "Rows") {
                    const newLayoutGrid = {
                        pattern: "ROWS",
                        sectionSize: 100,
                        gutterSize: 20,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50,
                    };

                    if (obj.typos === "Top") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "Bottom") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }


                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                    console.log(frame.layoutGrids, "gh");
                }
                if (obj.id === "div-clonado-2" && obj.type === "Grid") {
                    const newLayoutGrid = {
                        pattern: 'GRID',
                        sectionSize: 10,
                        visible: true,
                        color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                    };

                    if (obj.gridValue) {
                        newLayoutGrid.sectionSize = Number(obj.gridValue)
                    }

                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-2" && obj.type === "Columns") {
                    const newLayoutGrid = {
                        pattern: "COLUMNS",
                        sectionSize: 10,
                        gutterSize: 10,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50
                    };

                    if (obj.typos === "left") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "right") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }

                    const copy = [...layoutGrids];
                    if (copy[1]) {
                        copy[1] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }

                if (obj.id === "div-clonado-3" && obj.type === "Rows") {
                    const newLayoutGrid = {
                        pattern: "ROWS",
                        sectionSize: 100,
                        gutterSize: 20,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50,
                    };

                    if (obj.typos === "Top") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "Bottom") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }


                    const copy = [...layoutGrids];
                    if (copy[2]) {
                        copy[2] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-3" && obj.type === "Grid") {
                    const newLayoutGrid = {
                        pattern: 'GRID',
                        sectionSize: 10,
                        visible: true,
                        color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                    };

                    if (obj.gridValue) {
                        newLayoutGrid.sectionSize = Number(obj.gridValue)
                    }

                    const copy = [...layoutGrids];
                    if (copy[2]) {
                        copy[2] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-3" && obj.type === "Columns") {
                    const newLayoutGrid = {
                        pattern: "COLUMNS",
                        sectionSize: 10,
                        gutterSize: 10,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50
                    };

                    if (obj.typos === "left") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "right") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }

                    const copy = [...layoutGrids];
                    if (copy[2]) {
                        copy[2] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }

                if (obj.id === "div-clonado-4" && obj.type === "Rows") {
                    const newLayoutGrid = {
                        pattern: "ROWS",
                        sectionSize: 100,
                        gutterSize: 20,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50,
                    };

                    if (obj.typos === "Top") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "Bottom") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }


                    const copy = [...layoutGrids];
                    if (copy[3]) {
                        copy[3] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-4" && obj.type === "Grid") {
                    const newLayoutGrid = {
                        pattern: 'GRID',
                        sectionSize: 32,
                        visible: true,
                        color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                    };
                    const copy = [...layoutGrids];
                    if (copy[3]) {
                        copy[3] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-4" && obj.type === "Columns") {
                    const newLayoutGrid = {
                        pattern: "COLUMNS",
                        sectionSize: 10,
                        gutterSize: 10,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50
                    };

                    if (obj.typos === "left") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "right") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }

                    const copy = [...layoutGrids];
                    if (copy[3]) {
                        copy[3] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }

                if (obj.id === "div-clonado-5" && obj.type === "Rows") {
                    const newLayoutGrid = {
                        pattern: "ROWS",
                        sectionSize: 100,
                        gutterSize: 20,
                        alignment: "MIN",
                        count: 3,
                        offset: 50,
                    };
                    const copy = [...frame.layoutGrids];
                    if (copy[4]) {
                        copy[4] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);

                    }
                    frame.layoutGrids = copy;
                    console.log(frame.layoutGrids, "gh");
                }
                if (obj.id === "div-clonado-5" && obj.type === "Grid") {
                    const newLayoutGrid = {
                        pattern: 'GRID',
                        sectionSize: 32,
                        visible: true,
                        color: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
                    };
                    const copy = [...layoutGrids];
                    if (copy[3]) {
                        copy[3] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;
                }
                if (obj.id === "div-clonado-5" && obj.type === "Columns") {
                    const newLayoutGrid = {
                        pattern: "COLUMNS",
                        sectionSize: 10,
                        gutterSize: 10,
                        alignment: "MIN",
                        count: Number(obj.valorColumns),
                        offset: 50
                    };

                    if (obj.typos === "left") {
                        newLayoutGrid.alignment = "MIN";
                    } else if (obj.typos === "right") {
                        newLayoutGrid.alignment = "MAX";
                    } else if (obj.typos === "center") {
                        newLayoutGrid.alignment = "CENTER";
                        delete newLayoutGrid.offset
                    } else if (obj.typos === "stretch") {
                        newLayoutGrid.alignment = "STRETCH";
                        delete newLayoutGrid.sectionSize
                        if (obj.margin) {
                            newLayoutGrid.offset = Number(obj.margin)
                        }
                        //   newLayoutGrid.margin = Number(obj.margin)
                    }


                    if (obj.OffSet) {
                        newLayoutGrid.offset = Number(obj.OffSet)
                    }
                    if (obj.widths) {
                        newLayoutGrid.sectionSize = Number(obj.widths)
                    }
                    if (obj.valueGut) {
                        newLayoutGrid.gutterSize = Number(obj.valueGut)
                    }

                    const copy = [...layoutGrids];
                    if (copy[4]) {
                        copy[4] = newLayoutGrid;
                    } else {
                        copy.push(newLayoutGrid);
                    }
                    frame.layoutGrids = copy;


                }
            }












            if (pluginMessage.type === "noAdded") {
                frame.layoutMode = "NONE"

            }



            if (pluginMessage.type === "gridsClose") {
                frame.layoutGrids = []
            }

            if (pluginMessage.type === "selects") {
                const data = pluginMessage.data
                if (data === "vertical") {
                    frame.layoutMode = "VERTICAL"
                }

                if (data === "Horizontal") {
                    frame.layoutMode = "HORIZONTAL"
                }
            }

            if (pluginMessage.type === "space") {
                const data = pluginMessage.data
                console.log(data);
                const constraints = {
                    type: "SPACE_BETWEEN",
                    value: data
                };
                frame.itemSpacing = Number(constraints.value);
            }
        }
    }
}