/**
 * 获取所有组件入口地址
 * @param {string} dir 组件文件夹相对当前路径
 * @returns {object} 入口地址对象
 */
export function getEntries (dir) {
  const files = fs.readdirSync(dir)
  const entries = files.reduce((res, file) => {
    const filePath = join(dir, file)
    const isDir = fs.statSync(filePath).isDirectory()
    if (isDir) {
      res[file] = resolvePath(join(filePath, 'index.js'))
    } else {
      // packages 根目录除了 js 文件全部忽略
      if (!/packages\/\w+\.[^(js)]{1,}/.test(filePath)) {
        const [fileName] = file.split('.')
        res[fileName] = resolvePath(`${filePath}`)
      }
    }
    return res
  }, {})

  return entries
}

/**
 * 解析组件路径
 * @param {string} dir 文件相对路径
 * @returns {string} 组件绝对路径
 */
export function resolvePath (dir) {
  return path.resolve(__dirname, dir)
}