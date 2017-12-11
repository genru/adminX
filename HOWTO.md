## 环境安装
最新版 nodejs 是必须安装的

### 1. 安装 `angular-cli`
```
npm install @angualr/angular-cli@latest -g
```
### 2. 安装项目依赖包
```
npm install
```
或者
```
cnpm insall
```
`npm` 和 `cnpm` 的区别可以查阅相关资料

## 启动项目
```
ng serve
```
自动编译，运行项目

## 编译项目
```
ng build --prod --aot
```
编译生产环境，编译好的代码位于 `dist` 子目录

## 单元测试
```
ng test
```

## e2e 测试
```
ng e2e
```

----
## 创建component
通常我们可以把一个页面看作一个 component
```shell
ng g c routes/SysAdmin/Query
```
这个命令在 `SysAdmin` 模块创建了了一个叫 `Query` 的 component。

