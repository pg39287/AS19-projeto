import fs = require('fs');

const config_file = './config/serverconfig.json';

/**
 * Functions
 */

export function readServerConfiguration(): any {
    let data = fs.readFileSync(config_file);
    let config = JSON.parse(data.toString());
    return config;
}