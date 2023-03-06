const path = require('path');
const https = require('https');

const { version } = require(path.normalize('../package.json'));

// Check Update
hexo.once('generateAfter', () => {
    if (!hexo.theme.config.check_update) {
        return;
    }
    https.get('https://api.github.com/repos/Candinya/Kratos-Rebirth/releases/latest', {
        headers: {
            'User-Agent': 'Hexo Theme Kratos-Rebirth Client'
        }
    }, res => {
        let result = '';
        res.on('data', data => {
            result += data;
        });
        res.on('end', () => {
            try {
                const info = JSON.parse(result);
                const latest = info.tag_name.replace('v', '').split('.');
                const current = version.split('.');
                let isOutdated = false;
                for (let i = 0; i < Math.max(latest.length, current.length); i++) {
                    if (!current[i] || latest[i] > current[i]) {
                        isOutdated = true;
                        break;
                    }
                    if (latest[i] < current[i]) {
                        break;
                    }
                }
                if (isOutdated) {
                    hexo.log.warn(`您的 Kratos-Rebirth 可能并不是最新。您的版本： v${version}，最新发布版本： v${latest.join('.')}`);
                } else {
                    hexo.log.info(`感谢使用 Kratos-Rebirth 主题，您的版本是 v${version}`);
                }
            } catch (err) {
                hexo.log.error('更新检查失败，以下是错误信息：');
                hexo.log.error(err);
            }
        });
    }).on('error', err => {
        hexo.log.error('更新检查失败，以下是错误信息：');
        hexo.log.error(err);
    });
});