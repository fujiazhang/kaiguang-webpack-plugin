const lucky = `/*
                                 _oo8oo_
                                o8888888o
                                88" . "88
                                (| -_- |)
                                0\  =  /0
                              ___/'==='\___
                            .' \\|     |// '.
                           / \\| :| | :| | :| | 
                          /  :| | :| | :| | : :/
                         |   | \\\  -  /// |   ||     
                         | \_|  ''\---/''  |_/ || |
                         \  .-\__  '-'  __/-.  /|||  
                       ___'. .'  /--.--\  '. .'___
                    ."" '<  '.___\_<|>_/___.'  >' "".
                   | | :  | | :| | :| | :| | :| | :| | :
                   \  \` | | :| | :| | :| | :| | :| | :| .
                         佛祖开光           永无bug  
*/`
class AddKaiguangPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
            for (const name in compilation.assets) {
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const newContent = lucky + '\n' + contents.toString()
                    compilation.assets[name] = {
                        source: () => newContent,
                        size: () => newContent.length
                    }
                }
            }
        })
    }
}
module.exports = AddKaiguangPlugin
