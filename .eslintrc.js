module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // 警告
        "no-extra-boolean-cast": 1, // 不必要的bool转换
        "no-extra-parens": 1, // 非必要的括号
        "no-empty": 1, // 块语句中的内容不能为空
        "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
        "complexity": [1, 10], // 循环复杂度
        "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数

        // react
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,

        // 错误
        "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
        "no-debugger": 2, // 禁止使用debugger
        "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-dupe-args": 2, // 函数参数不能重复
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
        "no-invalid-regexp": 2, // 禁止无效的正则表达式
        "no-func-assign": 2, // 禁止重复的函数声明
        "valid-typeof": 2,  // 必须使用合法的typeof的值
        "no-unreachable": 2, // 不能有无法执行的代码
        "no-unexpected-multiline": 2, // 避免多行表达式
        "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
        "no-shadow-restricted-names": 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
        "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
        "no-native-reassign": 2, // 不能重写native对象

        // 代码风格
        "no-else-return": 1, // 如果if语句里面有return,后面不能跟else语句
        "no-multi-spaces": 1, // 不能用多余的空格
        "key-spacing": [1, {  // 对象字面量中冒号的前后空格
        "beforeColon": false,
        "afterColon": true
        }],
        "block-scoped-var": 2, // 块语句中使用var
        "consistent-return": 2, // return 后面是否允许省略
        "accessor-pairs": 2, // 在对象中使用getter/setter
        "dot-location": [2, "property"], // 对象访问符的位置，换行的时候在行首还是行尾
        "no-lone-blocks": 2, // 禁止不必要的嵌套块
        "no-labels": 2, // 禁止标签声明
        "no-extend-native": 2, // 禁止扩展native对象
        "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
        "no-loop-func": 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "no-new-func": 2,  // 禁止使用new Function
        "no-self-compare": 2, // 不能比较自身
        "no-sequences": 2, // 禁止使用逗号运算符
        "no-throw-literal": 2, // 禁止抛出字面量错误 throw "error";
        "no-return-assign": [2, "always"], // return 语句中不能有赋值表达式
        "no-redeclare": [2, {   // 禁止重复声明变量
        "builtinGlobals": true
        }],
        "no-unused-expressions": [2, {  // 禁止无用的表达式
        "allowShortCircuit": true,
        "allowTernary": true
        }],
        "no-useless-call": 2, // 禁止不必要的call和apply
        "no-useless-concat": 2,
        "no-void": 2, // 禁用void操作符
        "no-with": 2, // 禁用with
        "space-infix-ops": 2, // 中缀操作符周围要不要有空格
        "valid-jsdoc": [2, { // jsdoc规则
        "requireParamDescription": true,
        "requireReturnDescription": true
        }],
        "no-warning-comments": [2, {  // 不能有警告备注
        "terms": ["todo", "fixme", "any other term"],
        "location": "anywhere"
        }],
        "curly": 1, // 必须使用 if(){} 中的{}
        'no-var': "error", // 禁止使用 var

        // common js
        "no-duplicate-imports": 1,

        //typescript
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ],

        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // @fixable 配置数组的中括号内前后的换行格式
        // @off 配置项无法配制成想要的样子
        'array-bracket-newline': 'off',
        // @fixable 数组的括号内的前后禁止有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // @fixable 配置数组的元素之间的换行格式
        // @off 允许一行包含多个元素，方便大数量的数组的书写
        'array-element-newline': 'off',
        // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
        'block-spacing': [
            'error',
            'always'
        ],
        // @fixable if 与 else 的大括号风格必须一致
        // @off else 代码块可能前面需要有一行注释
        'brace-style': 'off',
        // 变量名必须是 camelcase 风格的
        // @off 很多 api 或文件名都不是 camelcase
        'camelcase': 'off',
        // @fixable 注释的首字母必须大写
        // @off 没必要限制
        'capitalized-comments': 'off',
        // @fixable 对象的最后一个属性末尾必须有逗号
        // @off 没必要限制
        'comma-dangle': 'off',
        // @fixable 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // @fixable 禁止在行首写逗号
        'comma-style': [
            'error',
            'last'
        ],
        // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
        'computed-property-spacing': [
            'error',
            'never'
        ],
        // 限制 this 的别名
        // @off 没必要限制
        'consistent-this': 'off',
        // @fixable 文件最后一行必须有一个空行
        // @off 没必要限制
        'eol-last': 'off',
        // @fixable 函数名和执行它的括号之间禁止有空格
        'func-call-spacing': [
            'error',
            'never'
        ],
        // 函数赋值给变量的时候，函数名必须与变量名一致
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],
        // 函数必须有名字
        // @off 没必要限制
        'func-names': 'off',
        // 必须只使用函数声明或只使用函数表达式
        // @off 没必要限制
        'func-style': 'off',
        // 禁止使用指定的标识符
        // @off 它用于限制某个具体的标识符不能使用
        'id-blacklist': 'off',
        // 限制变量名长度
        // @off 没必要限制变量名长度
        'id-length': 'off',
        // 限制变量名必须匹配指定的正则表达式
        // @off 没必要限制变量名
        'id-match': 'off',
        // @fixable 一个缩进必须用四个空格替代
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // @fixable jsx 中的属性必须用双引号
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            }
        ],
        // @fixable 关键字前后必须有空格
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 单行注释必须写在上一行
        // @off 没必要限制
        'line-comment-position': 'off',
        // @fixable 限制换行符为 LF 或 CRLF
        // @off 没必要限制
        'linebreak-style': 'off',
        // @fixable 注释前后必须有空行
        // @off 没必要限制
        'lines-around-comment': 'off',
        // 代码块嵌套的深度禁止超过 5 层
        'max-depth': [
            'error',
            5
        ],
        // 限制一行的长度
        // @off 现在编辑器已经很智能了，不需要限制一行的长度
        'max-len': 'off',
        // 限制一个文件最多的行数
        // @off 没必要限制
        'max-lines': 'off',
        // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        'max-nested-callbacks': [
            'error',
            3
        ],
        // 函数的参数禁止超过 7 个
        'max-params': [
            'error',
            7
        ],
        // 限制函数块中的语句数量
        // @off 没必要限制
        'max-statements': 'off',
        // 限制一行中的语句数量
        // @off 没必要限制
        'max-statements-per-line': 'off',
        // 三元表达式必须得换行
        // @off 三元表达式可以随意使用
        'multiline-ternary': 'off',
        // new 后面的类名必须首字母大写
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: true
            }
        ],
        // @fixable new 后面的类必须有小括号
        'new-parens': 'error',
        // 链式调用必须换行
        // @off 没必要限制
        'newline-per-chained-call': 'off',
        // 禁止使用 Array 构造函数
        'no-array-constructor': 'error',
        // 禁止使用位运算
        // @off 位运算很常见
        'no-bitwise': 'off',
        // 禁止使用 continue
        // @off continue 很常用
        'no-continue': 'off',
        // 禁止在代码后添加内联注释
        // @off 内联注释很常用
        'no-inline-comments': 'off',
        // @fixable 禁止 else 中只有一个单独的 if
        // @off 单独的 if 可以把逻辑表达的更清楚
        'no-lonely-if': 'off',
        // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
        // @off 太严格了，可以由使用者自己去判断如何混用操作符
        'no-mixed-operators': 'off',
        // 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 'error',
        // 禁止连续赋值，比如 a = b = c = 5
        // @off 没必要限制
        'no-multi-assign': 'off',
        // @fixable 禁止出现超过三行的连续空行
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        // 禁止 if 里面有否定的表达式，比如：
        // if (a !== b) {
        //     doSomething();
        // } else {
        //     doSomethingElse();
        // }
        // @off 否定的表达式可以把逻辑表达的更清楚
        'no-negated-condition': 'off',
        // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
        // @off 没必要限制
        'no-nested-ternary': 'off',
        // 禁止直接 new Object
        'no-new-object': 'error',
        // 禁止使用 ++ 或 --
        // @off 没必要限制
        'no-plusplus': 'off',
        // 禁止使用特定的语法
        // @off 它用于限制某个具体的语法不能使用
        'no-restricted-syntax': 'off',
        // 禁止使用 tabs
        'no-tabs': 'error',
        // 禁止使用三元表达式
        // @off 三元表达式很常用
        'no-ternary': 'off',
        // @fixable 禁止行尾有空格
        'no-trailing-spaces': 'error',
        // 禁止变量名出现下划线
        // @off 下划线在变量名中很常用
        'no-underscore-dangle': 'off',
        // @fixable 必须使用 !a 替代 a ? false : true
        // @off 后者表达的更清晰
        'no-unneeded-ternary': 'off',
        // @fixable 禁止属性前有空格，比如 foo. bar()
        'no-whitespace-before-property': 'error',
        // @fixable 禁止 if 后面不加大括号而写两行代码
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        // @fixable 大括号内的首尾必须有换行
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],
        // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        // @fixable 对象字面量内的属性每行必须只有一个
        // @off 没必要限制
        'object-property-newline': 'off',
        // 禁止变量申明时用逗号一次申明多个
        'one-var': [
            'error',
            'never'
        ],
        // @fixable 变量申明必须每行一个
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        // @fixable 必须使用 x = x + y 而不是 x += y
        // @off 没必要限制
        'operator-assignment': 'off',
        // @fixable 需要换行的时候，操作符必须放在行末，比如：
        // let foo = 1 +
        //     2
        // @off 有时放在第二行开始处更易读
        'operator-linebreak': 'off',
        // @fixable 代码块首尾必须要空行
        // @off 没必要限制
        'padded-blocks': 'off',
        // @fixable 限制语句之间的空行规则，比如变量定义完之后必须要空行
        // @off 没必要限制
        'padding-line-between-statements': 'off',
        // @fixable 对象字面量的键名禁止用引号括起来
        // @off 没必要限制
        'quote-props': 'off',
        // @fixable 必须使用单引号，禁止使用双引号
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        // 必须使用 jsdoc 风格的注释
        // @off 太严格了
        'require-jsdoc': 'off',
        // @fixable 结尾必须有分号
        'semi': [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // @fixable 分号必须写在行尾，禁止在行首出现
        'semi-style': [
            'error',
            'last'
        ],
        // 对象字面量的键名必须排好序
        // @off 没必要限制
        'sort-keys': 'off',
        // 变量申明必须排好序
        // @off 没必要限制
        'sort-vars': 'off',
        // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
        'space-before-blocks': [
            'error',
            'always'
        ],
        // @fixable function 的小括号之前必须要有空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        // @fixable 小括号内的首尾禁止有空格
        'space-in-parens': [
            'error',
            'never'
        ],
        // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-infix-ops': 'error',
        // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
        // let foo = new Person();
        // bar = bar++;
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        // @fixable 注释的斜线或 * 后必须有空格
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: [
                        '*'
                    ],
                    balanced: true
                }
            }
        ],
        // @fixable case 的冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
        'template-tag-spacing': [
            'error',
            'never'
        ],
        // @fixable 文件开头禁止有 BOM
        'unicode-bom': [
            'error',
            'never'
        ],
        // @fixable 正则表达式必须有括号包起来
        // @off 没必要限制
        'wrap-regex': 'off',

        // ECMAScript 6
        // 这些规则与 ES6（即通常所说的 ES2015）有关
        //
        // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
        // @off 箭头函数的返回值，应该允许灵活设置
        'arrow-body-style': 'off',
        // @fixable 箭头函数只有一个参数的时候，必须加括号
        // @off 应该允许灵活设置
        'arrow-parens': 'off',
        // @fixable 箭头函数的箭头前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // constructor 中必须有 super
        'constructor-super': 'error',
        // @fixable generator 的 * 前面禁止有空格，后面必须有空格
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error',
        // 禁止使用 new 来生成 Symbol
        'no-new-symbol': 'error',
        // 禁止 import 指定的模块
        // @off 它用于限制某个具体的模块不能使用
        'no-restricted-imports': 'off',
        // 禁止在 super 被调用之前使用 this 或 super
        'no-this-before-super': 'error',
        // @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
        'no-useless-computed-key': 'error',
        // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
        'no-useless-constructor': 'error',
        // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
        'no-useless-rename': 'error',
        // @fixable 禁止使用 var
        'no-var': 'error',
        // @fixable 必须使用 a = {b} 而不是 a = {b: b}
        // @off 没必要强制要求
        'object-shorthand': 'off',
        // @fixable 必须使用箭头函数作为回调
        // @off 没必要强制要求
        'prefer-arrow-callback': 'off',
        // @fixable 申明后不再被修改的变量必须使用 const 来申明
        // @off 没必要强制要求
        'prefer-const': 'off',
        // 必须使用解构
        // @off 没必要强制要求
        'prefer-destructuring': 'off',
        // @fixable 必须使用 0b11111011 而不是 parseInt('111110111', 2)
        // @off 没必要强制要求
        'prefer-numeric-literals': 'off',
        // 必须使用 ...args 而不是 arguments
        // @off 没必要强制要求
        'prefer-rest-params': 'off',
        // @fixable 必须使用 ... 而不是 apply，比如 foo(...args)
        // @off  apply 很常用
        'prefer-spread': 'off',
        // @fixable 必须使用模版字符串而不是字符串连接
        // @off 字符串连接很常用
        'prefer-template': 'off',
        // generator 函数内必须有 yield
        'require-yield': 'error',
        // @fixable ... 的后面禁止有空格
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        // @fixable import 必须按规则排序
        // @off 没必要强制要求
        'sort-imports': 'off',
        // 创建 Symbol 时必须传入参数
        'symbol-description': 'error',
        // @fixable ${name} 内的首尾禁止有空格
        'template-curly-spacing': [
            'error',
            'never'
        ],
        // @fixable yield* 后面必须要有空格
        'yield-star-spacing': [
            'error',
            'after'
        ]
    }
};