"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
afterAll((done) => {
    main_1.appInstance.close(done);
});
jest.spyOn(console, 'log').mockImplementation(() => { });
//# sourceMappingURL=jest.setup.js.map