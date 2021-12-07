"use strict";
import * as winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';
import { FileHandle } from 'fs/promises';
import { chromium } from 'playwright' 

class PlaywrightStep {
    /**
     * The playwright step
     */
    type : string

    /**
     * The selector
     */
    selector : string

    /**
     * The value to select
     */
    value : string
}

class PlaywrightCommand {
    logger: winston.Logger
    readFile: (path: fs.PathLike | FileHandle, options: { encoding: BufferEncoding, flag?: fs.OpenMode } | BufferEncoding) => Promise<string>
    existsSync: (path: fs.PathLike) => boolean

    constructor(logger: winston.Logger, defaultFs: any = null) {
        this.logger = logger 

        if (defaultFs == null) {
            this.readFile = fs.promises.readFile
            this.existsSync = fs.existsSync
        } else {
            this.readFile = defaultFs.readFile
            this.existsSync = defaultFs.existsSync
        }
    }

     /**
     * Run a playwright commands
     * @returns Promise
     */
    async runCommands(automationName: string) : Promise<void> {
        let stepFile = path.normalize(path.join(__dirname, '..', '..', '..', 'config', 'playwright', `${automationName}.json`))

        if ( this.existsSync(stepFile) ) {
            let steps : PlaywrightStep[] = JSON.parse(await this.readFile(stepFile, 'utf-8')) as PlaywrightStep[]
            await await this.executeSteps(steps)
        }
    }

     /**
     * Run a playwright steps
     * @returns Promise
     */
    async executeSteps(steps: PlaywrightStep[]) : Promise<void> {
        const browser = await chromium.launch();
        let page = browser.newPage()
        
        for ( var i = 0; i < steps.length; i++ ) {
            switch ( steps[i].type ) {
                case "goto":
                    await (await page).goto( steps[i].selector )
                    break;
            }
        }

        await browser.close()
    }
}

export { 
    PlaywrightCommand
};