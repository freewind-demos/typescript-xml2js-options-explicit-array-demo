TypeScript "xml2js" Options "explicitArray" Demo
================================================

xml2js中有一个选项`explicitArray`（默认为false），可以控制由xml转成的obj中，出现的单个元素是否以array的形式展示。
由于从xml的结构中，我们无法分辨某个元素是否只能出现一次还是恰好只出现了一次，所以总是弄成array会比较安全，但是使用起来很繁琐，所以有时候需要手动控制。

我个人倾向于把explicitArray设为`true`，同时对可能为array的字段再进行手动的类型定义：`Item | Item[]`

```
npm install
npm run demo
```
