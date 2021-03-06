var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.rotateLeft = Ti.UI.create2DMatrix().rotate(-90);

Alloy.Globals.rotateRight = Ti.UI.create2DMatrix().rotate(90);

Alloy.Globals.rotateTop = Ti.UI.create2DMatrix().rotate(-180);

Alloy.Globals.rotateInterno = Ti.UI.create2DMatrix().rotate(49).scale(2, 2);

Alloy.Globals.rotateReset = Ti.UI.create2DMatrix().rotate(0);

Alloy.Globals.storyFolderRoot = "/storyAssets/";

Alloy.Globals.remoteServerRoot = "http://revolucion.mobi/test/ind_macacos/";

Alloy.Globals.androidScaleFactor = Ti.UI.create2DMatrix().scale(.5, .5);

Alloy.Globals.userLanguage = "en";

Alloy.createController("index");