module.exports = function formatSagePathWithTheme(path, theme) {
    return path.replace(/\[theme]/gm, theme);
}