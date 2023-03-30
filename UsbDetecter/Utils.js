const fs = require('fs');
const nodePath = require('path');
const { execSync } = require('child_process');

class Utils {
    static isReadable(mediaDrive) {
        return new Promise((resolve) => {
            fs.access(mediaDrive, fs.constants.F_OK | fs.constants.R_OK, (error) => {
                resolve(!error);
            });
        });
    }

    static getUSBLabel(mountPath) {
        if (process.platform === 'win32') {
            let dl = mountPath.slice(0, -1);
            const getUSBName = execSync(`wmic logicaldisk where "deviceid='${dl}'" get volumename`);
            return (getUSBName.toString().split('\n')[1]).trim();
        }
        else {
            return nodePath.basename(mountPath)
        }
    }
}

module.exports = Utils;