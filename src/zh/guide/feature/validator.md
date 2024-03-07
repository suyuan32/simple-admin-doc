---
order: 3
title: "验证器"
---

## Validator 使用

::: info
[视频教程](https://www.bilibili.com/video/BV19s4y1c7Br)
:::

Simple Admin Tools 集成 [validator](https://github.com/go-playground/validator) 库

> 只需要在 api 中结构声明中使用 validate tag 即可实现校验

```text
 // login request | 登录参数
    // swagger:model LoginReq
    LoginReq {
        // User Name | 用户名
        Username   string `json:"username" validate:"alphanum,max=20"`

        // Password | 密码
        Password   string `json:"password" validate:"max=30,min=6"`

        // Captcha Id which store in redis | 验证码编号, 存在redis中
        CaptchaId  string `json:"captchaId"  validate:"len=20"`

        // The Captcha which users input | 用户输入的验证码
        Captcha    string `json:"captcha" validate:"len=5"`
    }
```

### 额外扩展

以下提供三个接口用于扩展 validator, 只需要在 main 函数中调用即可

```go
// 注册额外语言
httpx.RegisterValidationTranslation(tag string, trans ut.Translator, registerFn validator.RegisterTranslationsFunc,
	translationFn validator.TranslationFunc)

// 注册自定义方法
httpx.RegisterValidation(tag string, fn validator.Func)

// 设置自定义错误码
httpx.SetValidatorErrorCode(code int)
```

例子

```go
package main

import (
	"flag"
	"fmt"

	"github.com/zeromicro/go-zero/rest/httpx"

	"github.com/suyuan32/simple-admin-core/api/internal/config"
	"github.com/suyuan32/simple-admin-core/api/internal/handler"
	"github.com/suyuan32/simple-admin-core/api/internal/svc"

	"github.com/zeromicro/go-zero/core/conf"
	"github.com/zeromicro/go-zero/rest"
)

var configFile = flag.String("f", "etc/core.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c, conf.UseEnv())

	server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
	defer server.Stop()

	ctx := svc.NewServiceContext(c)
	handler.RegisterHandlers(server, ctx)

    // 设置自定义错误码
	httpx.SetValidatorErrorCode(5000)

	fmt.Printf("Starting server at %s:%d...\n", c.Host, c.Port)
	server.Start()
}
```

> 注意： 添加 validate 标签后默认不能为空，若需要允许为空需要添加 omitempty

```go
// Get token list request params | token列表请求参数
    // swagger:model TokenListReq
    TokenListReq {
        PageInfo
        // User's UUID | 用户的UUID
        UUID      string `json:"UUID" validate:"omitempty,len=36"`

        // user's nickname | 用户的昵称
        Nickname  string  `json:"nickname" validate:"omitempty,alphanumunicode,max=10"`

        // User Name | 用户名
        Username   string `json:"username" validate:"omitempty,alphanum,max=20"`

        // The user's email address | 用户的邮箱
        Email     string `json:"email" validate:"omitempty,email,max=100"`
    }
```

## 校验全自动生成

::: warning
在 `goctls` v0.3.1 之后支持 `validate` 全端自动生成，只需在 api 文件中声明 `validate` tag 即可
:::

对于 `string` 类型， 支持 `max, min, len, required` 校验自动生成至 `swagger, backend`
对于 `int - float` 类型， 支持 `lt,lte,gt,gte, required` 校验自动生成至 `swagger, backend`

## 取消校验

### 若不需要校验可以在 Handler 中将 Parse 中的 isValidate 设置为 false

```go
if err := httpx.Parse(r, &req, false); err != nil {
    httpx.ErrorCtx(r.Context(), w, err)
    return
}
```

## 支持的校验类型

### 字段

| 标签          | 描述                         |
| ------------- | ---------------------------- |
| eqcsfield     | 字段等于另一个字段（相对）   |
| eqfield       | 字段等于另一个字段           |
| fieldcontains | 在文档中未记录               |
| fieldexcludes | 在文档中未记录               |
| gtcsfield     | 字段大于另一个相对字段       |
| gtecsfield    | 字段大于或等于另一个相对字段 |
| gtefield      | 字段大于或等于另一个字段     |
| gtfield       | 字段大于另一个字段           |
| ltcsfield     | 字段小于另一个相对字段       |
| ltecsfield    | 字段小于或等于另一个相对字段 |
| ltefield      | 字段小于或等于另一个字段     |
| ltfield       | 字段小于另一个字段           |
| necsfield     | 字段不等于另一个字段（相对） |
| nefield       | 字段不等于另一个字段         |

### 网络
 
| 标签             | 描述                     |
| ---------------- | ------------------------ |
| cidr             | 无类别域间路由 CIDR      |
| cidrv4           | 无类别域间路由 CIDRv4    |
| cidrv6           | 无类别域间路由 CIDRv6    |
| datauri          | 数据 URL                 |
| fqdn             | 完全限定域名（FQDN）     |
| hostname         | 主机名 RFC 952           |
| hostname_port    | 主机端口                 |
| hostname_rfc1123 | 主机名 RFC 1123          |
| ip               | 互联网协议地址 IP        |
| ip4_addr         | 互联网协议地址 IPv4      |
| ip6_addr         | IPv6 网际协议地址        |
| ip_addr          | IP 网际协议地址          |
| ipv4             | IPv4 网际协议地址        |
| ipv6             | IPv6 网际协议地址        |
| mac              | 媒体访问控制地址 MAC     |
| tcp4_addr        | TCPv4 传输控制协议地址   |
| tcp6_addr        | TCPv6 传输控制协议地址   |
| tcp_addr         | TCP 传输控制协议地址     |
| udp4_addr        | UDPv4 用户数据报协议地址 |
| udp6_addr        | UDPv6 用户数据报协议地址 |
| udp_addr         | UDP 用户数据报协议地址   |
| unix_addr        | Unix 域套接字端点地址    |
| uri              | URI 字符串               |
| url              | URL 字符串               |
| url_encoded      | URL 编码                 |
| urn_rfc2141      | URN RFC 2141 字符串      |

### 字符串

| 标签            | 描述                      |
| --------------- | ------------------------- |
| alpha           | 仅包含字母                |
| alphanum        | 包含字母和数字            |
| alphanumunicode | 包含字母和数字（Unicode） |
| alphaunicode    | 仅包含字母（Unicode）     |
| ascii           | ASCII 字符串              |
| boolean         | 布尔值                    |
| contains        | 包含                      |
| containsany     | 包含任意字符              |
| containsrune    | 包含指定字符              |
| endsnotwith     | 不以指定字符结尾          |
| endswith        | 以指定字符结尾            |
| excludes        | 不包含                    |
| excludesall     | 不包含任意字符            |
| excludesrune    | 不包含指定字符            |
| lowercase       | 全部小写                  |
| multibyte       | 多字节字符                |
| number          | 在 doc.go 中未记录        |
| numeric         | 数字                      |
| printascii      | 可打印的 ASCII 字符串     |
| startsnotwith   | 不以指定字符开头          |
| startswith      | 以指定字符开头            |
| uppercase       | 全部大写                  |

### 格式

| 标签                          | 描述                                |
| ----------------------------- | ----------------------------------- |
| base64                        | Base64 字符串                       |
| base64url                     | Base64URL 字符串                    |
| bic                           | 商业标识代码 (ISO 9362)             |
| bcp47_language_tag            | 语言标签 (BCP 47)                   |
| btc_addr                      | 比特币地址                          |
| btc_addr_bech32               | 比特币 Bech32 地址 (segwit)         |
| credit_card                   | 信用卡号                            |
| datetime                      | 日期时间                            |
| e164                          | e164 格式的电话号码                 |
| email                         | 电子邮件字符串                      |
| eth_addr                      | 以太坊地址                          |
| hexadecimal                   | 十六进制字符串                      |
| hexcolor                      | 十六进制颜色字符串                  |
| hsl                           | HSL 字符串                          |
| hsla                          | HSLA 字符串                         |
| html                          | HTML 标签                           |
| html_encoded                  | HTML 编码                           |
| isbn                          | 国际标准书号                        |
| isbn10                        | 国际标准书号 10 位                  |
| isbn13                        | 国际标准书号 13 位                  |
| iso3166_1_alpha2              | 两字母国家代码 (ISO 3166-1 alpha-2) |
| iso3166_1_alpha3              | 三字母国家代码 (ISO 3166-1 alpha-3) |
| iso3166_1_alpha_numeric       | 数字国家代码 (ISO 3166-1 numeric)   |
| iso3166_2                     | 国家分区代码 (ISO 3166-2)           |
| iso4217                       | 货币代码 (ISO 4217)                 |
| json                          | JSON                                |
| jwt                           | JSON Web Token (JWT)                |
| latitude                      | 纬度                                |
| longitude                     | 经度                                |
| postcode_iso3166_alpha2       | 邮政编码                            |
| postcode_iso3166_alpha2_field | 邮政编码                            |
| rgb                           | RGB 字符串                          |
| rgba                          | RGBA 字符串                         |
| ssn                           | 社会安全号码 SSN                    |
| timezone                      | 时区                                |
| uuid                          | 通用唯一标识符 UUID                 |
| uuid3                         | 通用唯一标识符 UUID v3              |
| uuid3_rfc4122                 | 通用唯一标识符 UUID v3 RFC4122      |
| uuid4                         | 通用唯一标识符 UUID v4              |
| uuid4_rfc4122                 | 通用唯一标识符 UUID v4 RFC4122      |
| uuid5                         | 通用唯一标识符 UUID v5              |
| uuid5_rfc4122                 | 通用唯一标识符 UUID v5 RFC4122      |
| uuid_rfc4122                  | 通用唯一标识符 UUID RFC4122         |
| md4                           | MD4 哈希                            |
| md5                           | MD5 哈希                            |
| sha256                        | SHA256 哈希                         |
| sha384                        | SHA384 哈希                         |
| sha512                        | SHA512 哈希                         |
| ripemd128                     | RIPEMD-128 哈希                     |
| ripemd128                     | RIPEMD-160 哈希                     |
| tiger128                      | TIGER128 哈希                       |
| tiger160                      | TIGER160 哈希                       |
| tiger192                      | TIGER192 哈希                       |
| semver                        | 语义化版本 2.0.0                    |
| ulid                          | 可排序的通用唯一标识符 ULID         |

### 比较

| 标签 | 描述     |
| ---- | -------- |
| eq   | 等于     |
| gt   | 大于     |
| gte  | 大于等于 |
| lt   | 小于     |
| lte  | 小于等于 |
| ne   | 不等于   |

### 其他

| 标签                 | 描述                               |
| -------------------- | ---------------------------------- |
| dir                  | 目录路径                           |
| file                 | 文件路径                           |
| isdefault            | 是否默认                           |
| len                  | 长度                               |
| max                  | 最大值                             |
| min                  | 最小值                             |
| oneof                | 其中之一                           |
| required             | 必填项                             |
| required_if          | 如果满足条件则必填                 |
| required_unless      | 除非满足条件否则必填               |
| required_with        | 如果与其他字段同时存在则必填       |
| required_with_all    | 如果与所有其他字段同时存在则必填   |
| required_without     | 如果与其他字段不同时存在则必填     |
| required_without_all | 如果与所有其他字段不同时存在则必填 |
| excluded_if          | 如果满足条件则排除                 |
| excluded_unless      | 除非满足条件否则排除               |
| excluded_with        | 如果与其他字段同时存在则排除       |
| excluded_with_all    | 如果与所有其他字段同时存在则排除   |
| excluded_without     | 如果与其他字段不同时存在则排除     |
| excluded_without_all | 如果与所有其他字段不同时存在则排除 |
| unique               | 唯一值                             |

#### 别名

| 标签         | 描述                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| iscolor      | 是否为颜色，hexcolor\|rgb\|rgba\|hsl\|hsla                                  |
| country_code | 是否为城市代码，iso3166_1_alpha2\|iso3166_1_alpha3\|iso3166_1_alpha_numeric |
